import type { Note } from "@/types/content";

export const notes: Note[] = [
  {
    title: "Why MBTI Feels Accurate",
    slug: "why-mbti-feels-accurate",
    category: "Personality",
    duration: "3 min",
    description: "Why type-based personality tests often feel surprisingly personal.",
    type: "note",
    intro: "Type labels can feel personal because they give a clean shape to messy everyday patterns.",
    body: [
      "Personality type systems often feel accurate because they use broad descriptions that many people can recognize in themselves. A sentence like you are thoughtful but sometimes need space has enough room for different lives to fit inside it.",
      "They also work because people enjoy stories about identity. A type can become a small mirror, giving you language for patterns you already suspected were there. That does not make the label useless, but it does mean the label is a starting point instead of a final answer.",
      "The best way to use a type result is lightly. Ask what it helps you notice. Does it explain how you recover energy, handle conflict, or choose work? Keep the useful observations and let the rigid parts go.",
      "CurioLab treats type-like results as playful reflection. They can spark a good question, but they should not define your ability, worth, relationships, or future."
    ]
  },
  {
    title: "What the Big Five Actually Measures",
    slug: "big-five-explained",
    category: "Personality",
    duration: "4 min",
    description: "A simple explanation of the five major personality dimensions.",
    type: "note",
    intro: "The Big Five describes personality as five broad dimensions rather than fixed boxes.",
    body: [
      "The Big Five model looks at openness, conscientiousness, extraversion, agreeableness, and emotional stability. Instead of placing people into a type, it describes where someone may fall on each spectrum.",
      "That matters because people are rarely all one thing. You might be highly curious, moderately organized, socially flexible, warm with close friends, and sensitive under stress. A profile like that is more nuanced than a single label.",
      "The model is useful for noticing tendencies, not predicting every action. Context, culture, fatigue, goals, and relationships all shape how personality shows up in real life.",
      "A good personality result should help you ask better questions: what environments help you focus, what drains you, and what strengths become easier to use when your day is designed well?"
    ]
  },
  {
    title: "Why Your Mood Changes During the Day",
    slug: "why-mood-changes",
    category: "Mood",
    duration: "3 min",
    description: "Mood is shaped by sleep, stress, attention, body state, and social feedback.",
    type: "note",
    intro: "Mood is not a single switch. It is a moving signal built from many small inputs.",
    body: [
      "Your mood can shift because your body and attention are constantly updating. Sleep, hunger, caffeine, movement, temperature, and light can all change how the same situation feels.",
      "Stress also narrows attention. When your mind is overloaded, neutral details may look more threatening or annoying. After rest, the same details can feel manageable again.",
      "Social feedback matters too. A warm message, a tense meeting, or a moment of being ignored can all change the story your brain tells about the day.",
      "A mood check is most useful when it stays gentle. Instead of asking what is wrong with me, try asking what inputs might be shaping this feeling right now."
    ]
  },
  {
    title: "Why Doing Nothing Can Still Feel Exhausting",
    slug: "doing-nothing-exhausting",
    category: "Stress",
    duration: "3 min",
    description: "Mental fatigue can come from rumination, uncertainty, and emotional load.",
    type: "note",
    intro: "Rest is not always restful when the mind keeps running in the background.",
    body: [
      "Doing nothing can feel exhausting when your attention is still busy. Rumination, unfinished decisions, and uncertainty can keep the brain in a monitoring mode even when your body is still.",
      "This is why scrolling, waiting, or lying down can sometimes leave you feeling more tired. The activity looks passive from the outside, but internally your mind may be sorting, rehearsing, comparing, or bracing.",
      "Different kinds of tiredness need different kinds of rest. Physical fatigue may need sleep or movement. Emotional fatigue may need safety and connection. Cognitive fatigue may need fewer choices and clearer boundaries.",
      "If nothing helps for a long time, it can be worth talking to a qualified professional. CurioLab notes are for curiosity, not diagnosis."
    ]
  },
  {
    title: "What Is the Stroop Effect?",
    slug: "stroop-effect",
    category: "Attention",
    duration: "2 min",
    description: "Why your brain struggles when word meaning and color conflict.",
    type: "note",
    intro: "The Stroop effect appears when automatic reading interferes with naming a color.",
    body: [
      "In a Stroop task, you might see the word BLUE printed in red ink. The goal is to say the ink color, not read the word. That sounds simple until your reading system jumps in first.",
      "Reading is highly practiced for many people, so word meaning can become automatic. Naming the ink color takes attention, and the mismatch creates a tiny conflict your brain has to resolve.",
      "This makes the Stroop task a useful demonstration of attention and interference. It shows that the mind is not just receiving information. It is constantly selecting which signal matters for the task.",
      "In CurioLab, the Stroop challenge is playful. A slower response is not a flaw. It is evidence that your brain is doing several fast things at once."
    ]
  }
];

export function getNote(slug: string) {
  return notes.find((item) => item.slug === slug);
}
