from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.db import story_collection
from app.models import FlagStory

app = FastAPI(title="Nepal Flag Story API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200", "http://localhost:4300"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health() -> dict:
    return {"status": "ok"}


@app.get("/api/story", response_model=FlagStory)
async def get_story() -> FlagStory:
    doc = await story_collection.find_one({}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Story not seeded yet. Run backend/seed.py")
    return FlagStory(**doc)
