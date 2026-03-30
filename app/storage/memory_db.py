"""
Storage adapter — padrão Repository.

Fase 1: armazenamento em memória (Dict).
Fase 2: trocar por PostgreSQL/Supabase sem mudar nada nas routes/services.

Para migrar para Supabase, basta criar supabase_db.py implementando
a mesma interface (get, create, update, delete, list).
"""

from typing import Dict, List, Optional, Any
from datetime import datetime
import copy


class MemoryRepository:
    def __init__(self):
        self._store: Dict[str, Dict[str, Any]] = {}

    def create(self, record: Dict[str, Any]) -> Dict[str, Any]:
        record_id = record["id"]
        self._store[record_id] = copy.deepcopy(record)
        return copy.deepcopy(record)

    def get(self, record_id: str) -> Optional[Dict[str, Any]]:
        record = self._store.get(record_id)
        return copy.deepcopy(record) if record else None

    def list(self, filters: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        records = list(self._store.values())

        if filters:
            for key, value in filters.items():
                if value is not None:
                    records = [r for r in records if r.get(key) == value]

        # Ordena por created_at descrescente
        records.sort(key=lambda r: r.get("created_at", ""), reverse=True)
        return [copy.deepcopy(r) for r in records]

    def update(self, record_id: str, updates: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        if record_id not in self._store:
            return None

        self._store[record_id].update(updates)
        self._store[record_id]["updated_at"] = datetime.utcnow().isoformat()
        return copy.deepcopy(self._store[record_id])

    def delete(self, record_id: str) -> bool:
        if record_id in self._store:
            del self._store[record_id]
            return True
        return False

    def count(self, filters: Optional[Dict[str, Any]] = None) -> int:
        return len(self.list(filters))


# Instâncias globais — uma por entidade
properties_db  = MemoryRepository()
templates_db   = MemoryRepository()
publish_db     = MemoryRepository()
