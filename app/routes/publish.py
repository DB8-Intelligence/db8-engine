from fastapi import APIRouter, HTTPException
from app.schemas.publish import PublishRequest
from app.services import publish_service
from app.services.property_service import get_property, update_property
from app.schemas.property import PropertyUpdate
from app.models.property import PropertyStatus

router = APIRouter(prefix="/properties", tags=["Publish"])


@router.post("/{property_id}/publish")
async def publish_property(property_id: str, body: PublishRequest = None):
    prop = get_property(property_id)
    if not prop:
        raise HTTPException(status_code=404, detail="Property not found")

    if not body:
        body = PublishRequest(property_id=property_id)
    else:
        body.property_id = property_id

    result = await publish_service.publish_property(body)
    if not result:
        raise HTTPException(status_code=500, detail="Publish failed")

    return {
        "id":               result["id"],
        "property_id":      result["property_id"],
        "channel":          result["channel"],
        "status":           result["status"],
        "external_post_id": result.get("external_post_id"),
        "message":          f"Property {result['status']} on {result['channel']}",
        "created_at":       result["created_at"],
    }


@router.patch("/{property_id}/approve")
async def approve_property(property_id: str):
    prop = get_property(property_id)
    if not prop:
        raise HTTPException(status_code=404, detail="Property not found")

    updated = update_property(property_id, PropertyUpdate(status=PropertyStatus.approved))
    return {"id": property_id, "status": updated["status"], "message": "Property approved"}
