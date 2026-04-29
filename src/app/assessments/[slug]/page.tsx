import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { notFound } from "next/navigation";
import AssessmentRunner from "@/components/AssessmentRunner";
import RelatedNotes from "@/components/RelatedNotes";
import { assessments, getAssessment } from "@/data/assessments";

export function generateStaticParams() {
  return assessments.map((assessment) => ({ slug: assessment.slug }));
}

export default function AssessmentDetailPage({ params }: { params: { slug: string } }) {
  const assessment = getAssessment(params.slug);

  if (!assessment) notFound();

  const isDecisionStyle = assessment.slug === "decision-style-profile";
  const isWellBeingCheck = assessment.slug === "well-being-check";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/assessments"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to Assessments
      </Link>

      <header className="lab-grid mt-5 rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="inline-flex items-center gap-2 rounded-full bg-citron/55 px-4 py-2 text-ink">
            <ClipboardList size={15} aria-hidden="true" />
            Assessment
          </span>
          <span className="rounded-full bg-white px-4 py-2">{assessment.category}</span>
          <span className="rounded-full bg-white px-4 py-2">{assessment.duration}</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{assessment.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-ink/72">{assessment.description}</p>
      </header>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
          <h2 className="text-xl font-black">What this measures</h2>
          {isDecisionStyle ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              This assessment measures five decision tendencies: analytical deliberation, intuitive confidence, loss
              sensitivity, information load sensitivity, and decision closure.
            </p>
          ) : isWellBeingCheck ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              This assessment measures five recent well-being signals: positive mood, calmness, energy, interest and
              engagement, and daily functioning.
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {assessment.dimensions.map((dimension) => (
                <div className="rounded-2xl bg-mist px-4 py-3" key={dimension.id}>
                  <h3 className="font-black">{dimension.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/62">{dimension.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
          <h2 className="text-xl font-black">How it works</h2>
          {isDecisionStyle ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree.
              Your result shows a profile across five dimensions rather than a single decision type.
            </p>
          ) : isWellBeingCheck ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree.
              Your result shows a current profile across five dimensions, not a diagnosis or overall life score.
            </p>
          ) : (
            <div className="mt-4 space-y-3 text-sm font-medium leading-7 text-ink/68">
              <p>{assessment.questions.length} statements using a 5-point Likert scale.</p>
              <p>
                Each statement belongs to one dimension. Some items are reverse-scored to reduce one-direction
                answering.
              </p>
              <p>Dimension averages are converted to a 0 to 100 profile score.</p>
            </div>
          )}
        </div>

        <div className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5 shadow-sm">
          <h2 className="text-xl font-black">Important note</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-ink/70">{assessment.disclaimer}</p>
          {!isDecisionStyle && !isWellBeingCheck && (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/70">
              Your result is a snapshot, not a permanent label.
            </p>
          )}
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white/76 p-5 shadow-sm">
        <h2 className="text-xl font-black">Science behind this</h2>
        <p className="mt-3 leading-7 text-ink/68">{assessment.basis}</p>
      </section>

      <div className="mt-8">
        <RelatedNotes links={assessment.relatedNotes} />
      </div>

      <div className="mt-8">
        <AssessmentRunner assessment={assessment} />
      </div>
    </div>
  );
}
