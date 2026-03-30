-- ================================================================
-- DB8 IMOBILIARIA — Schema Principal
-- DB8 Interprice / Douglas Bonanza
-- Projeto Supabase: xhfiyukhjzwhqbacuyxq
-- ================================================================

-- ----------------------------------------------------------------
-- LEADS — CRM de prospects
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS leads (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Dados do lead
  nome              TEXT NOT NULL,
  telefone          TEXT NOT NULL,
  email             TEXT,
  imovel_interesse  TEXT,
  bairro            TEXT,
  cidade            TEXT DEFAULT 'Salvador',
  valor_interesse   TEXT,
  tipo_busca        TEXT CHECK (tipo_busca IN ('compra','locacao','lancamento','investimento')),

  -- Origem
  origem            TEXT NOT NULL CHECK (origem IN (
                      'zap_imoveis','viva_real','olx','instagram',
                      'indicacao','site','whatsapp_direto','outro'
                    )),
  mensagem_original TEXT,

  -- Qualificação
  score             TEXT NOT NULL DEFAULT 'morno' CHECK (score IN ('quente','morno','frio')),
  status            TEXT NOT NULL DEFAULT 'novo' CHECK (status IN (
                      'novo','primeiro_contato','qualificado','imovel_enviado',
                      'visita_agendada','visitou','proposta','negociacao','fechado','perdido'
                    )),

  -- Mensagens
  primeira_mensagem TEXT,
  ultimo_followup   TEXT,

  -- Timestamps
  ultimo_contato    TIMESTAMPTZ DEFAULT NOW(),
  proxima_acao      TIMESTAMPTZ,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_leads_status     ON leads(status);
CREATE INDEX idx_leads_score      ON leads(score);
CREATE INDEX idx_leads_origem     ON leads(origem);
CREATE INDEX idx_leads_contato    ON leads(ultimo_contato);
CREATE INDEX idx_leads_proxima    ON leads(proxima_acao);
CREATE INDEX idx_leads_telefone   ON leads(telefone);

-- Trigger: updated_at automático
CREATE OR REPLACE FUNCTION update_leads_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

CREATE TRIGGER trg_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_leads_updated_at();

-- ----------------------------------------------------------------
-- LEAD_FOLLOWUPS — Histórico de mensagens enviadas
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS lead_followups (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id    UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  mensagem   TEXT NOT NULL,
  canal      TEXT DEFAULT 'whatsapp' CHECK (canal IN ('whatsapp','instagram','email')),
  enviado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_followups_lead ON lead_followups(lead_id);

-- ----------------------------------------------------------------
-- IMOVEIS — Carteira de imóveis disponíveis
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS imoveis (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo       TEXT UNIQUE NOT NULL,               -- ex: APT-001, CASA-LN-003

  -- Classificação
  tipo         TEXT NOT NULL CHECK (tipo IN (
                 'apartamento','casa','cobertura','sala','loja',
                 'casa_praia','galpao','terreno','studio'
               )),
  situacao     TEXT NOT NULL CHECK (situacao IN ('venda','locacao','lancamento')),
  status       TEXT NOT NULL DEFAULT 'disponivel' CHECK (status IN (
                 'disponivel','reservado','vendido','alugado','inativo'
               )),

  -- Localização
  bairro       TEXT NOT NULL,
  cidade       TEXT NOT NULL DEFAULT 'Salvador',
  endereco     TEXT,
  regiao       TEXT CHECK (regiao IN ('salvador','lauro_de_freitas','litoral_norte','outro')),

  -- Características
  metragem     NUMERIC,
  quartos      INTEGER,
  suites       INTEGER DEFAULT 0,
  vagas        INTEGER DEFAULT 0,
  andar        TEXT,

  -- Valores
  valor        NUMERIC NOT NULL,
  condominio   NUMERIC DEFAULT 0,
  iptu_anual   NUMERIC DEFAULT 0,

  -- Detalhes
  diferenciais TEXT[],                             -- array de strings
  observacoes  TEXT,
  fotos        TEXT[],                             -- array de URLs

  -- Timestamps
  data_venda   DATE,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_imoveis_status   ON imoveis(status);
CREATE INDEX idx_imoveis_situacao ON imoveis(situacao);
CREATE INDEX idx_imoveis_bairro   ON imoveis(bairro);
CREATE INDEX idx_imoveis_valor    ON imoveis(valor);

CREATE OR REPLACE FUNCTION update_imoveis_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

CREATE TRIGGER trg_imoveis_updated_at
  BEFORE UPDATE ON imoveis
  FOR EACH ROW EXECUTE FUNCTION update_imoveis_updated_at();

-- ----------------------------------------------------------------
-- IMOVEL_LEADS — Relacionamento imóvel × leads interessados
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS imovel_leads (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  imovel_id  UUID NOT NULL REFERENCES imoveis(id) ON DELETE CASCADE,
  lead_id    UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  data       TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(imovel_id, lead_id)
);

-- ----------------------------------------------------------------
-- SOCIAL_POSTS — Posts agendados / publicados no Instagram
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS social_posts (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  caption      TEXT NOT NULL,
  media_urls   TEXT[],
  post_type    TEXT DEFAULT 'feed' CHECK (post_type IN ('feed','reel','story','carousel')),
  platform     TEXT DEFAULT 'instagram',
  ig_account_id TEXT,
  status       TEXT NOT NULL DEFAULT 'rascunho' CHECK (status IN (
                 'rascunho','agendado','publicando','publicado','erro'
               )),
  scheduled_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  ig_post_id   TEXT,
  error_message TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_posts_status       ON social_posts(status);
CREATE INDEX idx_posts_scheduled    ON social_posts(scheduled_at);
CREATE INDEX idx_posts_platform     ON social_posts(platform);

CREATE OR REPLACE FUNCTION update_social_posts_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

CREATE TRIGGER trg_social_posts_updated_at
  BEFORE UPDATE ON social_posts
  FOR EACH ROW EXECUTE FUNCTION update_social_posts_updated_at();

-- ----------------------------------------------------------------
-- AGENT_LOGS — Registro de ações automáticas
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS agent_logs (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  payload    JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_agent_logs_event ON agent_logs(event_type);
CREATE INDEX idx_agent_logs_date  ON agent_logs(created_at);
