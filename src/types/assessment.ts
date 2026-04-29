export type AssessmentCategory =
  | "Personality"
  | "Well-being"
  | "Stress"
  | "Social"
  | "Decision"
  | "Motivation";

export type RelatedLink = {
  label: string;
  href: string;
};

export type AssessmentDimension = {
  id: string;
  label: string;
  description: string;
};

export type AssessmentQuestion = {
  id: string;
  text: string;
  dimension: string;
  reverse?: boolean;
};

export type AssessmentItem = {
  title: string;
  slug: string;
  category: AssessmentCategory;
  duration: string;
  description: string;
  basis: string;
  disclaimer: string;
  type: "assessment";
  dimensions: AssessmentDimension[];
  questions: AssessmentQuestion[];
  relatedNotes?: RelatedLink[];
};

export type DimensionScore = {
  id: string;
  label: string;
  description: string;
  score: number;
};
