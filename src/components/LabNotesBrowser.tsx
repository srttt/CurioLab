"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Note } from "@/types/content";

export default function LabNotesBrowser({
  categories,
  notes
}: {
  categories: readonly string[];
  notes: Note[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const visibleNotes =
    selectedCategory === "All" ? notes : notes.filter((note) => note.category === selectedCategory);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter lab notes by category">
        {categories.map((category) => {
          const active = selectedCategory === category;
          const count = category === "All" ? notes.length : notes.filter((note) => note.category === category).length;

          return (
            <button
              className={`focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
                active
                  ? "border-ink bg-ink text-white"
                  : "border-ink/12 bg-white/72 text-ink/68 hover:border-ink/32 hover:text-ink"
              }`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              <span>{category}</span>
              <span className={active ? "text-white/70" : "text-ink/42"}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleNotes.map((note) => (
          <article
            className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            key={note.slug}
          >
            <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
              <span className="inline-flex items-center gap-1 rounded-full bg-citron/45 px-3 py-1">
                <BookOpen size={13} aria-hidden="true" />
                Lab Note
              </span>
              <span className="rounded-full bg-mist px-3 py-1 text-ink/68">{note.category}</span>
              <span className="rounded-full bg-white px-3 py-1 text-ink/58">{note.duration}</span>
            </div>
            <h3 className="text-xl font-black leading-snug">{note.title}</h3>
            <p className="mt-3 leading-7 text-ink/66">{note.description}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {note.takeaways.slice(0, 2).map((takeaway) => (
                <li className="rounded-2xl bg-mist px-3 py-2 text-sm font-medium leading-6 text-ink/64" key={takeaway}>
                  {takeaway}
                </li>
              ))}
            </ul>
            <Link
              className="focus-ring mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold transition hover:border-ink/35"
              href={`/lab-notes/${note.slug}`}
            >
              Read
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
