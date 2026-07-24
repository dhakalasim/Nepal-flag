export interface StorySection {
  id: string;
  heading: string;
  body: string;
  icon: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface FlagStory {
  title: string;
  tagline: string;
  intro: string;
  sections: StorySection[];
  facts: QuickFact[];
}
