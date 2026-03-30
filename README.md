# DB8 Engine

**Motor de Inteligência Imobiliária — DB8 Intelligence**
Backend FastAPI para o ecossistema db8intelligence.com.br

---

## Stack

- **Python 3.11+**
- **FastAPI** — framework web async
- **Pydantic v2** — validação e settings
- **OpenAI** — geração de copy imobiliária
- **Uvicorn** — servidor ASGI
- **Railway** — deploy em produção

---

## Executar localmente

```bash
# 1. Clonar e entrar no projeto
git clone https://github.com/DB8-Intelligence/db8-engine
cd db8-engine

# 2. Criar ambiente virtual
python -m venv .venv
source .venv/bin/activate        # Linux/Mac
.venv\Scripts\activate           # Windows

# 3. Instalar dependências
pip install -r requirements.txt

# 4. Configurar variáveis de ambiente
cp .env.example .env
# Edite .env com suas chaves

# 5. Rodar o servidor
uvicorn app.main:app --reload --port 8000
```

Acesse: http://localhost:8000
Documentação: http://localhost:8000/docs (apenas com DEBUG=true)

---

## Endpoints principais

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/health` | Status da aplicação |
| POST | `/properties` | Cadastrar imóvel |
| GET | `/properties` | Listar imóveis |
| GET | `/properties/{id}` | Detalhe do imóvel |
| PATCH | `/properties/{id}` | Atualizar imóvel |
| POST | `/properties/{id}/generate-caption` | Gerar legenda com IA |
| POST | `/properties/generate-caption` | Geração direta (imob-creator-studio) |
| POST | `/properties/{id}/publish` | Publicar no Instagram |
| POST | `/properties/{id}/approve` | Aprovar imóvel |
| GET | `/templates` | Listar templates corporativos |
| POST | `/templates` | Criar template |
| POST | `/ai/imob/first-contact` | Primeira mensagem para lead |
| POST | `/ai/imob/followup` | Follow-up de lead |
| POST | `/ai/imob/relatorio-semanal` | Relatório semanal |

---

## Deploy no Railway

1. Conecte o repositório GitHub ao Railway
2. Configure as variáveis de ambiente (copie do `.env.example`)
3. Railway detecta o `Procfile` automaticamente
4. O serviço sobe em `https://api.db8intelligence.com.br`

---

## Arquitetura

```
app/
├── main.py              # Entrypoint FastAPI
├── core/
│   ├── config.py        # Settings via pydantic-settings
│   └── logging.py       # Configuração de logs
├── models/              # Entidades do domínio
├── schemas/             # Schemas de request/response
├── routes/              # Endpoints HTTP
├── services/            # Lógica de negócio
└── storage/
    └── memory_db.py     # Adapter de storage (troca por PostgreSQL na Fase 2)
```

### Fase 1 (atual)
- Storage em memória (Dict)
- Publicação simulada (stub)
- Mockup stub pronto para integração

### Fase 2
- Trocar `memory_db.py` por `supabase_db.py`
- Implementar `_publish_instagram()` com Meta Graph API v21.0
- Implementar `apply_branding()` com Bannerbear/Cloudinary

---

## Integração com imob-creator-studio

O frontend (imob-creator-studio) chama este backend via Supabase Edge Function `inbox-proxy`.

Fluxo:
```
Frontend → inbox-proxy (Edge Function) → POST /properties → IA → Instagram
```

---

## Módulos futuros (roadmap)

- `app/routes/valuation.py` — DB8 Valuation Engine
- `app/routes/crm.py` — CRM inteligente com follow-up
- `app/routes/whatsapp.py` — Receber imóveis via WhatsApp
- `app/services/supabase_db.py` — Persistência real com PostgreSQL
