import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getNote, notes } from "@/data/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default function NoteDetailPage({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);

  if (!note) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/lab-notes"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to Lab Notes
      </Link>

      <header className="mt-5">
        <h1 className="text-4xl font-black leading-tight">{note.title}</h1>
        <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="rounded-full bg-white px-4 py-2">{note.category}</span>
          <span className="rounded-full bg-white px-4 py-2">{note.duration}</span>
        </div>
        <p className="mt-6 text-xl leading-9 text-ink/72">{note.intro}</p>
      </header>

      <div className="mt-8 rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <div className="space-y-8">
          {note.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black">{section.heading}</h2>
              <p className="mt-3 text-lg leading-9 text-ink/76">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-mist p-4 text-sm font-medium text-ink/68">
          CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis.
        </p>
      </div>

      {note.related && note.related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-black">Try it on CurioLab</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {note.related.map((item) => (
              <Link
                className="focus-ring flex items-center justify-between gap-4 rounded-[1.25rem] border border-ink/10 bg-white/76 p-5 font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
                href={item.href}
                key={item.href}
              >
                <span>{item.label}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10">
        <Link
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold transition hover:border-ink/35"
          href="/lab-notes"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Back to all Lab Notes
        </Link>
      </section>
    </article>
  );
}
