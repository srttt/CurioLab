"use client";

import { useMemo, useState } from "react";
import ResultCard from "@/components/ResultCard";
import { testQuestions, testResults } from "@/data/tests";

export default function TestRunner({ slug }: { slug: string }) {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const result = useMemo(() => {
    const total = answers.reduce((sum, answer) => sum + answer, 0) + slug.length;
    return testResults[total % testResults.length];
  }, [answers, slug]);

  const progress = Math.round((answers.length / testQuestions.length) * 100);
  const currentQuestion = testQuestions[questionIndex];

  if (!started) {
    return (
      <div className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft">
        <p className="leading-7 text-ink/68">
          Answer a few quick prompts. Your result is playful, gentle, and made for reflection.
        </p>
        <button
          className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          onClick={() => setStarted(true)}
          type="button"
        >
          Start
        </button>
      </div>
    );
  }

  if (answers.length === testQuestions.length) {
    return <ResultCard result={result} />;
  }

  function selectAnswer(answerIndex: number) {
    setAnswers((current) => [...current, answerIndex]);
    setQuestionIndex((current) => Math.min(current + 1, testQuestions.length - 1));
  }

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-bold text-ink/58">
          <span>
            Question {questionIndex + 1} of {testQuestions.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-mist">
          <div className="h-full rounded-full bg-coral transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <h2 className="text-2xl font-black">{currentQuestion.prompt}</h2>
      <div className="mt-6 grid gap-3">
        {currentQuestion.options.map((option, index) => (
          <button
            className="focus-ring rounded-2xl border border-ink/10 bg-white px-4 py-4 text-left font-semibold transition hover:border-coral hover:bg-mist"
            key={option}
            onClick={() => selectAnswer(index)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}
