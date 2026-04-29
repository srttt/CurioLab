import Link from "next/link";
import { RotateCcw } from "lucide-react";
import BigFiveRadarChart from "@/components/BigFiveRadarChart";
import DimensionScoreBar from "@/components/DimensionScoreBar";
import RelatedNotes from "@/components/RelatedNotes";
import type { AssessmentItem, DimensionScore } from "@/types/assessment";

function describeScore(score: number) {
  if (score >= 75) return "a strong current signal";
  if (score >= 55) return "a moderate current signal";
  if (score >= 35) return "a quieter current signal";
  return "a low current signal";
}

function getTendencyBand(score: number) {
  if (score >= 70) return "Higher tendency";
  if (score >= 40) return "Moderate tendency";
  return "Lower tendency";
}

function getDecisionInterpretation(score: DimensionScore) {
  const band = getTendencyBand(score.score);
  const level = score.score >= 70 ? "higher" : score.score >= 40 ? "moderate" : "lower";
  const interpretations: Record<string, Record<string, string>> = {
    analyticalDeliberation: {
      lower: "You may prefer lighter structure or faster choices when deciding.",
      moderate: "You may use structure and comparison when the situation calls for it.",
      higher: "You may prefer clear structure, comparison, and evidence before choosing."
    },
    intuitiveConfidence: {
      lower: "You may rely less on first impressions unless they are supported by reasons.",
      moderate: "You may use intuition in some situations and analysis in others.",
      higher: "You may trust first impressions, gut feelings, and pattern recognition."
    },
    lossSensitivity: {
      lower: "Possible losses may not dominate your attention when choosing.",
      moderate: "Possible losses may matter, especially when the stakes feel meaningful.",
      higher: "Possible losses, regret, or mistakes may strongly shape your choices."
    },
    informationLoadSensitivity: {
      lower: "Extra information may feel manageable or easy to filter.",
      moderate: "Too much information may slow some choices, especially when options are similar.",
      higher: "Too many options or details may make decisions feel heavier."
    },
    decisionClosure: {
      lower: "You may need more time or support to commit and move forward.",
      moderate: "You may close some decisions easily while revisiting others.",
      higher: "You may commit to choices and move forward with less second-guessing."
    }
  };

  return `${band}: ${interpretations[score.id]?.[level] ?? score.description}`;
}

function findDecisionScore(scores: DimensionScore[], id: string) {
  return scores.find((score) => score.id === id)?.score ?? 0;
}

function getDecisionProfile(scores: DimensionScore[]) {
  const high = (id: string) => findDecisionScore(scores, id) >= 70;
  const low = (id: string) => findDecisionScore(scores, id) < 40;

  if (high("analyticalDeliberation") && high("lossSensitivity") && high("informationLoadSensitivity")) {
    return {
      label: "Careful but easily overloaded",
      summary:
        "You tend to think carefully and pay attention to possible downsides. This can protect you from rushed choices, but too much information may make decisions feel heavier than they need to be."
    };
  }

  if (high("intuitiveConfidence") && high("decisionClosure") && low("analyticalDeliberation")) {
    return {
      label: "Fast and action-oriented",
      summary:
        "You tend to move quickly from impression to action. This can be useful in familiar or low-risk situations, but important decisions may benefit from a short pause and a simple comparison."
    };
  }

  if (high("analyticalDeliberation") && high("decisionClosure")) {
    return {
      label: "Structured and decisive",
      summary:
        "You tend to think through options, then move forward once a decision is made. This balance can work well for complex choices, especially when you avoid over-checking after the decision."
    };
  }

  if (low("decisionClosure") && high("informationLoadSensitivity")) {
    return {
      label: "Prone to decision drag",
      summary:
        "You may find it difficult to finish decisions when options are similar or information keeps expanding. The challenge may not be judgment, but closure."
    };
  }

  if (high("intuitiveConfidence") && high("analyticalDeliberation")) {
    return {
      label: "Hybrid decision-maker",
      summary:
        "You may use both fast impressions and deliberate analysis. This can be powerful when you know which mode fits the situation."
    };
  }

  return {
    label: "Balanced decision style",
    summary:
      "Your answers suggest a mixed decision style. You may shift between analysis, intuition, caution, and action depending on the situation."
  };
}

function getDecisionReflections(scores: DimensionScore[]) {
  const high = (id: string) => findDecisionScore(scores, id) >= 70;
  const low = (id: string) => findDecisionScore(scores, id) < 40;
  const reflections: string[] = [];

  if (high("informationLoadSensitivity")) {
    reflections.push("Define your top 2-3 criteria before researching more.");
    reflections.push("Set a stopping rule for information gathering.");
  }

  if (high("lossSensitivity")) {
    reflections.push("Compare the cost of acting with the cost of waiting.");
    reflections.push("Ask whether the risk is reversible or irreversible.");
  }

  if (high("analyticalDeliberation")) {
    reflections.push("Use analysis for important decisions, but avoid turning small choices into major projects.");
  }

  if (high("intuitiveConfidence")) {
    reflections.push("Use intuition in familiar situations, but add a short evidence check for high-stakes choices.");
  }

  if (low("decisionClosure")) {
    reflections.push("Set a decision deadline.");
    reflections.push("Choose the best next step instead of waiting for the perfect final answer.");
  }

  if (high("decisionClosure")) {
    reflections.push("Your ability to move forward is a strength; just make sure speed does not prevent useful review.");
  }

  if (reflections.length === 0) {
    return [
      "Notice which kinds of choices invite analysis, intuition, caution, or quick action.",
      "Match your decision process to the stakes instead of using the same method for every choice."
    ];
  }

  return reflections.slice(0, 3);
}

function getWellBeingBand(score: number) {
  if (score >= 70) return "Higher current access";
  if (score >= 40) return "Moderate current access";
  return "Lower current access";
}

function findWellBeingScore(scores: DimensionScore[], id: string) {
  return scores.find((score) => score.id === id)?.score ?? 0;
}

function getWellBeingInterpretation(score: DimensionScore) {
  const band = getWellBeingBand(score.score);
  const level = score.score >= 70 ? "higher" : score.score >= 40 ? "moderate" : "lower";
  const interpretations: Record<string, Record<string, string>> = {
    positiveMood: {
      lower: "Pleasant, hopeful, or warm moments may be harder to access right now.",
      moderate: "Pleasant or hopeful moments may be present, though not always easy to notice.",
      higher: "Pleasant, hopeful, or warm moments may be easier to access right now."
    },
    calmness: {
      lower: "Steadiness and room to breathe may feel limited right now.",
      moderate: "You may have some access to calm, with tension still taking space.",
      higher: "You may have more access to steadiness, pause, and recovery."
    },
    energy: {
      lower: "Energy, rest, or available effort may feel limited right now.",
      moderate: "You may have enough energy for some basics, with uneven reserves.",
      higher: "You may have more available energy for ordinary activities."
    },
    interestEngagement: {
      lower: "Interest, meaning, or engagement may feel harder to reach right now.",
      moderate: "Some activities may still catch your interest or feel meaningful.",
      higher: "Curiosity, meaning, or engagement may be more available right now."
    },
    dailyFunctioning: {
      lower: "Ordinary routines and responsibilities may feel harder to manage right now.",
      moderate: "Some routines may be manageable while others still feel effortful.",
      higher: "Daily routines, responsibilities, or support may feel more manageable."
    }
  };

  return `${band}: ${interpretations[score.id]?.[level] ?? score.description}`;
}

function getWellBeingProfile(scores: DimensionScore[]) {
  const high = (id: string) => findWellBeingScore(scores, id) >= 70;
  const low = (id: string) => findWellBeingScore(scores, id) < 40;

  if (high("positiveMood") && high("calmness") && high("dailyFunctioning")) {
    return {
      label: "Steady current well-being",
      summary:
        "Your answers suggest access to positive emotion, steadiness, and manageable routines. This does not mean every day feels easy, but several current supports may be working for you."
    };
  }

  if (high("interestEngagement") && low("energy")) {
    return {
      label: "Engaged but depleted",
      summary:
        "You may still care about activities or goals, while your available energy feels limited. The useful question may be how to protect capacity without losing connection to what matters."
    };
  }

  if (low("energy") && low("dailyFunctioning")) {
    return {
      label: "Low bandwidth",
      summary:
        "Energy and everyday routines may both feel harder right now. This profile points toward reducing friction, keeping steps small, and noticing what support or structure helps."
    };
  }

  if (low("calmness") && high("dailyFunctioning")) {
    return {
      label: "Functioning under pressure",
      summary:
        "You may be keeping routines moving even when calm feels limited. That can be useful in the short term, but recovery time may need deliberate space."
    };
  }

  if (low("positiveMood") && low("interestEngagement")) {
    return {
      label: "Muted enjoyment and engagement",
      summary:
        "Pleasant moments and interest may be quieter right now. The goal is not to force a mood, but to notice small openings for comfort, connection, or meaningful action."
    };
  }

  return {
    label: "Mixed well-being profile",
    summary:
      "Your answers suggest a mixed current profile. Some areas may feel more available than others, and your pattern may shift with sleep, stress, workload, support, and context."
  };
}

function getWellBeingReflections(scores: DimensionScore[]) {
  const high = (id: string) => findWellBeingScore(scores, id) >= 70;
  const low = (id: string) => findWellBeingScore(scores, id) < 40;
  const reflections: string[] = [];

  if (low("positiveMood")) {
    reflections.push("Look for one small pleasant, comforting, or warm moment each day without pressuring it to fix everything.");
  }

  if (low("calmness")) {
    reflections.push("Add a short reset point before or after demanding moments, even if it is only a few quiet breaths.");
  }

  if (low("energy")) {
    reflections.push("Protect basic rest and reduce one nonessential demand before asking more from yourself.");
  }

  if (low("interestEngagement")) {
    reflections.push("Choose one low-pressure activity that still feels mildly interesting or connected to your values.");
  }

  if (low("dailyFunctioning")) {
    reflections.push("Shrink routines to the next manageable step and use support, reminders, or structure where possible.");
  }

  if (high("calmness")) {
    reflections.push("Notice what is helping you recover so you can reuse it when pressure rises.");
  }

  if (high("dailyFunctioning")) {
    reflections.push("Your current routines may be an anchor; make sure they leave room for rest and connection too.");
  }

  if (reflections.length === 0) {
    return [
      "Notice which small conditions make your day feel more manageable.",
      "Repeat this check later if sleep, stress, support, workload, or health context changes."
    ];
  }

  return reflections.slice(0, 3);
}

export default function AssessmentResult({
  assessment,
  onRetake,
  scores
}: {
  assessment: AssessmentItem;
  onRetake: () => void;
  scores: DimensionScore[];
}) {
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  const strongest = sortedScores[0];
  const quietest = sortedScores[sortedScores.length - 1];
  const showBigFiveRadar = assessment.slug === "big-five-personality-profile" && scores.length === 5;
  const showDecisionProfile = assessment.slug === "decision-style-profile";
  const showWellBeingCheck = assessment.slug === "well-being-check";

  const reflections = [
    `Notice where ${strongest.label} shows up as ${describeScore(strongest.score)} in your day-to-day choices.`,
    `Look at ${quietest.label} with curiosity. A lower score may reflect context, energy, support, or timing.`,
    "Repeat this assessment later if your mood, sleep, workload, or environment changes."
  ];

  if (showDecisionProfile) {
    const profile = getDecisionProfile(scores);
    const decisionReflections = getDecisionReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">Your Profile</p>
        <h2 className="mt-2 text-3xl font-black">Your Decision Style Profile</h2>

        <div className="mt-6 grid gap-4">
          {scores.map((score) => (
            <DimensionScoreBar
              description={getDecisionInterpretation(score)}
              key={score.id}
              label={score.label}
              score={score.score}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">Profile Summary</h3>
            <p className="mt-3 text-lg font-black text-ink">{profile.label}</p>
            <p className="mt-2 leading-7 text-ink/70">{profile.summary}</p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">Reflection</h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {decisionReflections.map((reflection) => (
                <li key={reflection}>- {reflection}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">Keep in Mind</h3>
          <p className="mt-2">
            This result is a snapshot, not a permanent label. Your answers may change with mood, sleep, stress,
            experience, and context.
          </p>
        </section>

        <div className="mt-6">
          <RelatedNotes links={assessment.relatedNotes} title="Explore related content" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold transition hover:border-ink/35"
            onClick={onRetake}
            type="button"
          >
            <RotateCcw size={16} aria-hidden="true" />
            Retake
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            Explore Assessments
          </Link>
        </div>
      </section>
    );
  }

  if (showWellBeingCheck) {
    const profile = getWellBeingProfile(scores);
    const wellBeingReflections = getWellBeingReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">Your Profile</p>
        <h2 className="mt-2 text-3xl font-black">Your Well-being Check</h2>

        <div className="mt-6 grid gap-4">
          {scores.map((score) => (
            <DimensionScoreBar
              description={getWellBeingInterpretation(score)}
              key={score.id}
              label={score.label}
              score={score.score}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">Profile Summary</h3>
            <p className="mt-3 text-lg font-black text-ink">{profile.label}</p>
            <p className="mt-2 leading-7 text-ink/70">{profile.summary}</p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">Reflection</h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {wellBeingReflections.map((reflection) => (
                <li key={reflection}>- {reflection}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">Keep in Mind</h3>
          <p className="mt-2">
            This result is a snapshot, not a permanent label. Your answers may change with mood, sleep, stress,
            support, workload, health, and context.
          </p>
        </section>

        <div className="mt-6">
          <RelatedNotes links={assessment.relatedNotes} title="Explore related content" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold transition hover:border-ink/35"
            onClick={onRetake}
            type="button"
          >
            <RotateCcw size={16} aria-hidden="true" />
            Retake
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            Explore Assessments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">Your Profile</p>
      <h2 className="mt-2 text-3xl font-black">{assessment.title}</h2>

      <div className={`mt-6 grid gap-5 ${showBigFiveRadar ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]" : ""}`}>
        {showBigFiveRadar && <BigFiveRadarChart scores={scores} />}
        <div className="grid gap-4">
          {scores.map((score) => (
            <DimensionScoreBar
              description={score.description}
              key={score.id}
              label={score.label}
              score={score.score}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
          <h3 className="font-black">Profile Summary</h3>
          <p className="mt-3 leading-7 text-ink/70">
            Your answers suggest that {strongest.label} is the strongest signal in this snapshot, while{" "}
            {quietest.label} is quieter. This may reflect your current habits, environment, energy level, or the kind
            of situations you have been facing recently.
          </p>
        </section>

        <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
          <h3 className="font-black">Reflection</h3>
          <ul className="mt-3 space-y-2 leading-7 text-ink/70">
            {reflections.map((reflection) => (
              <li key={reflection}>- {reflection}</li>
            ))}
          </ul>
        </section>
      </div>

      <p className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
        This result is a snapshot, not a permanent label. Your answers may change with mood, sleep, stress, and
        context. {assessment.disclaimer}
      </p>

      <div className="mt-6">
        <RelatedNotes links={assessment.relatedNotes} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold transition hover:border-ink/35"
          onClick={onRetake}
          type="button"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Retake
        </button>
        <Link
          className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          href="/assessments"
        >
          Explore Assessments
        </Link>
      </div>
    </section>
  );
}
