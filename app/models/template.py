from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid


class Template(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    logo_url: Optional[str] = None
    frame_url: Optional[str] = None
    primary_color: str = "#1a1a2e"
    secondary_color: str = "#e94560"
    footer_text: Optional[str] = None
    workspace_id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
