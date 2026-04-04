import fs from 'fs';
import path from 'path';
import { enrichedFeatures } from './visual-analysis-data.js';
import { generateJSON, generateMarkdown, generateCSV, generateSummary } from './src/reporter.js';

const SAAS_NAME = 'criadordecriativos';
const OUTPUT_DIR = 'reports/criadordecriativos_20260404';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

console.log(`\nRegenerating reports with ${enrichedFeatures.length} visually-analyzed features...\n`);

const inventory = generateJSON(enrichedFeatures, SAAS_NAME, OUTPUT_DIR);
generateMarkdown(enrichedFeatures, SAAS_NAME, OUTPUT_DIR);
generateCSV(enrichedFeatures, OUTPUT_DIR);
const summary = generateSummary(enrichedFeatures, SAAS_NAME, OUTPUT_DIR);

console.log('\n' + '='.repeat(60));
console.log('  UPDATED AUDIT REPORT');
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
console.log(`  High Confidence (>=0.7): ${summary.high_confidence_features.length}`);
console.log(`  Reports saved to: ${OUTPUT_DIR}`);
console.log('='.repeat(60));
