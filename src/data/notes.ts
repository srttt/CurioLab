import type { Note } from "@/types/content";

export const noteCategories = ["All", "Personality", "Mood", "Attention", "Decision", "Social", "Motivation"] as const;

export const notes: Note[] = [
  {
    title: "Big Five Personality: The Five Major Traits",
    slug: "big-five-personality",
    category: "Personality",
    duration: "4 min",
    description:
      "A simple guide to the five major personality dimensions: openness, conscientiousness, extraversion, agreeableness, and neuroticism.",
    type: "note",
    intro:
      "The Big Five is one of the most widely used ways to describe personality, but it works more like a set of sliders than a set of boxes.",
    related: [
      { label: "Try Thinking Style Test", href: "/tests/thinking-style" },
      { label: "Try Social Battery Test", href: "/tests/social-battery" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "The Big Five describes personality across five broad dimensions: openness, conscientiousness, extraversion, agreeableness, and neuroticism, sometimes called emotional sensitivity. Instead of saying you are one fixed type, it asks where your usual patterns tend to sit on each dimension."
      },
      {
        heading: "Simple example",
        body:
          "Someone might be very open to new ideas, moderately organized, socially flexible, warm in close relationships, and sensitive under stress. That profile says more than a single label because it leaves room for mixed, changing, human patterns."
      },
      {
        heading: "Why it matters",
        body:
          "Big Five thinking can help you notice what environments fit you. High openness may enjoy novelty. High conscientiousness may like clear plans. Extraversion can shape social energy, agreeableness can affect cooperation, and neuroticism can influence how strongly stress is felt."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "The Thinking Style Test and Social Battery Test both touch parts of this model. They are playful prompts, not formal personality measurement, but they can help you notice your everyday preferences."
      },
      {
        heading: "Keep in mind",
        body:
          "A trait is not a destiny. Culture, sleep, stress, relationships, and the situation all change how personality shows up. Use the Big Five as a map for reflection, not a permanent name tag."
      }
    ]
  },
  {
    title: "Why MBTI Feels Accurate",
    slug: "why-mbti-feels-accurate",
    category: "Personality",
    duration: "3 min",
    description: "Why type-based personality tests often feel personal, memorable, and surprisingly accurate.",
    type: "note",
    intro: "Type labels feel good because they turn messy self-knowledge into a short, memorable story.",
    related: [
      { label: "Read Big Five Personality", href: "/lab-notes/big-five-personality" },
      { label: "Try Thinking Style Test", href: "/tests/thinking-style" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "MBTI-style systems group people into personality types. They are popular because types are easy to remember, easy to share, and often written in language that feels personal and positive."
      },
      {
        heading: "Simple example",
        body:
          "A description like you are thoughtful, independent, and sometimes misunderstood can feel very specific, even though many people can recognize themselves in it. This is related to the Barnum effect: broad statements can feel custom-made when they match something we already believe."
      },
      {
        heading: "Why it matters",
        body:
          "Type systems can be useful as conversation tools. They give people language for habits, needs, and social differences. That can make it easier to say, I need quiet time, or I like to think before I answer."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "Use MBTI-like ideas lightly. The Thinking Style Test is designed for reflection, not diagnosis. For a more flexible model, compare it with the Big Five note."
      },
      {
        heading: "Keep in mind",
        body:
          "MBTI should not be treated as a strict scientific diagnosis or a hiring filter. A type can start a useful question, but it should not decide your worth, ability, relationships, or future."
      }
    ]
  },
  {
    title: "Attachment Theory: How We Connect with Others",
    slug: "attachment-theory",
    category: "Social",
    duration: "4 min",
    description:
      "A simple explanation of how early connection patterns can shape the way people seek closeness, safety, and emotional support.",
    type: "note",
    intro: "Attachment theory looks at how people seek closeness, safety, and reassurance in important relationships.",
    related: [
      { label: "Try Social Battery Test", href: "/tests/social-battery" },
      { label: "Try Rest Type Test", href: "/tests/rest-type" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "Attachment theory describes patterns people may develop around connection. Common tendencies include secure, anxious, avoidant, and disorganized attachment. These are not permanent labels, but broad patterns in how closeness and distance can feel."
      },
      {
        heading: "Simple example",
        body:
          "If a message goes unanswered, one person may assume everything is fine, another may worry they did something wrong, and another may pull away before feeling rejected. The same moment can activate different safety strategies."
      },
      {
        heading: "Why it matters",
        body:
          "Attachment patterns can influence relationships, social safety, reactions to being ignored, and the need for space or reassurance. Noticing the pattern can make reactions feel less mysterious and more workable."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "The Social Battery Test and Rest Type Test can help you reflect on what kind of connection or recovery feels supportive right now."
      },
      {
        heading: "Keep in mind",
        body:
          "No one is only one attachment style in every relationship. Patterns can change with trust, context, skill, and support. This note is for reflection, not relationship diagnosis."
      }
    ]
  },
  {
    title: "Emotion Regulation: How Feelings Change",
    slug: "emotion-regulation",
    category: "Mood",
    duration: "4 min",
    description: "How emotions are shaped by situations, attention, interpretation, body state, and response.",
    type: "note",
    intro: "Emotions usually unfold through a process, which means there are often several places where they can shift.",
    related: [
      { label: "Try Mood Color Test", href: "/tests/mood-color" },
      { label: "Try Rest Type Test", href: "/tests/rest-type" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "Emotion regulation is the way feelings are shaped by situation, attention, interpretation, and response. It is not the same as suppressing emotion. It is more like understanding the route a feeling took to arrive."
      },
      {
        heading: "Simple example",
        body:
          "If someone replies with a short message, you might interpret it as irritation, busyness, or simple efficiency. Each interpretation can create a different emotional reaction, even though the message stayed the same."
      },
      {
        heading: "Why it matters",
        body:
          "When you understand the process, you have more options. You might change the situation, shift attention, test your interpretation, calm your body, or choose a response that fits your values."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "The Mood Color Test offers a quick check-in. The Rest Type Test can help you ask what kind of recovery your current state may need."
      },
      {
        heading: "Keep in mind",
        body:
          "Regulating emotion does not mean forcing yourself to feel fine. Some feelings are signals that need care, boundaries, or help. CurioLab is not a substitute for professional support."
      }
    ]
  },
  {
    title: "Yerkes-Dodson Law: Pressure and Performance",
    slug: "yerkes-dodson-law",
    category: "Mood",
    duration: "3 min",
    description: "Why a little pressure can help performance, but too much pressure can make focus and memory worse.",
    type: "note",
    intro: "Pressure can help or hurt depending on how much of it your mind and body are carrying.",
    related: [
      { label: "Play Reaction Speed Test", href: "/games/reaction-speed" },
      { label: "Play Stroop Color Challenge", href: "/games/stroop-color" },
      { label: "Try Rest Type Test", href: "/tests/rest-type" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "The Yerkes-Dodson law describes a curved relationship between arousal and performance. Too little pressure can feel flat. A moderate amount can sharpen attention. Too much can overload focus, memory, and judgment."
      },
      {
        heading: "Simple example",
        body:
          "A small deadline may help you start. A huge deadline with no sleep may make the same task feel impossible. The idea is often drawn as an inverted U, with the best performance somewhere in the middle."
      },
      {
        heading: "Why it matters",
        body:
          "This model explains why motivation is not simply more pressure. For difficult or unfamiliar tasks, people usually need more calm and structure. For simple tasks, a little urgency may help."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "Reaction Speed and Stroop Color Challenge both show how alertness and attention interact. Rest Type Test can help you think about when the pressure meter is too high."
      },
      {
        heading: "Keep in mind",
        body:
          "The curve is a useful simplification, not a personal diagnosis. Chronic stress, burnout, or panic deserves real support, not just productivity advice."
      }
    ]
  },
  {
    title: "Stroop Effect: When Words Fight Colors",
    slug: "stroop-effect",
    category: "Attention",
    duration: "3 min",
    description: "Why your brain struggles when the meaning of a word conflicts with the color you see.",
    type: "note",
    intro: "The Stroop effect is a tiny attention conflict you can feel almost instantly.",
    related: [{ label: "Play Stroop Color Challenge", href: "/games/stroop-color" }],
    sections: [
      {
        heading: "What is it?",
        body:
          "The Stroop effect appears when the meaning of a word conflicts with the color it is printed in. If the word BLUE appears in red, naming the ink color can take longer than expected."
      },
      {
        heading: "Simple example",
        body:
          "Your goal is to say red, but your reading system automatically notices BLUE. The two signals compete for a moment, and your attention has to choose the task-relevant one."
      },
      {
        heading: "Why it matters",
        body:
          "The effect shows that the mind is not a simple camera. Some mental processes, like reading, become automatic. Attention control helps manage conflicts between what is automatic and what the task asks for."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "The Stroop Color Challenge turns this classic effect into a quick game. Slower answers are not failure; they are the effect doing exactly what it does."
      },
      {
        heading: "Keep in mind",
        body:
          "A game score is not a measure of intelligence or attention health. Fatigue, device speed, color perception, and distraction can all change performance."
      }
    ]
  },
  {
    title: "Working Memory: Your Mind's Temporary Workspace",
    slug: "working-memory",
    category: "Attention",
    duration: "4 min",
    description: "Working memory is the mental space you use to hold and process information for a short time.",
    type: "note",
    intro: "Working memory is the small mental workspace you use while thinking in real time.",
    related: [{ label: "Play Memory Flip Game", href: "/games/memory-flip" }],
    sections: [
      {
        heading: "What is it?",
        body:
          "Working memory is not long-term memory. It is the short-term workspace you use to hold information while doing something with it, like remembering a number long enough to type it or keeping track of steps in a problem."
      },
      {
        heading: "Simple example",
        body:
          "When you do mental math, follow a long sentence, compare two options, or remember where matching cards are, working memory is active. It holds the pieces while you arrange them."
      },
      {
        heading: "Why it matters",
        body:
          "Working memory has limited capacity. Stress, fatigue, noise, and interruptions can crowd the workspace, which is why a simple task can feel harder when you are overloaded."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "Memory Flip Game gives a playful version of this challenge. A future focus challenge could explore the same idea with distraction and attention switching."
      },
      {
        heading: "Keep in mind",
        body:
          "A memory game is a snapshot of one moment, not a full cognitive profile. Sleep, practice, screen size, and distractions all matter."
      }
    ]
  },
  {
    title: "Dual Process Theory: Fast Thinking and Slow Thinking",
    slug: "dual-process-theory",
    category: "Decision",
    duration: "4 min",
    description: "A simple way to understand intuitive fast thinking and slower, more deliberate reasoning.",
    type: "note",
    intro: "Dual process theory gives a simple language for two modes of thought: quick intuition and slower analysis.",
    related: [
      { label: "Try Decision Style Test", href: "/tests/decision-style" },
      { label: "Read Cognitive Biases", href: "/lab-notes/cognitive-biases" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "The theory is often described as System 1 and System 2. System 1 is fast, automatic, and intuitive. System 2 is slower, effortful, and more analytical. Both are useful."
      },
      {
        heading: "Simple example",
        body:
          "You may instantly sense that a room feels tense. That is fast thinking. But comparing budgets, checking assumptions, or solving a logic puzzle usually asks for slower thinking."
      },
      {
        heading: "Why it matters",
        body:
          "Fast thinking is not bad, and slow thinking is not always better. The skill is knowing when intuition is enough and when the situation deserves a pause, a calculation, or a second view."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "Decision Style Test explores how you approach uncertainty. Cognitive Biases shows where mental shortcuts can help or mislead."
      },
      {
        heading: "Keep in mind",
        body:
          "Real thinking is messier than two neat systems. Treat the model as a helpful lens, not a complete map of the mind."
      }
    ]
  },
  {
    title: "Cognitive Biases: The Shortcuts of the Mind",
    slug: "cognitive-biases",
    category: "Decision",
    duration: "5 min",
    description: "How mental shortcuts help us decide quickly, but sometimes lead us in the wrong direction.",
    type: "note",
    intro: "Cognitive biases are mental shortcuts that can be useful, but not always accurate.",
    related: [
      { label: "Try Decision Style Test", href: "/tests/decision-style" },
      { label: "Read Dual Process Theory", href: "/lab-notes/dual-process-theory" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "A cognitive bias is not proof that people are foolish. It is often a side effect of the brain trying to make quick judgments with limited time, limited information, and limited energy."
      },
      {
        heading: "Simple example",
        body:
          "Confirmation bias makes us notice evidence that supports what we already think. Anchoring makes an early number pull later judgments. Availability bias makes vivid examples feel more common. Sunk cost fallacy keeps us invested because we already spent effort. Spotlight effect makes us overestimate how much others notice us. Halo effect lets one good trait color the whole picture."
      },
      {
        heading: "Why it matters",
        body:
          "Biases can be useful shortcuts in familiar situations, but they can mislead decisions when emotions are high, evidence is thin, or the stakes are large."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "Decision Style Test can help you notice how you choose under uncertainty. Dual Process Theory explains why some shortcuts happen quickly and automatically."
      },
      {
        heading: "Keep in mind",
        body:
          "Knowing a bias does not make anyone bias-free. The practical move is to slow down, seek disconfirming evidence, and make important decisions easier to review."
      }
    ]
  },
  {
    title: "Self-Determination Theory: What Motivation Needs",
    slug: "self-determination-theory",
    category: "Motivation",
    duration: "4 min",
    description: "Why motivation grows when people feel autonomy, competence, and connection.",
    type: "note",
    intro: "Self-determination theory says motivation grows best when three basic needs are supported.",
    related: [
      { label: "Try Rest Type Test", href: "/tests/rest-type" },
      { label: "Try Mood Color Test", href: "/tests/mood-color" }
    ],
    sections: [
      {
        heading: "What is it?",
        body:
          "Self-determination theory focuses on motivation. It highlights three psychological needs: autonomy, the sense that you have meaningful choice; competence, the sense that you can make progress; and relatedness, the sense that you are connected to others."
      },
      {
        heading: "Simple example",
        body:
          "A project feels different when you chose the goal, understand how to improve, and feel supported by people around you. Without those pieces, even a simple task can feel heavy."
      },
      {
        heading: "Why it matters",
        body:
          "When autonomy, competence, and relatedness are supported, people are more likely to feel internal motivation. When they are missing, people may feel tired, resistant, or disconnected."
      },
      {
        heading: "Try it on CurioLab",
        body:
          "Rest Type Test can help you reflect on what kind of need may be underfed right now. Mood Color Test offers a quick emotional check-in before choosing your next step."
      },
      {
        heading: "Keep in mind",
        body:
          "Motivation is not only willpower. Environment, health, support, and pressure all matter. This model is a guide for reflection, not a judgment."
      }
    ]
  }
];

export function getNote(slug: string) {
  return notes.find((item) => item.slug === slug);
}
