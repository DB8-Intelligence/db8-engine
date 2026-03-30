from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum
import uuid


class PublishChannel(str, Enum):
    instagram = "instagram"
    facebook = "facebook"
    whatsapp = "whatsapp"


class PublishStatus(str, Enum):
    pending = "pending"
    processing = "processing"
    published = "published"
    failed = "failed"


class PublishRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    property_id: str
    channel: PublishChannel
    status: PublishStatus = PublishStatus.pending
    external_post_id: Optional[str] = None
    error_message: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
