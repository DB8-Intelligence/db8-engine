-- ================================================================
-- ImobCreator — properties e templates
-- Usado pelo db8-engine (FastAPI) via supabase_db.py
-- Projeto Supabase: xhfiyukhjzwhqbacuyxq (DB8 IMOBILIARIA)
-- ================================================================

-- ----------------------------------------------------------------
-- PROPERTIES — imóveis recebidos para geração de criativo
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS properties (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  description   TEXT NOT NULL,

  -- IA
  title_ai      TEXT,
  caption_ai    TEXT,
  cta           TEXT,
  hashtags      TEXT[]  DEFAULT '{}',

  -- Mídia
  images        TEXT[]  DEFAULT '{}',

  -- Origem
  sender_phone  TEXT,
  source        TEXT NOT NULL DEFAULT 'manual'
                  CHECK (source IN ('whatsapp','instagram','site','manual','portal')),

  -- Relacionamentos
  template_id   UUID,
  workspace_id  TEXT,

  -- Status flow: new → processing → ready → approved → published | error
  status        TEXT NOT NULL DEFAULT 'new'
                  CHECK (status IN ('new','processing','ready','approved','published','error')),

  -- Timestamps
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_properties_status       ON properties(status);
CREATE INDEX idx_properties_workspace    ON properties(workspace_id);
CREATE INDEX idx_properties_source       ON properties(source);
CREATE INDEX idx_properties_created_at   ON properties(created_at DESC);

CREATE OR REPLACE FUNCTION update_properties_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

CREATE TRIGGER trg_properties_updated_at
  BEFORE UPDATE ON properties
  FOR EACH ROW EXECUTE FUNCTION update_properties_updated_at();

-- ----------------------------------------------------------------
-- BRAND_TEMPLATES — templates de marca por workspace
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS brand_templates (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  logo_url        TEXT,
  frame_url       TEXT,
  primary_color   TEXT NOT NULL DEFAULT '#1a1a2e',
  secondary_color TEXT NOT NULL DEFAULT '#e94560',
  footer_text     TEXT,
  workspace_id    TEXT,

  -- Timestamps
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_brand_templates_workspace ON brand_templates(workspace_id);

CREATE OR REPLACE FUNCTION update_brand_templates_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

CREATE TRIGGER trg_brand_templates_updated_at
  BEFORE UPDATE ON brand_templates
  FOR EACH ROW EXECUTE FUNCTION update_brand_templates_updated_at();