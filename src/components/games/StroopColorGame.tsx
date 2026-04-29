"use client";

import { useMemo, useRef, useState } from "react";
import { BiInline, BiText } from "@/components/BilingualText";

const colors = [
  { name: "RED", className: "text-red-500" },
  { name: "BLUE", className: "text-blue-500" },
  { name: "GREEN", className: "text-emerald-500" },
  { name: "YELLOW", className: "text-yellow-500" }
];

function randomRound() {
  const word = colors[Math.floor(Math.random() * colors.length)];
  const ink = colors[Math.floor(Math.random() * colors.length)];
  return { word, ink };
}

export default function StroopColorGame() {
  const [round, setRound] = useState(() => randomRound());
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const startedAt = useRef(0);
  const done = count >= 8;

  const average = useMemo(() => {
    if (!times.length) return 0;
    return Math.round(times.reduce((sum, value) => sum + value, 0) / times.length);
  }, [times]);

  function start() {
    setRound(randomRound());
    setStarted(true);
    setCount(0);
    setCorrect(0);
    setTimes([]);
    startedAt.current = performance.now();
  }

  function choose(name: string) {
    if (!started || done) return;
    setTimes((current) => [...current, Math.round(performance.now() - startedAt.current)]);
    if (name === round.ink.name) setCorrect((current) => current + 1);
    setCount((current) => current + 1);
    setRound(randomRound());
    startedAt.current = performance.now();
  }

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft">
      <div className="flex min-h-56 flex-col items-center justify-center rounded-[1.5rem] bg-mist p-6 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
          <BiInline text="Choose the text color" />
        </p>
        <strong className={`text-6xl font-black ${round.ink.className}`}>{round.word.name}</strong>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {colors.map((color) => (
          <button
            className="focus-ring rounded-full border border-ink/10 bg-white px-4 py-3 text-sm font-black transition hover:bg-citron/40"
            disabled={!started || done}
            key={color.name}
            onClick={() => choose(color.name)}
            type="button"
          >
            <BiInline text={color.name} />
          </button>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button className="focus-ring rounded-full bg-ink px-5 py-3 text-sm font-bold text-white" onClick={start} type="button">
          <BiInline text="Start Game" />
        </button>
        <span className="rounded-full bg-mist px-4 py-2 text-sm font-bold">
          {correct}/{count} correct / 正确
        </span>
        {done && <span className="rounded-full bg-citron/45 px-4 py-2 font-bold">Average / 平均: {average}ms</span>}
      </div>
      <p className="mt-5 leading-7 text-ink/68">
        <BiText text="The Stroop effect shows how automatic reading can interfere with color recognition." />
      </p>
    </section>
  );
}
