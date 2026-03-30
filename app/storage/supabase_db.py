"""
Storage adapter — Supabase PostgreSQL (Fase 2).

Implementa a mesma interface do MemoryRepository:
  create / get / list / update / delete / count

Troca transparente: os services importam deste módulo
em vez de memory_db.py — nenhuma outra linha muda.
"""

from typing import Dict, List, Optional, Any
from supabase import create_client, Client
from app.core.config import settings
from app.core.logging import get_logger

logger = get_logger(__name__)

_client: Optional[Client] = None


def _get_client() -> Client:
    global _client
    if _client is None:
        _client = create_client(settings.supabase_url, settings.supabase_service_role_key)
    return _client


class SupabaseRepository:
    """
    Adapter genérico para uma tabela do Supabase.

    Parâmetros
    ----------
    table : str
        Nome da tabela no Supabase.
    id_col : str
        Nome da coluna de chave primária (padrão: "id").
    """

    def __init__(self, table: str, id_col: str = "id"):
        self._table = table
        self._id = id_col

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------

    def _db(self):
        return _get_client().table(self._table)

    # ------------------------------------------------------------------
    # Interface pública — mesma assinatura do MemoryRepository
    # ------------------------------------------------------------------

    def create(self, record: Dict[str, Any]) -> Dict[str, Any]:
        resp = self._db().insert(record).execute()
        row = resp.data[0]
        logger.debug(f"[{self._table}] created {row[self._id]}")
        return row

    def get(self, record_id: str) -> Optional[Dict[str, Any]]:
        resp = self._db().select("*").eq(self._id, record_id).limit(1).execute()
        return resp.data[0] if resp.data else None

    def list(self, filters: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        query = self._db().select("*").order("created_at", desc=True)

        if filters:
            for key, value in filters.items():
                if value is not None:
                    query = query.eq(key, value)

        resp = query.execute()
        return resp.data or []

    def update(self, record_id: str, updates: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        # Remove campos que não devem ser sobrescritos via update parcial
        updates.pop(self._id, None)
        updates.pop("created_at", None)

        resp = (
            self._db()
            .update(updates)
            .eq(self._id, record_id)
            .execute()
        )
        return resp.data[0] if resp.data else None

    def delete(self, record_id: str) -> bool:
        resp = self._db().delete().eq(self._id, record_id).execute()
        return bool(resp.data)

    def count(self, filters: Optional[Dict[str, Any]] = None) -> int:
        return len(self.list(filters))


# ------------------------------------------------------------------
# Instâncias globais — mesmos nomes exportados pelo memory_db.py
# ------------------------------------------------------------------
properties_db = SupabaseRepository("properties")
templates_db  = SupabaseRepository("brand_templates")
publish_db    = SupabaseRepository("social_posts")