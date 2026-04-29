import LabNotesBrowser from "@/components/LabNotesBrowser";
import { noteCategories, notes } from "@/data/notes";

export default function LabNotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">Short reads</p>
      <h1 className="mt-2 text-4xl font-black">Lab Notes</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/68">
        Short psychology notes that explain the ideas behind CurioLab tests and games.
      </p>
      <LabNotesBrowser categories={noteCategories} notes={notes} />
    </div>
  );
}
