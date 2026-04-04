# Relatório Final — ImobCreator AI & NexoOmnix
## Pesquisa de Mercado + Engenharia Reversa + Prompts de Composição

> Data: 2026-04-04 | Versão: 1.0

---

## 1. CONCORRENTES DIRETOS

### Brasil
| Plataforma | Preço | Gera Imagem | Gera Vídeo | Gera Copy | Temas Imobiliário |
|---|---|---|---|---|---|
| **Criador de Criativos** | Créditos (R$29/20) | ✅ | ✅ (animar) | ✅ 5 formatos | 5 temas |
| **Lano** | R$147/mês | ✅ 200+/mês | ❌ | ✅ 500k palavras | Redecor IA |
| **ImobAI** | Freemium | ✅ capa + carrossel | ✅ Reels | ✅ legendas | 6 estilos |

### Global
| Plataforma | Preço | Foco |
|---|---|---|
| **Xara** | US$9/mês | Auto-marketing para brokerages |
| **Pedra.ai** | €29/mês | Virtual staging + renders |
| **Write.Homes** | US$8 | Copy + staging |
| **Collov AI** | US$0.15/img | Virtual staging |
| **RealEstateContent.ai** | US$99/mês | Posts prontos |

### Oportunidade
Nenhum concorrente brasileiro combina: **composição visual sobre foto do cliente** + **copy multi-canal** + **multi-nicho** + **preço acessível**. O Criador de Criativos é o mais próximo mas é generalista (não especializado em imóveis).

---

## 2. TEMAS DO CONCORRENTE (Criador de Criativos - Categoria Imobiliário)

| # | Tema | Descrição | Estilo |
|---|---|---|---|
| 1 | IA Imobiliário | Campanha conceitual visualmente poderosa | Conceitual/IA |
| 2 | Produto em Destaque | Fundo clean com produto centralizado | Clean/minimalista |
| 3 | Dark Premium | Fundo escuro elegante com detalhes luminosos | Dark/luxo |
| 4 | Expert Photoshop | Glass Morphism Premium com vidro fosco | Glass morphism |
| 5 | Imobiliário Top | Design sofisticado com cores vibrantes | Vibrante/premium |

**Meta ImobCreator: mínimo 15 temas especializados para imóveis** (3x mais que o concorrente).

---

## 3. CATEGORIAS DE CRIATIVOS IDENTIFICADOS (Pinterest + Canva + Mercado)

### PRIORIDADE ALTA (MVP)
| # | Categoria | Descrição | Uso Principal |
|---|---|---|---|
| 1 | **Imóvel à Venda** | Foto do imóvel + preço + características + CTA | Feed Instagram/Facebook |
| 2 | **Imóvel para Alugar** | Similar à venda, com badge "ALUGA-SE" | Feed |
| 3 | **Lançamento** | Render 3D + badge "LANÇAMENTO" + preço inicial | Feed + Stories |
| 4 | **Vendido/Alugado** | Prova social, selo "VENDIDO" sobre foto | Feed |
| 5 | **Carrossel Tour** | 5-10 slides mostrando cômodos | Carrossel Instagram |
| 6 | **Stories Imóvel** | Vertical 9:16, CTA "Arraste para cima" | Stories |
| 7 | **Lead Magnet** | "Quanto vale seu imóvel?" + CTA captura | Feed + Ads |
| 8 | **Corretor Pessoal** | Foto do corretor + dados + CRECI | Feed (branding) |

### PRIORIDADE MÉDIA (V2)
| # | Categoria | Descrição |
|---|---|---|
| 9 | **Dicas Educativas** | "5 erros ao comprar imóvel", conteúdo informativo |
| 10 | **Open House** | Convite para visitação, data/hora em destaque |
| 11 | **Depoimento Cliente** | Foto do cliente + aspas + avaliação |
| 12 | **Market Update** | Dados do mercado, gráficos, tendências |
| 13 | **Preço Reduzido** | Badge "BAIXOU!", preço antigo riscado |
| 14 | **Comparativo** | 2-3 imóveis lado a lado para comparação |
| 15 | **Guia do Bairro** | Mapa com pontos de interesse da localização |

### PRIORIDADE BAIXA (V3)
| # | Categoria | Descrição |
|---|---|---|
| 16 | **Antes/Depois** | Split-screen reforma |
| 17 | **Lifestyle** | Aspiracional, família no imóvel |
| 18 | **Institucional** | Sobre a imobiliária |
| 19 | **Flyer Impresso** | A4/A5 para distribuição |
| 20 | **Newsletter** | Email marketing |

---

## 4. ESTILOS VISUAIS PARA IMPLEMENTAR

### Baseado na análise do Pinterest + Canva + Concorrente

| # | Estilo | Paleta | Mood | Público-Alvo |
|---|---|---|---|---|
| 1 | **Dark Premium** | Preto + dourado + cinza | Luxo, exclusividade | Alto padrão |
| 2 | **Moderno Clean** | Branco + azul + cinza | Confiança, modernidade | Geral |
| 3 | **Luxo Dourado** | Preto + dourado + marrom | Sofisticação | Luxo/premium |
| 4 | **Glass Morphism** | Translúcido + blur + branco | Moderno, tech | Jovens/tech |
| 5 | **Minimalista Branco** | Branco + preto + 1 accent | Clean, elegante | Classe média-alta |
| 6 | **Colorido Vibrante** | Azul + laranja + branco | Energia, ação | Popular/acessível |
| 7 | **Natureza Verde** | Verde + branco + bege | Sustentável, eco | Eco-friendly |
| 8 | **Clássico Elegante** | Azul marinho + bege + ouro | Tradicional, sério | Conservador |
| 9 | **Neon Futurista** | Preto + neon (azul/rosa) | Futurista, ousado | Jovens |
| 10 | **Pastel Suave** | Rosa + azul claro + bege | Acolhedor, feminino | Público feminino |
| 11 | **Urgência Vermelho** | Vermelho + preto + branco | Urgência, oportunidade | Promoções |
| 12 | **Editorial Magazine** | Branco + tipografia serif | Sofisticado, editorial | Alto padrão |

---

## 5. ELEMENTOS OBRIGATÓRIOS POR TIPO DE CRIATIVO (Imobiliário)

### Dados que o cliente preenche:
```
{FOTO_IMOVEL}        → Foto principal (o sistema compõe sobre ela)
{TITULO}             → "Apartamento no Jardins" / "Casa em Alphaville"
{SUBTITULO}          → "3 suítes, 2 vagas, 180m²"
{PRECO}              → "R$ 1.200.000"
{ENDERECO}           → "Rua Augusta, 1000 - Jardins"
{BAIRRO}             → "Jardins"
{CIDADE}             → "São Paulo - SP"
{QUARTOS}            → 3
{BANHEIROS}          → 2
{VAGAS}              → 2
{METRAGEM}           → "180m²"
{CTA}                → "Agende uma Visita"
{WHATSAPP}           → "(11) 99999-9999"
{NOME_CORRETOR}      → "Douglas Bonanza"
{CRECI}              → "CRECI 12345-F"
{LOGO}               → Arquivo do logo
{FOTO_CORRETOR}      → Foto do corretor (opcional)
{TIPO}               → "Venda" / "Aluguel" / "Lançamento"
{BADGE}              → "NOVO" / "EXCLUSIVO" / "OPORTUNIDADE"
```

### Ícones padrão do mercado:
- 🛏️ Quartos (ícone de cama)
- 🚿 Banheiros (ícone de chuveiro)
- 🚗 Vagas (ícone de carro)
- 📐 Metragem (ícone de régua/m²)
- 📍 Localização (pin)
- 📱 WhatsApp (ícone)
- ☎️ Telefone

---

## 6. REGRAS DE COMPOSIÇÃO EXTRAÍDAS (Engenharia Reversa do Pinterest)

### Regra 1: Overlay sobre foto do cliente
```
SEMPRE aplicar overlay gradiente sobre a foto do cliente para garantir
legibilidade do texto. Opções por estilo:

- Dark Premium:   linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)
- Moderno Clean:  linear-gradient(180deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.95) 100%)
- Luxo Dourado:   linear-gradient(180deg, rgba(20,15,10,0.2) 0%, rgba(20,15,10,0.9) 100%)
- Glass Morphism: backdrop-filter: blur(20px); background: rgba(255,255,255,0.15)
- Colorido:       barra sólida colorida inferior (40% da altura) com cor do tema
```

### Regra 2: Hierarquia de texto
```
Ordem FIXA de importância visual:
1. TÍTULO (maior, mais bold, cor de destaque) — máx 40 chars
2. PREÇO (grande, cor accent, destaque visual) — se aplicável
3. SUBTÍTULO/DESCRIÇÃO (médio, cor secundária) — máx 80 chars
4. ÍCONES + DADOS TÉCNICOS (quartos, vagas, m²) — grid horizontal
5. CTA (botão ou texto com cor accent) — máx 25 chars
6. CONTATO/WHATSAPP (pequeno, discreto mas legível)
7. LOGO + CRECI (canto inferior, menor elemento)
```

### Regra 3: Safe zones
```
- Foto do cliente: NUNCA cobrir mais de 60% com overlay/texto
- Ponto de interesse da foto: manter livre (centro ou terço superior)
- Texto: posicionar na metade inferior OU lateral (nunca no centro total)
- Logo: sempre nos 15% inferiores da imagem
```

### Regra 4: Tipografia
```
Máximo 2 famílias de fonte por criativo:
- Título: fonte DISPLAY (Montserrat, Poppins, Playfair Display)
- Corpo: fonte LEGÍVEL (Open Sans, Inter, Lato)
- CTA: mesma família do título, peso semi-bold

Tamanhos relativos (para 1080px de largura):
- Título: 48-72px (variável por quantidade de texto)
- Subtítulo: 24-36px
- Dados técnicos: 18-24px
- CTA: 20-28px
- Contato: 14-18px
- Logo: 12-16px
```

### Regra 5: Badges/Selos
```
Badge de status SEMPRE visível:
- À VENDA: fundo verde (#27ae60) ou azul (#2979ff)
- ALUGA-SE: fundo laranja (#f39c12)
- VENDIDO: fundo vermelho (#e74c3c) — diagonal ou central
- LANÇAMENTO: fundo gradiente premium
- EXCLUSIVO: fundo dourado (#c8a04e)
- OPORTUNIDADE: fundo vermelho (#e74c3c)

Posição: canto superior direito ou esquerdo
Formato: retângulo arredondado (border-radius: 4-8px) ou pill (999px)
```

---

## 7. PROMPTS DE COMPOSIÇÃO POR ESTILO (para o motor de composição)

### ESTILO 1: Dark Premium
```
COMPOSIÇÃO: Foto do cliente como fundo full-bleed. Aplicar overlay gradiente 
escuro (preto 85% opacidade) na metade inferior da imagem, gradualmente 
transparente no topo. Título em fonte serifada bold (Playfair Display) em 
branco (#FFFFFF) com sombra sutil, alinhado à esquerda no terço inferior. 
Preço em cor dourada (#C8A04E) em fonte bold grande logo abaixo do título. 
Subtítulo em fonte sans-serif (Montserrat) regular em cinza claro (#D4D4D4). 
Ícones de quartos/vagas/m² em linha horizontal com cor dourada. CTA em botão 
retangular com borda dourada 1px e texto branco. Confetes dourados sutis nos 
cantos. Logo no canto inferior direito a 15% de opacidade. Badge no canto 
superior direito em retângulo dourado com texto preto bold.
```

### ESTILO 2: Moderno Clean
```
COMPOSIÇÃO: Foto do cliente na metade superior (60% da altura). Faixa 
branca sólida na metade inferior (40%). Título em fonte sans-serif bold 
(Montserrat Black) em preto (#1A1A1A) sobre fundo branco, alinhado à 
esquerda com margem 5%. Preço em cor accent azul (#2979FF) em fonte bold. 
Ícones de dados técnicos em grid horizontal com cor cinza (#666). CTA em 
botão arredondado (border-radius: 24px) com fundo azul (#2979FF) e texto 
branco. Linha separadora fina cinza (1px) entre dados e CTA. Logo no 
canto inferior esquerdo. Badge no canto superior da foto em pill azul.
```

### ESTILO 3: Luxo Dourado
```
COMPOSIÇÃO: Foto do cliente como fundo full-bleed. Moldura dourada fina 
(2px, #C8A04E) a 3% das bordas. Overlay gradiente escuro (preto 70%) na 
metade inferior. Título em fonte serifada (Cormorant Garamond) bold italic 
em dourado (#C8A04E) com ligeiro glow. Preço em branco fonte extra-bold. 
Linha dourada decorativa (1px) abaixo do título. Subtítulo em branco 
regular. Ícones dourados em linha. CTA em botão com fundo dourado 
translúcido (rgba(200,160,78,0.3)) e borda dourada 1px. Elementos 
decorativos: linhas diagonais douradas nos cantos. Logo dourado inferior 
direito.
```

### ESTILO 4: Glass Morphism
```
COMPOSIÇÃO: Foto do cliente como fundo full-bleed levemente blur (2px). 
Card central com glass morphism: backdrop-filter blur(20px), background 
rgba(255,255,255,0.15), border 1px solid rgba(255,255,255,0.25), 
border-radius 16px, shadow 0 8px 32px rgba(0,0,0,0.3). Card ocupa 70% 
da largura e 50% da altura, centralizado verticalmente. Dentro do card: 
título em branco bold (Montserrat), preço em accent cor, dados em grid, 
CTA em botão solid accent. Fora do card: badge no canto superior em pill 
glass. Logo inferior direito fora do card.
```

### ESTILO 5: Colorido Vibrante
```
COMPOSIÇÃO: Foto do cliente no lado esquerdo (50%). Lado direito com 
fundo sólido colorido (azul #2979FF ou laranja #FF6B35). Forma 
geométrica diagonal separando foto e área colorida. Título em branco 
bold (Poppins) sobre fundo colorido. Preço em branco com fundo escuro 
pill. Ícones brancos em linha. CTA em botão branco com texto na cor do 
fundo. Elementos decorativos: círculos translúcidos sobrepostos. Logo 
branco inferior direito.
```

### ESTILO 6: Urgência Vermelho (Oportunidade/Preço Reduzido)
```
COMPOSIÇÃO: Foto do cliente como fundo full-bleed. Banner diagonal 
vermelho (#E74C3C) no canto superior com texto "OPORTUNIDADE" em branco 
bold. Preço antigo riscado em cinza, preço novo em verde (#27AE60) 
extra-bold grande. Overlay escuro 50% na metade inferior. Timer/urgência 
visual. Título em branco bold. CTA em botão vermelho com texto branco 
"APROVEITE AGORA". Badge percentual de desconto em círculo amarelo.
```

---

## 8. NICHOS ADICIONAIS (NexoOmnix)

### Advocacia
```
Estilos: Clássico Elegante, Dark Premium, Moderno Clean
Cores: Azul marinho + dourado, preto + prata, azul + branco
Elementos: ícone balança, martelo, livro, diploma
Categorias: Institucional, Dicas de Direito, Depoimentos, Áreas de Atuação
```

### Salão de Beleza / Estética
```
Estilos: Pastel Suave, Luxo Dourado, Minimalista Branco, Dark Aesthetic
Cores: Rosa + dourado, preto + rosa, nude + branco, lavanda
Elementos: tesoura, pente, esmalte, flor, folha
Categorias: Promoção, Antes/Depois, Serviços, Agendamento, Resultados
```

### Restaurantes
```
Estilos: Colorido Vibrante, Rústico Quente, Moderno Clean, Dark Premium
Cores: Vermelho + amarelo, marrom + bege, verde + branco, preto + vermelho
Elementos: talher, prato, chef hat, estrela, fogo
Categorias: Cardápio, Promoção, Delivery, Reserva, Prato do Dia
```

### Automotivo
```
Estilos: Dark Premium, Neon Futurista, Moderno Clean
Cores: Preto + vermelho, preto + azul neon, cinza + laranja
Elementos: volante, velocímetro, chave, roda
Categorias: Venda, Seminovo, Revisão, Promoção, Lançamento
```

---

## 9. PIPELINE DE EXECUÇÃO

```
1. Corretor abre ImobCreator AI
2. Escolhe categoria (ex: "Imóvel à Venda")
3. Faz upload da FOTO do imóvel (esta é o fundo)
4. Preenche dados: título, preço, quartos, CTA, etc.
5. Escolhe ESTILO/TEMA (ex: "Dark Premium")
6. Sistema aplica REGRAS DE COMPOSIÇÃO do tema sobre a foto
7. IA gera o copy (título, subtítulo, CTA) se não preenchido
8. Resultado: criativo em 1-3 formatos (1:1, 4:5, 9:16)
9. Download em PNG alta resolução
```

### Como usar a skill de engenharia reversa:
```bash
# Analisar referência do Pinterest/concorrente
cd saas-auditor
export ANTHROPIC_API_KEY=sk-ant-...
node analyze.js referencia_pinterest.png

# Analisar pasta inteira de referências
node analyze.js ./referencias_pinterest/

# Resultado: ./reverse-engineered/imobcreator_export.json
# → Importar este JSON no ImobCreator como novo tema
```

---

## 10. ENTREGÁVEIS

| Arquivo | Descrição |
|---|---|
| `analyze.js` | CLI de engenharia reversa — analisa imagens e exporta temas |
| `src/reverse-engineer.js` | Módulo completo com análise de imagem e vídeo |
| `reverse-engineered/imobcreator_export.json` | Exportação pronta para importar no ImobCreator |
| `reverse-engineered/prompt_library.json` | Biblioteca de prompts consolidada |
| `reports/criadordecriativos_20260404/` | Auditoria completa do concorrente (16 features) |

---

## 11. PRÓXIMOS PASSOS

1. **Coletar 50+ imagens de referência** do Pinterest/Canva por nicho
2. **Rodar `node analyze.js`** em cada lote para gerar temas automaticamente
3. **Importar `imobcreator_export.json`** no motor de composição do ImobCreator
4. **Testar cada tema** com fotos reais de imóveis dos corretores
5. **Refinar prompts** com base no feedback dos primeiros clientes
6. **Expandir para outros nichos** (NexoOmnix) usando o mesmo pipeline
