import fs from 'fs';
import path from 'path';

function deduplicateByUrl(features) {
  const seen = new Map();
  for (const f of features) {
    const existing = seen.get(f.url);
    if (!existing || f.confidence > existing.confidence) {
      seen.set(f.url, f);
    }
  }
  return Array.from(seen.values());
}

function sortByCategoryAndConfidence(features) {
  return features.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return b.confidence - a.confidence;
  });
}

export function generateJSON(features, saasName, outputDir) {
  const deduped = sortByCategoryAndConfidence(deduplicateByUrl(features));
  const categories = [...new Set(deduped.map(f => f.category))];

  const inventory = {
    saas: saasName,
    scan_date: new Date().toISOString(),
    total_features: deduped.length,
    categories_found: categories,
    features: deduped
  };

  const filePath = path.join(outputDir, 'inventory.json');
  fs.writeFileSync(filePath, JSON.stringify(inventory, null, 2));
  console.log(`[Reporter] Generated ${filePath}`);
  return inventory;
}

export function generateMarkdown(features, saasName, outputDir) {
  const deduped = sortByCategoryAndConfidence(deduplicateByUrl(features));
  const categories = [...new Set(deduped.map(f => f.category))];

  let md = `# SaaS Audit Report: ${saasName}\n\n`;
  md += `**Scan Date:** ${new Date().toISOString()}\n`;
  md += `**Total Features Found:** ${deduped.length}\n`;
  md += `**Categories:** ${categories.length}\n\n`;

  // Table of contents
  md += `## Index\n\n`;
  for (const cat of categories) {
    const count = deduped.filter(f => f.category === cat).length;
    md += `- [${cat}](#${cat}) (${count})\n`;
  }
  md += `\n---\n\n`;

  // Sections by category
  for (const cat of categories) {
    const catFeatures = deduped.filter(f => f.category === cat);
    md += `## ${cat}\n\n`;
    md += `| Name | Confidence | Description | URL |\n`;
    md += `|------|-----------|-------------|-----|\n`;

    for (const f of catFeatures) {
      const desc = (f.description || '').replace(/\|/g, '\\|').slice(0, 100);
      md += `| ${f.name} | ${f.confidence} | ${desc} | [link](${f.url}) |\n`;
    }

    md += `\n`;

    // Detailed info per feature
    for (const f of catFeatures) {
      md += `### ${f.name}\n\n`;
      md += `- **Category:** ${f.category}\n`;
      md += `- **Confidence:** ${f.confidence}\n`;
      md += `- **URL:** ${f.url}\n`;
      md += `- **Menu Path:** ${(f.menu_path || []).join(' > ')}\n`;
      md += `- **Description:** ${f.description}\n`;
      md += `- **Inputs:** ${(f.inputs || []).join(', ') || 'N/A'}\n`;
      md += `- **Outputs:** ${(f.outputs || []).join(', ') || 'N/A'}\n`;
      md += `- **Limitations:** ${f.limitations || 'N/A'}\n`;
      md += `- **Notes:** ${f.notes || 'N/A'}\n\n`;
    }

    md += `---\n\n`;
  }

  const filePath = path.join(outputDir, 'report.md');
  fs.writeFileSync(filePath, md);
  console.log(`[Reporter] Generated ${filePath}`);
  return md;
}

export function generateCSV(features, outputDir) {
  const deduped = sortByCategoryAndConfidence(deduplicateByUrl(features));
  const headers = ['name', 'category', 'url', 'menu_path', 'description', 'inputs', 'outputs', 'limitations', 'notes', 'confidence', 'evidence'];

  function escapeCSV(val) {
    const str = String(val ?? '');
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  }

  const rows = [headers.join(',')];
  for (const f of deduped) {
    rows.push([
      escapeCSV(f.name),
      escapeCSV(f.category),
      escapeCSV(f.url),
      escapeCSV((f.menu_path || []).join(' > ')),
      escapeCSV(f.description),
      escapeCSV((f.inputs || []).join('; ')),
      escapeCSV((f.outputs || []).join('; ')),
      escapeCSV(f.limitations),
      escapeCSV(f.notes),
      escapeCSV(f.confidence),
      escapeCSV(f.evidence)
    ].join(','));
  }

  const filePath = path.join(outputDir, 'inventory.csv');
  fs.writeFileSync(filePath, rows.join('\n'));
  console.log(`[Reporter] Generated ${filePath}`);
  return rows.join('\n');
}

export function generateSummary(features, saasName, outputDir) {
  const deduped = sortByCategoryAndConfidence(deduplicateByUrl(features));

  const byCategory = {};
  for (const f of deduped) {
    byCategory[f.category] = (byCategory[f.category] || 0) + 1;
  }

  const highConfidence = deduped.filter(f => f.confidence >= 0.7);
  const aiCategories = ['image_generation', 'video_generation', 'image_editing', 'ai_assistant'];
  const keyAiFeatures = deduped.filter(f => aiCategories.includes(f.category));

  const summary = {
    saas: saasName,
    scan_date: new Date().toISOString(),
    total: deduped.length,
    by_category: byCategory,
    high_confidence_features: highConfidence.map(f => ({
      name: f.name,
      category: f.category,
      confidence: f.confidence,
      url: f.url
    })),
    key_ai_features: keyAiFeatures.map(f => ({
      name: f.name,
      category: f.category,
      description: f.description,
      url: f.url
    }))
  };

  const filePath = path.join(outputDir, 'summary.json');
  fs.writeFileSync(filePath, JSON.stringify(summary, null, 2));
  console.log(`[Reporter] Generated ${filePath}`);
  return summary;
}
