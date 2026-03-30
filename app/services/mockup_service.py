"""
Mockup Service — Fase 1: stubs bem definidos.

Interface pronta para plugar qualquer provedor:
- Bannerbear
- Canva API
- Cloudinary (transformações)
- Pillow (processamento local)

Para ativar, implemente as funções abaixo com o provedor escolhido.
"""

from typing import List, Optional, Dict, Any
from app.core.logging import get_logger

logger = get_logger(__name__)


async def apply_branding(
    image_url: str,
    logo_url: Optional[str] = None,
    frame_url: Optional[str] = None,
    primary_color: str = "#1a1a2e",
    footer_text: Optional[str] = None,
) -> str:
    """
    Fase 1: retorna a imagem original sem modificação.
    Fase 2: aplica logo, moldura e rodapé na imagem.

    Returns: URL da imagem processada.
    """
    logger.info(f"[STUB] apply_branding | image={image_url} | logo={logo_url}")
    return image_url


async def upscale_image(image_url: str, scale: int = 2) -> str:
    """
    Fase 1: retorna imagem original.
    Fase 2: chama API de upscale (Real-ESRGAN via Replicate ou FAL.ai).
    """
    logger.info(f"[STUB] upscale_image | image={image_url} | scale={scale}x")
    return image_url


async def process_property_images(
    images: List[str],
    template: Optional[Dict[str, Any]] = None,
) -> List[str]:
    """
    Processa todas as imagens de um imóvel aplicando branding.
    Retorna lista de URLs das imagens processadas.
    """
    if not template:
        return images

    processed = []
    for img in images:
        result = await apply_branding(
            image_url=img,
            logo_url=template.get("logo_url"),
            frame_url=template.get("frame_url"),
            primary_color=template.get("primary_color", "#1a1a2e"),
            footer_text=template.get("footer_text"),
        )
        processed.append(result)

    return processed


async def generate_cover_image(
    title: str,
    price: Optional[str] = None,
    neighborhood: Optional[str] = None,
    template: Optional[Dict[str, Any]] = None,
) -> Optional[str]:
    """
    Fase 1: retorna None.
    Fase 2: gera capa com título, preço e bairro usando template.
    """
    logger.info(f"[STUB] generate_cover | title={title}")
    return None
