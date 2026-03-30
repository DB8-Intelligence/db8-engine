from typing import List, Optional, Dict, Any
from datetime import datetime
from app.models.property import Property, PropertyStatus
from app.schemas.property import PropertyCreate, PropertyUpdate
from app.storage.memory_db import properties_db
from app.services.ai_service import generate_property_caption
from app.core.logging import get_logger

logger = get_logger(__name__)


def _to_response(p: Dict[str, Any]) -> Dict[str, Any]:
    p = dict(p)
    if isinstance(p.get("created_at"), datetime):
        p["created_at"] = p["created_at"].isoformat()
    if isinstance(p.get("updated_at"), datetime):
        p["updated_at"] = p["updated_at"].isoformat()
    return p


def create_property(data: PropertyCreate) -> Dict[str, Any]:
    prop = Property(**data.model_dump())
    record = prop.model_dump()
    record["created_at"] = record["created_at"].isoformat()
    record["updated_at"] = record["updated_at"].isoformat()
    saved = properties_db.create(record)
    logger.info(f"Property created: {saved['id']} | source={saved['source']}")
    return saved


def get_property(property_id: str) -> Optional[Dict[str, Any]]:
    return properties_db.get(property_id)


def list_properties(
    status: Optional[str] = None,
    workspace_id: Optional[str] = None,
) -> List[Dict[str, Any]]:
    filters: Dict[str, Any] = {}
    if status:
        filters["status"] = status
    if workspace_id:
        filters["workspace_id"] = workspace_id
    return properties_db.list(filters or None)


def update_property(property_id: str, data: PropertyUpdate) -> Optional[Dict[str, Any]]:
    updates = {k: v for k, v in data.model_dump().items() if v is not None}
    if not updates:
        return properties_db.get(property_id)
    return properties_db.update(property_id, updates)


async def generate_caption(property_id: str) -> Optional[Dict[str, Any]]:
    prop = properties_db.get(property_id)
    if not prop:
        return None

    # Marca como processando
    properties_db.update(property_id, {"status": PropertyStatus.processing})

    try:
        result = await generate_property_caption(
            title=prop["title"],
            description=prop["description"],
            images_count=len(prop.get("images", [])),
        )

        properties_db.update(property_id, {
            "title_ai":   result["title_ai"],
            "caption_ai": result["caption_ai"],
            "cta":        result["cta"],
            "hashtags":   result["hashtags"],
            "status":     PropertyStatus.ready,
        })

        logger.info(f"Caption generated for property {property_id}")
        return {**properties_db.get(property_id), **result}

    except Exception as e:
        properties_db.update(property_id, {"status": PropertyStatus.error})
        logger.error(f"Caption generation failed for {property_id}: {e}")
        raise
