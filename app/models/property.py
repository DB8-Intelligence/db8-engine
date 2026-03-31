from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum
import uuid


class PropertyStatus(str, Enum):
    new = "new"
    processing = "processing"
    ready = "ready"
    approved = "approved"
    published = "published"
    error = "error"


class PropertySource(str, Enum):
    whatsapp = "whatsapp"
    instagram = "instagram"
    site = "site"
    manual = "manual"
    portal = "portal"


class Property(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str

    # Detalhes do imóvel
    property_type: Optional[str] = None       # apartamento, casa, sala, etc.
    property_standard: Optional[str] = None   # alto, medio, economico
    state: Optional[str] = None
    city: Optional[str] = None
    neighborhood: Optional[str] = None
    investment_value: Optional[float] = None
    built_area_m2: Optional[float] = None
    highlights: Optional[str] = None

    # IA
    caption_ai: Optional[str] = None
    title_ai: Optional[str] = None
    cta: Optional[str] = None
    hashtags: List[str] = []

    # Mídia
    images: List[str] = []

    # Origem
    sender_phone: Optional[str] = None
    source: PropertySource = PropertySource.manual
    template_id: Optional[str] = None
    workspace_id: Optional[str] = None
    status: PropertyStatus = PropertyStatus.new
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
