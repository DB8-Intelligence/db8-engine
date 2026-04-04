#!/usr/bin/env node
// ============================================================
// ANALYZE — Engenharia Reversa de Composição Visual
// Foco: extrair regras de composição (textos, cores, efeitos, overlays)
// A foto de fundo é SEMPRE do cliente — o sistema compõe sobre ela
// ============================================================
// Uso:
//   node analyze.js <imagem1> [imagem2] [pasta/]
// ============================================================

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { tmpdir } from 'os';

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error('ERRO: Defina ANTHROPIC_API_KEY\nexport ANTHROPIC_API_KEY=sk-ant-...');
  process.exit(1);
}

const SYSTEM = `Você é um especialista em engenharia reversa de composição visual para SaaS de geração de criativos.

CONTEXTO IMPORTANTE:
- O sistema NÃO gera a foto de fundo/produto — o CLIENTE envia a foto dele
- O sistema faz APENAS a composição sobre a foto: textos, cores, efeitos, overlays, badges, ícones, elementos gráficos, shapes, gradientes
- Seu trabalho é extrair as REGRAS DE COMPOSIÇÃO para que o sistema reproduza o mesmo estilo visual com QUALQUER foto de cliente

Retorne APENAS JSON válido (sem markdown, sem code fences):

{
  "id": "slug_unico_do_estilo (ex: dark_premium_alphaville)",
  "nome": "nome do tema/estilo (ex: Dark Premium Luxo)",
  "descricao": "descrição curta do estilo para exibir ao usuário final",
  "categoria": "anuncio_venda|anuncio_aluguel|lancamento|vendido|lead_magnet|depoimento|dicas|institucional|open_house|comparativo|antes_depois|lifestyle|market_update|preco_reduzido",
  "nicho": "imobiliario|advocacia|beleza|restaurante|saude|educacao|tecnologia|automotivo|pet|generico",
  "formato": "1:1|4:5|9:16|16:9",

  "composicao": {
    "descricao_layout": "descrição detalhada do layout em 2-3 frases",
    "foto_cliente_posicao": "como a foto do cliente é usada (ex: fundo full-bleed, centralizada à direita, recortada em círculo, lado esquerdo 50%)",
    "foto_cliente_tratamento": "filtro/tratamento aplicado na foto (ex: escurecer 40%, dessaturar 20%, blur nas bordas, overlay gradiente)",
    "areas_texto": [
      {
        "tipo": "titulo|subtitulo|corpo|cta|preco|contato|badge|logo",
        "posicao": "posição na imagem (ex: topo esquerdo, centro, inferior direito)",
        "ancora": "de onde o texto se ancora (ex: top-left, center, bottom-center)",
        "largura_percentual": 60,
        "texto_exemplo": "texto de exemplo encontrado na imagem"
      }
    ],
    "hierarquia": "ordem de leitura (ex: título > subtítulo > preço > CTA > logo)",
    "margens": {"top": 5, "right": 5, "bottom": 5, "left": 5},
    "safe_zones": "áreas que devem ficar livres de texto para não cobrir a foto"
  },

  "estilo_visual": {
    "nome_estilo": "dark_premium|luxo_dourado|moderno_clean|glass_morphism|minimalista_branco|colorido_vibrante|natureza_verde|classico_elegante|neon_futurista|pastel_suave|editorial_magazine|urgencia_vermelho",
    "mood": "luxo|confiança|urgência|acolhimento|modernidade|autoridade|exclusividade|energia|tranquilidade|profissionalismo",
    "temperatura_cor": "quente|fria|neutra"
  },

  "cores": {
    "primaria": "#hex — cor principal dos textos/elementos",
    "secundaria": "#hex — cor de apoio",
    "accent": "#hex — cor de destaque (CTA, badges, preço)",
    "fundo_overlay": "rgba(r,g,b,a) — overlay sobre a foto do cliente",
    "texto_titulo": "#hex",
    "texto_corpo": "#hex",
    "texto_cta": "#hex",
    "fundo_cta": "#hex ou gradiente",
    "paleta_completa": ["#hex1","#hex2","#hex3","#hex4","#hex5"]
  },

  "tipografia": {
    "titulo": {
      "familia": "nome da fonte (ex: Montserrat)",
      "peso": "black|extra-bold|bold|semi-bold|medium",
      "tamanho_relativo": "muito_grande|grande|medio",
      "estilo": "normal|italic",
      "caixa": "MAIUSCULAS|Capitalizado|minusculas|misto",
      "cor": "#hex",
      "efeitos": "nenhum|sombra|outline|gradiente|glow|3d",
      "alinhamento": "esquerda|centro|direita",
      "max_caracteres": 40,
      "num_linhas_max": 3
    },
    "subtitulo": {
      "familia": "nome da fonte",
      "peso": "medium|regular|semi-bold",
      "tamanho_relativo": "medio|pequeno",
      "estilo": "normal|italic",
      "caixa": "MAIUSCULAS|Capitalizado|minusculas",
      "cor": "#hex",
      "efeitos": "nenhum|sombra",
      "alinhamento": "esquerda|centro|direita",
      "max_caracteres": 80,
      "num_linhas_max": 3
    },
    "cta": {
      "familia": "nome da fonte",
      "peso": "bold|semi-bold|medium",
      "tamanho_relativo": "medio|pequeno",
      "caixa": "MAIUSCULAS|Capitalizado",
      "cor": "#hex",
      "fundo": "#hex ou transparente",
      "borda": "sim|nao — cor e espessura",
      "border_radius": 8,
      "padding": "8px 24px"
    }
  },

  "overlay_e_efeitos": {
    "overlay_foto": {
      "tipo": "gradiente_linear|gradiente_radial|cor_solida|nenhum|vinheta",
      "direcao": "de_baixo_para_cima|de_cima_para_baixo|esquerda_para_direita|centro_para_bordas",
      "cor_inicio": "rgba(0,0,0,0.8)",
      "cor_fim": "rgba(0,0,0,0)",
      "cobertura_percentual": 60
    },
    "shapes": [
      {
        "tipo": "retangulo|circulo|linha|diagonal|triangulo|hexagono|borda_frame",
        "posicao": "descrição da posição",
        "cor": "#hex ou rgba",
        "tamanho": "descrição do tamanho relativo",
        "efeito": "solido|translucido|blur|gradiente|outline"
      }
    ],
    "elementos_decorativos": [
      {
        "tipo": "confetes|particulas|lens_flare|linhas_geometricas|pontos|ondas|circulos_concentricos|setas|sparks|nenhum",
        "cor": "#hex",
        "posicao": "espalhado|canto_superior|canto_inferior|ao_redor_texto",
        "opacidade": 0.7,
        "quantidade": "pouco|moderado|muito"
      }
    ],
    "efeitos_3d": {
      "presente": false,
      "tipos": ["cubos|esferas|formas_abstratas|cristais|mockup_device"],
      "cor": "#hex",
      "posicao": "descrição"
    },
    "glass_morphism": {
      "presente": false,
      "blur_px": 20,
      "opacidade": 0.15,
      "borda": "1px solid rgba(255,255,255,0.2)",
      "border_radius": 16
    }
  },

  "icones_e_badges": {
    "icones": [
      {
        "tipo": "quartos|banheiros|vagas|metragem|localizacao|whatsapp|telefone|email|moedas|documento|check|estrela|outro",
        "estilo": "linha|preenchido|emoji|outline",
        "cor": "#hex",
        "tamanho": "pequeno|medio|grande",
        "posicao": "ao lado do texto correspondente"
      }
    ],
    "badges": [
      {
        "texto": "À VENDA|VENDIDO|NOVO|EXCLUSIVO|OPORTUNIDADE|LANCAMENTO|ULTIMAS UNIDADES|BAIXOU|outro",
        "posicao": "canto_superior_direito|canto_superior_esquerdo|topo_centro|inline",
        "cor_fundo": "#hex",
        "cor_texto": "#hex",
        "formato": "retangulo|pill|diagonal|ribbon|circulo",
        "border_radius": 4
      }
    ]
  },

  "logo": {
    "posicao": "inferior_direito|inferior_esquerdo|superior_direito|superior_esquerdo|centro_inferior",
    "tamanho_percentual": 12,
    "opacidade": 1.0,
    "fundo": "nenhum|barra_inferior|circulo|retangulo_translucido"
  },

  "dados_exibidos": {
    "titulo": true,
    "subtitulo": true,
    "preco": true,
    "endereco": false,
    "caracteristicas": false,
    "icones_quartos_vagas": false,
    "cta": true,
    "whatsapp": false,
    "creci": false,
    "qr_code": false,
    "foto_corretor": false
  },

  "prompt_composicao": "Prompt DETALHADO descrevendo APENAS a composição visual (sem a foto de fundo). Descreva: onde posicionar textos, quais overlays aplicar, quais shapes desenhar, quais efeitos usar, cores exatas, posição de cada elemento. Este prompt será usado por uma IA para compor textos e efeitos SOBRE a foto que o cliente enviar. Mínimo 200 palavras.",

  "css_aproximado": "CSS/regras aproximadas para reproduzir este layout programaticamente (posições, cores, fontes, gradientes, sombras)",

  "tags": ["tag1","tag2","tag3","tag4","tag5"]
}`;

function analyze(imagePath) {
  const buffer = fs.readFileSync(imagePath);
  const ext = path.extname(imagePath).toLowerCase();
  const mediaType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';

  const body = JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 6144,
    system: SYSTEM,
    messages: [{
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: mediaType, data: buffer.toString('base64') } },
        { type: 'text', text: 'Analise esta imagem e extraia as REGRAS DE COMPOSIÇÃO (textos, cores, efeitos, overlays, shapes, tipografia, posicionamento). Lembre: a foto de fundo é do CLIENTE — extraia apenas como compor sobre ela. Seja extremamente detalhado no prompt_composicao e css_aproximado.' }
      ]
    }]
  });

  const tmp = path.join(tmpdir(), `q_${Date.now()}.json`);
  fs.writeFileSync(tmp, body);

  try {
    const res = execSync(
      `curl -sS --max-time 180 -X POST "https://api.anthropic.com/v1/messages" -H "Content-Type: application/json" -H "x-api-key: ${API_KEY}" -H "anthropic-version: 2023-06-01" -d @${tmp}`,
      { maxBuffer: 20 * 1024 * 1024, timeout: 190000 }
    );
    const parsed = JSON.parse(res.toString());
    if (parsed.error) throw new Error(parsed.error.message);
    let text = parsed.content?.find(b => b.type === 'text')?.text?.trim();
    if (!text) throw new Error('Empty response');
    const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (fence) text = fence[1].trim();
    return JSON.parse(text);
  } finally {
    try { fs.unlinkSync(tmp); } catch {}
  }
}

// ============================================================
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(`
  Engenharia Reversa de Composição Visual
  ========================================
  Extrai regras de composição de imagens de referência.
  Foco: textos, cores, efeitos, overlays — NÃO gera foto de fundo.

  Uso: node analyze.js <imagem1> [imagem2] [pasta/]
  Env: ANTHROPIC_API_KEY=sk-ant-...
  `);
  process.exit(0);
}

const imageExts = ['.jpg', '.jpeg', '.png', '.webp'];
let files = [];
for (const arg of args) {
  if (!fs.existsSync(arg)) continue;
  const stat = fs.statSync(arg);
  if (stat.isDirectory()) {
    files.push(...fs.readdirSync(arg).filter(f => imageExts.includes(path.extname(f).toLowerCase())).map(f => path.join(arg, f)));
  } else if (imageExts.includes(path.extname(arg).toLowerCase())) {
    files.push(arg);
  }
}

if (files.length === 0) { console.error('Nenhuma imagem encontrada.'); process.exit(1); }

const outDir = './reverse-engineered';
fs.mkdirSync(outDir, { recursive: true });

const library = [];

console.log(`\n${'='.repeat(60)}`);
console.log(`  ENGENHARIA REVERSA DE COMPOSIÇÃO — ${files.length} imagem(ns)`);
console.log(`${'='.repeat(60)}\n`);

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const base = path.basename(file, path.extname(file));

  console.log(`[${i + 1}/${files.length}] ${file}`);

  try {
    const result = analyze(file);
    result._file = path.basename(file);
    result._analyzed = new Date().toISOString();

    const outFile = path.join(outDir, `${base}.json`);
    fs.writeFileSync(outFile, JSON.stringify(result, null, 2));
    console.log(`  ✓ ${result.nome} | ${result.estilo_visual?.nome_estilo} | ${result.nicho}`);

    library.push(result);
  } catch (err) {
    console.error(`  ✗ ERRO: ${err.message?.slice(0, 120)}`);
  }

  if (i < files.length - 1) await new Promise(r => setTimeout(r, 1500));
}

// Save library
fs.writeFileSync(path.join(outDir, 'prompt_library.json'), JSON.stringify(library, null, 2));

// Generate export for ImobCreator/NexoOmnix
const exportData = library.map(item => ({
  id: item.id,
  nome: item.nome,
  descricao: item.descricao,
  categoria: item.categoria,
  nicho: item.nicho,
  formato: item.formato,
  estilo: item.estilo_visual?.nome_estilo,
  mood: item.estilo_visual?.mood,
  cores: item.cores,
  tipografia: item.tipografia,
  composicao: item.composicao,
  overlay_e_efeitos: item.overlay_e_efeitos,
  icones_e_badges: item.icones_e_badges,
  logo: item.logo,
  dados_exibidos: item.dados_exibidos,
  prompt_composicao: item.prompt_composicao,
  css_aproximado: item.css_aproximado,
  tags: item.tags
}));

fs.writeFileSync(path.join(outDir, 'imobcreator_export.json'), JSON.stringify({
  version: '1.0',
  generated: new Date().toISOString(),
  total_temas: exportData.length,
  temas: exportData
}, null, 2));

console.log(`\n${'='.repeat(60)}`);
console.log(`  PRONTO — ${library.length} temas extraídos`);
console.log(`  Exportação: ${path.join(outDir, 'imobcreator_export.json')}`);
console.log(`${'='.repeat(60)}\n`);
