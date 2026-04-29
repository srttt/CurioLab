export type ContentType = "assessment" | "game" | "note";

export type ContentItem = {
  title: string;
  slug: string;
  category: string;
  duration: string;
  description: string;
  type: ContentType;
};

export type Note = ContentItem & {
  intro: string;
  takeaways: string[];
  reflectionPrompt: string;
  related?: {
    label: string;
    href: string;
  }[];
  sections: {
    heading: string;
    body: string[];
  }[];
};
