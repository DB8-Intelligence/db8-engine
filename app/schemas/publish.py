from pydantic import BaseModel
from typing import Optional
from app.models.publish import PublishChannel


class PublishRequest(BaseModel):
    property_id: str
    channel: PublishChannel = PublishChannel.instagram
    caption_override: Optional[str] = None


class PublishResponse(BaseModel):
    id: str
    property_id: str
    channel: str
    status: str
    external_post_id: Optional[str]
    message: str
    created_at: str
