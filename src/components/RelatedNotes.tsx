import Link from "next/link";
import { ArrowRight, NotebookText } from "lucide-react";
import { BiInline, BiText } from "@/components/BilingualText";
import type { RelatedLink } from "@/types/assessment";

export default function RelatedNotes({
  links,
  title = "Related Lab Notes"
}: {
  links?: RelatedLink[];
  title?: string;
}) {
  if (!links || links.length === 0) return null;

  return (
    <section className="rounded-[1.5rem] border border-ink/10 bg-white/76 p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <NotebookText size={18} aria-hidden="true" />
        <h2 className="font-black">
          <BiInline text={title} />
        </h2>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            className="focus-ring flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-soft"
            href={link.href}
            key={link.href}
          >
            <span>
              <BiText text={link.label} />
            </span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
