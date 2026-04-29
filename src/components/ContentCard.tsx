import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ContentItem } from "@/types/content";

const typeLabel = {
  assessment: "Assessment",
  game: "Game",
  note: "Lab Note"
};

const ctaLabel = {
  assessment: "Start Assessment",
  game: "Play",
  note: "Read"
};

const basePath = {
  assessment: "/assessments",
  game: "/games",
  note: "/lab-notes"
};

export default function ContentCard({ item }: { item: ContentItem }) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
        <span className="rounded-full bg-citron/45 px-3 py-1">{typeLabel[item.type]}</span>
        <span className="rounded-full bg-mist px-3 py-1 text-ink/68">{item.category}</span>
        <span className="rounded-full bg-white px-3 py-1 text-ink/58">{item.duration}</span>
      </div>
      <h3 className="text-xl font-black leading-snug">{item.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-ink/66">{item.description}</p>
      <Link
        className="focus-ring mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold transition hover:border-ink/35"
        href={`${basePath[item.type]}/${item.slug}`}
      >
        {ctaLabel[item.type]}
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}
