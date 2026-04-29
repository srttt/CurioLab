import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { getNote, notes } from "@/data/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default function NoteDetailPage({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);

  if (!note) notFound();

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/lab-notes"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to Lab Notes
      </Link>

      <header className="lab-grid mt-5 overflow-hidden rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="inline-flex items-center gap-2 rounded-full bg-citron/55 px-4 py-2 text-ink">
            <BookOpen size={15} aria-hidden="true" />
            Lab Note
          </span>
          <span className="rounded-full bg-white px-4 py-2">{note.category}</span>
          <span className="rounded-full bg-white px-4 py-2">{note.duration}</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{note.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-ink/72">{note.intro}</p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-5">
          {note.sections.map((section, index) => (
            <section className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-6 shadow-sm sm:p-7" key={section.heading}>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-black text-white">
                  {index + 1}
                </span>
                <h2 className="text-2xl font-black">{section.heading}</h2>
              </div>
              <div className="mt-4 space-y-4 text-lg leading-9 text-ink/76">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <p className="rounded-[1.5rem] bg-mist p-5 text-sm font-medium leading-7 text-ink/68">
            CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis.
          </p>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6">
          <section className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
            <div className="flex items-center gap-2 font-black">
              <Sparkles size={18} aria-hidden="true" />
              Quick takeaways
            </div>
            <ul className="mt-4 space-y-3">
              {note.takeaways.map((takeaway) => (
                <li className="rounded-2xl bg-mist px-4 py-3 text-sm font-medium leading-6 text-ink/72" key={takeaway}>
                  {takeaway}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5 shadow-sm">
            <div className="flex items-center gap-2 font-black">
              <Lightbulb size={18} aria-hidden="true" />
              Reflection prompt
            </div>
            <p className="mt-3 text-sm font-medium leading-7 text-ink/72">{note.reflectionPrompt}</p>
          </section>

          {note.related && note.related.length > 0 && (
            <section className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
              <h2 className="font-black">Try it on CurioLab</h2>
              <div className="mt-4 space-y-3">
                {note.related.map((item) => (
                  <Link
                    className="focus-ring flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-soft"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>

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
