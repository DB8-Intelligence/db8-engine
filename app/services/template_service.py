from typing import List, Optional, Dict, Any
from app.models.template import Template
from app.schemas.template import TemplateCreate, TemplateUpdate
from app.storage.memory_db import templates_db
from app.core.logging import get_logger

logger = get_logger(__name__)


def create_template(data: TemplateCreate) -> Dict[str, Any]:
    template = Template(**data.model_dump())
    record = template.model_dump()
    record["created_at"] = record["created_at"].isoformat()
    saved = templates_db.create(record)
    logger.info(f"Template created: {saved['id']} | name={saved['name']}")
    return saved


def get_template(template_id: str) -> Optional[Dict[str, Any]]:
    return templates_db.get(template_id)


def list_templates(workspace_id: Optional[str] = None) -> List[Dict[str, Any]]:
    filters = {"workspace_id": workspace_id} if workspace_id else None
    return templates_db.list(filters)


def update_template(template_id: str, data: TemplateUpdate) -> Optional[Dict[str, Any]]:
    updates = {k: v for k, v in data.model_dump().items() if v is not None}
    if not updates:
        return templates_db.get(template_id)
    return templates_db.update(template_id, updates)


def delete_template(template_id: str) -> bool:
    return templates_db.delete(template_id)
