import Link from "next/link";
import { ArrowRight, BrainCircuit, Gamepad2, NotebookText } from "lucide-react";
import { BiInline, BiText } from "@/components/BilingualText";

const icons = {
  assessments: BrainCircuit,
  games: Gamepad2,
  notes: NotebookText
};

type SectionCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: keyof typeof icons;
};

export default function SectionCard({ title, description, href, cta, icon }: SectionCardProps) {
  const Icon = icons[icon];

  return (
    <article className="rounded-[1.75rem] border border-ink/10 bg-white/78 p-6 shadow-soft">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/70 text-ink">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-black">
        <BiText text={title} />
      </h2>
      <p className="mt-3 min-h-20 leading-7 text-ink/68">
        <BiText text={description} />
      </p>
      <Link
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white transition hover:bg-ink/90"
        href={href}
      >
        <BiInline text={cta} />
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
