import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Lightbulb, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { BiInline, BiText } from "@/components/BilingualText";
import { getNote, notes } from "@/data/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default function NoteDetailPage({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);

  if (!note) notFound();

  return (
    <article className="mx-auto max-w-6xl overflow-x-hidden px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/lab-notes"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        <BiInline text="Back to Lab Notes" />
      </Link>

      <header className="lab-grid mt-5 min-w-0 w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:max-w-none sm:p-8">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="inline-flex items-center gap-2 rounded-full bg-citron/55 px-4 py-2 text-ink">
            <BookOpen size={15} aria-hidden="true" />
            <BiInline text="Lab Note" />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text={note.category} />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text={note.duration} />
          </span>
        </div>
        <h1 className="mt-6 max-w-[18rem] break-words text-3xl font-black leading-tight [overflow-wrap:anywhere] sm:max-w-4xl sm:text-5xl">
          <BiText text={note.title} />
        </h1>
        <p className="mt-5 max-w-[18rem] break-words text-lg leading-8 text-ink/72 sm:max-w-3xl sm:text-xl sm:leading-9">
          <BiText text={note.intro} />
        </p>
      </header>

      <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="min-w-0 space-y-5">
          {note.sections.map((section, index) => (
            <section
              className="min-w-0 w-full max-w-[calc(100vw-2rem)] rounded-[1.5rem] border border-ink/10 bg-white/78 p-6 shadow-sm sm:max-w-none sm:p-7"
              key={section.heading}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-black text-white">
                  {index + 1}
                </span>
                <h2 className="min-w-0 max-w-[14rem] break-words text-xl font-black leading-tight [overflow-wrap:anywhere] sm:max-w-none sm:text-2xl">
                  <BiText text={section.heading} />
                </h2>
              </div>
              <div className="mt-4 max-w-[17rem] space-y-4 break-words text-base leading-8 text-ink/76 sm:max-w-none sm:text-lg sm:leading-9">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>
                    <BiText text={paragraph} />
                  </p>
                ))}
              </div>
              {section.links && section.links.length > 0 && (
                <div className="mt-6 max-w-[17rem] border-t border-ink/10 pt-5 sm:max-w-none">
                  <h3 className="text-sm font-black uppercase tracking-wide text-ink/52">
                    <BiInline text="Learning links" />
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <a
                        className="focus-ring inline-flex max-w-full min-w-0 items-center gap-2 whitespace-normal break-words rounded-full border border-ink/12 bg-white px-4 py-2 text-left text-sm font-bold text-ink/72 transition hover:border-ink/28 hover:text-ink"
                        href={link.href}
                        key={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BiInline text={link.label} />
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}

          <p className="min-w-0 w-full max-w-[calc(100vw-2rem)] rounded-[1.5rem] bg-mist p-5 text-sm font-medium leading-7 text-ink/68 sm:max-w-none">
            <BiText text="CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis." />
          </p>
        </div>

        <aside className="min-w-0 space-y-5 lg:sticky lg:top-6">
          <section className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
            <div className="flex items-center gap-2 font-black">
              <Sparkles size={18} aria-hidden="true" />
              <BiInline text="Quick takeaways" />
            </div>
            <ul className="mt-4 space-y-3">
              {note.takeaways.map((takeaway) => (
                <li className="rounded-2xl bg-mist px-4 py-3 text-sm font-medium leading-6 text-ink/72" key={takeaway}>
                  <BiText text={takeaway} />
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5 shadow-sm">
            <div className="flex items-center gap-2 font-black">
              <Lightbulb size={18} aria-hidden="true" />
              <BiInline text="Reflection prompt" />
            </div>
            <p className="mt-3 text-sm font-medium leading-7 text-ink/72">
              <BiText text={note.reflectionPrompt} />
            </p>
          </section>

          {note.related && note.related.length > 0 && (
            <section className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm">
              <h2 className="font-black">
                <BiInline text="Try it on CurioLab" />
              </h2>
              <div className="mt-4 space-y-3">
                {note.related.map((item) => (
                  <Link
                    className="focus-ring flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-soft"
                    href={item.href}
                    key={item.href}
                  >
                    <span>
                      <BiText text={item.label} />
                    </span>
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
          <BiInline text="Back to all Lab Notes" />
        </Link>
      </section>
    </article>
  );
}
