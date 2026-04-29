"use client";

import { useRef, useState } from "react";
import { BiInline, BiText } from "@/components/BilingualText";

type GameState = "idle" | "waiting" | "ready" | "done" | "early";

export default function ReactionSpeedGame() {
  const [state, setState] = useState<GameState>("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const startTime = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function start() {
    if (timer.current) clearTimeout(timer.current);
    setReactionTime(null);
    setState("waiting");
    const delay = 1200 + Math.random() * 2600;
    timer.current = setTimeout(() => {
      startTime.current = performance.now();
      setState("ready");
    }, delay);
  }

  function handleTap() {
    if (state === "waiting") {
      if (timer.current) clearTimeout(timer.current);
      setState("early");
      return;
    }

    if (state === "ready") {
      setReactionTime(Math.round(performance.now() - startTime.current));
      setState("done");
    }
  }

  const panelText =
    state === "idle"
      ? "Start when ready"
      : state === "waiting"
        ? "Wait for the color change"
        : state === "ready"
          ? "Tap now"
          : state === "early"
            ? "Too soon"
            : "Result";

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft">
      <button
        className={`focus-ring flex min-h-64 w-full items-center justify-center rounded-[1.5rem] border border-ink/10 px-6 text-center text-3xl font-black transition ${
          state === "ready" ? "bg-coral text-white" : "bg-mist text-ink"
        }`}
        onClick={handleTap}
        type="button"
      >
        <BiInline text={panelText} />
      </button>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button className="focus-ring rounded-full bg-ink px-5 py-3 text-sm font-bold text-white" onClick={start} type="button">
          <BiInline text="Start Game" />
        </button>
        {reactionTime !== null && (
          <p className="rounded-full bg-citron/45 px-4 py-2 font-bold">
            Your reaction time: {reactionTime}ms / 你的反应时间：{reactionTime} 毫秒
          </p>
        )}
        {state === "early" && (
          <p className="font-semibold text-coral">
            <BiInline text="Wait until the screen changes color." />
          </p>
        )}
      </div>
      <p className="mt-5 leading-7 text-ink/68">
        <BiText text="Reaction time can be affected by attention, fatigue, expectation, and practice." />
      </p>
    </section>
  );
}
