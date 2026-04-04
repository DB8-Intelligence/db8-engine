# SaaS Audit Report: criadordecriativos

**Scan Date:** 2026-04-04T02:10:31.144Z
**Total Features Found:** 16
**Categories:** 8

## Index

- [ai_assistant](#ai_assistant) (3)
- [automation](#automation) (1)
- [export](#export) (2)
- [image_editing](#image_editing) (1)
- [image_generation](#image_generation) (6)
- [integration](#integration) (1)
- [template_gallery](#template_gallery) (1)
- [video_generation](#video_generation) (1)

---

## ai_assistant

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Assistente IA - Chatbot 'IA Criadora de Anúncios' | 0.99 | Chatbot conversacional completo chamado 'IA Criadora de Anúncios' com status 'Online agora' que guia | [link](https://criadordecriativos.app/app/generate-creatives#assistente-ia) |
| Gerador de Copy Multi-Canal por IA | 0.98 | Motor de geração de texto publicitário com IA que cria copy em 5 formatos diferentes otimizados por  | [link](https://criadordecriativos.app/app/generate-creatives#copy-ia) |
| Dashboard Principal | 0.95 | Painel principal com saudação personalizada ('Olá, Douglas!') e 4 ações rápidas: Criar Criativo, Cri | [link](https://criadordecriativos.app/app) |

### Assistente IA - Chatbot 'IA Criadora de Anúncios'

- **Category:** ai_assistant
- **Confidence:** 0.99
- **URL:** https://criadordecriativos.app/app/generate-creatives#assistente-ia
- **Menu Path:** app > criar-criativo > assistente-ia
- **Description:** Chatbot conversacional completo chamado 'IA Criadora de Anúncios' com status 'Online agora' que guia o usuário em fluxo de 5 etapas com barra de progresso (20%→60%→80%→100%). Fluxo: (1) Upload de 1-2 fotos ou pular para IA gerar imagem (20%), (2) Seleção de tema via chips interativos - IA Express, IA Mágico, Campanha Branding, Conversão Extrema, CTR Monstro, Produto em Destaque + 'Ver todos os temas (76)' (60%), (3) Descrição do produto/serviço em texto livre, (4) IA gera copy com Título, Subtítulo, Preço e CTA (80%) - ex: 'Fortaleça Vínculos Nesta Páscoa', (5) Usuário aprova, edita ou regenera → Resumo final → Botão 'Gerar Criativo Profissional' (100%).
- **Inputs:** Fotos do produto/serviço (1-2, JPG/PNG/WEBP), Seleção de tema via chips (76 disponíveis), Descrição textual do produto/serviço, Aprovação/edição/regeneração do copy gerado
- **Outputs:** Copy publicitário completo (Título + Subtítulo + Preço + CTA), Criativo visual profissional gerado por IA
- **Limitations:** Fluxo sequencial guiado - 5 etapas obrigatórias
- **Notes:** Fluxo detalhado: Etapa 1 (20%): 'Envie 1 ou 2 fotos' ou 'pular e deixar a IA criar imagem'. Após upload: 'Imagem recebida! Você pode adicionar mais uma ou continuar' → '+ Adicionar mais uma' / 'Continuar assim'. Etapa 2 (60%): Seleção de tema via chips. IA confirma: 'Ótima escolha! O tema IA Express é perfeito!'. Etapa 3: 'Descreva seu produto ou serviço...' (input de texto). Etapa 4 (80%): IA gera copy estruturado com Título/Subtítulo/Preço/CTA. Pergunta: 'O que você achou?' → 3 opções: 'Gostei do texto, continuar...' / 'Editar manualmente' / 'Criar outra versão'. Etapa 5 (100%): Resumo final formatado com emojis + botão 'Gerar Criativo Profissional'.

### Gerador de Copy Multi-Canal por IA

- **Category:** ai_assistant
- **Confidence:** 0.98
- **URL:** https://criadordecriativos.app/app/generate-creatives#copy-ia
- **Menu Path:** app > criar-criativo > resultados > copy
- **Description:** Motor de geração de texto publicitário com IA que cria copy em 5 formatos diferentes otimizados por canal: Curta (Stories), Média (Feed), Completa (Anúncios), WhatsApp (Mensagem), Instagram (Caption). Badge '✨ Gerado com IA' identifica conteúdo. Cada formato adapta tom, tamanho e CTA para o canal específico. Após geração do criativo visual, exibe seção 'Copy para seu anúncio - Texto persuasivo gerado com IA' com tabs por formato. Opções: 'Editar' (personalizar), 'Copiar' (clipboard), 'Gerar nova' (regenerar). Também sugere temas alternativos ('Experimente também: CTR Monstro', 'Minimalista Premium').
- **Inputs:** Tema/estilo selecionado, Descrição do produto/serviço, Canal alvo (Stories/Feed/Anúncios/WhatsApp/Instagram)
- **Outputs:** Copy Curta para Stories, Copy Média para Feed, Copy Completa para Anúncios, Copy para WhatsApp/Mensagem, Caption para Instagram
- **Limitations:** Qualidade depende da descrição fornecida e tema escolhido
- **Notes:** 5 formatos de copy: (1) Curta/Stories - texto breve para stories, (2) Média/Feed - texto médio para posts de feed, (3) Completa/Anúncios - texto longo persuasivo para anúncios pagos, (4) WhatsApp/Mensagem - texto conversacional para envio direto, (5) Instagram/Caption - legenda otimizada para Instagram. Cada um com botões Editar e Copiar. Sugestão de temas alternativos no rodapé. Banner de upsell: 'Aumente seus cliques com vídeos! Vídeos têm até 3x mais engajamento' → 'Animar meu criativo'. Botões extras: 'Regenerar com ajustes', 'Gerar outra versão'.

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
| Download e Exportação de Criativos | 0.92 | Sistema de download dos criativos gerados. Botão 'Download' com menu (três pontos) para opções adici | [link](https://criadordecriativos.app/app/generate-creatives#download) |
| Histórico de Criações | 0.8 | Tela de histórico que exibe todas as criações anteriores do usuário com preview visual. Permite revi | [link](https://criadordecriativos.app/historico) |

### Download e Exportação de Criativos

- **Category:** export
- **Confidence:** 0.92
- **URL:** https://criadordecriativos.app/app/generate-creatives#download
- **Menu Path:** app > criar-criativo > download
- **Description:** Sistema de download dos criativos gerados. Botão 'Download' com menu (três pontos) para opções adicionais. Arquivos nomeados automaticamente com formato e timestamp (ex: criativo-square-1775268032831.png, criativo-fourToFive-1775266157879.png, criativo-stories-1775266155905.png). Campo de texto com título copiável para uso em posts.
- **Inputs:** Seleção de criativo para download
- **Outputs:** Arquivos PNG em alta resolução (1.2-1.4MB), Texto do título copiável
- **Limitations:** Formato PNG apenas (baseado nos nomes dos arquivos)
- **Notes:** Downloads simultâneos de todos os formatos. Nomes padronizados: criativo-{formato}-{timestamp}.png. Formato detectado: square, fourToFive, stories. Ícone de copiar ao lado do título para facilitar uso em legendas de posts.

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

## image_editing

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Tela de Resultados e Pós-Edição | 0.95 | Tela de entrega dos criativos gerados com ferramentas de pós-edição. Exibe 'Suas imagens estão pront | [link](https://criadordecriativos.app/app/generate-creatives#resultados) |

### Tela de Resultados e Pós-Edição

- **Category:** image_editing
- **Confidence:** 0.95
- **URL:** https://criadordecriativos.app/app/generate-creatives#resultados
- **Menu Path:** app > criar-criativo > resultados
- **Description:** Tela de entrega dos criativos gerados com ferramentas de pós-edição. Exibe 'Suas imagens estão prontas!' com todos os formatos gerados organizados por seção (Tamanhos horizontais). Cada formato identificado (ex: 'Quadrado (Instagram) - Perfeito para Instagram e Facebook'). Toolbar com: 'Ajustar elementos ✨' (edição pós-geração), 'Criar nova imagem', 'Outra versão', 'Trocar Tema', 'Voltar ao formulário (manter dados)', 'Editar título/preço/CTA', 'Ver variações salvas'.
- **Inputs:** Criativo gerado
- **Outputs:** Criativo editado/ajustado, Nova versão, Variação com outro tema
- **Limitations:** Edição limitada a elementos (não é editor completo como Canva)
- **Notes:** Permite ajustar elementos pós-geração sem recomeçar. 'Voltar ao formulário (manter dados)' preserva inputs para nova geração. Sistema de variações salvas para comparação. Cada formato tem composição visual DIFERENTE - não é simples crop/resize, a IA gera layouts distintos por formato.

---

## image_generation

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Gerador de Criativos (Formulário Wizard) | 0.98 | Ferramenta principal de criação de criativos publicitários em 2 etapas. Etapa 1 (Foto): seleção de f | [link](https://criadordecriativos.app/app/generate-creatives) |
| Multi-Formato com Composição Inteligente por IA | 0.97 | Sistema de geração multi-formato que cria composições visuais DISTINTAS para cada formato. Não é sim | [link](https://criadordecriativos.app/app/generate-creatives#multi-formato) |
| Criar Sequência de Imagens / Carrossel | 0.97 | Ferramenta completa para criar sequências de imagens (carrosséis) com wizard de 2 etapas: '1. Tamanh | [link](https://criadordecriativos.app/app/generate-carousel-images) |
| Pipeline de Renderização com Otimização de Conversão | 0.92 | Pipeline de geração de criativos com 5 etapas visuais e otimização automática para conversão. Tela ' | [link](https://criadordecriativos.app/app/generate-creatives#rendering) |
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

### Multi-Formato com Composição Inteligente por IA

- **Category:** image_generation
- **Confidence:** 0.97
- **URL:** https://criadordecriativos.app/app/generate-creatives#multi-formato
- **Menu Path:** app > criar-criativo > formatos
- **Description:** Sistema de geração multi-formato que cria composições visuais DISTINTAS para cada formato. Não é simples crop - cada formato recebe layout, tipografia e composição diferentes. Formatos: Quadrado 1:1 (composição premium com elementos 3D dourados, texto em destaque), Feed 4:5 (tema dark/gold com ícones de serviços, fundo gradiente), Stories 9:16 (vertical com 2 CTAs 'Compartilhar Afeto Agora' + 'SAIBA MAIS', layout expandido). A IA também gera elementos gráficos contextuais (orelhas de coelho douradas, fitas, cenouras 3D para Páscoa).
- **Inputs:** Foto do produto/pessoa, Copy (título, subtítulo, CTA), Tema selecionado, Formatos escolhidos
- **Outputs:** Criativo Quadrado 1:1 (~1.4MB PNG), Criativo Feed 4:5 (~1.2MB PNG), Criativo Stories 9:16 (~1.2MB PNG), Criativo Paisagem 16:9
- **Limitations:** Máximo 3 formatos simultâneos por 1 crédito
- **Notes:** Qualidade profissional impressionante. Cada formato tem: layout distinto, tipografia adaptada, hierarquia visual diferente, elementos gráficos reposicionados. Elementos 3D gerados por IA contextualmente (Páscoa = coelhos dourados, fitas azuis). Tamanhos de arquivo indicam alta resolução (~1.2-1.4MB por imagem PNG).

### Criar Sequência de Imagens / Carrossel

- **Category:** image_generation
- **Confidence:** 0.97
- **URL:** https://criadordecriativos.app/app/generate-carousel-images
- **Menu Path:** app > criar-sequencia
- **Description:** Ferramenta completa para criar sequências de imagens (carrosséis) com wizard de 2 etapas: '1. Tamanho e Estilo' → '2. Textos das Imagens'. Configurações: formato (Quadrado, Retrato, Stories/Reels), quantidade (slider 3-10 imagens, padrão 5), tipo de conteúdo storytelling e estilo visual por nicho. Custo: 5 créditos para 5 imagens. Modo 'Foco' disponível.
- **Inputs:** Formato (Quadrado, Retrato, Stories/Reels), Quantidade de imagens (3-10, slider), Tipo de conteúdo (5 opções de storytelling), Estilo visual por nicho, Textos para cada imagem (etapa 2)
- **Outputs:** Sequência de 3-10 imagens para carrossel
- **Limitations:** Custo proporcional: 5 créditos para 5 imagens. Máximo 10 imagens por sequência.
- **Notes:** 5 tipos de conteúdo storytelling: (1) 'Chama atenção → Mostra o problema → Dá a solução' - para resolver dor do cliente, (2) 'Liste os benefícios' - vantagens uma a uma, (3) 'Antes e Depois' - transformação do produto, (4) 'Passo a Passo' - explicar como funciona de forma simples, (5) 'Curiosidade + Revelação' - criar suspense e surpreender. Estilos visuais por nicho: Narrativo, Engajamento, Vendas, Imobiliário, Restaurantes, Saúde, Automotivo. Ícone dedicado no sidebar (camadas).

### Pipeline de Renderização com Otimização de Conversão

- **Category:** image_generation
- **Confidence:** 0.92
- **URL:** https://criadordecriativos.app/app/generate-creatives#rendering
- **Menu Path:** app > criar-criativo > gerando
- **Description:** Pipeline de geração de criativos com 5 etapas visuais e otimização automática para conversão. Tela 'Criando sua arte' mostra: 4 etapas completas (checkmarks verdes) + etapa atual 'Otimizando - Ajustes para máxima conversão' com barra de progresso (68%, ~9s restantes). Preview do criativo sendo gerado aparece em tempo real.
- **Inputs:** Configurações definidas no fluxo anterior (foto, tema, copy)
- **Outputs:** Criativo profissional renderizado e otimizado para conversão
- **Limitations:** Tempo de geração ~9-15 segundos
- **Notes:** Pipeline de 5 steps com feedback visual em tempo real. Etapa final é 'Otimizando - Ajustes para máxima conversão' - sugere pós-processamento inteligente. Preview animado do criativo durante geração. Dica exibida: 'Teste diferentes variações para melhores resultados'. Ícone ✨ no preview sugere processamento por IA.

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

