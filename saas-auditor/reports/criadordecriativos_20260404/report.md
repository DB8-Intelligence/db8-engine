# SaaS Audit Report: criadordecriativos

**Scan Date:** 2026-04-04T02:01:05.714Z
**Total Features Found:** 12
**Categories:** 7

## Index

- [ai_assistant](#ai_assistant) (3)
- [automation](#automation) (1)
- [export](#export) (1)
- [image_generation](#image_generation) (4)
- [integration](#integration) (1)
- [template_gallery](#template_gallery) (1)
- [video_generation](#video_generation) (1)

---

## ai_assistant

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Dashboard Principal | 0.95 | Painel principal com saudação personalizada ('Olá, Douglas!') e 4 ações rápidas: Criar Criativo, Cri | [link](https://criadordecriativos.app/app) |
| Assistente IA - Chatbot de Criação de Anúncios | 0.95 | Chatbot conversacional completo chamado 'IA Criador de Anúncios' que guia o usuário passo a passo na | [link](https://criadordecriativos.app/app/generate-creatives#assistente-ia) |
| Geração Automática de Texto por IA | 0.9 | Funcionalidade de geração automática de texto publicitário baseada no tema/estilo selecionado. Ao es | [link](https://criadordecriativos.app/app/generate-creatives#texto) |

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

### Assistente IA - Chatbot de Criação de Anúncios

- **Category:** ai_assistant
- **Confidence:** 0.95
- **URL:** https://criadordecriativos.app/app/generate-creatives#assistente-ia
- **Menu Path:** app > criar-criativo > assistente-ia
- **Description:** Chatbot conversacional completo chamado 'IA Criador de Anúncios' que guia o usuário passo a passo na criação de criativos. Interface de chat com barra de progresso (20% ao iniciar). Fluxo: (1) IA se apresenta, (2) pede upload de 1-2 fotos do produto/serviço, (3) opção de pular e deixar a IA criar imagem do zero. Status 'Online agora' indica disponibilidade.
- **Inputs:** Fotos do produto/serviço (1-2, JPG/PNG/WEBP), Instruções conversacionais em linguagem natural, Opção de pular upload e deixar IA gerar imagem
- **Outputs:** Criativos publicitários gerados via conversa guiada, Imagens criadas por IA quando sem upload
- **Limitations:** Fluxo sequencial guiado - requer seguir etapas da IA
- **Notes:** Interface de chat moderna com ícone de IA (✨). Mensagens: 'Olá! 👋 Eu sou a IA do Criador de Criativos.', 'Vou criar um anúncio profissional para você! ⚡', 'Primeiro, envie 1 ou 2 fotos do seu produto ou serviço para deixar o criativo mais profissional! 📸'. Opção 'Ou pular e deixar a IA criar imagem' sugere capacidade de image generation sem input visual. Barra de progresso indica fluxo multi-etapa.

### Geração Automática de Texto por IA

- **Category:** ai_assistant
- **Confidence:** 0.9
- **URL:** https://criadordecriativos.app/app/generate-creatives#texto
- **Menu Path:** app > criar-criativo > texto-ia
- **Description:** Funcionalidade de geração automática de texto publicitário baseada no tema/estilo selecionado. Ao escolher um tema (ex: IA Imobiliário), a mensagem 'A IA vai criar o texto do seu anúncio com base no estilo escolhido ✨' confirma que o copy é gerado automaticamente por IA.
- **Inputs:** Tema/estilo selecionado, Contexto do produto/serviço
- **Outputs:** Texto publicitário otimizado para o nicho selecionado
- **Limitations:** Texto gerado depende do tema escolhido
- **Notes:** Integrado ao fluxo de criação - não é uma ferramenta standalone. A IA adapta o tom e conteúdo do texto ao nicho do tema (ex: imobiliário, vendas, beleza, etc.).

---

## automation

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Sistema de Identidade Visual / Branding | 0.88 | Funcionalidade para salvar e reutilizar identidade visual (logos, cores, fontes) nos criativos. Togg | [link](https://criadordecriativos.app/app/identidade-visual) |

### Sistema de Identidade Visual / Branding

- **Category:** automation
- **Confidence:** 0.88
- **URL:** https://criadordecriativos.app/app/identidade-visual
- **Menu Path:** app > criar-criativo > identidade-visual
- **Description:** Funcionalidade para salvar e reutilizar identidade visual (logos, cores, fontes) nos criativos. Toggle 'Usar identidade visual personalizada' disponível na tela de criação. Permite salvar múltiplos logos com posição e opacidade configuráveis.
- **Inputs:** Logos (PNG/SVG/WEBP, máx 5MB), Posição do logo (ex: Inf. Dir.), Opacidade (0-100%), Cores e fontes da marca
- **Outputs:** Identidade visual aplicada automaticamente a todos os criativos
- **Limitations:** Máximo 4 logos por criativo
- **Notes:** Sistema de 'Meus logos salvos' para reutilização rápida. Posicionamento configurável. Controle de opacidade granular (15%-100%). Toggle para ativar/desativar identidade visual personalizada.

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
- **Notes:** Ícone de relógio/histórico no sidebar. Seção 'Últimas Criações' no dashboard mostra preview rápido das criações mais recentes.

---

## image_generation

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Gerador de Criativos (Formulário Wizard) | 0.98 | Ferramenta principal de criação de criativos publicitários em 2 etapas. Etapa 1 (Foto): seleção de f | [link](https://criadordecriativos.app/app/generate-creatives) |
| Criar Sequência / Carrossel | 0.9 | Ferramenta para criar sequências de imagens em formato carrossel, otimizadas para engajamento em red | [link](https://criadordecriativos.app/app/generate-carousel-images) |
| Criar Thumbnail YouTube | 0.9 | Ferramenta dedicada para criação de thumbnails otimizadas para vídeos do YouTube. Acessível pelo car | [link](https://criadordecriativos.app/app/generate-thumbnail-image) |
| Gerador de Imagens Criativas (WhatsApp/Vendas) | 0.75 | Ferramenta para geração de imagens criativas focadas em marketing e vendas, particularmente para Wha | [link](https://criadordecriativos.app/app/generate-creative-images) |

### Gerador de Criativos (Formulário Wizard)

- **Category:** image_generation
- **Confidence:** 0.98
- **URL:** https://criadordecriativos.app/app/generate-creatives
- **Menu Path:** app > criar-criativo > formulario
- **Description:** Ferramenta principal de criação de criativos publicitários em 2 etapas. Etapa 1 (Foto): seleção de formato (Quadrado 1:1, Feed 4:5, Stories 9:16, Paisagem 16:9 - máx. 3 simultâneos), quantidade (1 ou 5 criativos), upload de imagem do produto (1-3 imagens), upload de logo com posicionamento. Etapa 2: seleção de tema visual e geração de texto por IA.
- **Inputs:** Formato do criativo (1:1, 4:5, 9:16, 16:9), Quantidade (1 ou 5), Imagem do produto (1-3), Logo (PNG/SVG/WEBP, máx 5MB, até 4 logos), Posição e opacidade do logo, Identidade visual personalizada (toggle), Tema visual, Texto do anúncio (gerado por IA)
- **Outputs:** Criativos publicitários em múltiplos formatos, Imagens otimizadas para redes sociais
- **Limitations:** Máximo 3 formatos simultâneos, 1 crédito por geração, máx 3 imagens de produto, máx 4 logos
- **Notes:** Modo Formulário: wizard step-by-step com 2 etapas. Logo pode ser posicionado (Inf. Dir.) com controle de opacidade (15%-100%). Suporta salvar logos para reutilização ('Meus logos salvos'). Ao selecionar tema com IA: 'A IA vai criar o texto do seu anúncio com base no estilo escolhido ✨'. Botão 'Avançar para o texto' leva à etapa 2.

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

### Gerador de Imagens Criativas (WhatsApp/Vendas)

- **Category:** image_generation
- **Confidence:** 0.75
- **URL:** https://criadordecriativos.app/app/generate-creative-images
- **Menu Path:** app > generate-creative-images
- **Description:** Ferramenta para geração de imagens criativas focadas em marketing e vendas, particularmente para WhatsApp e canais de vendas diretas.
- **Inputs:** Imagem do produto, Configurações de design, Tema
- **Outputs:** Imagens criativas otimizadas para marketing direto
- **Limitations:** Baseado em créditos
- **Notes:** Diferente do 'Criar Criativo' principal - foco específico em imagens para canais de vendas diretas (WhatsApp, etc.).

---

## integration

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Sistema de Créditos e Recargas | 0.85 | Sistema de monetização baseado em créditos. Cada geração consome créditos (1 crédito = até 3 formato | [link](https://criadordecriativos.app/historico-recargas) |

### Sistema de Créditos e Recargas

- **Category:** integration
- **Confidence:** 0.85
- **URL:** https://criadordecriativos.app/historico-recargas
- **Menu Path:** app > recargas
- **Description:** Sistema de monetização baseado em créditos. Cada geração consome créditos (1 crédito = até 3 formatos simultâneos). Exibe saldo no header (33 créditos visíveis), ícone de raio para recarga rápida, e tela dedicada de histórico de recargas.
- **Inputs:** Pagamento/recarga
- **Outputs:** Créditos adicionados à conta
- **Limitations:** Modelo pay-per-use - sem plano ilimitado aparente
- **Notes:** Exibido proeminentemente no header com badge '33 créditos' e barra de progresso verde. Ícone de raio (⚡) sugere recarga rápida. Rotas '/historico-recargas', '/upsell', '/welcome-offer' detectadas no bundle.

---

## template_gallery

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Galeria de Temas/Templates (90+ temas) | 0.98 | Biblioteca massiva com mais de 90 temas de design organizados por categorias e nichos profissionais. | [link](https://criadordecriativos.app/app/generate-creatives#temas) |

### Galeria de Temas/Templates (90+ temas)

- **Category:** template_gallery
- **Confidence:** 0.98
- **URL:** https://criadordecriativos.app/app/generate-creatives#temas
- **Menu Path:** app > criar-criativo > temas
- **Description:** Biblioteca massiva com mais de 90 temas de design organizados por categorias e nichos profissionais. Categorias: TOP Temas, Novos, Todos, Favoritos, Imobiliário, Vendas, Mais categorias. Inclui 3 temas com IA e dezenas de temas por nicho específico. Sistema de favoritos e recomendações.
- **Inputs:** Seleção de tema, Filtro por categoria/nicho
- **Outputs:** Template visual aplicado ao criativo, Texto adaptado ao nicho via IA
- **Limitations:** Alguns temas podem requerer plano premium
- **Notes:** TEMAS COM IA: IA Mágico ('otimiza automaticamente cores, composição'), IA Imobiliário ('campanha conceitual visualmente poderosa'), IA Express ('campanha conceitual de alta conversão' - Recomendado). TEMAS DE ESTILO: Conversão Extrema, CTR Monstro, Disparo de Vendas, Ímã de Leads, Campanhas com Promoções, Fechamento Garantido, Oferta Relâmpago, Minimalista Premium, Neon Futurista, Preto e Amarelo, Produto em Destaque, Dark Premium, Expert Photoshop (Glass Morphism), Imobiliário Top, Apple Style, Cinematográfico Premium, Estilo Luxo, Tecnologia, Publicitária Premium, Estilo Cinemático, Bold Impacto, Wow Tema, Orange Black, Forest Bold, Gradiente Vibrante, Luz e Sombra, Autoridade Expert, Storytelling Visual, Neon Verde, Duotone Dramático, Magazine Cover, Wireframe Tech, Editorial/Tipográfico. TEMAS POR NICHO: Serviços Profissionais, Restaurante Gourmet/Delivery/Pizzaria/Cafeteria, Automotivo Premium/Promoção/Seminovo/Oficina, Clínica Estética, Saúde e Bem-estar, Consultório Médico, Joalheria, Academia, Curso Online, Escola de Idiomas, Coaching, Preparatório, Advogado, Contador, Arquiteto, Fotógrafo, Salão de Beleza, Barbearia, Loja de Cosméticos, Micropigmentação, Extensão de Cílios, Nail Designer, Maquiador, Pet Shop, Veterinário, Hotel Pet, Turismo, Eventos.

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

