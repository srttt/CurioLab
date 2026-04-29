import Link from "next/link";
import { RotateCcw } from "lucide-react";
import DimensionScoreBar from "@/components/DimensionScoreBar";
import RelatedNotes from "@/components/RelatedNotes";
import type { AssessmentItem, DimensionScore } from "@/types/assessment";

function describeScore(score: number) {
  if (score >= 75) return "a strong current signal";
  if (score >= 55) return "a moderate current signal";
  if (score >= 35) return "a quieter current signal";
  return "a low current signal";
}

export default function AssessmentResult({
  assessment,
  onRetake,
  scores
}: {
  assessment: AssessmentItem;
  onRetake: () => void;
  scores: DimensionScore[];
}) {
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  const strongest = sortedScores[0];
  const quietest = sortedScores[sortedScores.length - 1];

  const reflections = [
    `Notice where ${strongest.label} shows up as ${describeScore(strongest.score)} in your day-to-day choices.`,
    `Look at ${quietest.label} with curiosity. A lower score may reflect context, energy, support, or timing.`,
    "Repeat this assessment later if your mood, sleep, workload, or environment changes."
  ];

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">Your Profile</p>
      <h2 className="mt-2 text-3xl font-black">{assessment.title}</h2>

      <div className="mt-6 grid gap-4">
        {scores.map((score) => (
          <DimensionScoreBar
            description={score.description}
            key={score.id}
            label={score.label}
            score={score.score}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
          <h3 className="font-black">Profile Summary</h3>
          <p className="mt-3 leading-7 text-ink/70">
            Your answers suggest that {strongest.label} is the strongest signal in this snapshot, while{" "}
            {quietest.label} is quieter. This may reflect your current habits, environment, energy level, or the kind
            of situations you have been facing recently.
          </p>
        </section>

        <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
          <h3 className="font-black">Reflection</h3>
          <ul className="mt-3 space-y-2 leading-7 text-ink/70">
            {reflections.map((reflection) => (
              <li key={reflection}>- {reflection}</li>
            ))}
          </ul>
        </section>
      </div>

      <p className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
        This result is a snapshot, not a permanent label. Your answers may change with mood, sleep, stress, and
        context. {assessment.disclaimer}
      </p>

      <div className="mt-6">
        <RelatedNotes links={assessment.relatedNotes} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold transition hover:border-ink/35"
          onClick={onRetake}
          type="button"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Retake
        </button>
        <Link
          className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          href="/assessments"
        >
          Explore Assessments
        </Link>
      </div>
    </section>
  );
}
