from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # App
    app_name: str = "DB8 Intelligence Engine"
    app_version: str = "1.0.0"
    app_env: str = "development"
    debug: bool = False

    # CORS
    allowed_origins: List[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "https://db8intelligence.com.br",
        "https://www.db8intelligence.com.br",
    ]

    # Auth
    api_secret_key: str = ""

    # OpenAI
    openai_api_key: str = ""
    openai_model: str = "gpt-4o-mini"

    # Supabase (DB8 IMOBILIARIA — xhfiyukhjzwhqbacuyxq)
    supabase_url: str = ""
    supabase_service_role_key: str = ""

    # WhatsApp Cloud API
    whatsapp_token: str = ""
    whatsapp_phone_number_id: str = ""

    # Instagram Graph API
    instagram_access_token: str = ""
    instagram_account_id: str = ""

    # n8n
    n8n_webhook_url: str = ""
    n8n_webhook_token: str = ""

    # Douglas (owner)
    owner_phone: str = "5571999733883"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = False


settings = Settings()
