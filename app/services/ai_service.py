"""
AI Service — Geração de copy imobiliária via OpenAI.
Centraliza todos os prompts e chamadas à API.
"""

import json
from typing import Dict, Any, Optional
from openai import AsyncOpenAI
from app.core.config import settings
from app.core.logging import get_logger

logger = get_logger(__name__)

client = AsyncOpenAI(api_key=settings.openai_api_key)


SYSTEM_PROMPT = """Você é um especialista em marketing imobiliário digital no Brasil.
Cria textos persuasivos, profissionais e com foco em conversão para Instagram e portais imobiliários.
Tom: moderno, direto, aspiracional. Nunca use clichês como "oportunidade única" ou "não perca".
Sempre inclua elementos de prova social, urgência real e benefício emocional."""


async def generate_property_caption(
    title: str,
    description: str,
    images_count: int = 0,
    standard: str = "standard",
    custom_prompt: Optional[str] = None,
) -> Dict[str, Any]:
    """
    Gera title_ai, caption_ai, cta e hashtags para um imóvel.
    Retorna dict com os 4 campos.
    """

    user_prompt = custom_prompt or f"""
Gere um copy completo para Instagram para o seguinte imóvel:

Título: {title}
Descrição: {description}
Padrão: {standard}
Imagens: {images_count} foto(s)

Retorne APENAS um JSON válido com esta estrutura exata:
{{
  "title_ai": "título melhorado (máx 80 chars)",
  "caption_ai": "legenda completa para Instagram (3-5 parágrafos, use quebras de linha, emojis com moderação)",
  "cta": "chamada para ação direta (ex: 'Chame no WhatsApp: (71) 99973-3883')",
  "hashtags": ["lista", "de", "15", "hashtags", "relevantes", "sem", "o", "simbolo"]
}}
"""

    try:
        response = await client.chat.completions.create(
            model=settings.openai_model,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user",   "content": user_prompt},
            ],
            temperature=0.7,
            max_tokens=1000,
            response_format={"type": "json_object"},
        )

        raw = response.choices[0].message.content
        result = json.loads(raw)

        # Garante que hashtags é lista de strings sem #
        hashtags = result.get("hashtags", [])
        hashtags = [h.lstrip("#") for h in hashtags]

        return {
            "title_ai":   result.get("title_ai", title),
            "caption_ai": result.get("caption_ai", ""),
            "cta":        result.get("cta", "Entre em contato: (71) 99973-3883"),
            "hashtags":   hashtags,
        }

    except Exception as e:
        logger.error(f"OpenAI error: {e}")
        # Fallback para não travar o fluxo
        return {
            "title_ai":   title,
            "caption_ai": description,
            "cta":        "Entre em contato pelo WhatsApp: (71) 99973-3883",
            "hashtags":   ["imoveis", "salvador", "imobiliaria", "db8intelligence"],
        }


async def generate_followup_message(
    nome: str,
    imovel: Optional[str] = None,
    status: str = "novo",
    tentativa: int = 1,
) -> str:
    """Gera mensagem de follow-up personalizada para WhatsApp."""

    prompt = f"""Você é o Max, assistente do corretor Douglas Bonanza (Salvador/BA, CRECI-BA ativo).

Gere uma mensagem de follow-up para WhatsApp para o lead:
- Nome: {nome}
- Imóvel de interesse: {imovel or 'não especificado'}
- Status no funil: {status}
- Esta é a tentativa número {tentativa}

Regras absolutas:
- Máx 3 linhas
- Tom: amigável, direto, sem pressão
- Nunca use clichês ou maiúsculas excessivas
- Inclua o número (71) 99973-3883 apenas na última tentativa
- Não use placeholders como [nome], [imóvel], etc

Retorne apenas o texto da mensagem, nada mais."""

    try:
        response = await client.chat.completions.create(
            model=settings.openai_model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8,
            max_tokens=200,
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        logger.error(f"OpenAI followup error: {e}")
        return f"Olá {nome}! Douglas Bonanza aqui. Ainda tem interesse{' em ' + imovel if imovel else ''}? 📲"


async def generate_weekly_report(data: Dict[str, Any]) -> str:
    """Gera resumo semanal inteligente para WhatsApp."""

    prompt = f"""Você é Max, assistente do corretor Douglas Bonanza.

Com base nos dados abaixo, gere um relatório semanal para WhatsApp.

Regras:
- Máx 25 linhas
- Texto limpo (sem markdown pesado)
- Use emojis com moderação: ✅ ⚠️ 🔥 📊
- Termine com 3 prioridades concretas para a próxima semana

DADOS:
{json.dumps(data, ensure_ascii=False, indent=2)}

Estrutura:
1. Resumo executivo (2 linhas)
2. Leads novos + origens
3. Funil: avanços e fechamentos
4. Top 3 prioridades"""

    try:
        response = await client.chat.completions.create(
            model=settings.openai_model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.6,
            max_tokens=800,
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        logger.error(f"OpenAI report error: {e}")
        return "Erro ao gerar relatório. Verifique os dados manualmente."
