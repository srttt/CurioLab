import type { AssessmentCategory, AssessmentItem } from "@/types/assessment";

export const assessmentCategories: ("All" | AssessmentCategory)[] = [
  "All",
  "Personality",
  "Well-being",
  "Stress",
  "Social",
  "Decision",
  "Motivation"
];

export const assessmentDisclaimer =
  "CurioLab assessments are for learning and self-reflection. They are not medical or psychological diagnosis.";

export const assessments: AssessmentItem[] = [
  {
    title: "Big Five Personality Profile",
    slug: "big-five-personality-profile",
    category: "Personality",
    duration: "8 min",
    description:
      "A dimensional personality profile based on five broad traits: openness, conscientiousness, extraversion, agreeableness, and emotional sensitivity.",
    basis: "Inspired by Big Five personality trait research.",
    disclaimer: assessmentDisclaimer,
    type: "assessment",
    dimensions: [
      {
        id: "openness",
        label: "Openness",
        description: "Curiosity, imagination, aesthetic interest, and comfort with new ideas."
      },
      {
        id: "conscientiousness",
        label: "Conscientiousness",
        description: "Planning, follow-through, reliability, and preference for structure."
      },
      {
        id: "extraversion",
        label: "Extraversion",
        description: "Social energy, expressiveness, stimulation seeking, and outward engagement."
      },
      {
        id: "agreeableness",
        label: "Agreeableness",
        description: "Cooperation, warmth, patience, and concern for other people's needs."
      },
      {
        id: "emotional-sensitivity",
        label: "Emotional Sensitivity",
        description: "How strongly stress, uncertainty, and emotional signals tend to register."
      }
    ],
    questions: [
      { id: "big-five-01", dimension: "openness", text: "I enjoy exploring ideas that are unfamiliar or unusual." },
      { id: "big-five-02", dimension: "openness", text: "Art, music, stories, or design can strongly catch my attention." },
      { id: "big-five-03", dimension: "openness", text: "I like trying new ways to solve a problem." },
      { id: "big-five-04", dimension: "openness", text: "I prefer familiar routines over new experiences.", reverse: true },
      { id: "big-five-05", dimension: "openness", text: "I often ask what else could be true in a situation." },
      { id: "big-five-06", dimension: "conscientiousness", text: "I usually make a plan before starting something important." },
      { id: "big-five-07", dimension: "conscientiousness", text: "I follow through on tasks even when they become boring." },
      { id: "big-five-08", dimension: "conscientiousness", text: "I keep track of details that other people might miss." },
      { id: "big-five-09", dimension: "conscientiousness", text: "I often leave tasks until the last possible moment.", reverse: true },
      { id: "big-five-10", dimension: "conscientiousness", text: "Clear goals and checklists help me do my best work." },
      { id: "big-five-11", dimension: "extraversion", text: "Social settings often give me energy." },
      { id: "big-five-12", dimension: "extraversion", text: "I usually feel comfortable starting conversations." },
      { id: "big-five-13", dimension: "extraversion", text: "I like environments with activity, movement, or lively energy." },
      { id: "big-five-14", dimension: "extraversion", text: "After social time, I usually need a long quiet reset.", reverse: true },
      { id: "big-five-15", dimension: "extraversion", text: "I tend to think out loud when working through ideas." },
      { id: "big-five-16", dimension: "agreeableness", text: "I try to understand other people's needs before responding." },
      { id: "big-five-17", dimension: "agreeableness", text: "Cooperation feels more natural to me than competition." },
      { id: "big-five-18", dimension: "agreeableness", text: "I can be patient when someone is having a hard time." },
      { id: "big-five-19", dimension: "agreeableness", text: "I often assume people should handle problems on their own.", reverse: true },
      { id: "big-five-20", dimension: "agreeableness", text: "I notice when a group needs more care or encouragement." },
      {
        id: "big-five-21",
        dimension: "emotional-sensitivity",
        text: "My mood can shift strongly when something stressful happens."
      },
      {
        id: "big-five-22",
        dimension: "emotional-sensitivity",
        text: "Uncertainty tends to stay on my mind."
      },
      {
        id: "big-five-23",
        dimension: "emotional-sensitivity",
        text: "I pick up emotional tension quickly."
      },
      {
        id: "big-five-24",
        dimension: "emotional-sensitivity",
        text: "I can usually let stressful moments pass without much inner reaction.",
        reverse: true
      },
      {
        id: "big-five-25",
        dimension: "emotional-sensitivity",
        text: "Feedback, conflict, or pressure can affect me for a while."
      }
    ],
    relatedNotes: [
      { label: "Read Big Five Personality", href: "/lab-notes/big-five-personality" },
      { label: "Read Why MBTI Feels Accurate", href: "/lab-notes/why-mbti-feels-accurate" }
    ]
  },
  {
    title: "Well-being Check",
    slug: "well-being-check",
    category: "Well-being",
    duration: "3 min",
    description:
      "A brief self-reflection check for recent positive mood, calmness, energy, interest, and daily functioning.",
    basis: "Inspired by well-being self-report frameworks.",
    disclaimer: assessmentDisclaimer,
    type: "assessment",
    dimensions: [
      { id: "positive-mood", label: "Positive Mood", description: "Recent access to pleasant, hopeful, or warm emotional states." },
      { id: "calmness", label: "Calmness", description: "A sense of steadiness, ease, and room to breathe." },
      { id: "energy", label: "Energy", description: "Felt vitality and available effort for everyday tasks." },
      { id: "interest", label: "Interest", description: "Curiosity, engagement, and connection to activities." },
      { id: "daily-functioning", label: "Daily Functioning", description: "How manageable ordinary routines have felt recently." }
    ],
    questions: [
      { id: "well-being-01", dimension: "positive-mood", text: "Recently, I have had moments of genuine enjoyment." },
      { id: "well-being-02", dimension: "positive-mood", text: "It has been hard to notice anything pleasant lately.", reverse: true },
      { id: "well-being-03", dimension: "calmness", text: "I have felt able to settle my mind when I need to." },
      { id: "well-being-04", dimension: "calmness", text: "My days have felt constantly tense or rushed.", reverse: true },
      { id: "well-being-05", dimension: "energy", text: "I have had enough energy for the basics of my day." },
      { id: "well-being-06", dimension: "energy", text: "Even small tasks have felt unusually effortful.", reverse: true },
      { id: "well-being-07", dimension: "interest", text: "I have felt interested in at least a few things I do." },
      { id: "well-being-08", dimension: "interest", text: "Most activities have felt flat or disconnected.", reverse: true },
      { id: "well-being-09", dimension: "daily-functioning", text: "My usual routines have felt mostly manageable." },
      { id: "well-being-10", dimension: "daily-functioning", text: "I have struggled to keep up with ordinary routines.", reverse: true }
    ],
    relatedNotes: [
      { label: "Read Emotion Regulation", href: "/lab-notes/emotion-regulation" },
      { label: "Read Self-Determination Theory", href: "/lab-notes/self-determination-theory" }
    ]
  },
  {
    title: "Stress & Recovery Profile",
    slug: "stress-recovery-profile",
    category: "Stress",
    duration: "5 min",
    description:
      "A self-assessment for perceived pressure, recovery capacity, emotional load, physical fatigue, and sense of control.",
    basis: "Inspired by stress appraisal, recovery, and performance psychology.",
    disclaimer: assessmentDisclaimer,
    type: "assessment",
    dimensions: [
      { id: "perceived-pressure", label: "Perceived Pressure", description: "How intense recent demands and expectations feel." },
      { id: "recovery-capacity", label: "Recovery Capacity", description: "How much your current routines help you restore energy." },
      { id: "emotional-load", label: "Emotional Load", description: "The amount of emotional material your mind is carrying." },
      { id: "physical-fatigue", label: "Physical Fatigue", description: "Body-level tiredness, heaviness, and need for rest." },
      { id: "sense-of-control", label: "Sense of Control", description: "How much agency and choice you feel in your current situation." }
    ],
    questions: [
      { id: "stress-01", dimension: "perceived-pressure", text: "My current responsibilities feel heavier than usual." },
      { id: "stress-02", dimension: "perceived-pressure", text: "I feel like several things need my attention at once." },
      { id: "stress-03", dimension: "perceived-pressure", text: "I have enough breathing room around my responsibilities.", reverse: true },
      { id: "stress-04", dimension: "recovery-capacity", text: "Rest or downtime has actually helped me recover lately.", reverse: true },
      { id: "stress-05", dimension: "recovery-capacity", text: "Even after resting, I still feel mentally on call." },
      { id: "stress-06", dimension: "recovery-capacity", text: "I have routines that help me reset when pressure rises.", reverse: true },
      { id: "stress-07", dimension: "emotional-load", text: "I am carrying emotions that feel difficult to put down." },
      { id: "stress-08", dimension: "emotional-load", text: "Small setbacks have felt more emotionally intense than usual." },
      { id: "stress-09", dimension: "emotional-load", text: "I can usually name what I am feeling and what I need.", reverse: true },
      { id: "stress-10", dimension: "physical-fatigue", text: "My body has felt tired, tense, or heavy." },
      { id: "stress-11", dimension: "physical-fatigue", text: "I have had enough physical energy for ordinary tasks.", reverse: true },
      { id: "stress-12", dimension: "physical-fatigue", text: "I notice stress showing up in my body." },
      { id: "stress-13", dimension: "sense-of-control", text: "I can influence at least some parts of my current situation.", reverse: true },
      { id: "stress-14", dimension: "sense-of-control", text: "My days feel mostly controlled by outside demands." },
      { id: "stress-15", dimension: "sense-of-control", text: "I can choose a useful next step when things feel crowded.", reverse: true }
    ],
    relatedNotes: [
      { label: "Read Emotion Regulation", href: "/lab-notes/emotion-regulation" },
      { label: "Read Yerkes-Dodson Law", href: "/lab-notes/yerkes-dodson-law" },
      { label: "Read Self-Determination Theory", href: "/lab-notes/self-determination-theory" }
    ]
  },
  {
    title: "Social Energy Profile",
    slug: "social-energy-profile",
    category: "Social",
    duration: "5 min",
    description: "A profile of how you use, spend, and recover social energy.",
    basis: "Inspired by personality and social energy concepts.",
    disclaimer: assessmentDisclaimer,
    type: "assessment",
    dimensions: [
      { id: "social-initiation", label: "Social Initiation", description: "Comfort starting contact, conversation, or shared plans." },
      { id: "recovery-need", label: "Recovery Need", description: "How much downtime you need after interaction." },
      {
        id: "group-stimulation",
        label: "Group Stimulation Tolerance",
        description: "How well you handle lively, crowded, or fast-moving social settings."
      },
      {
        id: "deep-conversation",
        label: "Deep Conversation Preference",
        description: "Preference for meaningful, focused, or one-on-one exchange."
      },
      { id: "solitude-recovery", label: "Solitude Recovery", description: "How strongly alone time restores your energy." }
    ],
    questions: [
      { id: "social-01", dimension: "social-initiation", text: "I often feel comfortable being the first person to reach out." },
      { id: "social-02", dimension: "social-initiation", text: "Starting conversations usually feels natural to me." },
      { id: "social-03", dimension: "social-initiation", text: "I usually wait for others to initiate social plans.", reverse: true },
      { id: "social-04", dimension: "recovery-need", text: "After social time, I often need quiet before I feel like myself again." },
      { id: "social-05", dimension: "recovery-need", text: "Back-to-back social plans can drain me quickly." },
      { id: "social-06", dimension: "recovery-need", text: "I can usually move from one social setting to another without much reset.", reverse: true },
      { id: "social-07", dimension: "group-stimulation", text: "Large or lively groups can feel energizing." },
      { id: "social-08", dimension: "group-stimulation", text: "Noisy social environments become overwhelming quickly.", reverse: true },
      { id: "social-09", dimension: "group-stimulation", text: "I can keep my energy in group settings for a while." },
      { id: "social-10", dimension: "deep-conversation", text: "I prefer a few meaningful conversations over many light ones." },
      { id: "social-11", dimension: "deep-conversation", text: "I feel most connected when a conversation has depth." },
      { id: "social-12", dimension: "deep-conversation", text: "I enjoy keeping most conversations casual and surface-level.", reverse: true },
      { id: "social-13", dimension: "solitude-recovery", text: "Time alone helps me restore my social energy." },
      { id: "social-14", dimension: "solitude-recovery", text: "I need regular unscheduled time to feel balanced." },
      { id: "social-15", dimension: "solitude-recovery", text: "Being alone for a while usually leaves me more restless than restored.", reverse: true }
    ],
    relatedNotes: [
      { label: "Read Attachment Theory", href: "/lab-notes/attachment-theory" },
      { label: "Read Big Five Personality", href: "/lab-notes/big-five-personality" }
    ]
  },
  {
    title: "Decision Style Profile",
    slug: "decision-style-profile",
    category: "Decision",
    duration: "5 min",
    description:
      "A self-assessment for intuitive thinking, analytical thinking, risk sensitivity, loss sensitivity, and information overload.",
    basis: "Inspired by dual process theory and cognitive bias research.",
    disclaimer: assessmentDisclaimer,
    type: "assessment",
    dimensions: [
      { id: "intuitive", label: "Intuitive Decision-Making", description: "Trust in fast impressions, gut feelings, and pattern recognition." },
      { id: "analytical", label: "Analytical Decision-Making", description: "Preference for evidence, comparison, structure, and deliberate reasoning." },
      { id: "risk-sensitivity", label: "Risk Sensitivity", description: "How strongly uncertainty or possible downside shapes choices." },
      { id: "loss-sensitivity", label: "Loss Sensitivity", description: "How strongly potential loss, regret, or wasted effort pulls attention." },
      { id: "information-overload", label: "Information Overload", description: "How easily too much information slows or clouds decisions." }
    ],
    questions: [
      { id: "decision-01", dimension: "intuitive", text: "My first impression is often useful when making a choice." },
      { id: "decision-02", dimension: "intuitive", text: "I can usually sense which option fits before I can explain why." },
      { id: "decision-03", dimension: "intuitive", text: "I distrust gut feelings and prefer to ignore them.", reverse: true },
      { id: "decision-04", dimension: "analytical", text: "I like comparing options before I commit." },
      { id: "decision-05", dimension: "analytical", text: "I feel better when I can see the reasons behind a decision." },
      { id: "decision-06", dimension: "analytical", text: "I often decide without checking much information.", reverse: true },
      { id: "decision-07", dimension: "risk-sensitivity", text: "Uncertain outcomes make me cautious." },
      { id: "decision-08", dimension: "risk-sensitivity", text: "I notice possible downsides quickly." },
      { id: "decision-09", dimension: "risk-sensitivity", text: "I am comfortable choosing even when the risks are unclear.", reverse: true },
      { id: "decision-10", dimension: "loss-sensitivity", text: "The possibility of regret weighs heavily on my choices." },
      { id: "decision-11", dimension: "loss-sensitivity", text: "I find it hard to walk away from something I have already invested in." },
      { id: "decision-12", dimension: "loss-sensitivity", text: "I can usually cut losses without replaying the decision for long.", reverse: true },
      { id: "decision-13", dimension: "information-overload", text: "Too many options can make it harder for me to choose." },
      { id: "decision-14", dimension: "information-overload", text: "I can get stuck looking for one more piece of information." },
      { id: "decision-15", dimension: "information-overload", text: "More information almost always makes decisions easier for me.", reverse: true }
    ],
    relatedNotes: [
      { label: "Read Dual Process Theory", href: "/lab-notes/dual-process-theory" },
      { label: "Read Cognitive Biases", href: "/lab-notes/cognitive-biases" }
    ]
  },
  {
    title: "Motivation Needs Profile",
    slug: "motivation-needs-profile",
    category: "Motivation",
    duration: "4 min",
    description: "A self-assessment based on three motivation needs: autonomy, competence, and relatedness.",
    basis: "Inspired by self-determination theory.",
    disclaimer: assessmentDisclaimer,
    type: "assessment",
    dimensions: [
      { id: "autonomy", label: "Autonomy", description: "Feeling that you have meaningful choice and ownership." },
      { id: "competence", label: "Competence", description: "Feeling capable, effective, and able to make progress." },
      { id: "relatedness", label: "Relatedness", description: "Feeling connected, supported, and part of something with others." }
    ],
    questions: [
      { id: "motivation-01", dimension: "autonomy", text: "I have meaningful choice in how I approach important tasks." },
      { id: "motivation-02", dimension: "autonomy", text: "My current goals feel connected to what matters to me." },
      { id: "motivation-03", dimension: "autonomy", text: "I often feel pushed by demands that do not feel like mine.", reverse: true },
      { id: "motivation-04", dimension: "autonomy", text: "I can adjust my path when something is not working." },
      { id: "motivation-05", dimension: "competence", text: "I can see signs that I am improving in areas that matter." },
      { id: "motivation-06", dimension: "competence", text: "I know what the next useful step is most of the time." },
      { id: "motivation-07", dimension: "competence", text: "I often feel ineffective even when I try.", reverse: true },
      { id: "motivation-08", dimension: "competence", text: "Feedback usually helps me understand how to get better." },
      { id: "motivation-09", dimension: "relatedness", text: "I feel supported by at least a few people around me." },
      { id: "motivation-10", dimension: "relatedness", text: "My efforts feel connected to people, values, or a shared purpose." },
      { id: "motivation-11", dimension: "relatedness", text: "I often feel like I am doing things completely alone.", reverse: true },
      { id: "motivation-12", dimension: "relatedness", text: "It is easy for me to ask for support or perspective when I need it." }
    ],
    relatedNotes: [
      { label: "Read Self-Determination Theory", href: "/lab-notes/self-determination-theory" },
      { label: "Read Emotion Regulation", href: "/lab-notes/emotion-regulation" }
    ]
  }
];

export function getAssessment(slug: string) {
  return assessments.find((item) => item.slug === slug);
}
