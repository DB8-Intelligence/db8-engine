from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from app.schemas.template import TemplateCreate, TemplateUpdate
from app.services import template_service

router = APIRouter(prefix="/templates", tags=["Templates"])


@router.post("", status_code=201)
async def create_template(body: TemplateCreate):
    return template_service.create_template(body)


@router.get("")
async def list_templates(workspace_id: Optional[str] = Query(None)):
    return template_service.list_templates(workspace_id=workspace_id)


@router.get("/{template_id}")
async def get_template(template_id: str):
    tmpl = template_service.get_template(template_id)
    if not tmpl:
        raise HTTPException(status_code=404, detail="Template not found")
    return tmpl


@router.patch("/{template_id}")
async def update_template(template_id: str, body: TemplateUpdate):
    tmpl = template_service.update_template(template_id, body)
    if not tmpl:
        raise HTTPException(status_code=404, detail="Template not found")
    return tmpl


@router.delete("/{template_id}", status_code=204)
async def delete_template(template_id: str):
    deleted = template_service.delete_template(template_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Template not found")
