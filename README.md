# Nepal-flag

The story of Nepal's flag — the only non-quadrilateral national flag in the world — served through a small full-stack app.

- **Frontend:** Angular (standalone components, signals) — `frontend/`
- **Backend:** Python, FastAPI — `backend/`
- **Database:** MongoDB — `nepal_flag.story` collection

## Run it

### 1. MongoDB

Make sure a local MongoDB instance is running (e.g. `brew services start mongodb-community`).

### 2. Backend

```bash
cd backend
python3.12 -m venv .venv
./.venv/bin/pip install -r requirements.txt
./.venv/bin/python seed.py          # seeds the story into MongoDB
./.venv/bin/uvicorn app.main:app --port 8001 --reload
```

API: `http://localhost:8001/api/story`

### 3. Frontend

```bash
cd frontend
npm install
npx ng serve --port 4300
```

App: `http://localhost:4300`

If you use different ports, update `API_URL` in `frontend/src/app/story/flag-story.service.ts` and `allow_origins` in `backend/app/main.py`.
