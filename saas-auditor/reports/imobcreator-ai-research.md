# ImobCreator AI — Pesquisa de Mercado & Definição de Prompts
## Documento de Referência para Geração de Criativos Imobiliários com IA

---

## PARTE 1: ANÁLISE DE CONCORRENTES

### Concorrentes Brasileiros Diretos

| Plataforma | Tipos de Criativos | Preço | Pontos Fortes |
|---|---|---|---|
| **Lano** (lano.com.br) | Posts automáticos, redecorações IA, textos por IA (500k palavras/mês) | R$147/mês | CRM + Site + Marketing integrado |
| **ImobAI** (iamob.ai) | Foto de capa, 3 carrosséis, vídeo vertical, legendas, WhatsApp | Freemium | Gera anúncio completo em 60s, detecta imóveis vazios |
| **ImobiBrasil** | Descrições por IA | R$199/mês | CRM focado |

### Concorrentes Globais (Criativos Visuais)

| Plataforma | Tipos de Criativos | Preço | Destaque |
|---|---|---|---|
| **RealEstateContent.ai** | Posts, carrosséis, vídeos slideshow, blogs | US$99/mês | 3.000+ imagens de fundo curadas |
| **Xara** | Posts automáticos ao listar imóvel, brochuras, flyers | US$9/mês | AI Workers automatizam criação |
| **Pedra.ai** | Virtual staging, renders de plantas, tours 360, vídeos | €29/mês | Staging + renovação visual |
| **Write.Homes** | Descrições, posts, campanhas email, staging | US$8 | Muito acessível |
| **Collov AI** | Staging, decluttering, dia→noite, 4K upscaling | US$0,15/img | Resultados em 10s |

### Oportunidade de Mercado

**Nenhuma plataforma brasileira combina nativamente:**
1. ✅ Geração de criativos visuais profissionais com IA
2. ✅ Vídeo automático
3. ✅ Copy otimizada multi-canal
4. ✅ Templates por nicho imobiliário
5. ✅ Preço acessível para corretor autônomo

---

## PARTE 2: CATEGORIAS DE CRIATIVOS IMOBILIÁRIOS

### Os 20 Tipos de Criativos Mais Usados no Mercado

Baseado em análise de Pinterest, Canva, concorrentes e referências de mercado.

---

### CATEGORIA 1: ANÚNCIO DE IMÓVEL (Venda/Aluguel)

#### 1.1 — Post "Novo Imóvel" (Just Listed)
**Uso:** Anunciar imóvel recém-captado
**Layout:** Foto principal do imóvel com overlay de informações
**Elementos obrigatórios:**
- Foto do imóvel (fachada ou melhor ambiente)
- Tag "NOVO" ou "EXCLUSIVO"
- Tipo do imóvel + metragem (ex: "Apartamento 120m²")
- Localização (bairro/cidade)
- Preço em destaque
- Quantidade de quartos/suítes/vagas (ícones)
- CTA: "Agende sua visita" / "Fale com o corretor"
- Logo/foto do corretor

**Prompt sugerido:**
```
Crie um anúncio profissional de imóvel para Instagram Feed (1080x1080).
Estilo: Clean e moderno com fundo da foto do imóvel.
Overlay semi-transparente escuro na parte inferior (30-40% da imagem).
Texto principal: "[TIPO DO IMÓVEL] [METRAGEM]m²" em tipografia bold branca.
Subtexto: "[BAIRRO] - [CIDADE]" em fonte light.
Preço: "R$ [VALOR]" em destaque com cor accent (dourado ou verde).
Ícones minimalistas: [X] quartos | [X] suítes | [X] vagas | [X]m².
CTA no rodapé: "[CTA]" em botão com cor de destaque.
Badge no topo: "NOVO" ou "EXCLUSIVO" em pill colorida.
Logo do corretor/imobiliária no canto inferior.
Paleta: Azul escuro (#1a365d), Dourado (#c4a35a), Branco (#ffffff).
```

#### 1.2 — Post "Imóvel Vendido" (Just Sold)
**Uso:** Prova social, mostrar resultados
**Layout:** Foto do imóvel com selo "VENDIDO"
**Elementos:** Foto, selo vermelho/verde "VENDIDO", dias no mercado, valor alcançado, depoimento do cliente
**Prompt sugerido:**
```
Crie um post de "Imóvel Vendido" para Instagram (1080x1080).
Selo diagonal "VENDIDO" em vermelho/dourado no canto superior.
Foto do imóvel como fundo com overlay celebrativo.
Texto: "VENDIDO em [X] dias!" em tipografia bold.
Subtexto: "[BAIRRO] - [CIDADE]".
Estatística em destaque: "Vendido por [X]% acima do valor pedido" (se aplicável).
Elemento de confetti/celebração sutil.
Logo e foto do corretor no rodapé.
Tom: Profissional mas celebrativo.
```

#### 1.3 — Carrossel de Imóvel (Tour Visual)
**Uso:** Mostrar vários ambientes de um imóvel
**Layout:** 5-7 slides com foto por ambiente
**Slides:**
1. Capa: Fachada + dados principais + preço
2-6. Ambientes: Sala, cozinha, quartos, banheiro, varanda
7. CTA: Dados do corretor + contato

**Prompt sugerido (por slide):**
```
Slide de capa do carrossel imobiliário (1080x1080).
Foto da fachada do imóvel como fundo.
Overlay gradiente escuro de baixo para cima.
Título: "[TIPO] no [BAIRRO]" em bold grande.
Subtítulo: "[X] quartos • [X]m² • [X] vagas".
Preço: "R$ [VALOR]" em tipografia extra-bold dourada.
Indicador de swipe: "Deslize para ver >" com seta animada.
Badge: "EXCLUSIVO" no topo.
```

---

### CATEGORIA 2: VALORIZAÇÃO / LIFESTYLE

#### 2.1 — Post de Bairro/Localização
**Uso:** Valorizar a localização do imóvel
**Layout:** Mapa ilustrado ou foto aérea do bairro
**Elementos:** Pontos de interesse, distâncias, infraestrutura
**Prompt sugerido:**
```
Crie um post informativo sobre o bairro [BAIRRO] (1080x1080).
Estilo: Mapa ilustrado moderno ou foto aérea com pins.
Destaque pontos de interesse: escolas, hospitais, shoppings, metrô, parques.
Distâncias em minutos: "5min do metrô", "2min do parque".
Título: "Por que morar no [BAIRRO]?" em bold.
Lista de vantagens com ícones.
Paleta: Verde e azul (natureza + confiança).
Logo da imobiliária no rodapé.
```

#### 2.2 — Post Lifestyle/Aspiracional
**Uso:** Vender o estilo de vida, não apenas o imóvel
**Layout:** Foto de lifestyle (família, lazer, vista)
**Elementos:** Frase aspiracional, sem preço, sem dados técnicos
**Prompt sugerido:**
```
Crie um post aspiracional imobiliário (1080x1080).
Foto lifestyle: família feliz, varanda com vista, piscina ao pôr do sol.
Overlay mínimo - deixar a imagem falar.
Frase em tipografia elegante: "[FRASE ASPIRACIONAL]".
Exemplo: "Seu novo amanhecer começa aqui" ou "Onde memórias são construídas".
Sem preço, sem metragem - foco na emoção.
Logo sutil no canto.
Paleta: Tons quentes (dourado, bege, marrom).
```

---

### CATEGORIA 3: MARKETING DO CORRETOR

#### 3.1 — Post de Autoridade/Dicas
**Uso:** Posicionar o corretor como especialista
**Layout:** Design editorial com ícones
**Exemplos:** "5 erros ao comprar seu primeiro imóvel", "Como negociar o melhor preço"
**Prompt sugerido:**
```
Crie um post educativo para corretor de imóveis (1080x1080).
Estilo: Editorial/magazine, clean e profissional.
Título: "[NÚMERO] [DICA/ERRO/SEGREDO] para [AÇÃO]" em bold.
Layout: Lista numerada com ícones minimalistas por item.
Ou: Layout de cards dentro do post.
Cor de fundo: Gradiente suave (azul para branco ou cinza para branco).
Foto do corretor em círculo no canto ou rodapé.
Badge: "DICA DO ESPECIALISTA" no topo.
```

#### 3.2 — Post de Depoimento/Prova Social
**Uso:** Testemunho de cliente satisfeito
**Layout:** Foto do cliente (ou silhueta) + quote
**Prompt sugerido:**
```
Crie um post de depoimento de cliente (1080x1080).
Aspas grandes decorativas (" ") como elemento visual.
Texto do depoimento em itálico: "[DEPOIMENTO]".
Nome do cliente: "[NOME]" em bold.
Estrelas de avaliação: ⭐⭐⭐⭐⭐.
Foto do cliente em círculo (ou silhueta se não disponível).
Fundo: Gradiente suave ou textura sutil.
Logo e "Mais de [X] famílias realizaram seu sonho" no rodapé.
```

#### 3.3 — Stories do Corretor (Dia-a-dia)
**Uso:** Humanizar a marca, mostrar bastidores
**Layout:** Formato vertical 1080x1920
**Prompt sugerido:**
```
Crie um stories para corretor de imóveis (1080x1920).
Foto do corretor em ação (visitando imóvel, reunião, entrega de chaves).
Overlay com texto curto: "[FRASE]".
Exemplo: "Mais uma família feliz! 🔑" ou "Visitando esse apê incrível 🏠".
Sticker de enquete/pergunta: "Você prefere casa ou apartamento?".
Cores vibrantes e elementos de stories (GIF, emoji, localização).
```

---

### CATEGORIA 4: EVENTOS E LANÇAMENTOS

#### 4.1 — Convite Open House
**Uso:** Convidar para visita ao imóvel
**Layout:** Design de convite/evento
**Prompt sugerido:**
```
Crie um convite de Open House (1080x1080).
Estilo: Elegante como convite de evento.
Título: "OPEN HOUSE" em tipografia premium.
Data: "[DIA], [DATA] às [HORA]".
Endereço: "[ENDEREÇO COMPLETO]".
Foto do imóvel como background.
Elementos: Ícone de casa, selo "Entrada Livre".
CTA: "Confirme sua presença" + WhatsApp.
Paleta: Preto + Dourado (luxo) ou Azul + Branco (clean).
```

#### 4.2 — Lançamento Imobiliário
**Uso:** Promover empreendimento novo
**Layout:** Render 3D do empreendimento + dados
**Prompt sugerido:**
```
Crie um anúncio de lançamento imobiliário (1080x1080).
Render/perspectiva do empreendimento como fundo.
Badge: "LANÇAMENTO" ou "PRÉ-VENDA" em destaque.
Nome do empreendimento em tipografia premium.
Dados: "A partir de R$ [VALOR]" | "[X] a [Y]m²" | "[X] quartos".
Diferenciais em ícones: piscina, academia, churrasqueira, playground.
CTA: "Garanta sua unidade" / "Condições especiais para os primeiros".
Logo da construtora + corretor.
```

---

### CATEGORIA 5: CONTEÚDO SAZONAL

#### 5.1 — Datas Comemorativas (Natal, Páscoa, Dia das Mães, etc.)
**Uso:** Manter presença nas redes em datas especiais
**Prompt sugerido:**
```
Crie um post de [DATA COMEMORATIVA] para imobiliária (1080x1080).
Tema: [DATA] com elementos decorativos temáticos.
Mensagem: "[MENSAGEM COMEMORATIVA]" relacionando ao lar/família.
Exemplo Natal: "Neste Natal, o melhor presente é ter um lar para chamar de seu 🏠🎄"
Elementos decorativos temáticos integrados sutilmente.
Logo da imobiliária em destaque.
Tom: Emocional, familiar, acolhedor.
```

#### 5.2 — Market Update / Tendências
**Uso:** Informar sobre mercado imobiliário
**Prompt sugerido:**
```
Crie um post de atualização de mercado imobiliário (1080x1080).
Estilo: Infográfico profissional.
Título: "Mercado Imobiliário [MÊS/ANO]" ou "Tendência: [TÍTULO]".
Dados em destaque: gráficos simples, percentuais, setas de alta/baixa.
Ícones: 📈 Valorização, 🏠 Oferta, 💰 Financiamento.
Fonte dos dados no rodapé.
Paleta: Azul corporativo + Verde (alta) / Vermelho (baixa).
```

---

### CATEGORIA 6: FORMATOS ESPECIAIS

#### 6.1 — Antes e Depois (Renovação/Staging)
**Uso:** Mostrar potencial do imóvel com staging virtual
**Prompt sugerido:**
```
Crie um post antes/depois de staging virtual (1080x1080).
Layout: Split screen vertical (esquerda: antes, direita: depois).
Divisor central com seta ou slider visual.
Label "ANTES" e "DEPOIS" em cada lado.
Texto: "Veja o potencial deste [TIPO DE IMÓVEL]".
CTA: "Staging Virtual por IA - Valorize seu imóvel".
```

#### 6.2 — Comparativo de Imóveis
**Uso:** Ajudar na decisão entre opções
**Layout:** Lado a lado com specs
**Prompt sugerido:**
```
Crie um comparativo de imóveis (1080x1080).
Layout: 2 colunas com foto de cada imóvel no topo.
Tabela comparativa: Preço, Área, Quartos, Vagas, Bairro, Condomínio.
Destaque visual no "melhor valor" em cada categoria.
Título: "Qual combina mais com você?".
CTA: "Fale com o corretor para conhecer os dois".
```

#### 6.3 — Planta do Imóvel
**Uso:** Mostrar layout/planta baixa
**Prompt sugerido:**
```
Crie um post com planta do imóvel (1080x1080).
Planta baixa humanizada (com móveis ilustrados) como elemento central.
Overlay com dados: "[X]m² • [X] quartos • [X] banheiros".
Legendas dos ambientes na planta.
Título: "Conheça o layout do seu futuro lar".
CTA: "Agende uma visita para ver pessoalmente".
```

---

## PARTE 3: ESTILOS VISUAIS POR SEGMENTO

### Segmentos e Paletas Recomendadas

| Segmento | Paleta Principal | Tipografia | Tom Visual |
|---|---|---|---|
| **Alto Padrão/Luxo** | Preto + Dourado + Branco | Serif elegante (Playfair Display) | Sofisticado, minimalista |
| **Médio Padrão** | Azul + Branco + Cinza | Sans-serif moderna (Montserrat) | Profissional, confiável |
| **Popular/MCMV** | Verde + Branco + Laranja | Sans-serif amigável (Nunito) | Acessível, acolhedor |
| **Comercial** | Azul escuro + Cinza + Prata | Sans-serif corporativa (Inter) | Corporativo, sério |
| **Rural/Campo** | Verde + Marrom + Bege | Serif rústica + Sans-serif | Natural, tranquilo |
| **Praia/Litoral** | Azul claro + Areia + Branco | Sans-serif leve (Quicksand) | Leve, aspiracional |
| **Lançamentos** | Gradiente moderno + Dourado | Sans-serif bold (Poppins) | Inovador, exclusivo |

---

## PARTE 4: PROMPTS BASE PARA O MOTOR DE IA

### Prompt Master (Template Base para Todas as Gerações)

```
Você é um designer especialista em marketing imobiliário brasileiro.
Crie uma imagem publicitária profissional com estas especificações:

FORMATO: [1080x1080 | 1080x1350 | 1080x1920 | 1920x1080]
TIPO: [Tipo do criativo - ver categorias acima]
SEGMENTO: [Alto Padrão | Médio Padrão | Popular | Comercial | Rural | Praia | Lançamento]

DADOS DO IMÓVEL:
- Tipo: [Apartamento | Casa | Cobertura | Terreno | Sala Comercial | Loft | Studio]
- Localização: [Bairro, Cidade]
- Preço: R$ [VALOR]
- Área: [X]m²
- Quartos: [X] (sendo [X] suítes)
- Vagas: [X]
- Diferenciais: [piscina, varanda gourmet, vista mar, etc.]

DADOS DO CORRETOR:
- Nome: [NOME]
- CRECI: [NÚMERO]
- Telefone/WhatsApp: [NÚMERO]
- Logo: [usar logo fornecida]

REGRAS DE DESIGN:
1. Texto legível - mínimo 24pt para body, 48pt para headlines
2. Contraste alto entre texto e fundo
3. Hierarquia visual clara: Headline > Dados > CTA > Logo
4. Não cobrir mais de 40% da foto com overlay
5. CTA sempre visível e em cor contrastante
6. Ícones minimalistas para quartos/vagas/área
7. Safe zones: manter 50px de margem nas bordas
8. Para Stories: elementos principais no terço central (evitar top/bottom)
```

### Prompts Específicos por Tipo de IA

#### Para Geração de Imagem (DALL-E / Midjourney / Stable Diffusion):
```
Professional real estate advertisement for Instagram, modern clean design,
[PROPERTY_TYPE] in [LOCATION], luxury/modern aesthetic,
overlay text area at bottom 30% with dark gradient,
golden accent color, high-end photography style,
Brazilian real estate market, --ar 1:1 --v 6
```

#### Para Geração de Copy (LLM):
```
Crie um texto publicitário para anúncio de [TIPO_IMÓVEL] no [BAIRRO], [CIDADE].

Dados: [X]m², [X] quartos, [X] vagas, R$ [VALOR].
Diferenciais: [LISTA].

Gere 5 versões:
1. CURTA (Stories) - máx 50 caracteres, impactante
2. MÉDIA (Feed) - 2-3 frases, emotiva + dados
3. COMPLETA (Anúncios) - parágrafo persuasivo com benefícios
4. WHATSAPP - tom conversacional, direto, com emoji
5. INSTAGRAM CAPTION - com hashtags relevantes (#imóveis #[cidade] #corretor)

Tom: Profissional mas acolhedor. Foco no estilo de vida, não só no imóvel.
CTA sugerido: [Agende sua visita | Fale com o corretor | Garanta já o seu]
```

---

## PARTE 5: FUNCIONALIDADES RECOMENDADAS PARA O IMOBCREATOR AI

### MVP (Mínimo Viável)
1. **Gerador de Post "Novo Imóvel"** — O mais essencial
2. **Gerador de Carrossel** — 5-7 slides com ambientes
3. **Gerador de Stories** — Formato vertical rápido
4. **Gerador de Copy Multi-Canal** — 5 formatos (Stories/Feed/Anúncios/WhatsApp/Instagram)

### V2 (Expansão)
5. **Gerador de Thumbnail YouTube** — Para corretores YouTubers
6. **Post "Vendido/Alugado"** — Prova social
7. **Post de Bairro/Localização** — Valorização
8. **Convite Open House** — Eventos
9. **Post de Dicas/Autoridade** — Marketing pessoal
10. **Staging Virtual** — Antes/Depois

### V3 (Premium)
11. **Lançamento Imobiliário** — Para construtoras
12. **Vídeo Animado** — Slideshow com transições
13. **Comparativo de Imóveis** — Lado a lado
14. **Post Sazonal** — Datas comemorativas automáticas
15. **Market Update** — Infográficos de mercado
