"use client";

import { useState } from "react";
import ContentCard from "@/components/ContentCard";
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

          return (
            <button
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-bold transition ${
                active
                  ? "border-ink bg-ink text-white"
                  : "border-ink/12 bg-white/72 text-ink/68 hover:border-ink/32 hover:text-ink"
              }`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleNotes.map((item) => (
          <ContentCard item={item} key={item.slug} />
        ))}
      </div>
    </>
  );
}
