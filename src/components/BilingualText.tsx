"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode
} from "react";
import { getChineseText } from "@/data/translations";

type LanguageMode = "en" | "bilingual";

type BilingualTextProps = {
  text: string;
  zh?: string;
  className?: string;
  zhClassName?: string;
};

const LanguageContext = createContext<{
  mode: LanguageMode;
  setMode: (mode: LanguageMode) => void;
}>({
  mode: "bilingual",
  setMode: () => {}
});

const wrappingTextStyle: CSSProperties = {
  overflowWrap: "anywhere",
  wordBreak: "normal"
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<LanguageMode>("bilingual");

  useEffect(() => {
    try {
      const savedMode = window.localStorage.getItem("curiolab-language-mode");
      if (savedMode === "en" || savedMode === "bilingual") {
        setModeState(savedMode);
      }
    } catch {
      // Keep the default bilingual mode when storage is unavailable.
    }
  }, []);

  const value = useMemo(
    () => ({
      mode,
      setMode: (nextMode: LanguageMode) => {
        setModeState(nextMode);
        try {
          window.localStorage.setItem("curiolab-language-mode", nextMode);
        } catch {
          // Ignore storage failures; the in-memory choice still works for the session.
        }
      }
    }),
    [mode]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function getZh(text: string) {
  return getChineseText(text);
}

export function BiText({
  text,
  zh,
  className,
  zhClassName = "mt-1 block text-[0.92em] font-medium leading-relaxed text-ink/58"
}: BilingualTextProps) {
  const { mode } = useLanguage();
  const chinese = zh ?? getChineseText(text);
  const mergedClassName = ["block min-w-0 max-w-full whitespace-normal", className].filter(Boolean).join(" ");

  return (
    <span className={mergedClassName} style={wrappingTextStyle}>
      <span className="block min-w-0 max-w-full" style={wrappingTextStyle}>
        {text}
      </span>
      {mode === "bilingual" && chinese && (
        <span className={`${zhClassName} min-w-0 max-w-full`} style={wrappingTextStyle}>
          {chinese}
        </span>
      )}
    </span>
  );
}

export function BiInline({ text, zh, className }: BilingualTextProps) {
  const { mode } = useLanguage();
  const chinese = zh ?? getChineseText(text);

  return (
    <span className={className} style={wrappingTextStyle}>
      {text}
      {mode === "bilingual" && chinese && <span className="text-current/70"> / {chinese}</span>}
    </span>
  );
}
