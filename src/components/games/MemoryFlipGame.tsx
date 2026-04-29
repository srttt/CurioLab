"use client";

import { useEffect, useMemo, useState } from "react";

const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];

function shuffleCards() {
  return [...symbols, ...symbols]
    .map((value, index) => ({ id: `${value}-${index}`, value }))
    .sort(() => Math.random() - 0.5);
}

export default function MemoryFlipGame() {
  const [cards, setCards] = useState(() => shuffleCards());
  const [open, setOpen] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [seconds, setSeconds] = useState(0);

  const complete = matched.length === symbols.length;

  useEffect(() => {
    if (!startedAt || complete) return;
    const interval = setInterval(() => setSeconds(Math.floor((Date.now() - startedAt) / 1000)), 500);
    return () => clearInterval(interval);
  }, [complete, startedAt]);

  useEffect(() => {
    if (open.length !== 2) return;
    const [first, second] = open;
    setMoves((current) => current + 1);
    if (cards[first].value === cards[second].value) {
      setMatched((current) => [...current, cards[first].value]);
      setOpen([]);
      return;
    }
    const timeout = setTimeout(() => setOpen([]), 700);
    return () => clearTimeout(timeout);
  }, [cards, open]);

  const matchedSet = useMemo(() => new Set(matched), [matched]);

  function pick(index: number) {
    if (!startedAt) setStartedAt(Date.now());
    if (open.includes(index) || open.length === 2 || matchedSet.has(cards[index].value)) return;
    setOpen((current) => [...current, index]);
  }

  function reset() {
    setCards(shuffleCards());
    setOpen([]);
    setMatched([]);
    setMoves(0);
    setStartedAt(null);
    setSeconds(0);
  }

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft">
      <div className="mb-5 flex flex-wrap gap-3 text-sm font-bold">
        <span className="rounded-full bg-mist px-4 py-2">Moves: {moves}</span>
        <span className="rounded-full bg-mist px-4 py-2">Time: {seconds}s</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, index) => {
          const visible = open.includes(index) || matchedSet.has(card.value);
          return (
            <button
              className={`focus-ring aspect-square rounded-2xl border border-ink/10 text-2xl font-black transition ${
                visible ? "bg-citron/55" : "bg-ink text-white"
              }`}
              key={card.id}
              onClick={() => pick(index)}
              type="button"
            >
              {visible ? card.value : ""}
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button className="focus-ring rounded-full bg-ink px-5 py-3 text-sm font-bold text-white" onClick={reset} type="button">
          Start Game
        </button>
        {complete && <p className="rounded-full bg-citron/45 px-4 py-2 font-bold">You finished in {moves} moves.</p>}
      </div>
    </section>
  );
}
