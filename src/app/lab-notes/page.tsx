import LabNotesBrowser from "@/components/LabNotesBrowser";
import { noteCategories, notes } from "@/data/notes";

export default function LabNotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="lab-grid rounded-[2rem] border border-ink/10 bg-white/76 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">Short reads</p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">Lab Notes</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/68">
          Short psychology notes that explain the ideas behind CurioLab tests and games.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold text-ink/62">
          <span className="rounded-full bg-citron/45 px-4 py-2">{notes.length} models</span>
          <span className="rounded-full bg-mist px-4 py-2">Playful learning</span>
          <span className="rounded-full bg-white px-4 py-2">No diagnosis</span>
        </div>
      </section>
      <LabNotesBrowser categories={noteCategories} notes={notes} />
    </div>
  );
}
