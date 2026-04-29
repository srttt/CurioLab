import MemoryFlipGame from "@/components/games/MemoryFlipGame";
import ReactionSpeedGame from "@/components/games/ReactionSpeedGame";
import StroopColorGame from "@/components/games/StroopColorGame";

export default function GamePanel({ slug }: { slug: string }) {
  if (slug === "reaction-speed") return <ReactionSpeedGame />;
  if (slug === "memory-flip") return <MemoryFlipGame />;
  if (slug === "stroop-color") return <StroopColorGame />;
  return null;
}
