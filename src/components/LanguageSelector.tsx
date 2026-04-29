"use client";

import { Languages } from "lucide-react";
import { BiInline, useLanguage } from "@/components/BilingualText";

const options = [
  { label: "English", mode: "en" as const },
  { label: "English + 中文", mode: "bilingual" as const }
];

export default function LanguageSelector() {
  const { mode, setMode } = useLanguage();

  return (
    <div className="flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-2 py-1 text-xs font-bold text-ink/68">
      <span className="inline-flex items-center gap-1 px-2 text-ink/58">
        <Languages size={14} aria-hidden="true" />
        <BiInline text="Language" />
      </span>
      <div className="flex rounded-full bg-mist p-1">
        {options.map((option) => (
          <button
            aria-pressed={mode === option.mode}
            className={`focus-ring rounded-full px-3 py-1.5 transition ${
              mode === option.mode ? "bg-ink text-white" : "text-ink/62 hover:bg-white hover:text-ink"
            }`}
            key={option.mode}
            onClick={() => setMode(option.mode)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
