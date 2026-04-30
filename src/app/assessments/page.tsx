import AssessmentBrowser from "@/components/AssessmentBrowser";
import { BiInline, BiText } from "@/components/BilingualText";
import { assessmentCategories, assessments } from "@/data/assessments";

export default function AssessmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="lab-grid rounded-[2rem] border border-ink/10 bg-white/76 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
          <BiInline text="Self-assessment" />
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">
          <BiText text="CurioLab Assessments" />
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/68">
          <BiText
            text="Evidence-informed self-assessments for personality, well-being, stress, social energy, decision style, investing, and motivation."
            zh="基于证据启发的自我测评，涵盖人格、幸福感、压力、社交能量、决策风格、投资和动机。"
          />
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold text-ink/62">
          <span className="rounded-full bg-citron/45 px-4 py-2">{assessments.length} assessments / {assessments.length} 项测评</span>
          <span className="rounded-full bg-mist px-4 py-2">
            <BiInline text="5-point scale" />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text="Dimensional profiles" />
          </span>
        </div>
      </section>

      <AssessmentBrowser assessments={assessments} categories={assessmentCategories} />
    </div>
  );
}
