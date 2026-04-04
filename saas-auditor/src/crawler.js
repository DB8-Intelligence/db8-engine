import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const RELEVANT_KEYWORDS = [
  'ai', 'image', 'generate', 'flowchart', 'diagram', 'automation', 'template',
  'assistant', 'studio', 'lab', 'beta', 'create', 'design', 'editor', 'export',
  'api', 'integration', 'workflow', 'builder', 'canvas', 'visual', 'render',
  'video', 'presentation', 'criativ', 'gerar', 'modelo', 'ferramenta',
  'dashboard', 'app', 'tool', 'creator', 'maker', 'carousel', 'thumbnail',
  'audio', 'historico', 'profile', 'admin'
];

const DANGEROUS_WORDS = [
  'delete', 'remove', 'cancel', 'upgrade', 'billing', 'purchase', 'buy',
  'invite', 'logout', 'deactivate', 'archive', 'destroy', 'confirm', 'publish'
];

function isDangerous(text) {
  const lower = (text || '').toLowerCase();
  return DANGEROUS_WORDS.some(w => lower.includes(w));
}

function sanitizeFilename(str) {
  return str.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_').slice(0, 120);
}

function curlFetch(url, maxTime = 30) {
  try {
    // Use double quotes and proper escaping
    const result = execSync(
      `curl -sL --connect-timeout 10 --max-time ${maxTime} -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" -H "Accept-Language: pt-BR,pt;q=0.9,en;q=0.8" "${url}"`,
      { maxBuffer: 10 * 1024 * 1024, timeout: (maxTime + 10) * 1000 }
    );
    return result.toString('utf-8');
  } catch (err) {
    console.warn(`[Crawler] curl failed for ${url}: ${err.message?.slice(0, 100)}`);
    return '';
  }
}

function extractRoutesFromBundle(jsCode) {
  const routes = new Set();
  const pathRegex = /path:\s*["'](\/?[a-zA-Z][^"']{0,80})["']/g;
  let m;
  while ((m = pathRegex.exec(jsCode)) !== null) {
    routes.add(m[1].startsWith('/') ? m[1] : '/' + m[1]);
  }
  const toRegex = /to:\s*["'](\/?[a-zA-Z][^"']{0,80})["']/g;
  while ((m = toRegex.exec(jsCode)) !== null) {
    routes.add(m[1].startsWith('/') ? m[1] : '/' + m[1]);
  }
  return Array.from(routes);
}

function extractApiEndpoints(jsCode) {
  const endpoints = new Set();
  const patterns = [
    /["'](\/api\/[^"']{2,80})["']/g,
    /["'](generate-[a-zA-Z-]+)["']/g,
    /\.(?:get|post|put|patch|delete)\(["']([^"']+)["']/g
  ];
  for (const regex of patterns) {
    let m;
    while ((m = regex.exec(jsCode)) !== null) {
      endpoints.add(m[1]);
    }
  }
  return Array.from(endpoints);
}

function extractFeatureStrings(jsCode) {
  const features = new Set();
  const genRegex = /["'](generate-[a-zA-Z-]+)["']/g;
  let m;
  while ((m = genRegex.exec(jsCode)) !== null) features.add(m[1]);
  const funcRegex = /(?:function|const|let|var)\s+((?:create|generate|export|render|build|design|make)[A-Z][a-zA-Z]{2,40})/g;
  while ((m = funcRegex.exec(jsCode)) !== null) features.add(m[1]);
  return Array.from(features);
}

function extractUIStrings(jsCode) {
  const strings = new Set();
  const regex = /["']((?:Criar|Gerar|Exportar|Editor|Template|Modelo|Design|Carousel|V[ií]deo|Imagem|Canvas|Apresenta|Automati|Integra|Fluxo|Assist|Ferrament|Criativos?|Thumbnail|Post|Stories|Feed|Banner|Logo|Mockup)[^"']{0,100})["']/gi;
  let m;
  while ((m = regex.exec(jsCode)) !== null) strings.add(m[1]);
  return Array.from(strings).slice(0, 100);
}

function extractButtonLabels(jsCode) {
  const labels = new Set();
  const patterns = [
    /children:\s*["']([^"']{2,60})["']/g,
    /label:\s*["']([^"']{2,60})["']/g,
    /title:\s*["']([^"']{2,60})["']/g,
    /placeholder:\s*["']([^"']{2,60})["']/g
  ];
  for (const regex of patterns) {
    let m;
    while ((m = regex.exec(jsCode)) !== null) labels.add(m[1]);
  }
  return Array.from(labels).filter(l => !isDangerous(l)).slice(0, 200);
}

export async function crawlSaaS({ saasUrl, user, pass, maxPages = 60, screenshotDir = './screenshots' }) {
  fs.mkdirSync(screenshotDir, { recursive: true });

  const baseUrl = saasUrl.replace(/\/app\/?$/, '').replace(/\/+$/, '');
  console.log(`[Crawler] Starting SPA crawl of ${baseUrl}`);

  // Step 1: Fetch main HTML
  console.log('[Crawler] Fetching main page...');
  const mainHtml = curlFetch(baseUrl);
  if (!mainHtml) throw new Error('Could not fetch main page');

  // Extract JS bundle URLs
  const scriptRegex = /src=["']([^"']*\.js)["']/g;
  const scripts = [];
  let m;
  while ((m = scriptRegex.exec(mainHtml)) !== null) {
    if (m[1].includes('gtag') || m[1].includes('fbevents') || m[1].includes('analytics') || m[1].includes('flock')) continue;
    scripts.push(m[1]);
  }
  console.log(`[Crawler] Found ${scripts.length} script bundles`);

  // Step 2: Fetch and analyze JS bundles
  let fullBundle = '';
  for (const script of scripts) {
    const scriptUrl = script.startsWith('http') ? script : new URL(script, baseUrl).href;
    console.log(`[Crawler] Fetching bundle: ${scriptUrl}`);
    const body = curlFetch(scriptUrl, 60);
    if (body) {
      fullBundle += body + '\n';
      console.log(`[Crawler]   -> Got ${(body.length / 1024).toFixed(0)} KB`);
    }
  }

  console.log(`[Crawler] Total bundle size: ${(fullBundle.length / 1024).toFixed(0)} KB`);

  // Step 3: Extract everything from the bundle
  const routes = extractRoutesFromBundle(fullBundle);
  const apiEndpoints = extractApiEndpoints(fullBundle);
  const featureStrings = extractFeatureStrings(fullBundle);
  const uiStrings = extractUIStrings(fullBundle);
  const buttonLabels = extractButtonLabels(fullBundle);

  console.log(`[Crawler] Routes: ${routes.join(', ')}`);
  console.log(`[Crawler] Features: ${featureStrings.join(', ')}`);
  console.log(`[Crawler] API endpoints: ${apiEndpoints.slice(0, 20).join(', ')}`);
  console.log(`[Crawler] UI strings: ${uiStrings.slice(0, 15).join(', ')}`);

  // Step 4: Build page entries for each route
  const results = [];
  const visited = new Set();
  const allPaths = [...routes];

  // Add inferred paths
  for (const feat of featureStrings) {
    if (feat.startsWith('generate-')) {
      allPaths.push('/app/' + feat);
    }
  }

  const uniquePaths = [...new Set(allPaths)].filter(p => !isDangerous(p)).slice(0, maxPages);
  console.log(`\n[Crawler] Analyzing ${uniquePaths.length} routes...`);

  for (const route of uniquePaths) {
    const fullUrl = route.startsWith('http') ? route : `${baseUrl}${route}`;
    if (visited.has(fullUrl)) continue;
    visited.add(fullUrl);

    console.log(`[Crawler] (${visited.size}/${uniquePaths.length}) Route: ${route}`);

    // Extract context snippets from bundle for this route
    const contextSnippets = [];
    const routeEscaped = route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const contextRegex = new RegExp(`.{0,300}${routeEscaped}.{0,300}`, 'g');
    let cm;
    while ((cm = contextRegex.exec(fullBundle)) !== null) {
      const snippet = cm[0].replace(/[^\x20-\x7E\xC0-\xFF]/g, ' ').trim();
      if (snippet.length > 20) contextSnippets.push(snippet);
      if (contextSnippets.length >= 5) break;
    }

    // Determine relevant buttons from bundle context
    const routeButtons = buttonLabels.filter(l => {
      const lower = l.toLowerCase();
      return route.split('/').filter(Boolean).some(part => lower.includes(part.toLowerCase()));
    }).slice(0, 15);

    const allButtons = [...new Set(routeButtons)];
    const actionButtons = allButtons.filter(b => !isDangerous(b));
    const menuPath = route.split('/').filter(Boolean);

    // Related feature strings
    const routeParts = route.toLowerCase().split('/').filter(Boolean);
    const relatedFeatures = featureStrings.filter(f =>
      routeParts.some(p => f.toLowerCase().includes(p)) ||
      routeParts.some(p => p.includes(f.toLowerCase().split('-').pop()))
    );
    const relatedApi = apiEndpoints.filter(e =>
      routeParts.some(p => e.toLowerCase().includes(p))
    );
    const relatedUI = uiStrings.filter(s =>
      routeParts.some(p => s.toLowerCase().includes(p))
    );

    const bodyPreview = [
      `SPA Route: ${route}`,
      `Related features: ${relatedFeatures.join(', ') || 'none found'}`,
      `Related API: ${relatedApi.join(', ') || 'none found'}`,
      `Related UI strings: ${relatedUI.join(', ') || 'none found'}`,
      `Bundle context: ${contextSnippets.slice(0, 2).join(' | ').slice(0, 300)}`
    ].join('\n');

    // Save context as HTML file for analyzer
    const filename = sanitizeFilename(fullUrl);
    const contextHtml = [
      `<!-- Route: ${route} -->`,
      `<!-- URL: ${fullUrl} -->`,
      `<!-- Related Features: ${relatedFeatures.join(', ')} -->`,
      `<!-- Related API: ${relatedApi.join(', ')} -->`,
      `<!-- Related UI: ${relatedUI.join(', ')} -->`,
      `<!-- Bundle Context Snippets -->`,
      ...contextSnippets.map(s => `<!-- ${s.slice(0, 500)} -->`),
      `<!-- All Routes: ${routes.join(', ')} -->`,
      `<!-- All Features: ${featureStrings.join(', ')} -->`
    ].join('\n');
    fs.writeFileSync(path.join(screenshotDir, filename + '.html'), contextHtml);

    results.push({
      url: fullUrl,
      title: `SPA Route: ${route}`,
      screenshot: filename + '.png',
      bodyPreview: bodyPreview.slice(0, 500),
      allButtons,
      actionButtons,
      inputCount: 0,
      menuPath: menuPath.length > 0 ? menuPath : ['home']
    });
  }

  // Add global overview page
  const globalBody = [
    `SaaS: Criador de Criativos - Full SPA Analysis`,
    `All Routes: ${routes.join(', ')}`,
    `Feature Operations: ${featureStrings.join(', ')}`,
    `UI Strings: ${uiStrings.slice(0, 30).join(', ')}`,
    `API Endpoints: ${apiEndpoints.slice(0, 30).join(', ')}`,
    `Button Labels: ${buttonLabels.slice(0, 30).join(', ')}`
  ].join('\n');

  const globalHtml = [
    `<!-- Global SPA Analysis - Criador de Criativos -->`,
    `<!-- Routes: ${routes.join(', ')} -->`,
    `<!-- Features: ${featureStrings.join(', ')} -->`,
    `<!-- API: ${apiEndpoints.join(', ')} -->`,
    `<!-- UI: ${uiStrings.join(' | ')} -->`,
    `<!-- Buttons: ${buttonLabels.join(' | ')} -->`
  ].join('\n');
  fs.writeFileSync(path.join(screenshotDir, 'global_overview.html'), globalHtml);

  results.push({
    url: `${baseUrl}/app`,
    title: 'Criador de Criativos - Complete SPA Feature Map',
    screenshot: 'global_overview.png',
    bodyPreview: globalBody.slice(0, 500),
    allButtons: buttonLabels.slice(0, 30),
    actionButtons: buttonLabels.filter(b => !isDangerous(b)).slice(0, 30),
    inputCount: 0,
    menuPath: ['app', 'overview']
  });

  console.log(`\n[Crawler] Done. Analyzed ${visited.size} routes, generated ${results.length} page entries.`);
  return results;
}
