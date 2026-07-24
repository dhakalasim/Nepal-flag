from pydantic import BaseModel


class StorySection(BaseModel):
    id: str
    heading: str
    body: str
    icon: str


class QuickFact(BaseModel):
    label: str
    value: str


class FlagStory(BaseModel):
    title: str
    tagline: str
    intro: str
    sections: list[StorySection]
    facts: list[QuickFact]
