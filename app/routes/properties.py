from fastapi import APIRouter, HTTPException, Query
from typing import Optional, List
from app.schemas.property import PropertyCreate, PropertyUpdate, PropertyResponse, CaptionResponse
from app.services import property_service

router = APIRouter(prefix="/properties", tags=["Properties"])


@router.post("", status_code=201)
async def create_property(body: PropertyCreate):
    prop = property_service.create_property(body)
    return prop


@router.get("")
async def list_properties(
    status: Optional[str] = Query(None, description="Filtrar por status"),
    workspace_id: Optional[str] = Query(None),
):
    return property_service.list_properties(status=status, workspace_id=workspace_id)


@router.get("/{property_id}")
async def get_property(property_id: str):
    prop = property_service.get_property(property_id)
    if not prop:
        raise HTTPException(status_code=404, detail="Property not found")
    return prop


@router.patch("/{property_id}")
async def update_property(property_id: str, body: PropertyUpdate):
    prop = property_service.update_property(property_id, body)
    if not prop:
        raise HTTPException(status_code=404, detail="Property not found")
    return prop


@router.post("/{property_id}/generate-caption")
async def generate_caption(property_id: str):
    prop = property_service.get_property(property_id)
    if not prop:
        raise HTTPException(status_code=404, detail="Property not found")

    result = await property_service.generate_caption(property_id)
    if not result:
        raise HTTPException(status_code=500, detail="Caption generation failed")

    return {
        "property_id": property_id,
        "title_ai":   result.get("title_ai"),
        "caption_ai": result.get("caption_ai"),
        "cta":        result.get("cta"),
        "hashtags":   result.get("hashtags", []),
    }


# Alias para compatibilidade com imob-creator-studio
@router.post("/generate-caption")
async def generate_caption_direct(body: dict):
    """
    Endpoint direto consumido pela edge function generate-caption do imob-creator-studio.
    Aceita: { title, description, images_count, standard, custom_prompt }
    """
    from app.services.ai_service import generate_property_caption

    result = await generate_property_caption(
        title=body.get("title", ""),
        description=body.get("description", ""),
        images_count=body.get("images_count", 0),
        standard=body.get("standard", "standard"),
        custom_prompt=body.get("custom_prompt"),
    )
    return result
