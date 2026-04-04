import fs from 'fs';
import path from 'path';
import { crawlSaaS } from './src/crawler.js';
import { analyzeAllPages } from './src/analyzer.js';
import { generateJSON, generateMarkdown, generateCSV, generateSummary } from './src/reporter.js';

async function main() {
  // Required env vars
  const SAAS_URL = process.env.SAAS_URL;
  const SAAS_USER = process.env.SAAS_USER;
  const SAAS_PASS = process.env.SAAS_PASS;
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  const missing = [];
  if (!SAAS_URL) missing.push('SAAS_URL');
  if (!SAAS_USER) missing.push('SAAS_USER');
  if (!SAAS_PASS) missing.push('SAAS_PASS');
  if (!ANTHROPIC_API_KEY) missing.push('ANTHROPIC_API_KEY');

  if (missing.length > 0) {
    console.error(`\n[ERROR] Missing required environment variables: ${missing.join(', ')}`);
    console.error('Please set them before running:\n');
    console.error('  SAAS_URL       - URL of the SaaS to audit');
    console.error('  SAAS_USER      - Login email/username');
    console.error('  SAAS_PASS      - Login password');
    console.error('  ANTHROPIC_API_KEY - Anthropic API key\n');
    process.exit(1);
  }

  // Optional env vars
  const SAAS_NAME = process.env.SAAS_NAME || new URL(SAAS_URL).hostname.replace(/\./g, '_');
  const MAX_PAGES = parseInt(process.env.MAX_PAGES || '60', 10);
  const CONCURRENCY = parseInt(process.env.CONCURRENCY || '3', 10);
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const OUTPUT_DIR = process.env.OUTPUT_DIR || path.join('reports', `${SAAS_NAME}_${dateStr}`);
  const SCREENSHOT_DIR = process.env.SCREENSHOT_DIR || './screenshots';

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  console.log('='.repeat(60));
  console.log(`  SaaS Auditor v1.0.0`);
  console.log('='.repeat(60));
  console.log(`  Target:      ${SAAS_URL}`);
  console.log(`  User:        ${SAAS_USER}`);
  console.log(`  SaaS Name:   ${SAAS_NAME}`);
  console.log(`  Max Pages:   ${MAX_PAGES}`);
  console.log(`  Concurrency: ${CONCURRENCY}`);
  console.log(`  Output:      ${OUTPUT_DIR}`);
  console.log('='.repeat(60));

  // Phase 1: Crawl
  console.log('\n--- PHASE 1: CRAWLING ---\n');
  let rawPages;
  try {
    rawPages = await crawlSaaS({
      saasUrl: SAAS_URL,
      user: SAAS_USER,
      pass: SAAS_PASS,
      maxPages: MAX_PAGES,
      screenshotDir: SCREENSHOT_DIR
    });
  } catch (err) {
    console.error(`[FATAL] Crawler failed: ${err.message}`);
    process.exit(1);
  }

  console.log(`\n[Phase 1 Complete] Captured ${rawPages.length} relevant pages.\n`);

  if (rawPages.length === 0) {
    console.log('[INFO] No relevant pages found. Generating empty reports.');
  }

  // Phase 2: Analyze
  console.log('\n--- PHASE 2: ANALYZING ---\n');
  let analyzed = [];
  if (rawPages.length > 0) {
    try {
      analyzed = await analyzeAllPages(rawPages, SCREENSHOT_DIR, CONCURRENCY);
    } catch (err) {
      console.error(`[ERROR] Analysis failed: ${err.message}`);
    }
  }

  console.log(`\n[Phase 2 Complete] ${analyzed.length} features identified.\n`);

  // Phase 3: Generate reports
  console.log('\n--- PHASE 3: GENERATING REPORTS ---\n');
  const inventory = generateJSON(analyzed, SAAS_NAME, OUTPUT_DIR);
  generateMarkdown(analyzed, SAAS_NAME, OUTPUT_DIR);
  generateCSV(analyzed, OUTPUT_DIR);
  const summary = generateSummary(analyzed, SAAS_NAME, OUTPUT_DIR);

  // Final summary
  console.log('\n' + '='.repeat(60));
  console.log('  AUDIT COMPLETE');
  console.log('='.repeat(60));
  console.log(`  Total Features: ${summary.total}`);
  console.log(`  Categories:`);
  for (const [cat, count] of Object.entries(summary.by_category)) {
    console.log(`    - ${cat}: ${count}`);
  }
  if (summary.key_ai_features.length > 0) {
    console.log(`  Key AI Features:`);
    for (const f of summary.key_ai_features) {
      console.log(`    - ${f.name} (${f.category})`);
    }
  }
  console.log(`  Reports saved to: ${OUTPUT_DIR}`);
  console.log('='.repeat(60));
}

main().catch(err => {
  console.error(`[FATAL] ${err.message}`);
  process.exit(1);
});
