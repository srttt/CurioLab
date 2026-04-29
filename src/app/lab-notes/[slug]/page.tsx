import Link from "next/link";
import { notFound } from "next/navigation";
import ContentCard from "@/components/ContentCard";
import { games } from "@/data/games";
import { getNote, notes } from "@/data/notes";
import { tests } from "@/data/tests";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default function NoteDetailPage({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);

  if (!note) notFound();

  const relatedTest = note.category === "Attention" ? tests[1] : tests.find((item) => item.category === note.category) ?? tests[0];
  const relatedGame = note.category === "Attention" ? games[2] : games[0];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link className="focus-ring rounded-full text-sm font-bold text-ink/60 hover:text-ink" href="/lab-notes">
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
        <div className="space-y-6 text-lg leading-9 text-ink/76">
          {note.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-mist p-4 text-sm font-medium text-ink/68">
          CurioLab notes are educational and playful. They are not medical advice or psychological diagnosis.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-black">Related experiments</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <ContentCard item={relatedTest} />
          <ContentCard item={relatedGame} />
        </div>
      </section>
    </article>
  );
}
