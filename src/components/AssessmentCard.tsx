import Link from "next/link";
import { ArrowRight, ClipboardList } from "lucide-react";
import type { AssessmentItem } from "@/types/assessment";

export default function AssessmentCard({ assessment }: { assessment: AssessmentItem }) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
        <span className="inline-flex items-center gap-1 rounded-full bg-citron/45 px-3 py-1">
          <ClipboardList size={13} aria-hidden="true" />
          Assessment
        </span>
        <span className="rounded-full bg-mist px-3 py-1 text-ink/68">{assessment.category}</span>
        <span className="rounded-full bg-white px-3 py-1 text-ink/58">{assessment.duration}</span>
      </div>
      <h3 className="text-xl font-black leading-snug">{assessment.title}</h3>
      <p className="mt-3 leading-7 text-ink/66">{assessment.description}</p>
      <p className="mt-4 rounded-2xl bg-mist px-4 py-3 text-sm font-medium leading-6 text-ink/64">
        <span className="font-black text-ink/76">Basis:</span> {assessment.basis}
      </p>
      <Link
        className="focus-ring mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold transition hover:border-ink/35"
        href={`/assessments/${assessment.slug}`}
      >
        Start Assessment
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}
