import asyncio

from app.db import story_collection
from app.story_data import STORY_DOCUMENT


async def seed() -> None:
    await story_collection.delete_many({})
    await story_collection.insert_one(dict(STORY_DOCUMENT))
    print("Seeded Nepal flag story into MongoDB.")


if __name__ == "__main__":
    asyncio.run(seed())
