export type ContentType = "test" | "game" | "note";

export type ContentItem = {
  title: string;
  slug: string;
  category: string;
  duration: string;
  description: string;
  type: ContentType;
};

export type TestQuestion = {
  prompt: string;
  options: string[];
};

export type TestResult = {
  name: string;
  traits: string[];
  strength: string;
  watchOut: string;
};

export type Note = ContentItem & {
  intro: string;
  related?: {
    label: string;
    href: string;
  }[];
  sections: {
    heading: string;
    body: string;
  }[];
};
