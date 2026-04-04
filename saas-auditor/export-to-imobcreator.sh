#!/bin/bash
# ============================================================
# Script de exportação dos dados de pesquisa para imob-creator-studio
# Execute este script na pasta do db8-engine
# ============================================================

set -e

EXPORT_DIR="./imobcreator-export"
DEST_REPO="../imob-creator-studio"  # ajuste conforme seu local

echo "============================================"
echo "  Exportando dados para ImobCreator Studio"
echo "============================================"

# 1. Criar pasta de exportação
rm -rf "$EXPORT_DIR"
mkdir -p "$EXPORT_DIR/docs"
mkdir -p "$EXPORT_DIR/tools/src"
mkdir -p "$EXPORT_DIR/reverse-engineered"
mkdir -p "$EXPORT_DIR/themes"

# 2. Copiar documentação
cp saas-auditor/EXPORT_IMOBCREATOR.md "$EXPORT_DIR/docs/"
cp saas-auditor/visual-analysis-data.js "$EXPORT_DIR/docs/"
cp saas-auditor/reports/criadordecriativos_20260404/summary.json "$EXPORT_DIR/docs/concorrente_summary.json"
cp saas-auditor/reports/criadordecriativos_20260404/inventory.json "$EXPORT_DIR/docs/concorrente_inventory.json"
cp saas-auditor/reports/criadordecriativos_20260404/report.md "$EXPORT_DIR/docs/concorrente_report.md"

# 3. Copiar ferramentas
cp saas-auditor/reverse-engineer-cli.js "$EXPORT_DIR/tools/analyze.js"
cp saas-auditor/src/reverse-engineer.js "$EXPORT_DIR/tools/src/"

# 4. Copiar análises já feitas
cp -r saas-auditor/reverse-engineered/* "$EXPORT_DIR/reverse-engineered/" 2>/dev/null || true

# 5. Gerar package.json para as tools
cat > "$EXPORT_DIR/tools/package.json" << 'PKGJSON'
{
  "name": "imobcreator-reverse-engineer",
  "version": "1.0.0",
  "type": "module",
  "bin": { "analyze": "./analyze.js" },
  "dependencies": {}
}
PKGJSON

echo ""
echo "Exportação concluída em: $EXPORT_DIR"
echo ""
echo "Para copiar para o imob-creator-studio:"
echo "  cp -r $EXPORT_DIR/* $DEST_REPO/"
echo ""
echo "Ou se os repos estão em pastas diferentes:"
echo "  cp -r $EXPORT_DIR/* /caminho/para/imob-creator-studio/"
