import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { BiInline, BiText, getZh } from "@/components/BilingualText";
import BigFiveRadarChart from "@/components/BigFiveRadarChart";
import DimensionScoreBar from "@/components/DimensionScoreBar";
import ProfileRadarChart from "@/components/ProfileRadarChart";
import RelatedNotes from "@/components/RelatedNotes";
import {
  getMostComplementaryInvestmentMaster,
  getMostSimilarInvestmentMaster,
  investmentStyleBenchmarks
} from "@/data/investmentStyle";
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

function findScore(scores: DimensionScore[], id: string) {
  return scores.find((score) => score.id === id)?.score ?? 0;
}

function getSignalBand(score: number) {
  if (score >= 70) return "Higher current signal";
  if (score >= 40) return "Moderate current signal";
  return "Lower current signal";
}

function getBigFiveInterpretation(score: DimensionScore) {
  const band = getTendencyBand(score.score);
  const level = score.score >= 70 ? "higher" : score.score >= 40 ? "moderate" : "lower";
  const interpretations: Record<string, Record<string, string>> = {
    openness: {
      lower: "You may prefer familiar approaches, practical details, or ideas with clear use.",
      moderate: "You may enjoy novelty in some areas while still valuing familiar structure.",
      higher: "Curiosity, imagination, and comfort with new ideas may be especially visible."
    },
    conscientiousness: {
      lower: "Planning and follow-through may depend more on context, interest, or external structure.",
      moderate: "You may use structure when it matters while staying flexible in other situations.",
      higher: "Planning, reliability, and structured follow-through may be especially visible."
    },
    extraversion: {
      lower: "You may prefer quieter engagement, smaller settings, or more time to think before responding.",
      moderate: "You may move between social energy and quieter focus depending on the setting.",
      higher: "Outward engagement, expressiveness, or stimulation seeking may be especially visible."
    },
    agreeableness: {
      lower: "You may prioritize directness, independence, or clear boundaries over automatic accommodation.",
      moderate: "You may balance warmth and cooperation with your own needs and limits.",
      higher: "Warmth, patience, cooperation, and concern for others may be especially visible."
    },
    "emotional-sensitivity": {
      lower: "Stress or emotional signals may pass through with less inner intensity.",
      moderate: "Stress and emotional signals may register clearly in some contexts and less in others.",
      higher: "Stress, uncertainty, or emotional signals may register strongly and quickly."
    }
  };

  return `${band}: ${interpretations[score.id]?.[level] ?? score.description}`;
}

function getBigFiveProfile(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;

  if (high("openness") && high("conscientiousness")) {
    return {
      label: "Curious and structured",
      summary:
        "Your answers suggest a blend of exploration and follow-through. You may enjoy new ideas, while also wanting enough structure to turn them into something usable."
    };
  }

  if (high("extraversion") && high("agreeableness")) {
    return {
      label: "Warm and outward-facing",
      summary:
        "Social energy and interpersonal warmth may both be visible in this snapshot. Connection may feel easier when there is room for expression, cooperation, and shared momentum."
    };
  }

  if (high("emotional-sensitivity") && low("conscientiousness")) {
    return {
      label: "Sensitive under load",
      summary:
        "Emotional signals may register strongly while structure feels harder to maintain. The useful focus may be reducing friction and adding support before pressure stacks up."
    };
  }

  if (high("conscientiousness") && low("openness")) {
    return {
      label: "Steady and routine-friendly",
      summary:
        "You may work best with familiar methods, clear expectations, and dependable routines. This can support consistency, especially when novelty is introduced gradually."
    };
  }

  if (high("openness") && low("extraversion")) {
    return {
      label: "Reflective explorer",
      summary:
        "Curiosity may be strong even when outward stimulation is quieter. You may enjoy exploring ideas deeply, privately, or with a small number of trusted people."
    };
  }

  return {
    label: "Mixed trait profile",
    summary:
      "Your answers suggest a mixed trait pattern. Different traits may become more visible depending on your environment, relationships, workload, and current energy."
  };
}

function getBigFiveReflections(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;
  const reflections: string[] = [];

  if (high("openness")) {
    reflections.push("Give curiosity a container so new ideas have somewhere to land.");
  }

  if (low("openness")) {
    reflections.push("Use familiar routines as a base, then test novelty in small doses.");
  }

  if (high("conscientiousness")) {
    reflections.push("Let structure support you, but define what good enough looks like before over-polishing.");
  }

  if (low("conscientiousness")) {
    reflections.push("Use one visible next step or external cue when follow-through feels slippery.");
  }

  if (high("extraversion")) {
    reflections.push("Use social momentum when it helps, and still leave room for quieter processing.");
  }

  if (low("extraversion")) {
    reflections.push("Protect lower-stimulation ways to connect, think, and recover.");
  }

  if (high("agreeableness")) {
    reflections.push("Keep warmth and cooperation, while naming your own limits clearly.");
  }

  if (low("agreeableness")) {
    reflections.push("Practice directness with enough context so others can understand your intent.");
  }

  if (high("emotional-sensitivity")) {
    reflections.push("Notice early emotional signals and add recovery before intensity builds.");
  }

  if (low("emotional-sensitivity")) {
    reflections.push("Check in deliberately with quieter feelings or signals you might otherwise skip.");
  }

  if (reflections.length === 0) {
    return [
      "Look for situations where each trait becomes more or less useful.",
      "Use the profile as language for patterns, not as a fixed identity."
    ];
  }

  return reflections.slice(0, 3);
}

function getStressInterpretation(score: DimensionScore) {
  const band = getSignalBand(score.score);
  const level = score.score >= 70 ? "higher" : score.score >= 40 ? "moderate" : "lower";
  const interpretations: Record<string, Record<string, string>> = {
    perceivedPressure: {
      lower: "Current demands may feel more contained or easier to sort.",
      moderate: "Some demands may feel pressing, while others remain manageable.",
      higher: "Current demands, deadlines, or expectations may feel intense."
    },
    recoveryCapacity: {
      lower: "Recovery routines may not be restoring much capacity right now.",
      moderate: "Some recovery may be available, though it may be inconsistent.",
      higher: "Your current routines may be helping you reset and restore."
    },
    emotionalLoad: {
      lower: "Emotional tension or worry may feel lighter or easier to set down.",
      moderate: "Some emotional material may be present without taking over every moment.",
      higher: "Worry, tension, or emotional material may be taking up a lot of space."
    },
    physicalFatigue: {
      lower: "Body-level fatigue or tension may feel less prominent right now.",
      moderate: "Physical fatigue or tension may show up in some parts of the day.",
      higher: "Tiredness, tension, heaviness, or body stress may be strongly present."
    },
    senseOfControl: {
      lower: "Agency and choice may feel limited in your current situation.",
      moderate: "You may have some room to influence what happens next.",
      higher: "You may be able to see useful choices and areas of influence."
    }
  };

  return `${band}: ${interpretations[score.id]?.[level] ?? score.description}`;
}

function getStressProfile(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;

  if (high("perceivedPressure") && low("recoveryCapacity")) {
    return {
      label: "Pressure outrunning recovery",
      summary:
        "Demands may be building faster than your current recovery rhythm can restore capacity. The priority may be reducing input, protecting reset time, or making recovery more reliable."
    };
  }

  if (high("emotionalLoad") && high("physicalFatigue")) {
    return {
      label: "Mind-body load",
      summary:
        "Emotional material and body fatigue may both be present. This pattern often benefits from lowering intensity and using small physical resets, not only more thinking."
    };
  }

  if (high("perceivedPressure") && high("senseOfControl")) {
    return {
      label: "High demand with agency",
      summary:
        "Pressure may be high, but you may still see choices, influence, or useful next steps. This can help when you keep the scope realistic and recovery protected."
    };
  }

  if (low("senseOfControl") && high("perceivedPressure")) {
    return {
      label: "Crowded and constrained",
      summary:
        "Demands may feel high while room to adjust feels limited. The helpful move may be finding one controllable edge rather than trying to solve the whole situation at once."
    };
  }

  if (high("recoveryCapacity") && low("perceivedPressure")) {
    return {
      label: "Currently well-buffered",
      summary:
        "Your answers suggest that demands may feel relatively contained and recovery is available. This can be a good time to notice which routines are protecting your capacity."
    };
  }

  return {
    label: "Mixed stress and recovery profile",
    summary:
      "Your answers suggest a mixed current profile. Pressure, recovery, emotional load, body fatigue, and control may shift with workload, sleep, support, and timing."
  };
}

function getStressReflections(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;
  const reflections: string[] = [];

  if (high("perceivedPressure")) {
    reflections.push("Separate urgent demands from important-but-not-immediate demands.");
  }

  if (low("recoveryCapacity")) {
    reflections.push("Protect one small recovery block before adding another demand.");
  }

  if (high("emotionalLoad")) {
    reflections.push("Write down the worry or emotion you are carrying before deciding what it needs.");
  }

  if (high("physicalFatigue")) {
    reflections.push("Use a body-level reset, such as sleep, food, water, stretching, or a short walk.");
  }

  if (low("senseOfControl")) {
    reflections.push("Name one part of the situation you can influence in the next 24 hours.");
  }

  if (high("recoveryCapacity")) {
    reflections.push("Notice which recovery routines are working so you can repeat them under pressure.");
  }

  if (high("senseOfControl")) {
    reflections.push("Your sense of agency is useful; pair it with realistic limits and recovery time.");
  }

  if (reflections.length === 0) {
    return [
      "Notice which stress signal changes first: pressure, emotion, body fatigue, recovery, or control.",
      "Repeat this check later if workload, sleep, health, or support changes."
    ];
  }

  return reflections.slice(0, 3);
}

function getSocialInterpretation(score: DimensionScore) {
  const band = getTendencyBand(score.score);
  const level = score.score >= 70 ? "higher" : score.score >= 40 ? "moderate" : "lower";
  const interpretations: Record<string, Record<string, string>> = {
    socialInitiation: {
      lower: "You may prefer lower-friction ways to begin contact or wait for clearer invitations.",
      moderate: "You may initiate comfortably in some contexts while needing more safety in others.",
      higher: "You may find it easier to start contact, conversation, or shared plans."
    },
    groupStimulation: {
      lower: "Busy or fast-moving social settings may use energy quickly.",
      moderate: "Some group settings may feel energizing, while others may become tiring.",
      higher: "Lively or group-based social settings may feel more manageable or energizing."
    },
    connectionDepth: {
      lower: "Practical or lighter conversation may often feel sufficient.",
      moderate: "You may enjoy both light connection and deeper exchange depending on context.",
      higher: "Meaningful, focused, or honest conversation may be especially important for connection."
    },
    boundaryAwareness: {
      lower: "Social limits may be harder to notice until your energy is already low.",
      moderate: "You may notice some social limits while still overriding them at times.",
      higher: "You may notice social needs and limits early enough to protect your energy."
    },
    recoveryRhythm: {
      lower: "Your current rhythm may not fully restore social energy after interaction.",
      moderate: "You may recover well from some interactions while needing more space after others.",
      higher: "Your current rhythm may help you reset and restore after social contact."
    }
  };

  return `${band}: ${interpretations[score.id]?.[level] ?? score.description}`;
}

function getSocialProfile(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;

  if (high("socialInitiation") && high("groupStimulation") && high("recoveryRhythm")) {
    return {
      label: "Socially energized and flexible",
      summary:
        "You may have easy access to social momentum and enough recovery rhythm to keep it sustainable. This can make connection feel active rather than draining when the fit is right."
    };
  }

  if (high("connectionDepth") && low("groupStimulation")) {
    return {
      label: "Depth-oriented connector",
      summary:
        "You may feel most nourished by focused, meaningful connection rather than busy group energy. Your social needs may be less about quantity and more about fit."
    };
  }

  if (low("boundaryAwareness") && low("recoveryRhythm")) {
    return {
      label: "Socially overextended",
      summary:
        "You may keep participating past your limits and then have trouble fully restoring. The key pattern to watch is not whether you like people, but whether your rhythm protects your energy."
    };
  }

  if (high("boundaryAwareness") && high("recoveryRhythm") && low("socialInitiation")) {
    return {
      label: "Selective and restorative",
      summary:
        "You may be careful about when you initiate, while having a clearer sense of how to recover. This can support sustainable connection when you choose contact deliberately."
    };
  }

  if (high("socialInitiation") && low("recoveryRhythm")) {
    return {
      label: "Outgoing but recovery-sensitive",
      summary:
        "You may move toward connection readily, while your recovery rhythm needs more protection afterward. Planning the reset may matter as much as planning the social time."
    };
  }

  return {
    label: "Adaptive social energy profile",
    summary:
      "Your answers suggest a mixed social energy pattern. You may shift between initiation, depth, group energy, boundaries, and recovery depending on the people, setting, and timing."
  };
}

function getSocialReflections(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;
  const reflections: string[] = [];

  if (low("recoveryRhythm")) {
    reflections.push("Plan a small decompression window after social time instead of waiting until you feel depleted.");
  }

  if (low("boundaryAwareness")) {
    reflections.push("Notice the earliest body or attention signal that tells you your social energy is dropping.");
  }

  if (high("connectionDepth")) {
    reflections.push("Prioritize a few higher-quality conversations when your energy is limited.");
  }

  if (low("socialInitiation")) {
    reflections.push("Use one low-friction reach-out, such as a short message or a specific invitation.");
  }

  if (high("groupStimulation")) {
    reflections.push("Use group energy when it helps, and still check whether you need a quieter landing afterward.");
  }

  if (high("boundaryAwareness")) {
    reflections.push("Your ability to notice limits can help connection stay sustainable.");
  }

  if (reflections.length === 0) {
    return [
      "Notice which people and settings leave you more yourself afterward.",
      "Treat social energy as a rhythm to design, not a fixed label."
    ];
  }

  return reflections.slice(0, 3);
}

function getMotivationInterpretation(score: DimensionScore) {
  const band = getTendencyBand(score.score);
  const level = score.score >= 70 ? "higher" : score.score >= 40 ? "moderate" : "lower";
  const interpretations: Record<string, Record<string, string>> = {
    autonomy: {
      lower: "Choice and ownership may feel limited in your current goals.",
      moderate: "You may have some meaningful choice, with a few areas still feeling constrained.",
      higher: "Your effort may feel more connected to personal choice and ownership."
    },
    competence: {
      lower: "Progress, clarity, or confidence may feel harder to access right now.",
      moderate: "You may see some signs of progress while still needing clearer feedback or next steps.",
      higher: "You may feel more capable, effective, and able to improve."
    },
    relatedness: {
      lower: "Support, shared purpose, or connection may feel less available right now.",
      moderate: "You may have some support or connection, though it may not cover every effort.",
      higher: "Support, connection, or shared purpose may be helping your motivation."
    },
    purposeAlignment: {
      lower: "The reason behind your effort may feel unclear or disconnected from your values.",
      moderate: "Some goals may feel meaningful, while others may need a clearer why.",
      higher: "Your effort may feel connected to meaning, values, or a larger direction."
    },
    progressMomentum: {
      lower: "Starting, continuing, or restarting may feel effortful right now.",
      moderate: "You may build momentum once conditions are right, but friction still matters.",
      higher: "Small starts and small wins may help you keep moving."
    }
  };

  return `${band}: ${interpretations[score.id]?.[level] ?? score.description}`;
}

function getMotivationProfile(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;

  if (high("autonomy") && high("purposeAlignment") && high("progressMomentum")) {
    return {
      label: "Self-directed momentum",
      summary:
        "Your answers suggest that choice, meaning, and movement are currently working together. This can make effort feel self-directed rather than purely forced."
    };
  }

  if (low("competence") && low("progressMomentum")) {
    return {
      label: "Friction-heavy motivation",
      summary:
        "Effort may feel harder because next steps, feedback, or early momentum are not easy to access. The useful move may be to make progress more visible and the first step smaller."
    };
  }

  if (high("relatedness") && low("autonomy")) {
    return {
      label: "Supported but constrained",
      summary:
        "You may have connection or support around your efforts, while choice and ownership feel limited. Motivation may improve when support includes more room for your own way of working."
    };
  }

  if (low("relatedness") && low("purposeAlignment")) {
    return {
      label: "Disconnected effort",
      summary:
        "Your effort may feel low on both connection and meaning right now. Reconnecting the work to people, values, or a concrete reason may matter more than simply pushing harder."
    };
  }

  if (high("competence") && low("purposeAlignment")) {
    return {
      label: "Capable but under-inspired",
      summary:
        "You may feel able to do the work, while the reason for doing it feels less alive. This profile often benefits from revisiting purpose, audience, or personal relevance."
    };
  }

  return {
    label: "Mixed motivation needs",
    summary:
      "Your answers suggest a mixed motivation profile. Different needs may become more important depending on the task, environment, pressure, and support available."
  };
}

function getMotivationReflections(scores: DimensionScore[]) {
  const high = (id: string) => findScore(scores, id) >= 70;
  const low = (id: string) => findScore(scores, id) < 40;
  const reflections: string[] = [];

  if (low("autonomy")) {
    reflections.push("Find one real choice inside the task, such as order, method, timing, or scope.");
  }

  if (low("competence")) {
    reflections.push("Define the next visible sign of progress before trying to solve the whole task.");
  }

  if (low("relatedness")) {
    reflections.push("Ask for one specific form of support, feedback, or shared accountability.");
  }

  if (low("purposeAlignment")) {
    reflections.push("Write one sentence about why this effort matters, or what it could make possible.");
  }

  if (low("progressMomentum")) {
    reflections.push("Use a two-minute starter step to reduce the cost of beginning.");
  }

  if (high("progressMomentum")) {
    reflections.push("Small wins appear useful for you; keep making progress visible.");
  }

  if (high("autonomy")) {
    reflections.push("Your sense of ownership is a resource; protect it by choosing how you work where possible.");
  }

  if (reflections.length === 0) {
    return [
      "Notice which need changes effort the most: choice, capability, connection, meaning, or momentum.",
      "Adjust the environment around the task before assuming motivation is only about willpower."
    ];
  }

  return reflections.slice(0, 3);
}

function findInvestmentScore(scores: DimensionScore[], id: string) {
  return scores.find((score) => score.id === id)?.score ?? 0;
}

function getInvestmentReflections(scores: DimensionScore[]) {
  const high = (id: string) => findInvestmentScore(scores, id) >= 70;
  const low = (id: string) => findInvestmentScore(scores, id) < 40;
  const reflections: { en: string; zh: string }[] = [];

  if (high("valuationAnchor")) {
    reflections.push({
      en: "Your valuation anchor is useful; keep separating a good story from a good price.",
      zh: "你的估值锚定很有用；继续把好故事和好价格区分开。"
    });
  }

  if (low("portfolioBreadth")) {
    reflections.push({
      en: "Check whether concentration is intentional, sized well, and survivable if you are wrong.",
      zh: "检查集中是否是有意为之、仓位是否合适，以及如果判断错误是否还能承受。"
    });
  }

  if (high("macroRegimeAwareness")) {
    reflections.push({
      en: "Use macro context as a risk lens, while keeping it connected to concrete portfolio choices.",
      zh: "把宏观环境当作风险镜头，同时让它和具体组合选择保持连接。"
    });
  }

  if (low("costFrictionAwareness")) {
    reflections.push({
      en: "Before adding complexity, estimate the drag from fees, taxes, turnover, spreads, and time.",
      zh: "在增加复杂度之前，估算费用、税负、换手、价差和时间带来的拖累。"
    });
  }

  if (high("downsideDiscipline")) {
    reflections.push({
      en: "Your downside focus can protect you; also define what evidence would justify taking enough risk.",
      zh: "你的下行关注能提供保护；也可以定义什么证据足以支持承担适当风险。"
    });
  }

  if (low("adaptability")) {
    reflections.push({
      en: "Write down what would change your mind before the position or idea becomes emotionally loaded.",
      zh: "在持仓或想法变得情绪化之前，先写下什么会改变你的看法。"
    });
  }

  if (high("timeHorizon")) {
    reflections.push({
      en: "A long horizon is valuable when paired with liquidity needs, review dates, and realistic patience.",
      zh: "长期视角很有价值，但需要配合流动性需求、复盘日期和现实的耐心。"
    });
  }

  if (high("behavioralDiscipline")) {
    reflections.push({
      en: "Keep using rules or journals so emotion becomes observable before it becomes action.",
      zh: "继续使用规则或记录，让情绪在变成行动之前先变得可观察。"
    });
  }

  if (reflections.length === 0) {
    return [
      {
        en: "Notice which investment decisions need depth and which only need a simple rule.",
        zh: "留意哪些投资决策需要深度，哪些只需要一个简单规则。"
      },
      {
        en: "Compare your strongest dimensions with the risks that usually accompany them.",
        zh: "把你最强的维度和它们通常伴随的风险放在一起比较。"
      }
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
  const showBigFiveProfile = assessment.slug === "big-five-personality-profile";
  const showBigFiveRadar = showBigFiveProfile && scores.length === 5;
  const showStressRecovery = assessment.slug === "stress-recovery-profile";
  const showDecisionProfile = assessment.slug === "decision-style-profile";
  const showInvestmentStyle = assessment.slug === "investment-style-profile";
  const showWellBeingCheck = assessment.slug === "well-being-check";
  const showSocialEnergy = assessment.slug === "social-energy-profile";
  const showMotivationNeeds = assessment.slug === "motivation-needs-profile";

  const reflections = [
    {
      en: `Notice where ${strongest.label} shows up as ${describeScore(strongest.score)} in your day-to-day choices.`,
      zh: `留意 ${getZh(strongest.label) ?? strongest.label} 如何在你的日常选择中呈现为${getZh(describeScore(strongest.score)) ?? describeScore(strongest.score)}。`
    },
    {
      en: `Look at ${quietest.label} with curiosity. A lower score may reflect context, energy, support, or timing.`,
      zh: `带着好奇看待 ${getZh(quietest.label) ?? quietest.label}。较低分数可能反映情境、能量、支持或时机。`
    },
    {
      en: "Repeat this assessment later if your mood, sleep, workload, or environment changes.",
      zh: "如果情绪、睡眠、工作量或环境发生变化，可以之后再次测评。"
    }
  ];

  if (showBigFiveProfile) {
    const profile = getBigFiveProfile(scores);
    const bigFiveReflections = getBigFiveReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Your Profile" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Your Big Five Personality Profile" />
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {showBigFiveRadar && <BigFiveRadarChart scores={scores} />}
          <div className="grid gap-4">
            {scores.map((score) => (
              <DimensionScoreBar
                description={getBigFiveInterpretation(score)}
                key={score.id}
                label={score.label}
                score={score.score}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">
              <BiInline text="Profile Summary" />
            </h3>
            <p className="mt-3 text-lg font-black text-ink">
              <BiText text={profile.label} />
            </p>
            <p className="mt-2 leading-7 text-ink/70">
              <BiText text={profile.summary} />
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">
              <BiInline text="Reflection" />
            </h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {bigFiveReflections.map((reflection) => (
                <li key={reflection}>
                  - <BiText text={reflection} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">
            <BiInline text="Keep in Mind" />
          </h3>
          <p className="mt-2">
            <BiText text="This result is a trait snapshot, not a permanent identity. Your patterns may shift with context, culture, roles, stress, and experience." />
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
            <BiInline text="Retake" />
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            <BiInline text="Explore Assessments" />
          </Link>
        </div>
      </section>
    );
  }

  if (showStressRecovery) {
    const profile = getStressProfile(scores);
    const stressReflections = getStressReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Your Profile" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Your Stress & Recovery Profile" />
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <BigFiveRadarChart scores={scores} />
          <div className="grid gap-4">
            {scores.map((score) => (
              <DimensionScoreBar
                description={getStressInterpretation(score)}
                key={score.id}
                label={score.label}
                score={score.score}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">
              <BiInline text="Profile Summary" />
            </h3>
            <p className="mt-3 text-lg font-black text-ink">
              <BiText text={profile.label} />
            </p>
            <p className="mt-2 leading-7 text-ink/70">
              <BiText text={profile.summary} />
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">
              <BiInline text="Reflection" />
            </h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {stressReflections.map((reflection) => (
                <li key={reflection}>
                  - <BiText text={reflection} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">
            <BiInline text="Keep in Mind" />
          </h3>
          <p className="mt-2">
            <BiText text="This result is a current snapshot, not a diagnosis. Stress and recovery can change with sleep, workload, health, support, environment, and timing." />
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
            <BiInline text="Retake" />
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            <BiInline text="Explore Assessments" />
          </Link>
        </div>
      </section>
    );
  }

  if (showDecisionProfile) {
    const profile = getDecisionProfile(scores);
    const decisionReflections = getDecisionReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Your Profile" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Your Decision Style Profile" />
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <BigFiveRadarChart scores={scores} />
          <div className="grid gap-4">
            {scores.map((score) => (
              <DimensionScoreBar
                description={getDecisionInterpretation(score)}
                key={score.id}
                label={score.label}
                score={score.score}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">
              <BiInline text="Profile Summary" />
            </h3>
            <p className="mt-3 text-lg font-black text-ink">
              <BiText text={profile.label} />
            </p>
            <p className="mt-2 leading-7 text-ink/70">
              <BiText text={profile.summary} />
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">
              <BiInline text="Reflection" />
            </h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {decisionReflections.map((reflection) => (
                <li key={reflection}>
                  - <BiText text={reflection} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">
            <BiInline text="Keep in Mind" />
          </h3>
          <p className="mt-2">
            <BiText text="This result is a snapshot, not a permanent label. Your answers may change with mood, sleep, stress, experience, and context." />
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
            <BiInline text="Retake" />
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            <BiInline text="Explore Assessments" />
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
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Your Profile" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Your Well-being Check" />
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <BigFiveRadarChart scores={scores} />
          <div className="grid gap-4">
            {scores.map((score) => (
              <DimensionScoreBar
                description={getWellBeingInterpretation(score)}
                key={score.id}
                label={score.label}
                score={score.score}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">
              <BiInline text="Profile Summary" />
            </h3>
            <p className="mt-3 text-lg font-black text-ink">
              <BiText text={profile.label} />
            </p>
            <p className="mt-2 leading-7 text-ink/70">
              <BiText text={profile.summary} />
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">
              <BiInline text="Reflection" />
            </h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {wellBeingReflections.map((reflection) => (
                <li key={reflection}>
                  - <BiText text={reflection} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">
            <BiInline text="Keep in Mind" />
          </h3>
          <p className="mt-2">
            <BiText text="This result is a snapshot, not a permanent label. Your answers may change with mood, sleep, stress, support, workload, health, and context." />
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
            <BiInline text="Retake" />
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            <BiInline text="Explore Assessments" />
          </Link>
        </div>
      </section>
    );
  }

  if (showSocialEnergy) {
    const profile = getSocialProfile(scores);
    const socialReflections = getSocialReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Your Profile" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Your Social Energy Profile" />
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <BigFiveRadarChart scores={scores} />
          <div className="grid gap-4">
            {scores.map((score) => (
              <DimensionScoreBar
                description={getSocialInterpretation(score)}
                key={score.id}
                label={score.label}
                score={score.score}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">
              <BiInline text="Profile Summary" />
            </h3>
            <p className="mt-3 text-lg font-black text-ink">
              <BiText text={profile.label} />
            </p>
            <p className="mt-2 leading-7 text-ink/70">
              <BiText text={profile.summary} />
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">
              <BiInline text="Reflection" />
            </h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {socialReflections.map((reflection) => (
                <li key={reflection}>
                  - <BiText text={reflection} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">
            <BiInline text="Keep in Mind" />
          </h3>
          <p className="mt-2">
            <BiText text="This result is a snapshot, not a permanent label. Your answers may change with energy, stress, context, relationships, and timing." />
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
            <BiInline text="Retake" />
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            <BiInline text="Explore Assessments" />
          </Link>
        </div>
      </section>
    );
  }

  if (showMotivationNeeds) {
    const profile = getMotivationProfile(scores);
    const motivationReflections = getMotivationReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Your Profile" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Your Motivation Needs Profile" />
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <BigFiveRadarChart scores={scores} />
          <div className="grid gap-4">
            {scores.map((score) => (
              <DimensionScoreBar
                description={getMotivationInterpretation(score)}
                key={score.id}
                label={score.label}
                score={score.score}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">
              <BiInline text="Profile Summary" />
            </h3>
            <p className="mt-3 text-lg font-black text-ink">
              <BiText text={profile.label} />
            </p>
            <p className="mt-2 leading-7 text-ink/70">
              <BiText text={profile.summary} />
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">
              <BiInline text="Reflection" />
            </h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {motivationReflections.map((reflection) => (
                <li key={reflection}>
                  - <BiText text={reflection} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">
            <BiInline text="Keep in Mind" />
          </h3>
          <p className="mt-2">
            <BiText text="This result is a snapshot, not a fixed trait. Motivation can shift with health, pressure, feedback, support, environment, and meaning." />
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
            <BiInline text="Retake" />
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments"
          >
            <BiInline text="Explore Assessments" />
          </Link>
        </div>
      </section>
    );
  }

  if (showInvestmentStyle) {
    const similar = getMostSimilarInvestmentMaster(scores);
    const complementary = getMostComplementaryInvestmentMaster(scores);
    const investmentReflections = getInvestmentReflections(scores);

    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
          <BiInline text="Your Profile" />
        </p>
        <h2 className="mt-2 text-3xl font-black">
          <BiText text="Your Investment Style Profile" zh="你的投资风格画像" />
        </h2>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <ProfileRadarChart
            badge="0-100 profile"
            badgeZh="0-100 画像"
            description="Your current pattern across the investment style benchmarks."
            descriptionZh="你当前在投资风格指标上的分布。"
            scores={scores}
            title="Investment Style Radar"
            titleZh="投资风格雷达"
          />
          <div className="grid gap-3">
            {scores.map((score) => {
              const benchmark = investmentStyleBenchmarks.find((item) => item.id === score.id);

              return (
                <div className="rounded-2xl border border-ink/10 bg-white p-4" key={score.id}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-black">
                        <BiText text={score.label} zh={benchmark?.labelZh} />
                      </h3>
                      <p className="mt-1 text-sm font-bold text-ink/50">
                        <BiInline text={getTendencyBand(score.score)} />
                      </p>
                      <p className="mt-1 text-sm leading-6 text-ink/58">
                        <BiText text={score.description} zh={benchmark?.descriptionZh} />
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-sm font-black text-white">
                      {score.score} / 100
                    </span>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-mist">
                    <div className="h-full rounded-full bg-coral" style={{ width: `${score.score}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-ink/10 bg-mist p-5">
            <h3 className="font-black">
              <BiInline text="Profile Summary" />
            </h3>
            <p className="mt-3 leading-7 text-ink/70">
              <BiText
                text={`Your strongest current emphasis is ${strongest.label}, while ${quietest.label} is quieter. The comparison below shows which investment master profile most resembles your pattern and which one may stretch your quieter dimensions.`}
                zh={`你当前最强的强调点是 ${getZh(strongest.label) ?? strongest.label}，而 ${getZh(quietest.label) ?? quietest.label} 相对更安静。下面的比较会显示哪位投资大师的画像最接近你的模式，以及哪位可能补足你较弱的维度。`}
              />
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
            <h3 className="font-black">
              <BiInline text="Reflection" />
            </h3>
            <ul className="mt-3 space-y-2 leading-7 text-ink/70">
              {investmentReflections.map((reflection) => (
                <li key={reflection.en}>
                  - <BiText text={reflection.en} zh={reflection.zh} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-ink/10 bg-white p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/46">
              <BiInline text="Most similar master" zh="最相似的大师" />
            </p>
            <h3 className="mt-2 text-2xl font-black">
              <BiText text={similar.master.name} zh={similar.master.nameZh} />
            </h3>
            <p className="mt-1 font-bold text-ink/58">
              {Math.round(similar.similarity * 100)}% <BiInline text="style similarity" zh="风格相似度" />
            </p>
            <p className="mt-3 leading-7 text-ink/70">
              <BiText text={similar.master.shortStyle} zh={similar.master.shortStyleZh} />
            </p>
            <Link
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white"
              href={`/investing/masters/${similar.master.slug}`}
            >
              <BiInline text="View profile" zh="查看画像" />
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-ink/10 bg-white p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/46">
              <BiInline text="Most complementary master" zh="最互补的大师" />
            </p>
            <h3 className="mt-2 text-2xl font-black">
              <BiText text={complementary.master.name} zh={complementary.master.nameZh} />
            </h3>
            <p className="mt-3 leading-7 text-ink/70">
              <BiText text={complementary.master.shortStyle} zh={complementary.master.shortStyleZh} />
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {complementary.dimensions.map((dimension) => (
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-ink/62" key={dimension.id}>
                  <BiInline text={dimension.label} zh={dimension.labelZh} />
                </span>
              ))}
            </div>
            <Link
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold text-ink"
              href={`/investing/masters/${complementary.master.slug}`}
            >
              <BiInline text="View profile" zh="查看画像" />
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
          <h3 className="font-black text-ink">
            <BiInline text="Keep in Mind" />
          </h3>
          <p className="mt-2">
            <BiText
              text="This result is a snapshot for learning and self-reflection, not financial advice or a permanent label. Your answers may change with market conditions, experience, stress, time horizon, and goals."
              zh="这个结果是用于学习和自我反思的快照，不是金融建议，也不是永久标签。你的回答可能会随市场环境、经验、压力、时间跨度和目标变化。"
            />
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
            <BiInline text="Retake" />
          </button>
          <Link
            className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/investing/style-index"
          >
            <BiInline text="Explore Investment Style Index" zh="探索投资风格指数" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
        <BiInline text="Your Profile" />
      </p>
      <h2 className="mt-2 text-3xl font-black">
        <BiText text={assessment.title} />
      </h2>

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
          <h3 className="font-black">
            <BiInline text="Profile Summary" />
          </h3>
          <p className="mt-3 leading-7 text-ink/70">
            <BiText
              text={`Your answers suggest that ${strongest.label} is the strongest signal in this snapshot, while ${quietest.label} is quieter. This may reflect your current habits, environment, energy level, or the kind of situations you have been facing recently.`}
              zh={`你的回答显示，在这次快照中 ${getZh(strongest.label) ?? strongest.label} 是最强信号，而 ${getZh(quietest.label) ?? quietest.label} 相对安静。这可能反映你近期的习惯、环境、能量水平或正在面对的情境。`}
            />
          </p>
        </section>

        <section className="rounded-[1.5rem] border border-ink/10 bg-citron/35 p-5">
          <h3 className="font-black">
            <BiInline text="Reflection" />
          </h3>
          <ul className="mt-3 space-y-2 leading-7 text-ink/70">
            {reflections.map((reflection) => (
              <li key={reflection.en}>
                - <BiText text={reflection.en} zh={reflection.zh} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="mt-6 rounded-2xl bg-white p-4 text-sm font-medium leading-7 text-ink/68">
        <BiText
          text={`This result is a snapshot, not a permanent label. Your answers may change with mood, sleep, stress, and context. ${assessment.disclaimer}`}
          zh={`这个结果是一张快照，不是永久标签。你的回答可能会随着情绪、睡眠、压力和情境变化。${getZh(assessment.disclaimer) ?? assessment.disclaimer}`}
        />
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
          <BiInline text="Retake" />
        </button>
        <Link
          className="focus-ring inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          href="/assessments"
        >
          <BiInline text="Explore Assessments" />
        </Link>
      </div>
    </section>
  );
}
