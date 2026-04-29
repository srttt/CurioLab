import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { notFound } from "next/navigation";
import AssessmentRunner from "@/components/AssessmentRunner";
import { BiInline, BiText } from "@/components/BilingualText";
import RelatedNotes from "@/components/RelatedNotes";
import { assessments, getAssessment } from "@/data/assessments";

export function generateStaticParams() {
  return assessments.map((assessment) => ({ slug: assessment.slug }));
}

export default function AssessmentDetailPage({ params }: { params: { slug: string } }) {
  const assessment = getAssessment(params.slug);

  if (!assessment) notFound();

  const isBigFive = assessment.slug === "big-five-personality-profile";
  const isStressRecovery = assessment.slug === "stress-recovery-profile";
  const isDecisionStyle = assessment.slug === "decision-style-profile";
  const isWellBeingCheck = assessment.slug === "well-being-check";
  const isSocialEnergy = assessment.slug === "social-energy-profile";
  const isMotivationNeeds = assessment.slug === "motivation-needs-profile";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/assessments"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        <BiInline text="Back to Assessments" />
      </Link>

      <header className="lab-grid mt-5 rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="inline-flex items-center gap-2 rounded-full bg-citron/55 px-4 py-2 text-ink">
            <ClipboardList size={15} aria-hidden="true" />
            <BiInline text="Assessment" />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text={assessment.category} />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text={assessment.duration} />
          </span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
          <BiText text={assessment.title} />
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-ink/72">
          <BiText text={assessment.description} />
        </p>
      </header>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
          <h2 className="text-xl font-black">
            <BiInline text="What this measures" />
          </h2>
          {isBigFive ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="This assessment measures five broad trait tendencies: openness, conscientiousness, extraversion, agreeableness, and emotional sensitivity." />
            </p>
          ) : isStressRecovery ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="This assessment measures five current stress and recovery signals: perceived pressure, recovery capacity, emotional load, physical fatigue, and sense of control." />
            </p>
          ) : isDecisionStyle ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="This assessment measures five decision tendencies: analytical deliberation, intuitive confidence, loss sensitivity, information load sensitivity, and decision closure." />
            </p>
          ) : isWellBeingCheck ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="This assessment measures five recent well-being signals: positive mood, calmness, energy, interest and engagement, and daily functioning." />
            </p>
          ) : isSocialEnergy ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="This assessment measures five social energy tendencies: social initiation, group stimulation tolerance, deep conversation preference, boundary awareness, and recovery rhythm." />
            </p>
          ) : isMotivationNeeds ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="This assessment measures five motivation support conditions: autonomy, competence, relatedness, purpose alignment, and progress momentum." />
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {assessment.dimensions.map((dimension) => (
                <div className="rounded-2xl bg-mist px-4 py-3" key={dimension.id}>
                  <h3 className="font-black">
                    <BiText text={dimension.label} />
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink/62">
                    <BiText text={dimension.description} />
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
          <h2 className="text-xl font-black">
            <BiInline text="How it works" />
          </h2>
          {isBigFive ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree. Your result shows a dimensional trait profile, not a personality type." />
            </p>
          ) : isStressRecovery ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree. Your result shows where current load and recovery resources are stronger or quieter." />
            </p>
          ) : isDecisionStyle ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree. Your result shows a profile across five dimensions rather than a single decision type." />
            </p>
          ) : isWellBeingCheck ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree. Your result shows a current profile across five dimensions, not a diagnosis or overall life score." />
            </p>
          ) : isSocialEnergy ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree. Your result shows a social energy profile across five dimensions rather than an introvert or extravert label." />
            </p>
          ) : isMotivationNeeds ? (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/68">
              <BiText text="You will answer 25 short statements using a 5-point scale from Strongly disagree to Strongly agree. Your result shows which motivation supports feel stronger or quieter right now." />
            </p>
          ) : (
            <div className="mt-4 space-y-3 text-sm font-medium leading-7 text-ink/68">
              <p>{assessment.questions.length} statements using a 5-point Likert scale. / {assessment.questions.length} 个陈述，使用 5 点 Likert 量表。</p>
              <p>
                <BiText text="Each statement belongs to one dimension. Some items are reverse-scored to reduce one-direction answering." />
              </p>
              <p>
                <BiText text="Dimension averages are converted to a 0 to 100 profile score." />
              </p>
            </div>
          )}
        </div>

        <div className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5 shadow-sm">
          <h2 className="text-xl font-black">
            <BiInline text="Important note" />
          </h2>
          <p className="mt-4 text-sm font-medium leading-7 text-ink/70">
            <BiText text={assessment.disclaimer} />
          </p>
          {!isBigFive && !isStressRecovery && !isDecisionStyle && !isWellBeingCheck && !isSocialEnergy && !isMotivationNeeds && (
            <p className="mt-4 text-sm font-medium leading-7 text-ink/70">
              <BiText text="Your result is a snapshot, not a permanent label." />
            </p>
          )}
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white/76 p-5 shadow-sm">
        <h2 className="text-xl font-black">
          <BiInline text="Science behind this" />
        </h2>
        <p className="mt-3 leading-7 text-ink/68">
          <BiText text={assessment.basis} />
        </p>
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
