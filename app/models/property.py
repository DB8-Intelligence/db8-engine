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
    caption_ai: Optional[str] = None
    title_ai: Optional[str] = None
    cta: Optional[str] = None
    hashtags: List[str] = []
    images: List[str] = []
    sender_phone: Optional[str] = None
    source: PropertySource = PropertySource.manual
    template_id: Optional[str] = None
    workspace_id: Optional[str] = None
    status: PropertyStatus = PropertyStatus.new
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
