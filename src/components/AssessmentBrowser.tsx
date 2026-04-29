"use client";

import { useState } from "react";
import AssessmentCard from "@/components/AssessmentCard";
import { BiInline } from "@/components/BilingualText";
import type { AssessmentCategory, AssessmentItem } from "@/types/assessment";

export default function AssessmentBrowser({
  assessments,
  categories
}: {
  assessments: AssessmentItem[];
  categories: ("All" | AssessmentCategory)[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | AssessmentCategory>("All");
  const visibleAssessments =
    selectedCategory === "All"
      ? assessments
      : assessments.filter((assessment) => assessment.category === selectedCategory);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter assessments by category">
        {categories.map((category) => {
          const active = selectedCategory === category;
          const count =
            category === "All" ? assessments.length : assessments.filter((assessment) => assessment.category === category).length;

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
              <span>
                <BiInline text={category} />
              </span>
              <span className={active ? "text-white/70" : "text-ink/42"}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleAssessments.map((assessment) => (
          <AssessmentCard assessment={assessment} key={assessment.slug} />
        ))}
      </div>
    </>
  );
}
