import Link from "next/link";
import { assessments } from "@/data/assessments";

const oldSlugMap: Record<string, string> = {
  "mood-color": "well-being-check",
  "thinking-style": "big-five-personality-profile",
  "social-battery": "social-energy-profile",
  "decision-style": "decision-style-profile",
  "rest-type": "stress-recovery-profile"
};

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = new Set([...assessments.map((assessment) => assessment.slug), ...Object.keys(oldSlugMap)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default function TestDetailRedirectPage({ params }: { params: { slug: string } }) {
  const targetSlug = oldSlugMap[params.slug] ?? params.slug;
  const href = `/assessments/${targetSlug}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <div className="rounded-[2rem] border border-ink/10 bg-white/78 p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">Redirecting</p>
        <h1 className="mt-2 text-4xl font-black">This test moved</h1>
        <p className="mt-4 text-lg leading-8 text-ink/68">
          CurioLab Tests have been upgraded into CurioLab Assessments.
        </p>
        <Link
          className="focus-ring mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          href={href}
        >
          Open Assessment
        </Link>
      </div>
    </div>
  );
}
