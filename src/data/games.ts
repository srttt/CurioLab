import type { ContentItem } from "@/types/content";

export const games: ContentItem[] = [
  {
    title: "Reaction Speed Test",
    slug: "reaction-speed",
    category: "Reaction",
    duration: "1 min",
    description: "Tap as fast as you can when the screen changes.",
    type: "game"
  },
  {
    title: "Memory Flip Game",
    slug: "memory-flip",
    category: "Memory",
    duration: "2 min",
    description: "Match hidden cards and test your visual memory.",
    type: "game"
  },
  {
    title: "Stroop Color Challenge",
    slug: "stroop-color",
    category: "Attention",
    duration: "1 min",
    description: "Ignore the word. Choose the color.",
    type: "game"
  }
];

export function getGame(slug: string) {
  return games.find((item) => item.slug === slug);
}
