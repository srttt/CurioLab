import Link from "next/link";
import { notFound } from "next/navigation";
import { BiInline, BiText } from "@/components/BilingualText";
import GamePanel from "@/components/GamePanel";
import { getAssessment } from "@/data/assessments";
import { games, getGame } from "@/data/games";
import { getNote } from "@/data/notes";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);

  if (!game) notFound();

  const noteSlugByGame: Record<string, string> = {
    "reaction-speed": "yerkes-dodson-law",
    "memory-flip": "working-memory",
    "stroop-color": "stroop-effect"
  };
  const assessmentSlugByGame: Record<string, string> = {
    "reaction-speed": "stress-recovery-profile",
    "memory-flip": "decision-style-profile",
    "stroop-color": "stress-recovery-profile"
  };
  const note = getNote(noteSlugByGame[game.slug]);
  const assessment = getAssessment(assessmentSlugByGame[game.slug]);
  const nextGame = games.find((item) => item.slug !== game.slug) ?? games[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link className="focus-ring rounded-full text-sm font-bold text-ink/60 hover:text-ink" href="/games">
        <BiInline text="Back to Mind Games" />
      </Link>
      <div className="mt-5">
        <h1 className="text-4xl font-black">
          <BiText text={game.title} />
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/68">
          <BiText text={game.description} />
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text={game.duration} />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text={game.category} />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text="Playful challenge" />
          </span>
        </div>
      </div>
      <div className="mt-8">
        <GamePanel slug={game.slug} />
      </div>
      <aside className="mt-8 grid gap-4 sm:grid-cols-3">
        {note && (
          <div className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-5">
            <h2 className="font-black">
              <BiInline text="Related Lab Note" />
            </h2>
            <Link className="focus-ring mt-3 block rounded-2xl bg-mist p-4 font-bold" href={`/lab-notes/${note.slug}`}>
              <BiText text={note.title} />
            </Link>
          </div>
        )}
        {assessment && (
          <div className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-5">
            <h2 className="font-black">
              <BiInline text="Related Assessment" />
            </h2>
            <Link className="focus-ring mt-3 block rounded-2xl bg-mist p-4 font-bold" href={`/assessments/${assessment.slug}`}>
              <BiText text={assessment.title} />
            </Link>
          </div>
        )}
        <div className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-5">
          <h2 className="font-black">
            <BiInline text="Next Game" />
          </h2>
          <Link className="focus-ring mt-3 block rounded-2xl bg-mist p-4 font-bold" href={`/games/${nextGame.slug}`}>
            <BiText text={nextGame.title} />
          </Link>
        </div>
      </aside>
    </div>
  );
}
