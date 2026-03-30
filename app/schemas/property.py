from pydantic import BaseModel
from typing import Optional, List
from app.models.property import PropertyStatus, PropertySource


class PropertyCreate(BaseModel):
    title: str
    description: str
    images: List[str] = []
    sender_phone: Optional[str] = None
    source: PropertySource = PropertySource.manual
    template_id: Optional[str] = None
    workspace_id: Optional[str] = None


class PropertyUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    caption_ai: Optional[str] = None
    title_ai: Optional[str] = None
    cta: Optional[str] = None
    hashtags: Optional[List[str]] = None
    status: Optional[PropertyStatus] = None
    template_id: Optional[str] = None


class PropertyResponse(BaseModel):
    id: str
    title: str
    description: str
    caption_ai: Optional[str]
    title_ai: Optional[str]
    cta: Optional[str]
    hashtags: List[str]
    images: List[str]
    sender_phone: Optional[str]
    source: str
    template_id: Optional[str]
    workspace_id: Optional[str]
    status: str
    created_at: str
    updated_at: str


class CaptionResponse(BaseModel):
    property_id: str
    title_ai: str
    caption_ai: str
    cta: str
    hashtags: List[str]
