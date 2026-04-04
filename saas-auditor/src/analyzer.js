import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { tmpdir } from 'os';

const VALID_CATEGORIES = [
  'image_generation', 'video_generation', 'image_editing', 'ai_assistant',
  'flowchart', 'diagramming', 'automation', 'template_gallery',
  'document_generation', 'presentation_generation', 'integration', 'api',
  'export', 'collaboration', 'experimental', 'other'
];

const SYSTEM_PROMPT = `You are a SaaS feature auditor analyzing a Brazilian SaaS called "Criador de Criativos" (Creative Maker).
Analyze the provided context about a page/route of this SaaS application.
Return ONLY valid JSON (no markdown, no code fences) with these fields:
- name: string (feature name)
- category: one of [${VALID_CATEGORIES.join(', ')}]
- description: string (what this feature does)
- inputs: array of strings (what user provides)
- outputs: array of strings (what the feature produces)
- menu_path: array of strings (navigation path to reach this feature)
- limitations: string (any visible limitations)
- notes: string (additional observations)
- confidence: number 0.0-1.0 (how confident you are this is a distinct feature)

Focus on identifying AI-powered features, creative tools, automation capabilities, and integration points.
If the page doesn't show a clear feature or is just a utility/auth page, set confidence below 0.2.`;

function callAnthropicViaCurl(apiKey, messages, systemPrompt) {
  const body = JSON.stringify({
    model: 'claude-opus-4-5',
    max_tokens: 2048,
    system: systemPrompt,
    messages
  });

  // Write body to temp file to avoid shell escaping issues
  const tmpFile = path.join(tmpdir(), `anthropic_req_${Date.now()}_${Math.random().toString(36).slice(2)}.json`);
  fs.writeFileSync(tmpFile, body);

  try {
    const result = execSync(
      `curl -sS --connect-timeout 30 --max-time 120 -X POST "https://api.anthropic.com/v1/messages" -H "Content-Type: application/json" -H "x-api-key: ${apiKey}" -H "anthropic-version: 2023-06-01" -d @${tmpFile}`,
      { maxBuffer: 10 * 1024 * 1024, timeout: 130000 }
    );

    const parsed = JSON.parse(result.toString('utf-8'));
    if (parsed.error) {
      throw new Error(`API error: ${parsed.error.message || JSON.stringify(parsed.error)}`);
    }
    return parsed;
  } finally {
    try { fs.unlinkSync(tmpFile); } catch { /* ignore */ }
  }
}

async function analyzePage(pageData, screenshotDir, apiKey) {
  const content = [];

  // Try to include screenshot (PNG image)
  const screenshotPath = path.join(screenshotDir, pageData.screenshot);
  if (fs.existsSync(screenshotPath) && screenshotPath.endsWith('.png')) {
    try {
      const imgBuffer = fs.readFileSync(screenshotPath);
      const base64 = imgBuffer.toString('base64');
      content.push({
        type: 'image',
        source: {
          type: 'base64',
          media_type: 'image/png',
          data: base64
        }
      });
    } catch (err) {
      console.warn(`[Analyzer] Could not read screenshot ${pageData.screenshot}: ${err.message}`);
    }
  }

  // Include HTML context if available
  const htmlPath = path.join(screenshotDir, pageData.screenshot.replace('.png', '.html'));
  if (fs.existsSync(htmlPath)) {
    try {
      const htmlContent = fs.readFileSync(htmlPath, 'utf-8').slice(0, 6000);
      content.push({ type: 'text', text: `Page source/context:\n${htmlContent}` });
    } catch { /* skip */ }
  }

  // Add textual context
  const textContext = `
Page URL: ${pageData.url}
Page Title: ${pageData.title}
Menu Path: ${pageData.menuPath.join(' > ')}
Action Buttons: ${pageData.actionButtons.join(', ')}
All Buttons: ${pageData.allButtons.join(', ')}
Input Fields Count: ${pageData.inputCount}
Body Preview: ${pageData.bodyPreview}
  `.trim();

  content.push({ type: 'text', text: textContext });

  const messages = [{ role: 'user', content }];

  const response = callAnthropicViaCurl(apiKey, messages, SYSTEM_PROMPT);
  const textBlock = response.content?.find(b => b.type === 'text');
  if (!textBlock) throw new Error('No text in API response');

  // Parse JSON from response
  let jsonStr = textBlock.text.trim();
  const fenceMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) jsonStr = fenceMatch[1].trim();

  const result = JSON.parse(jsonStr);
  result.url = pageData.url;
  result.evidence = pageData.screenshot;
  return result;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function analyzeAllPages(rawPages, screenshotDir, concurrency = 3) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is required');

  const results = [];
  const batches = [];

  for (let i = 0; i < rawPages.length; i += concurrency) {
    batches.push(rawPages.slice(i, i + concurrency));
  }

  console.log(`[Analyzer] Processing ${rawPages.length} pages in ${batches.length} batches (concurrency: ${concurrency})`);

  for (let bIdx = 0; bIdx < batches.length; bIdx++) {
    const batch = batches[bIdx];
    console.log(`[Analyzer] Batch ${bIdx + 1}/${batches.length} (${batch.length} pages)`);

    // Process sequentially since curl is synchronous
    for (const page of batch) {
      try {
        const result = await analyzePage(page, screenshotDir, apiKey);
        results.push(result);
        console.log(`[Analyzer]   -> ${result.name} (${result.category}, confidence: ${result.confidence})`);
      } catch (err) {
        console.warn(`[Analyzer]   -> Failed for ${page.url}: ${err.message?.slice(0, 200)}`);
      }
    }

    if (bIdx < batches.length - 1) {
      await delay(1500);
    }
  }

  // Filter by confidence and category
  const filtered = results.filter(r => r.confidence >= 0.25 && r.category !== 'other');
  console.log(`[Analyzer] Done. ${results.length} analyzed, ${filtered.length} passed filters.`);
  return filtered;
}
