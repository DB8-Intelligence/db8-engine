"""
Publish Service — Fase 1: simulação do fluxo de publicação.
Fase 2: integração real com Instagram Graph API e Facebook.

Para ativar a publicação real, implemente _publish_instagram()
com chamadas à Meta Graph API v21.0.
"""

from typing import Dict, Any, Optional
from app.models.publish import PublishRecord, PublishChannel, PublishStatus
from app.models.property import PropertyStatus
from app.schemas.publish import PublishRequest
from app.storage.supabase_db import publish_db, properties_db
from app.core.logging import get_logger

logger = get_logger(__name__)


async def publish_property(request: PublishRequest) -> Dict[str, Any]:
    prop = properties_db.get(request.property_id)
    if not prop:
        return None

    record = PublishRecord(
        property_id=request.property_id,
        channel=request.channel,
    )
    data = record.model_dump()
    data["created_at"] = data["created_at"].isoformat()

    # Fase 1: simula publicação
    if request.channel == PublishChannel.instagram:
        result = await _publish_instagram(prop, request.caption_override)
    else:
        result = {"status": PublishStatus.published, "external_post_id": f"sim_{record.id[:8]}"}

    data["status"] = result["status"]
    data["external_post_id"] = result.get("external_post_id")

    publish_db.create(data)

    # Atualiza status do imóvel
    new_status = (
        PropertyStatus.published
        if result["status"] == PublishStatus.published
        else PropertyStatus.error
    )
    properties_db.update(request.property_id, {"status": new_status})

    logger.info(f"Publish {result['status']} | property={request.property_id} | channel={request.channel}")
    return data


async def _publish_instagram(prop: Dict[str, Any], caption_override: Optional[str]) -> Dict[str, Any]:
    """
    TODO Fase 2: chamar Meta Graph API v21.0
    POST https://graph.facebook.com/v21.0/{ig-user-id}/media
    POST https://graph.facebook.com/v21.0/{ig-user-id}/media_publish

    Por agora, simula sucesso.
    """
    caption = caption_override or prop.get("caption_ai") or prop.get("description", "")
    images  = prop.get("images", [])

    logger.info(f"[SIMULATED] Instagram publish | images={len(images)} | caption_len={len(caption)}")

    return {
        "status": PublishStatus.published,
        "external_post_id": f"ig_sim_{prop['id'][:8]}",
    }
