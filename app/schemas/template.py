from pydantic import BaseModel
from typing import Optional


class TemplateCreate(BaseModel):
    name: str
    logo_url: Optional[str] = None
    frame_url: Optional[str] = None
    primary_color: str = "#1a1a2e"
    secondary_color: str = "#e94560"
    footer_text: Optional[str] = None
    workspace_id: Optional[str] = None


class TemplateUpdate(BaseModel):
    name: Optional[str] = None
    logo_url: Optional[str] = None
    frame_url: Optional[str] = None
    primary_color: Optional[str] = None
    secondary_color: Optional[str] = None
    footer_text: Optional[str] = None


class TemplateResponse(BaseModel):
    id: str
    name: str
    logo_url: Optional[str]
    frame_url: Optional[str]
    primary_color: str
    secondary_color: str
    footer_text: Optional[str]
    workspace_id: Optional[str]
    created_at: str
