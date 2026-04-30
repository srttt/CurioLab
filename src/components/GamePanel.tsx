import MemoryFlipGame from "@/components/games/MemoryFlipGame";
import ReactionSpeedGame from "@/components/games/ReactionSpeedGame";
import ReactionOrb3DGame from "@/components/games/ReactionOrb3DGame";
import SkyLaneRunner3DGame from "@/components/games/SkyLaneRunner3DGame";
import StroopColorGame from "@/components/games/StroopColorGame";

export default function GamePanel({ slug }: { slug: string }) {
  if (slug === "reaction-speed") return <ReactionSpeedGame />;
  if (slug === "reaction-orb-3d") return <ReactionOrb3DGame />;
  if (slug === "sky-lane-runner") return <SkyLaneRunner3DGame />;
  if (slug === "memory-flip") return <MemoryFlipGame />;
  if (slug === "stroop-color") return <StroopColorGame />;
  return null;
}
