# SaaS Audit Report: criadordecriativos

**Scan Date:** 2026-04-04T01:42:26.096Z
**Total Features Found:** 6
**Categories:** 2

## Index

- [image_generation](#image_generation) (5)
- [video_generation](#video_generation) (1)

---

## image_generation

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Criador de Criativos - Plataforma Completa de Geração de Conteúdo com IA | 0.95 | Plataforma SaaS brasileira que utiliza IA para criar automaticamente criativos profissionais para an | [link](https://criadordecriativos.app/app) |
| Gerador de Imagens Criativas | 0.75 | Ferramenta de geração de imagens criativas para uso em marketing e vendas, com foco em criativos par | [link](https://criadordecriativos.app/app/generate-creative-images) |
| Gerador de Criativos | 0.75 | Ferramenta principal para geração de criativos publicitários. Baseado nos botões visíveis, parece fo | [link](https://criadordecriativos.app/app/generate-creatives) |
| Gerador de Thumbnail/Imagem de Capa | 0.7 | Ferramenta para geração de imagens de thumbnail, provavelmente para vídeos do YouTube, redes sociais | [link](https://criadordecriativos.app/app/generate-thumbnail-image) |
| Gerador de Imagens para Carrossel | 0.7 | Ferramenta de geração de imagens otimizadas para formato carrossel, provavelmente para uso em redes  | [link](https://criadordecriativos.app/app/generate-carousel-images) |

### Criador de Criativos - Plataforma Completa de Geração de Conteúdo com IA

- **Category:** image_generation
- **Confidence:** 0.95
- **URL:** https://criadordecriativos.app/app
- **Menu Path:** app > Criar > Criativos Profissionais | Thumbnails YouTube | Carrosséis Instagram | Vídeos
- **Description:** Plataforma SaaS brasileira que utiliza IA para criar automaticamente criativos profissionais para anúncios, thumbnails para YouTube, carrosséis para Instagram e vídeos. O sistema oferece templates otimizados para conversão em múltiplos formatos (Feed 1:1, Feed 4:5, Stories 9:16) e permite animação de criativos estáticos em vídeos de até 10 segundos.
- **Inputs:** Imagens do usuário, Seleção de template (16+ estilos profissionais), Configurações de animação para vídeo, Formato de saída desejado (feed, stories, carousel), Informações de cadastro (nome, email, telefone, profissão, motivo de uso, mercado/segmento)
- **Outputs:** Criativos profissionais para Meta/Instagram em 3 formatos, Thumbnails otimizadas para YouTube, Carrosséis para Instagram, Vídeos animados de até 10 segundos, Efeitos de áudio gerados por IA, Arquivos PNG para download
- **Limitations:** Sistema baseado em créditos - usuários precisam comprar créditos para gerar conteúdo. Créditos nunca expiram. Versão gratuita oferece apenas 1 criação. Usuários sem créditos são bloqueados de criar. Vídeos limitados a 10 segundos. Marca d'água presente em planos não ilimitados.
- **Notes:** Plataforma monetizada via Kiwify com pagamento PIX instantâneo. Oferece bônus de +5 créditos na primeira compra. Possui painel administrativo completo para gerenciamento de usuários com filtros por origem (Meta Ads, Google Ads, Direto), nível de créditos e status de pagamento. Integração com rastreamento de conversões Google Ads (AW-17057010846, AW-1005048071). Utiliza Supabase/PostgreSQL como backend. Possui assistente IA integrado e sistema de suporte por chat. Ofertas especiais e upsells configurados. Sistema de histórico de criações e recargas disponível.

### Gerador de Imagens Criativas

- **Category:** image_generation
- **Confidence:** 0.75
- **URL:** https://criadordecriativos.app/app/generate-creative-images
- **Menu Path:** app > generate-creative-images
- **Description:** Ferramenta de geração de imagens criativas para uso em marketing e vendas, com foco em criativos para WhatsApp e vendas. Permite criar imagens publicitárias otimizadas para diferentes canais.
- **Inputs:** Tipo de criativo (ex: WhatsApp), Objetivo do criativo (ex: vender mais), Texto/mensagem do anúncio
- **Outputs:** Imagens criativas para anúncios, Criativos otimizados para WhatsApp, Imagens para campanhas de vendas
- **Limitations:** Página carregou parcialmente - detalhes completos dos inputs não visíveis. Parece ser um SPA que requer interação para revelar todos os campos.
- **Notes:** Relacionado a outras features de geração (thumbnail, carousel, vídeo). Possui integração com API específica 'generate-creative-images'. Interface chamada 'DesignApplication' sugere editor visual. Botões indicam foco em criativos para WhatsApp e vendas.

### Gerador de Criativos

- **Category:** image_generation
- **Confidence:** 0.75
- **URL:** https://criadordecriativos.app/app/generate-creatives
- **Menu Path:** app > generate-creatives
- **Description:** Ferramenta principal para geração de criativos publicitários. Baseado nos botões visíveis, parece focado em criar materiais de marketing para WhatsApp e vendas, possivelmente gerando imagens promocionais com chamadas para ação de telefone/WhatsApp.
- **Inputs:** seleção de tipo de criativo (ex: WhatsApp), objetivo do criativo (ex: vender mais)
- **Outputs:** imagens criativas para anúncios, materiais de marketing para WhatsApp
- **Limitations:** Página carregou com conteúdo limitado (SPA), detalhes completos dos inputs não visíveis
- **Notes:** Esta parece ser a feature central do produto baseado no nome da aplicação. Os botões 'Telefone (WhatsApp)' e 'Para vender mais por WhatsApp' sugerem templates ou presets focados em marketing via WhatsApp. Relacionado à UI 'DesignApplication' indica um editor visual. API própria identificada: generate-creatives

### Gerador de Thumbnail/Imagem de Capa

- **Category:** image_generation
- **Confidence:** 0.7
- **URL:** https://criadordecriativos.app/app/generate-thumbnail-image
- **Menu Path:** app > generate-thumbnail-image
- **Description:** Ferramenta para geração de imagens de thumbnail, provavelmente para vídeos do YouTube, redes sociais ou conteúdo digital. A página parece estar em estado inicial de carregamento ou requer interação para revelar o formulário completo.
- **Inputs:** Não foi possível identificar campos de entrada - página pode estar em carregamento SPA
- **Outputs:** Imagem de thumbnail gerada por IA
- **Limitations:** Página não carregou completamente durante a análise - campos de entrada não visíveis. Botões visíveis parecem ser relacionados a WhatsApp/vendas, possivelmente elementos de suporte ou marketing.
- **Notes:** Esta é uma das features principais do SaaS conforme indicado na lista de features (generate-thumbnail-image). A rota está dentro do /app indicando área autenticada. Os botões de WhatsApp visíveis podem ser widgets de suporte ao cliente. O contexto do bundle confirma que existe uma UI 'DesignApplication' associada a esta feature. Seria necessário interação adicional ou autenticação para ver o formulário completo de geração.

### Gerador de Imagens para Carrossel

- **Category:** image_generation
- **Confidence:** 0.7
- **URL:** https://criadordecriativos.app/app/generate-carousel-images
- **Menu Path:** app > generate-carousel-images
- **Description:** Ferramenta de geração de imagens otimizadas para formato carrossel, provavelmente para uso em redes sociais como Instagram ou anúncios. A página parece ter foco em vendas via WhatsApp, sugerindo que os carrosséis são voltados para marketing e conversão.
- **Inputs:** Texto ou tema do carrossel (presumido), Configurações de design (presumido), Número de slides do carrossel (presumido)
- **Outputs:** Conjunto de imagens em formato carrossel, Imagens otimizadas para redes sociais
- **Limitations:** Página carregou com conteúdo limitado - pode ser uma SPA que requer autenticação completa para exibir a interface. Detalhes específicos das funcionalidades não visíveis.
- **Notes:** Relacionado a outras features de geração de imagens (thumbnail, creative-images). A presença de botões 'Telefone (WhatsApp)' e 'Para vender mais por WhatsApp' indica foco em marketing para vendas via WhatsApp. Faz parte do componente DesignApplication. A API específica 'generate-carousel-images' confirma que é uma feature distinta de geração.

---

## video_generation

| Name | Confidence | Description | URL |
|------|-----------|-------------|-----|
| Gerador de Vídeo | 0.75 | Ferramenta de geração de vídeos com IA, aparentemente focada em criar conteúdo para vendas via Whats | [link](https://criadordecriativos.app/app/generate-video) |

### Gerador de Vídeo

- **Category:** video_generation
- **Confidence:** 0.75
- **URL:** https://criadordecriativos.app/app/generate-video
- **Menu Path:** app > generate-video
- **Description:** Ferramenta de geração de vídeos com IA, aparentemente focada em criar conteúdo para vendas via WhatsApp. Permite criar vídeos criativos para campanhas de marketing e vendas.
- **Inputs:** Telefone (WhatsApp), Informações do produto/serviço para vender
- **Outputs:** Vídeo criativo para WhatsApp, Vídeo de vendas
- **Limitations:** Detalhes específicos não visíveis na página capturada. Interface parece estar em carregamento ou requer autenticação completa.
- **Notes:** A página indica foco em vendas por WhatsApp com botões 'Telefone (WhatsApp)' e 'Para vender mais por WhatsApp'. Faz parte de um conjunto de ferramentas que inclui geração de thumbnails, carrosséis, áudio e imagens criativas. A rota está associada à API 'generate-video' e UI 'DesignApplication'.

---

