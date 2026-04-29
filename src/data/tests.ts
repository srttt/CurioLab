import type { ContentItem, TestQuestion, TestResult } from "@/types/content";

export const tests: ContentItem[] = [
  {
    title: "Mood Color Test",
    slug: "mood-color",
    category: "Mood",
    duration: "2 min",
    description: "Find the color of your current mood.",
    type: "test"
  },
  {
    title: "Thinking Style Test",
    slug: "thinking-style",
    category: "Personality",
    duration: "3 min",
    description: "Discover how your mind approaches problems and ideas.",
    type: "test"
  },
  {
    title: "Social Battery Test",
    slug: "social-battery",
    category: "Social",
    duration: "2 min",
    description: "Check how much social energy you have right now.",
    type: "test"
  },
  {
    title: "Decision Style Test",
    slug: "decision-style",
    category: "Decision",
    duration: "3 min",
    description: "Learn how you usually make choices under uncertainty.",
    type: "test"
  },
  {
    title: "Rest Type Test",
    slug: "rest-type",
    category: "Mood",
    duration: "2 min",
    description: "Find out what kind of rest your mind may need today.",
    type: "test"
  }
];

export const testQuestions: TestQuestion[] = [
  {
    prompt: "When your day gets messy, what do you reach for first?",
    options: ["A quiet corner", "A quick plan", "A friendly voice", "A surprising detour"]
  },
  {
    prompt: "Which tiny scene feels most like your current mind?",
    options: ["A soft lamp", "A clean whiteboard", "A busy cafe", "A strange museum"]
  },
  {
    prompt: "A friend asks for advice. You usually begin with...",
    options: ["Listening carefully", "Mapping the problem", "Checking feelings", "Offering a bold idea"]
  },
  {
    prompt: "What kind of progress feels satisfying?",
    options: ["Slow and steady", "Clear and measurable", "Shared with others", "Unexpected and creative"]
  },
  {
    prompt: "What drains you fastest?",
    options: ["Too much noise", "Unclear goals", "Social guesswork", "Repeating the same thing"]
  },
  {
    prompt: "Pick a tool for your inner lab.",
    options: ["Notebook", "Timer", "Signal light", "Kaleidoscope"]
  }
];

export const testResults: TestResult[] = [
  {
    name: "The Quiet Strategist",
    traits: ["Observant", "Independent", "Long-term thinker"],
    strength: "You see patterns before others do.",
    watchOut: "You may overthink before acting."
  },
  {
    name: "The Warm Decoder",
    traits: ["Empathic", "Curious", "Socially aware"],
    strength: "You notice the emotional weather in a room.",
    watchOut: "You may absorb more than you need to carry."
  },
  {
    name: "The Bright Experimenter",
    traits: ["Playful", "Flexible", "Idea-rich"],
    strength: "You can turn uncertainty into a question worth exploring.",
    watchOut: "You may jump forward before finishing the current step."
  }
];

export function getTest(slug: string) {
  return tests.find((item) => item.slug === slug);
}
