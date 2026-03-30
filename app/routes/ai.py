"""
Rotas de IA usadas diretamente pelo n8n e openclaw.
Endpoints limpos para geração de copy, follow-up e relatórios.
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, Dict, Any
from app.services.ai_service import (
    generate_property_caption,
    generate_followup_message,
    generate_weekly_report,
)

router = APIRouter(prefix="/ai", tags=["AI"])


class FirstContactRequest(BaseModel):
    nome: str
    imovel: Optional[str] = None
    bairro: Optional[str] = None
    valor: Optional[str] = None
    origem: str = "site"


class FollowupRequest(BaseModel):
    nome: str
    imovel: Optional[str] = None
    status: str = "novo"
    tentativa: int = 1


@router.post("/imob/first-contact")
async def first_contact(body: FirstContactRequest):
    """Gera primeira mensagem de contato para um lead."""
    # Monta descrição do imóvel para o prompt
    desc_parts = []
    if body.imovel:  desc_parts.append(f"imóvel: {body.imovel}")
    if body.bairro:  desc_parts.append(f"bairro: {body.bairro}")
    if body.valor:   desc_parts.append(f"valor: {body.valor}")
    desc = ", ".join(desc_parts) if desc_parts else "imóvel não especificado"

    result = await generate_property_caption(
        title=f"Lead via {body.origem}",
        description=f"Lead {body.nome} interessado em {desc}",
    )

    # Formata como mensagem de WhatsApp
    message = (
        f"Olá {body.nome}! Aqui é o Douglas Bonanza, corretor de imóveis em Salvador/BA.\n\n"
        f"{result['cta']}\n\n"
        f"Pode me contar mais sobre o que está buscando?"
    )

    return {"message": message}


@router.post("/imob/followup")
async def followup(body: FollowupRequest):
    """Gera mensagem de follow-up personalizada."""
    message = await generate_followup_message(
        nome=body.nome,
        imovel=body.imovel,
        status=body.status,
        tentativa=body.tentativa,
    )
    return {"message": message}


@router.post("/imob/relatorio-semanal")
async def relatorio_semanal(body: Dict[str, Any]):
    """Gera resumo semanal para WhatsApp."""
    relatorio = await generate_weekly_report(body)
    return {"relatorio": relatorio}
