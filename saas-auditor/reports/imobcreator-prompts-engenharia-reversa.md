# ImobCreator AI — Engenharia Reversa de Prompts para Geração de Imagens

> Documento consolidado com prompts parametrizáveis para geração de criativos imobiliários.
> Baseado em: análise visual do Pinterest BR, templates Canva, 18+ concorrentes SaaS, e screenshots do Criador de Criativos.

---

## 1. CATEGORIAS DE CRIATIVOS IMOBILIÁRIOS (Prioridade de Implementação)

### PRIORIDADE ALTA (MVP)

| # | Categoria | Uso Principal |
|---|-----------|---------------|
| 1 | Imóvel à Venda / Disponível | Anúncio de imóvel no feed |
| 2 | Carrossel / Tour do Imóvel | Apresentação detalhada multi-slide |
| 3 | Stories com CTA | Divulgação rápida vertical |
| 4 | Lançamento / Empreendimento | Pré-venda e construtoras |
| 5 | Vendido / Alugado (Prova Social) | Celebração + credibilidade |

### PRIORIDADE MÉDIA (V2)

| # | Categoria | Uso Principal |
|---|-----------|---------------|
| 6 | Depoimento / Testemunho | Confiança e social proof |
| 7 | Alerta de Preço / Oportunidade | Conversão rápida |
| 8 | Dicas Educativas | Engajamento orgânico |
| 9 | Avaliação Gratuita (Lead Magnet) | Captura de leads |
| 10 | Comparativo de Imóveis | Decisão de compra |

### PRIORIDADE BAIXA (V3)

| # | Categoria | Uso Principal |
|---|-----------|---------------|
| 11 | Guia do Bairro / Localização | Conteúdo complementar |
| 12 | Market Update / Estatísticas | Posicionamento como expert |
| 13 | Antes e Depois / Reforma | Nicho de reformas |
| 14 | Lifestyle / Aspiracional | Branding emocional |
| 15 | Open House / Visita Aberta | Eventos presenciais |

---

## 2. ESTILOS VISUAIS (Temas do ImobCreator)

Baseado nos padrões visuais mais recorrentes no Pinterest e Canva para imóveis:

### Tema 1: "Luxo Dourado" (equivalente ao "IA Imobiliário" do concorrente)
- **Paleta**: Preto + Dourado + Branco
- **Tipografia**: Serifada bold (Playfair Display) para títulos, sans-serif light para corpo
- **Estilo**: Elegante, premium, fundo escuro com detalhes dourados
- **Uso ideal**: Imóveis alto padrão, coberturas, mansões

### Tema 2: "Moderno Clean" (equivalente ao "Produto em Destaque")
- **Paleta**: Branco + Azul Marinho + Cinza claro
- **Tipografia**: Sans-serif (Montserrat, Poppins) bold para títulos
- **Estilo**: Minimalista, fundo claro, foto centralizada, bastante espaço em branco
- **Uso ideal**: Apartamentos modernos, studios, imóveis comerciais

### Tema 3: "Dark Premium" (equivalente ao concorrente)
- **Paleta**: Cinza escuro + Detalhes luminosos (verde neon, azul elétrico)
- **Tipografia**: Sans-serif bold, texto branco sobre fundo escuro
- **Estilo**: Sofisticado, fundo escuro com overlays translúcidos, efeitos de luz
- **Uso ideal**: Empreendimentos novos, lançamentos, construtoras

### Tema 4: "Glass Morphism" (equivalente ao "Expert Photoshop")
- **Paleta**: Transparências + Blur + Cores suaves
- **Tipografia**: Sans-serif medium, efeito glass nos cards de informação
- **Estilo**: Cards com vidro fosco translúcido sobre a foto, bordas sutis
- **Uso ideal**: Imóveis contemporâneos, público jovem

### Tema 5: "Imobiliário Clássico" (equivalente ao "Imobiliário Top")
- **Paleta**: Azul + Bege/Creme + Branco
- **Tipografia**: Mix serifa + sans-serif, azul marinho
- **Estilo**: Profissional, confiável, layout tradicional split-screen
- **Uso ideal**: Imobiliárias tradicionais, casas residenciais

### Tema 6: "Natureza & Aconchego" (EXCLUSIVO — não tem no concorrente)
- **Paleta**: Verde-oliva + Bege + Marrom terroso
- **Tipografia**: Serifada elegante para títulos, sans-serif para corpo
- **Estilo**: Tons terrosos, texturas naturais, sensação de lar
- **Uso ideal**: Casas em condomínio, chácaras, sítios, imóveis rurais

### Tema 7: "Urgência & Conversão" (EXCLUSIVO)
- **Paleta**: Vermelho/Laranja + Preto + Branco
- **Tipografia**: Extra-bold, números gigantes
- **Estilo**: Badges de desconto, preço riscado, countdown visual
- **Uso ideal**: Imóveis com preço reduzido, últimas unidades, feirão

### Tema 8: "Construtora Premium" (EXCLUSIVO)
- **Paleta**: Azul escuro + Cinza + Detalhes amarelo-dourado
- **Tipografia**: Sans-serif corporativa (Inter, DM Sans)
- **Estilo**: Render 3D como fundo, ícones de amenidades, badges "A partir de R$..."
- **Uso ideal**: Lançamentos, empreendimentos na planta

---

## 3. PROMPTS DE ENGENHARIA REVERSA POR CATEGORIA

### 3.1 — IMÓVEL À VENDA (Just Listed)

```
PROMPT TEMPLATE:
Crie um criativo publicitário profissional para venda de imóvel no formato {FORMATO}.

ESTILO VISUAL: {TEMA}
FOTO: Usar a foto fornecida do imóvel como elemento principal
ELEMENTOS OBRIGATÓRIOS:
- Badge "{BADGE}" no canto superior ({cor_badge})
- Título: "{TITULO}" em fonte bold, tamanho grande
- Subtítulo: "{SUBTITULO}" em fonte regular, menor
- Ícones com dados: 🛏 {QUARTOS} quartos | 🚿 {BANHEIROS} banh. | 🚗 {VAGAS} vagas | 📐 {METRAGEM}m²
- Preço: "R$ {PRECO}" em destaque com fonte extra-bold
- Localização: "📍 {BAIRRO}, {CIDADE}"
- CTA: botão "{CTA_TEXTO}" na cor {cor_cta}
- Logo da imobiliária no canto inferior direito (15% opacidade)
- CRECI: "{CRECI}" em fonte pequena
- Contato: "📱 {TELEFONE}" ou ícone WhatsApp

COMPOSIÇÃO:
- Foto do imóvel ocupa 60-70% da área
- Gradiente escuro na parte inferior para legibilidade do texto
- Margem de segurança de 5% em todos os lados
- Hierarquia: Título > Preço > Dados > CTA > Contato

VARIÁVEIS:
FORMATO: [1:1 Quadrado | 4:5 Feed | 9:16 Stories | 16:9 Paisagem]
TEMA: [luxo_dourado | moderno_clean | dark_premium | glass_morphism | classico | natureza | urgencia | construtora]
BADGE: [À VENDA | NOVO | EXCLUSIVO | DESTAQUE DA SEMANA]
```

### 3.2 — VENDIDO / ALUGADO (Just Sold)

```
PROMPT TEMPLATE:
Crie um criativo de celebração de venda/aluguel concluído no formato {FORMATO}.

ESTILO VISUAL: {TEMA}
FOTO: Usar a foto do imóvel fornecida
ELEMENTOS OBRIGATÓRIOS:
- Selo/carimbo grande "{STATUS}" centralizado sobre a foto (rotacionado 15°, semi-transparente)
- Texto: "{MENSAGEM}" em fonte elegante
- Dados opcionais: "Vendido em {DIAS} dias" | "Valor alcançado: R$ {VALOR}"
- Foto do corretor (circular, borda da cor da marca) — opcional
- Logo da imobiliária
- CTA implícito: "{CTA}" em fonte menor

COMPOSIÇÃO:
- Foto do imóvel como fundo com overlay escuro (40-50% opacidade)
- Selo grande e visível centralizado
- Tom de celebração e conquista

VARIÁVEIS:
STATUS: [VENDIDO! | ALUGADO! | NEGÓCIO FECHADO!]
MENSAGEM: [Mais um sonho realizado! | Parabéns aos novos proprietários! | Missão cumprida!]
CTA: [Quer ser o próximo? Fale conosco | Seu imóvel pode ser o próximo]
```

### 3.3 — CARROSSEL / TOUR DO IMÓVEL

```
PROMPT TEMPLATE:
Crie uma sequência de {NUM_SLIDES} slides para carrossel no formato {FORMATO}.

ESTILO VISUAL: {TEMA} — consistente em todos os slides
ESTRUTURA:
- SLIDE 1 (CAPA): Foto principal + Título "{TITULO}" + Badge "TOUR VIRTUAL" + Preço + Localização
- SLIDES 2-{N-1} (AMBIENTES): Uma foto por slide com:
  - Nome do ambiente: "{AMBIENTE}" (ex: Sala de Estar, Suíte Master, Cozinha Gourmet)
  - Seta visual ">>> Arraste" no primeiro slide de fotos
  - Barra inferior com logo + número do slide ({N}/{TOTAL})
- SLIDE FINAL (CTA): Resumo com ícones (quartos/banh/vagas/m²) + Preço + Dados de contato + CTA grande

ELEMENTOS EM TODOS OS SLIDES:
- Barra superior ou inferior com identidade visual consistente
- Numeração discreta dos slides
- Logo da imobiliária

VARIÁVEIS:
NUM_SLIDES: [5 | 7 | 10]
AMBIENTES: [Fachada, Sala, Cozinha, Suíte, Banheiro, Varanda, Área de Lazer, Garagem]
```

### 3.4 — LANÇAMENTO / EMPREENDIMENTO

```
PROMPT TEMPLATE:
Crie um criativo de lançamento imobiliário no formato {FORMATO}.

ESTILO VISUAL: construtora_premium ou dark_premium
FOTO/RENDER: Usar render 3D ou perspectiva do empreendimento fornecido
ELEMENTOS OBRIGATÓRIOS:
- Badge "LANÇAMENTO" no topo (dourado/gradiente)
- Nome do empreendimento: "{NOME_EMPREENDIMENTO}" em fonte display grande
- Tagline: "{TAGLINE}" em itálico ou light
- Tipologias: "{TIPOLOGIAS}" (ex: "Studios, 1 Suíte e 2 Dorms.")
- Metragens: "{METRAGENS}" (ex: "30, 46 e 60 m²")
- Preço: "A partir de R$ {PRECO_MINIMO}"
- Ícones de amenidades: 🏊 Piscina | 🏋️ Academia | 🌳 Jardim | 🔒 Segurança 24h
- Logo da construtora + Logo da imobiliária
- CTA: "{CTA}" (ex: "Cadastre-se", "Visite o Decorado")

COMPOSIÇÃO:
- Render ocupa fundo inteiro ou 70% superior
- Faixa inferior escura com informações
- Detalhes dourados/luminosos nos textos de destaque
```

### 3.5 — STORIES COM CTA

```
PROMPT TEMPLATE:
Crie um story vertical (9:16) para divulgação rápida de imóvel.

ESTILO VISUAL: {TEMA}
FOTO: Imóvel em tela cheia como fundo
ELEMENTOS OBRIGATÓRIOS:
- Título curto: "{TITULO}" em fonte extra-bold, topo
- Subtítulo: "{SUBTITULO}" menor, abaixo do título
- Preço: "R$ {PRECO}" em destaque (badge colorido)
- Dados rápidos em ícones: {QUARTOS}🛏 {BANHEIROS}🚿 {VAGAS}🚗 {METRAGEM}m²
- CTA: botão "{CTA}" estilo swipe-up (seta para cima + texto)
- Contato WhatsApp com ícone
- Logo da imobiliária (pequeno, canto)

COMPOSIÇÃO:
- Foto full-bleed com gradiente escuro inferior (50% da área)
- Textos concentrados no terço inferior
- Área de toque do CTA bem definida
- Zona segura: evitar texto nos 15% superior e inferior (UI do Instagram)
```

### 3.6 — DEPOIMENTO / PROVA SOCIAL

```
PROMPT TEMPLATE:
Crie um criativo de depoimento de cliente no formato {FORMATO}.

ESTILO VISUAL: {TEMA} — tom acolhedor e confiável
ELEMENTOS OBRIGATÓRIOS:
- Aspas grandes decorativas "❝" no topo
- Texto do depoimento: "{DEPOIMENTO}" em itálico ou fonte elegante
- Foto do cliente: circular, com borda na cor da marca
- Nome: "{NOME_CLIENTE}"
- Estrelas de avaliação: ⭐⭐⭐⭐⭐
- Subtexto: "Cliente desde {ANO}" ou "Comprou em {BAIRRO}"
- Logo da imobiliária
- CTA sutil: "Quer ser o próximo? Fale conosco"

COMPOSIÇÃO:
- Fundo clean (cor sólida ou textura sutil)
- Depoimento como elemento central
- Tom emocional, cores quentes
```

### 3.7 — ALERTA DE PREÇO / OPORTUNIDADE

```
PROMPT TEMPLATE:
Crie um criativo de alerta de preço/oportunidade no formato {FORMATO}.

ESTILO VISUAL: urgencia (vermelho/laranja/preto)
FOTO: Imóvel fornecido
ELEMENTOS OBRIGATÓRIOS:
- Badge diagonal: "{BADGE}" (ex: "BAIXOU!", "OPORTUNIDADE", "ÚLTIMAS UNIDADES")
- Preço antigo riscado: "De R$ {PRECO_ANTIGO}"
- Preço novo em destaque gigante: "R$ {PRECO_NOVO}"
- Porcentagem de desconto: "{DESCONTO}% OFF" em badge circular
- Dados do imóvel em ícones
- Timer/Urgência visual: "Válido até {DATA}" ou "Apenas {QTD} unidades"
- CTA: "APROVEITE AGORA" em botão vermelho/laranja

COMPOSIÇÃO:
- Alto contraste, sensação de urgência
- Preço novo é o maior elemento visual
- Elementos de escassez (countdown, "últimas unidades")
```

### 3.8 — DICAS EDUCATIVAS

```
PROMPT TEMPLATE:
Crie um criativo educativo/informativo no formato {FORMATO}.

ESTILO VISUAL: moderno_clean ou classico
ELEMENTOS OBRIGATÓRIOS:
- Título: "{TITULO}" (ex: "5 Dicas para Financiar seu Imóvel")
- Numeração visual: bullets ou números grandes estilizados
- Ícones ilustrativos para cada dica/ponto
- Texto dos itens: curto e direto
- Marca d'água/logo discreta
- CTA: "💾 Salve este post" ou "📤 Compartilhe"

COMPOSIÇÃO:
- Layout de lista visual (vertical ou grid)
- Fundo sólido ou com textura sutil
- Texto é o protagonista (não foto)
- Máximo 5-7 pontos por slide
```

---

## 4. VARIÁVEIS PARAMETRIZÁVEIS (Input do Usuário no ImobCreator)

```json
{
  "imovel": {
    "tipo": "Apartamento | Casa | Cobertura | Studio | Terreno | Sala Comercial | Galpão",
    "quartos": 3,
    "banheiros": 2,
    "vagas": 1,
    "metragem": 85,
    "preco": "450.000,00",
    "bairro": "Ipanema",
    "cidade": "Rio de Janeiro",
    "estado": "RJ",
    "titulo": "Apartamento com Vista Mar",
    "subtitulo": "Reformado, pronto para morar",
    "caracteristicas_extras": ["Varanda Gourmet", "Piscina", "Academia"]
  },
  "corretor": {
    "nome": "João Silva",
    "creci": "12345-J",
    "telefone": "(21) 99999-9999",
    "whatsapp": "(21) 99999-9999",
    "foto_url": "https://...",
    "instagram": "@joaosilva.imoveis"
  },
  "imobiliaria": {
    "nome": "Bonanza Brito Imóveis",
    "logo_url": "https://...",
    "cores": {"primaria": "#1E3A5F", "secundaria": "#D4AF37", "accent": "#FFFFFF"}
  },
  "criativo": {
    "formato": "1:1 | 4:5 | 9:16 | 16:9",
    "tema": "luxo_dourado | moderno_clean | dark_premium | glass_morphism | classico | natureza | urgencia | construtora",
    "categoria": "venda | vendido | carrossel | lancamento | stories | depoimento | preco | dicas",
    "badge": "À VENDA | NOVO | EXCLUSIVO | VENDIDO! | BAIXOU! | LANÇAMENTO",
    "cta": "Agende uma Visita | Saiba Mais | Fale Conosco | Aproveite Agora"
  }
}
```

---

## 5. CONCORRENTES — ANÁLISE COMPARATIVA

| Plataforma | País | Temas Imob. | Preço | Diferencial |
|---|---|---|---|---|
| **Criador de Criativos** | BR | 5 temas | ~R$29/20 créditos | Chatbot IA, multi-formato |
| **Lano** | BR | Genérico | R$147/mês | CRM + Site + Marketing integrado |
| **ImobAI** | BR | Nativo imob. | Freemium | Foto+Vídeo+Texto em 60s |
| **Pedra.ai** | EU | Staging | €29/mês | Virtual staging + tours 360 |
| **Xara** | Global | MLS sync | US$9/mês | Automação por listing status |
| **Write.Homes** | EUA | Textos | US$8 | Barato, foco em copy |
| **ImobCreator** | BR | **8+ temas** | **A definir** | **100% focado imobiliário, IA nativa** |

### Vantagem competitiva do ImobCreator:
1. **8 temas vs 5** do concorrente mais próximo
2. **100% especializado** em imóveis (não genérico)
3. **15 categorias** de criativos (concorrente tem ~4)
4. **Prompts otimizados** por tipo de imóvel (luxo, popular, comercial, rural)
5. **Integração com dados** do imóvel (CRECI, ícones, metragem automatizados)

---

## 6. EXTENSÃO MULTI-NICHO (NexoOmnix)

Os mesmos padrões visuais se aplicam a outros nichos com variáveis adaptadas:

### Advocacia
- **Paletas**: Azul marinho + Dourado, Preto + Cinza
- **Categorias**: Dicas de direitos, Áreas de atuação, Depoimentos, Frases motivacionais
- **Ícones**: Balança, Martelo, Livro, §
- **Tom**: Autoridade, confiança, seriedade
- **Variáveis**: OAB, área de atuação, especialização

### Salão de Beleza / Barbearia
- **Paletas**: Preto + Rosa/Dourado, Tons pastel, Dark luxury
- **Categorias**: Antes/Depois, Promoções, Dicas de cabelo, Agendamento
- **Ícones**: Tesoura, Secador, Pincel, Espelho
- **Tom**: Glamour, autoestima, transformação
- **Variáveis**: Serviço, preço, profissional, horário

### Restaurantes
- **Paletas**: Vermelho + Preto, Amarelo + Marrom, Verde + Branco (saudável)
- **Categorias**: Prato do dia, Promoções, Cardápio, Delivery, Eventos
- **Ícones**: Garfo/Faca, Chapéu de chef, Estrela, Relógio
- **Tom**: Apetitoso, acolhedor, urgência (delivery)
- **Variáveis**: Prato, preço, ingredientes, horário

---

## 7. STACK TÉCNICA RECOMENDADA

```
Geração de Imagem:
├── Flux Pro / SDXL — geração de backgrounds e elementos decorativos
├── ComfyUI — pipeline de composição (foto + template + texto)
├── Claude API — geração de copy/texto do anúncio
└── Sharp/Canvas API — composição final (overlay texto + ícones + logo)

Fluxo de Geração:
1. Usuário preenche formulário (variáveis do imóvel)
2. Sistema seleciona template base (tema + categoria + formato)
3. IA gera copy (título, subtítulo, CTA) via Claude
4. Pipeline compõe imagem: foto_imovel + background_gerado + texto + icones + logo
5. Otimização para conversão (contraste, legibilidade, hierarquia)
6. Entrega em múltiplos formatos simultaneamente
```

---

*Documento gerado em 2026-04-04 | Projeto ImobCreator AI | DB8 Intelligence*
