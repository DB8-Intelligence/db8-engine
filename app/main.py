from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.core.config import settings
from app.core.logging import setup_logging, get_logger
from app.routes import health, properties, templates, publish, ai

setup_logging()
logger = get_logger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info(f"🚀 {settings.app_name} v{settings.app_version} starting [{settings.app_env}]")
    yield
    logger.info("DB8 Engine shutting down.")


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="Motor de Inteligência Imobiliária — DB8 Intelligence",
    docs_url="/docs" if settings.debug else None,
    redoc_url="/redoc" if settings.debug else None,
    lifespan=lifespan,
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(health.router)
app.include_router(properties.router)
app.include_router(templates.router)
app.include_router(publish.router)
app.include_router(ai.router)


@app.get("/")
async def root():
    return {
        "app": settings.app_name,
        "version": settings.app_version,
        "docs": "/docs" if settings.debug else "disabled in production",
        "endpoints": [
            "GET  /health",
            "POST /properties",
            "GET  /properties",
            "GET  /properties/{id}",
            "PATCH /properties/{id}",
            "POST /properties/{id}/generate-caption",
            "POST /properties/{id}/publish",
            "POST /properties/{id}/approve",
            "POST /properties/generate-caption",
            "GET  /templates",
            "POST /templates",
            "GET  /templates/{id}",
            "PATCH /templates/{id}",
            "DELETE /templates/{id}",
            "POST /ai/imob/first-contact",
            "POST /ai/imob/followup",
            "POST /ai/imob/relatorio-semanal",
        ],
    }
