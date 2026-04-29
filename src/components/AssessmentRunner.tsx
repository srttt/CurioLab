"use client";

import { useMemo, useState } from "react";
import AssessmentResult from "@/components/AssessmentResult";
import { BiInline, BiText } from "@/components/BilingualText";
import type { AssessmentItem, DimensionScore } from "@/types/assessment";

const likertOptions = [
  { label: "Strongly disagree", value: 1 },
  { label: "Disagree", value: 2 },
  { label: "Neutral", value: 3 },
  { label: "Agree", value: 4 },
  { label: "Strongly agree", value: 5 }
];

function scoreAssessment(assessment: AssessmentItem, answers: Record<string, number>): DimensionScore[] {
  return assessment.dimensions.map((dimension) => {
    const questions = assessment.questions.filter((question) => question.dimension === dimension.id);
    const total = questions.reduce((sum, question) => {
      const value = answers[question.id] ?? 3;
      return sum + (question.reverse ? 6 - value : value);
    }, 0);
    const average = total / questions.length;
    const score = Math.round(((average - 1) / 4) * 100);

    return {
      id: dimension.id,
      label: dimension.label,
      description: dimension.description,
      score
    };
  });
}

export default function AssessmentRunner({ assessment }: { assessment: AssessmentItem }) {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const isBigFive = assessment.slug === "big-five-personality-profile";
  const isStressRecovery = assessment.slug === "stress-recovery-profile";
  const isDecisionStyle = assessment.slug === "decision-style-profile";
  const isWellBeingCheck = assessment.slug === "well-being-check";
  const isSocialEnergy = assessment.slug === "social-energy-profile";
  const isMotivationNeeds = assessment.slug === "motivation-needs-profile";
  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === assessment.questions.length;
  const currentQuestion = assessment.questions[questionIndex];
  const progress = Math.round((answeredCount / assessment.questions.length) * 100);
  const scores = useMemo(() => scoreAssessment(assessment, answers), [answers, assessment]);

  function reset() {
    setStarted(true);
    setQuestionIndex(0);
    setAnswers({});
  }

  function selectAnswer(value: number) {
    setAnswers((current) => ({ ...current, [currentQuestion.id]: value }));
    setQuestionIndex((current) => Math.min(current + 1, assessment.questions.length - 1));
  }

  function goBack() {
    setQuestionIndex((current) => Math.max(current - 1, 0));
  }

  if (!started) {
    if (isBigFive) {
      return (
        <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
            <BiInline text="Big Five Personality Profile" />
          </p>
          <h2 className="mt-2 text-3xl font-black">
            <BiText text="Which trait patterns are most visible right now?" />
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 leading-8 text-ink/68">
            <p>
              <BiText text="This assessment looks at openness, conscientiousness, extraversion, agreeableness, and emotional sensitivity as five broad trait tendencies." />
            </p>
            <p>
              <BiText text="It is not a personality box. It is a dimensional snapshot for noticing patterns, preferences, and contexts." />
            </p>
          </div>
          <button
            className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            onClick={() => setStarted(true)}
            type="button"
          >
            <BiInline text="Start Assessment" />
          </button>
        </section>
      );
    }

    if (isWellBeingCheck) {
      return (
        <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
            <BiInline text="Well-being Check" />
          </p>
          <h2 className="mt-2 text-3xl font-black">
            <BiText text="How have you been doing recently?" />
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 leading-8 text-ink/68">
            <p>
              <BiText text="This assessment looks at recent positive mood, calmness, energy, interest and engagement, and daily functioning." />
            </p>
            <p>
              <BiText text="It is not a diagnosis or a judgment of how you should feel. It is a self-reflection tool for noticing current patterns and support needs." />
            </p>
          </div>
          <button
            className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            onClick={() => setStarted(true)}
            type="button"
          >
            <BiInline text="Start Assessment" />
          </button>
        </section>
      );
    }

    if (isStressRecovery) {
      return (
        <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
            <BiInline text="Stress & Recovery Profile" />
          </p>
          <h2 className="mt-2 text-3xl font-black">
            <BiText text="How are pressure and recovery showing up recently?" />
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 leading-8 text-ink/68">
            <p>
              <BiText text="This assessment looks at perceived pressure, recovery capacity, emotional load, physical fatigue, and sense of control." />
            </p>
            <p>
              <BiText text="It is not a stress diagnosis. It is a self-reflection tool for noticing current load, resources, and recovery needs." />
            </p>
          </div>
          <button
            className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            onClick={() => setStarted(true)}
            type="button"
          >
            <BiInline text="Start Assessment" />
          </button>
        </section>
      );
    }

    if (isDecisionStyle) {
      return (
        <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
            <BiInline text="Decision Style Profile" />
          </p>
          <h2 className="mt-2 text-3xl font-black">
            <BiText text="How do you make choices when the answer is not obvious?" />
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 leading-8 text-ink/68">
            <p>
              <BiText text="This assessment looks at how you balance analysis, intuition, possible losses, information load, and decision closure." />
            </p>
            <p>
              <BiText text="It is not a test of intelligence or rationality. It is a self-reflection tool for understanding your decision habits." />
            </p>
          </div>
          <button
            className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            onClick={() => setStarted(true)}
            type="button"
          >
            <BiInline text="Start Assessment" />
          </button>
        </section>
      );
    }

    if (isSocialEnergy) {
      return (
        <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
            <BiInline text="Social Energy Profile" />
          </p>
          <h2 className="mt-2 text-3xl font-black">
            <BiText text="How does connection affect your energy?" />
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 leading-8 text-ink/68">
            <p>
              <BiText text="This assessment looks at how you initiate contact, handle group stimulation, seek depth, notice boundaries, and recover after social time." />
            </p>
            <p>
              <BiText text="It is not a label for introversion or extraversion. It is a self-reflection tool for understanding your current social rhythm." />
            </p>
          </div>
          <button
            className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            onClick={() => setStarted(true)}
            type="button"
          >
            <BiInline text="Start Assessment" />
          </button>
        </section>
      );
    }

    if (isMotivationNeeds) {
      return (
        <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
            <BiInline text="Motivation Needs Profile" />
          </p>
          <h2 className="mt-2 text-3xl font-black">
            <BiText text="What helps effort feel possible?" />
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 leading-8 text-ink/68">
            <p>
              <BiText text="This assessment looks at choice, capability, connection, purpose, and momentum." />
            </p>
            <p>
              <BiText text="It is not a willpower test. It is a self-reflection tool for noticing which motivation supports may need more attention." />
            </p>
          </div>
          <button
            className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            onClick={() => setStarted(true)}
            type="button"
          >
            <BiInline text="Start Assessment" />
          </button>
        </section>
      );
    }

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Start Assessment" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Answer with your recent pattern in mind" />
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-ink/68">
          <BiText text="Use the 5-point scale for each statement. There are no right answers. The result is a dimensional profile for self-reflection, not a diagnosis." />
        </p>
        <button
          className="focus-ring mt-6 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          onClick={() => setStarted(true)}
          type="button"
        >
          <BiInline text="Start Assessment" />
        </button>
      </section>
    );
  }

  if (complete) {
    return <AssessmentResult assessment={assessment} onRetake={reset} scores={scores} />;
  }

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4 text-sm font-bold text-ink/58">
          <span>
            <span>
              Question {questionIndex + 1} of {assessment.questions.length}
              <span className="ml-2 text-ink/40">
                / 第 {questionIndex + 1} 题，共 {assessment.questions.length} 题
              </span>
            </span>
          </span>
          <span>{progress}%</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-mist">
          <div className="h-full rounded-full bg-coral transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="rounded-[1.5rem] bg-mist p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/46">
          <BiInline text={assessment.dimensions.find((dimension) => dimension.id === currentQuestion.dimension)?.label ?? ""} />
        </p>
        <h2 className="mt-2 text-2xl font-black">
          <BiText text={currentQuestion.text} />
        </h2>
      </div>

      <div className="mt-6 grid gap-3">
        {likertOptions.map((option) => (
          <button
            className="focus-ring flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white px-4 py-4 text-left font-semibold transition hover:border-coral hover:bg-mist"
            key={option.value}
            onClick={() => selectAnswer(option.value)}
            type="button"
          >
            <span>
              <BiText text={option.label} />
            </span>
            <span className="rounded-full bg-mist px-3 py-1 text-sm text-ink/58">{option.value}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-between gap-3">
        <button
          className="focus-ring rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm font-bold text-ink/70 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={questionIndex === 0}
          onClick={goBack}
          type="button"
        >
          <BiInline text="Back" />
        </button>
        <p className="self-center text-sm font-medium text-ink/50">
          <BiInline text="Strongly disagree to strongly agree" />
        </p>
      </div>
    </section>
  );
}
