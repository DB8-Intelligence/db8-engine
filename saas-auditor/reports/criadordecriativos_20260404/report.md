# SaaS Audit Report: criadordecriativos

**Scan Date:** 2026-04-04T01:58:55.654Z
**Total Features Found:** 8
**Categories:** 5

## Index

- [ai_assistant](#ai_assistant) (1)
- [export](#export) (1)
- [image_generation](#image_generation) (4)
- [template_gallery](#template_gallery) (1)
- [video_generation](#video_generation) (1)

---

## ai_assistant

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Dashboard Principal | 0.95 | Painel principal com saudação personalizada ('Olá, Douglas!') e 4 ações rápidas: Criar Criativo, Cri | [link](https://criadordecriativos.app/app) |

### Dashboard Principal

- **Category:** ai_assistant
- **Confidence:** 0.95
- **URL:** https://criadordecriativos.app/app
- **Menu Path:** home
- **Description:** Painel principal com saudação personalizada ('Olá, Douglas!') e 4 ações rápidas: Criar Criativo, Criar Sequência, Criar Thumbnail e Animar Criativo. Exibe créditos disponíveis (33), seção 'Últimas Criações' com histórico visual, notificações, suporte e perfil do usuário.
- **Inputs:** Seleção de tipo de criação
- **Outputs:** Navegação para ferramenta selecionada, Visualização de criações recentes
- **Limitations:** Sistema baseado em créditos - cada geração consome créditos
- **Notes:** Sidebar com 8 ícones de navegação: Home, Criar Criativo, Sequências, Vídeo/Animação, Histórico, Recargas, Perfil, Logout. Design moderno com UI limpa e cores azul/roxo.

---

## export

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Histórico de Criações | 0.8 | Tela de histórico que exibe todas as criações anteriores do usuário com preview visual. Permite revi | [link](https://criadordecriativos.app/historico) |

### Histórico de Criações

- **Category:** export
- **Confidence:** 0.8
- **URL:** https://criadordecriativos.app/historico
- **Menu Path:** historico
- **Description:** Tela de histórico que exibe todas as criações anteriores do usuário com preview visual. Permite revisitar, baixar e reutilizar criativos gerados anteriormente.
- **Inputs:** Filtros de busca/data
- **Outputs:** Lista de criações anteriores, Download de criativos
- **Limitations:** Detalhes de filtros não visíveis nos screenshots
- **Notes:** Ícone de relógio/histórico no sidebar. Seção 'Últimas Criações' no dashboard mostra preview rápido.

---

## image_generation

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Gerador de Criativos (Formulário) | 0.98 | Ferramenta principal de criação de criativos publicitários em 2 etapas. Etapa 1 (Foto): seleção de f | [link](https://criadordecriativos.app/app/generate-creatives) |
| Criar Sequência / Carrossel | 0.9 | Ferramenta para criar sequências de imagens em formato carrossel, otimizadas para engajamento em red | [link](https://criadordecriativos.app/app/generate-carousel-images) |
| Criar Thumbnail YouTube | 0.9 | Ferramenta dedicada para criação de thumbnails otimizadas para vídeos do YouTube. Acessível pelo car | [link](https://criadordecriativos.app/app/generate-thumbnail-image) |
| Gerador de Imagens Criativas | 0.75 | Ferramenta para geração de imagens criativas focadas em marketing e vendas, particularmente para Wha | [link](https://criadordecriativos.app/app/generate-creative-images) |

### Gerador de Criativos (Formulário)

- **Category:** image_generation
- **Confidence:** 0.98
- **URL:** https://criadordecriativos.app/app/generate-creatives
- **Menu Path:** app > criar-criativo
- **Description:** Ferramenta principal de criação de criativos publicitários em 2 etapas. Etapa 1 (Foto): seleção de formato (Quadrado 1:1, Feed 4:5, Stories 9:16, Paisagem 16:9 - máx. 3 simultâneos), quantidade (1 ou 5 criativos), upload de imagem do produto. Possui modo 'Assistente IA' e 'Formulário'. Custo: 1 crédito por até 3 formatos.
- **Inputs:** Formato do criativo (1:1, 4:5, 9:16, 16:9), Quantidade (1 ou 5), Imagem do produto, Logo (PNG/SVG/WEBP, máx 5MB, até 4 logos), Identidade visual personalizada (toggle)
- **Outputs:** Criativos publicitários em múltiplos formatos, Imagens otimizadas para redes sociais
- **Limitations:** Máximo 3 formatos simultâneos, 1 crédito por geração, máx 3 imagens de produto, máx 4 logos
- **Notes:** Dois modos de criação: Assistente IA (conversacional) e Formulário (wizard step-by-step). Logo pode ser posicionado (Inf. Dir.) com controle de opacidade (15%-100%). Suporta salvar logos para reutilização.

### Criar Sequência / Carrossel

- **Category:** image_generation
- **Confidence:** 0.9
- **URL:** https://criadordecriativos.app/app/generate-carousel-images
- **Menu Path:** app > criar-sequencia
- **Description:** Ferramenta para criar sequências de imagens em formato carrossel, otimizadas para engajamento em redes sociais (Instagram, Facebook). Acessível pelo card 'Criar Sequência - Carrosséis que engajam' no dashboard.
- **Inputs:** Imagens, Textos, Tema/template
- **Outputs:** Sequência de imagens para carrossel
- **Limitations:** Detalhes específicos do formulário não visíveis nos screenshots
- **Notes:** Ícone dedicado no sidebar (camadas). Foco em 'carrosséis que engajam' sugere otimização para algoritmos de redes sociais.

### Criar Thumbnail YouTube

- **Category:** image_generation
- **Confidence:** 0.9
- **URL:** https://criadordecriativos.app/app/generate-thumbnail-image
- **Menu Path:** app > criar-thumbnail
- **Description:** Ferramenta dedicada para criação de thumbnails otimizadas para vídeos do YouTube. Acessível pelo card 'Criar Thumbnail - Para seus vídeos do YouTube' no dashboard.
- **Inputs:** Imagem base, Texto/título, Estilo visual
- **Outputs:** Thumbnail otimizada para YouTube
- **Limitations:** Detalhes específicos do formulário não visíveis nos screenshots
- **Notes:** Ícone laranja/vermelho no dashboard. YouTube é o foco principal desta ferramenta.

### Gerador de Imagens Criativas

- **Category:** image_generation
- **Confidence:** 0.75
- **URL:** https://criadordecriativos.app/app/generate-creative-images
- **Menu Path:** app > generate-creative-images
- **Description:** Ferramenta para geração de imagens criativas focadas em marketing e vendas, particularmente para WhatsApp e canais de vendas diretas.
- **Inputs:** Imagem do produto, Configurações de design, Tema
- **Outputs:** Imagens criativas otimizadas para marketing
- **Limitations:** Baseado em créditos
- **Notes:** Diferente do 'Criar Criativo' principal - foco específico em imagens para canais de vendas.

---

## template_gallery

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Galeria de Temas/Templates (70+) | 0.95 | Biblioteca com mais de 70 temas de design para criativos, organizados por categorias: TOP Temas, Nov | [link](https://criadordecriativos.app/app/generate-creatives#temas) |

### Galeria de Temas/Templates (70+)

- **Category:** template_gallery
- **Confidence:** 0.95
- **URL:** https://criadordecriativos.app/app/generate-creatives#temas
- **Menu Path:** app > criar-criativo > temas
- **Description:** Biblioteca com mais de 70 temas de design para criativos, organizados por categorias: TOP Temas, Novos, Todos, Favoritos, Imobiliário, Vendas e mais. Inclui temas com IA (IA Mágico, IA Imobiliário, IA Express) e temas especializados por nicho e estilo visual.
- **Inputs:** Seleção de tema, Filtro por categoria
- **Outputs:** Template aplicado ao criativo
- **Limitations:** Alguns temas podem ser exclusivos de planos premium
- **Notes:** Temas com IA identificados: IA Mágico ('otimiza automaticamente cores, composição'), IA Imobiliário ('campanha conceitual visualmente poderosa'), IA Express ('campanha conceitual de alta conversão' - Recomendado). Sistema de favoritos (coração). Temas incluem: Conversão Extrema, CTR Monstro, Disparo de Vendas, Ímã de Leads, Campanhas com Promoções, Fechamento Garantido, Oferta Relâmpago, Minimalista Premium, Neon Futurista, Preto e Amarelo, Produto em Destaque, Dark Premium, Expert Photoshop (Glass Morphism), Imobiliário Top, Apple Style, Cinematográfico Premium, Estilo Luxo, Tecnologia, Publicitária Premium, Estilo Cinemático, Bold Impacto, Wow Tema, Orange Black, Forest Bold.

---

## video_generation

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Animar Criativo (Vídeo) | 0.9 | Ferramenta para transformar criativos estáticos em vídeos animados. Acessível pelo card 'Animar Cria | [link](https://criadordecriativos.app/app/generate-video) |

### Animar Criativo (Vídeo)

- **Category:** video_generation
- **Confidence:** 0.9
- **URL:** https://criadordecriativos.app/app/generate-video
- **Menu Path:** app > animar-criativo
- **Description:** Ferramenta para transformar criativos estáticos em vídeos animados. Acessível pelo card 'Animar Criativo - Transforme em vídeo' no dashboard.
- **Inputs:** Criativo estático (imagem), Configurações de animação
- **Outputs:** Vídeo animado do criativo
- **Limitations:** Detalhes sobre duração e formatos de vídeo não visíveis nos screenshots
- **Notes:** Ícone roxo/magenta no dashboard. Converte imagens estáticas em vídeo, provavelmente com efeitos de movimento/transição. Ícone de play no sidebar sugere seção dedicada.

---

