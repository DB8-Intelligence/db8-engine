-- ================================================================
-- Migration 003 — Adicionar campos de imóvel à tabela properties
-- Campos que o frontend (imob-creator-studio) envia no PATCH
-- e que antes eram ignorados pelo backend.
-- ================================================================

ALTER TABLE properties
  ADD COLUMN IF NOT EXISTS property_type     TEXT,
  ADD COLUMN IF NOT EXISTS property_standard TEXT,
  ADD COLUMN IF NOT EXISTS state             TEXT,
  ADD COLUMN IF NOT EXISTS city              TEXT,
  ADD COLUMN IF NOT EXISTS neighborhood      TEXT,
  ADD COLUMN IF NOT EXISTS investment_value  NUMERIC,
  ADD COLUMN IF NOT EXISTS built_area_m2     NUMERIC,
  ADD COLUMN IF NOT EXISTS highlights        TEXT;