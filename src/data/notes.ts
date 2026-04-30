import type { Note } from "@/types/content";

export const noteCategories = ["All", "Personality", "Mood", "Attention", "Decision", "Social", "Motivation", "Investing"] as const;

export const notes: Note[] = [
  {
    title: "Big Five Personality: The Five Major Traits",
    slug: "big-five-personality",
    category: "Personality",
    duration: "5 min",
    description:
      "A friendly guide to the five major personality dimensions: openness, conscientiousness, extraversion, agreeableness, and emotional sensitivity.",
    type: "note",
    intro:
      "The Big Five is useful because it describes personality as a profile of tendencies, not a box you have to live inside.",
    takeaways: [
      "Personality traits are dimensions, not fixed types.",
      "Each trait can be helpful or tricky depending on the situation.",
      "A profile is more useful than a single label."
    ],
    reflectionPrompt: "Which trait feels most visible in your everyday decisions right now?",
    related: [
      { label: "Start Big Five Personality Profile", href: "/assessments/big-five-personality-profile" },
      { label: "Start Social Energy Profile", href: "/assessments/social-energy-profile" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "The Big Five describes personality through five broad dimensions: openness, conscientiousness, extraversion, agreeableness, and neuroticism, which is often easier to think of as emotional sensitivity.",
          "Instead of saying a person is one type forever, it asks where their usual patterns tend to land. Someone can be highly curious, moderately organized, socially selective, warm with trusted people, and sensitive under pressure. That mix is more realistic than a single label."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "Imagine two people planning a weekend. One wants to try a strange museum, wander without a plan, and see what happens. The other wants a clear schedule, known restaurants, and enough time to rest. Neither person is better. They are leaning on different trait patterns.",
          "The same trait can look different across contexts. High openness may become creativity in a studio and distraction in a crowded inbox. High conscientiousness may become reliability on a team and perfectionism when the stakes feel too high."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "The model is useful because it gives you a softer way to ask practical questions. What kind of work setting helps you focus? How much novelty do you need? What kind of social rhythm restores your energy?",
          "It also makes room for change. Traits are stable enough to notice, but not so fixed that they erase growth, culture, habits, mood, or the situation."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Big Five Personality Profile touches openness and conscientiousness through questions about planning, novelty, and problem solving. The Social Energy Profile touches extraversion and social recovery.",
          "Use the result as a small mirror. If it gives you language for something real, keep it. If it feels too narrow, let it go."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "A trait is not a destiny. People adapt, mask, stretch, and change. Good personality language should help you understand your patterns without shrinking your sense of possibility.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Why MBTI Feels Accurate",
    slug: "why-mbti-feels-accurate",
    category: "Personality",
    duration: "4 min",
    description: "Why type-based personality tests often feel personal, memorable, and surprisingly accurate.",
    type: "note",
    intro: "Type labels feel powerful because they turn messy self-knowledge into a neat story you can remember and share.",
    takeaways: [
      "Types are easier to remember than trait scores.",
      "Broad, positive descriptions can feel very personal.",
      "MBTI works best as conversation language, not strict diagnosis."
    ],
    reflectionPrompt: "When a personality label feels accurate, what part of your life does it help you explain?",
    related: [
      { label: "Read Big Five Personality", href: "/lab-notes/big-five-personality" },
      { label: "Start Big Five Personality Profile", href: "/assessments/big-five-personality-profile" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "MBTI-style systems sort people into memorable personality types. That format is easy to talk about: you can send a result to a friend, compare types, and quickly build a story about how you think, work, or connect.",
          "This is one reason type systems spread so well. A type feels like a small identity card. It is shorter than a full personality profile and warmer than a spreadsheet of scores."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "A description like you are thoughtful, independent, and sometimes misunderstood can feel very specific. Many people can recognize themselves in it, especially when the wording is broad, kind, and flexible.",
          "That feeling is related to the Barnum effect: people often accept general descriptions as personally accurate when the description is meaningful enough and leaves room for interpretation."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "MBTI can still be useful when used lightly. It can help people talk about preferences, work rhythms, decision styles, and social needs. It can make invisible habits easier to name.",
          "The risk appears when a type becomes a cage. A label should not decide what you can learn, who you can date, what job you can do, or how much you can change."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Big Five Personality Profile uses dimensional questions to invite reflection. Compare your result with this note if you want a model that treats personality more like a set of sliders.",
          "A good result should make you curious, not trapped. Ask what the label helps you notice, then keep testing it against real life."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "MBTI is not a clinical tool or a strict scientific diagnosis. It is better treated as a language for self-expression and conversation.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Attachment Theory: How We Connect with Others",
    slug: "attachment-theory",
    category: "Social",
    duration: "5 min",
    description:
      "A simple explanation of how connection patterns can shape closeness, safety, distance, and emotional support.",
    type: "note",
    intro:
      "Attachment theory is about the way people look for safety in relationships, especially when closeness feels uncertain.",
    takeaways: [
      "Attachment styles describe patterns, not permanent identities.",
      "Different people use different safety strategies under stress.",
      "Secure connection can be learned and supported over time."
    ],
    reflectionPrompt: "When you feel unsure in a relationship, do you usually move closer, step back, or freeze?",
    related: [
      { label: "Start Social Energy Profile", href: "/assessments/social-energy-profile" },
      { label: "Start Stress & Recovery Profile", href: "/assessments/stress-recovery-profile" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "Attachment theory explores how people seek closeness, reassurance, and safety with others. Common patterns include secure, anxious, avoidant, and disorganized attachment.",
          "These words are best understood as tendencies. They are not personality verdicts. A person can feel secure with one friend, anxious in a romance, and avoidant at work."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "Imagine sending a message and getting no reply for hours. A secure pattern might think, they are probably busy. An anxious pattern might worry, I did something wrong. An avoidant pattern might pull back first. A disorganized pattern might feel both a strong need for closeness and a strong urge to escape.",
          "The event is small, but the nervous system may treat it like a signal about safety."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "Attachment patterns can affect how people handle distance, conflict, ignored messages, reassurance, and repair after tension. Naming the pattern can make reactions easier to understand.",
          "The goal is not to sort everyone into boxes. The goal is to notice what helps connection feel safer, clearer, and less exhausting."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Social Energy Profile can help you reflect on how much connection you want right now. The Stress & Recovery Profile can help you ask whether you need quiet, reassurance, structure, or company.",
          "Neither assessment measures attachment directly. They simply give you a structured way to notice your current social needs."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "Attachment patterns can change with trust, communication, therapy, friendship, and repeated experiences of repair. Avoid using attachment language to diagnose someone else from a distance.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Emotion Regulation: How Feelings Change",
    slug: "emotion-regulation",
    category: "Mood",
    duration: "5 min",
    description: "How emotions are shaped by situations, attention, interpretation, body state, and response.",
    type: "note",
    intro:
      "Emotions can feel sudden, but they usually unfold through a chain of attention, meaning, body signals, and action.",
    takeaways: [
      "Emotion regulation is not the same as suppressing feelings.",
      "Changing attention or interpretation can change the emotional path.",
      "Body state, sleep, hunger, and stress matter more than people expect."
    ],
    reflectionPrompt: "What part of your current mood may be coming from the situation, and what part may be coming from your body?",
    related: [
      { label: "Start Well-being Check", href: "/assessments/well-being-check" },
      { label: "Start Stress & Recovery Profile", href: "/assessments/stress-recovery-profile" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "Emotion regulation is the process of understanding and influencing how feelings unfold. A feeling may be shaped by the situation, where your attention goes, how you interpret what happened, what your body is doing, and how you respond.",
          "Regulation does not mean pretending everything is fine. It means creating more room between the feeling and the next move."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "A friend replies with a short message. One interpretation is they are angry. Another is they are busy. A third is they are tired. Each story can create a different emotional tone, even though the message itself did not change.",
          "Your body can tilt the story too. The same message may feel neutral after a good meal and sleep, but sharp after a stressful day."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "When you can see the chain, you get more options. You might leave a tense setting, look for more evidence, name the feeling, take a breath, move your body, or choose a response that fits your values.",
          "That small pause can prevent one difficult moment from turning into a full story about who you are or what others think of you."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Well-being Check gives you a low-pressure check-in. The Stress & Recovery Profile helps you ask what kind of support might fit the state you are in.",
          "Treat the result as a starting point for noticing, not as a final explanation."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "Some emotions need attention, boundaries, or professional support. Regulation is not about forcing yourself to be calm when something is genuinely wrong.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Yerkes-Dodson Law: Pressure and Performance",
    slug: "yerkes-dodson-law",
    category: "Mood",
    duration: "4 min",
    description: "Why a little pressure can sharpen performance, while too much can disrupt focus, memory, and judgment.",
    type: "note",
    intro: "The pressure-performance curve explains why more urgency is not always better.",
    takeaways: [
      "Performance often improves with moderate arousal.",
      "Too little pressure can feel flat, while too much can overload attention.",
      "Difficult tasks usually need more calm than simple tasks."
    ],
    reflectionPrompt: "Are you currently under-stimulated, in the useful middle, or overloaded?",
    related: [
      { label: "Play Reaction Speed Test", href: "/games/reaction-speed" },
      { label: "Play Stroop Color Challenge", href: "/games/stroop-color" },
      { label: "Start Stress & Recovery Profile", href: "/assessments/stress-recovery-profile" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "The Yerkes-Dodson law describes a curved relationship between arousal and performance. Low arousal can feel sleepy or unmotivated. Moderate arousal can sharpen attention. High arousal can make thinking noisy and brittle.",
          "People often draw the idea as an inverted U. The useful zone is somewhere in the middle."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "A small deadline might help you start a simple task. A huge deadline, poor sleep, and unclear instructions can make the same task feel impossible.",
          "This is why pressure can feel motivating in one situation and paralyzing in another. The task difficulty and your current state both matter."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "The model pushes back against the idea that stress is always the answer. For routine tasks, a little urgency may help. For complex tasks, too much pressure can harm memory, creativity, and flexible thinking.",
          "Sometimes the best performance move is not more force. It is clearer steps, a calmer setting, or a real break."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "Reaction Speed Test and Stroop Color Challenge both show how alertness and attention interact. A faster score is not always about trying harder; it can be about being in a good arousal zone.",
          "The Stress & Recovery Profile can help you notice when your system may need recovery rather than more pressure."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "The curve is a simple model, not a complete explanation of stress. Long-term stress, panic, or burnout deserves support beyond productivity tips.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Stroop Effect: When Words Fight Colors",
    slug: "stroop-effect",
    category: "Attention",
    duration: "4 min",
    description: "Why your brain slows down when a word's meaning conflicts with the color you see.",
    type: "note",
    intro: "The Stroop effect is a classic attention conflict that makes the invisible work of focus easy to feel.",
    takeaways: [
      "Automatic reading can interfere with color naming.",
      "Attention is active selection, not passive seeing.",
      "Slower responses can reveal healthy mental competition."
    ],
    reflectionPrompt: "What task in your day feels harder because another habit keeps pulling your attention?",
    related: [{ label: "Play Stroop Color Challenge", href: "/games/stroop-color" }],
    sections: [
      {
        heading: "What is it?",
        body: [
          "The Stroop effect appears when the meaning of a word conflicts with its ink color. If the word BLUE appears in red, naming the ink color takes more effort than expected.",
          "Your reading system is fast and automatic. The task asks you to ignore meaning and choose color, so two signals compete for control."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "Try saying the color of a word instead of reading it. When the word and color match, the task feels smooth. When they clash, there is a tiny pause.",
          "That pause is the interesting part. It shows your mind resolving conflict in real time."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "The Stroop effect shows that attention is not just noticing what is present. It is choosing which signal matters for the current goal.",
          "That same kind of control shows up when you ignore notifications, stay with a hard sentence, or keep listening while your mind wants to jump ahead."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Stroop Color Challenge turns the effect into a quick game. It is meant to feel a little unfair because the conflict is the point.",
          "If you slow down, it does not mean your attention is broken. It means your brain is doing several practiced things at once."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "Game scores are affected by device speed, screen size, fatigue, color perception, and distraction. They are not a diagnostic measure of attention.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Working Memory: Your Mind's Temporary Workspace",
    slug: "working-memory",
    category: "Attention",
    duration: "5 min",
    description: "Working memory is the mental space you use to hold, update, and work with information for a short time.",
    type: "note",
    intro: "Working memory is the small desk your mind uses while thinking in real time.",
    takeaways: [
      "Working memory holds information briefly while you use it.",
      "Capacity is limited and easy to crowd.",
      "Stress, fatigue, and interruption can shrink the workspace."
    ],
    reflectionPrompt: "What is currently taking up space on your mental desk?",
    related: [{ label: "Play Memory Flip Game", href: "/games/memory-flip" }],
    sections: [
      {
        heading: "What is it?",
        body: [
          "Working memory is not the same as long-term memory. It is the short-term workspace you use to hold information while doing something with it.",
          "You use it when you remember a number long enough to type it, follow a multi-step instruction, compare two options, or hold the start of a sentence while reading the end."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "In a memory card game, you are not only remembering where a card was. You are updating the map as new cards appear, comparing possible matches, and deciding what to flip next.",
          "That active holding-and-updating is working memory. It feels simple until the desk gets crowded."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "Working memory is limited. Too many open loops, tabs, messages, decisions, or worries can leave less space for the task in front of you.",
          "This is why reducing friction can help. Writing things down, grouping steps, muting interruptions, and taking breaks can make a hard task feel lighter."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "Memory Flip Game gives a playful version of this challenge. It asks you to hold positions, update guesses, and resist random clicking.",
          "A future focus challenge could explore the same idea through distraction and attention switching."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "A quick game is a snapshot, not a full cognitive profile. Sleep, practice, screen size, stress, and distraction all affect performance.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Dual Process Theory: Fast Thinking and Slow Thinking",
    slug: "dual-process-theory",
    category: "Decision",
    duration: "5 min",
    description: "A simple way to understand intuitive fast thinking and slower, more deliberate reasoning.",
    type: "note",
    intro: "Dual process theory gives you a useful language for intuition, analysis, and knowing when to slow down.",
    takeaways: [
      "Fast thinking is automatic, intuitive, and efficient.",
      "Slow thinking is deliberate, effortful, and flexible.",
      "The best mode depends on the task, not on which one sounds smarter."
    ],
    reflectionPrompt: "Where in your life do you trust intuition, and where do you need a deliberate pause?",
    related: [
      { label: "Start Decision Style Profile", href: "/assessments/decision-style-profile" },
      { label: "Read Cognitive Biases", href: "/lab-notes/cognitive-biases" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "Dual process theory is often explained through System 1 and System 2. System 1 is fast, automatic, emotional, and pattern-based. System 2 is slower, effortful, analytical, and more deliberate.",
          "Both systems are useful. The point is not to defeat intuition. The point is to notice when a decision needs more checking."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "You may instantly sense that a room feels tense. That fast read can be valuable. But comparing contracts, planning a budget, or checking a difficult assumption usually needs slower thinking.",
          "Fast thinking saves time. Slow thinking saves you when the first answer is too easy."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "Many decisions fail because the wrong mode is in charge. We overanalyze simple choices and rush complex ones. We trust a gut feeling when evidence is thin, or we ignore a useful intuition built from experience.",
          "A practical question is: what would make this decision worth slowing down for?"
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Decision Style Profile explores how you approach uncertainty. Cognitive Biases shows how shortcuts can help, then mislead, when they run too quietly in the background.",
          "Use both notes together: one explains the speed of thinking, the other explains common turns it can take."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "Real thinking is more blended than two neat systems. This model is a useful sketch, not a full map of the mind.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Cognitive Biases: The Shortcuts of the Mind",
    slug: "cognitive-biases",
    category: "Decision",
    duration: "6 min",
    description: "How mental shortcuts help us decide quickly, but sometimes lead us in the wrong direction.",
    type: "note",
    intro: "Cognitive biases are not proof that people are foolish. They are the tradeoffs of a mind built to move fast.",
    takeaways: [
      "Biases are shortcuts that can be useful or misleading.",
      "They become risky when stakes are high and evidence is thin.",
      "Better decisions often come from better review, not perfect objectivity."
    ],
    reflectionPrompt: "Which bias shows up most often when you are tired, rushed, or emotionally invested?",
    related: [
      { label: "Start Decision Style Profile", href: "/assessments/decision-style-profile" },
      { label: "Read Dual Process Theory", href: "/lab-notes/dual-process-theory" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "A cognitive bias is a predictable shortcut in judgment. The brain uses shortcuts because it cannot inspect every detail from scratch. Most of the time, that efficiency is useful.",
          "The trouble starts when a shortcut feels like certainty. A quick impression can become a conclusion before the slower parts of thinking have a chance to check it."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "Confirmation bias makes us notice evidence that supports what we already think. Anchoring lets the first number pull later judgments. Availability bias makes vivid examples feel more common than they are.",
          "Sunk cost fallacy keeps us invested because we already spent effort. Spotlight effect makes us overestimate how much others notice us. Halo effect lets one good trait color the whole picture."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "Biases matter because they usually feel normal from the inside. You do not experience confirmation bias as bias. You experience it as seeing the obvious truth.",
          "That is why good decision design helps. Ask what evidence would change your mind, get a second view, write down assumptions, and revisit important choices after the emotional peak passes."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Decision Style Profile can help you notice how you choose under uncertainty. Dual Process Theory explains why many shortcuts run quickly and automatically.",
          "The goal is not to become bias-free. It is to become easier to correct."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "Calling something a bias should not become a way to dismiss another person. Everyone uses shortcuts, and context often explains why a shortcut was tempting.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  },
  {
    title: "Modern Investment Masters: Ideas and Styles",
    slug: "modern-investment-masters",
    category: "Investing",
    duration: "15 min",
    description:
      "A field guide to influential modern investors, their decision styles, and learning resources for deeper study.",
    type: "note",
    intro:
      "Influential investors are useful to study because each one turns uncertainty into a different decision process, risk discipline, and way of learning from markets.",
    takeaways: [
      "Each investor is best studied as a decision system, not as a source of hot tips.",
      "The transferable lessons are process, temperament, risk control, and review habits.",
      "A style that works for one person may fail when copied without the same time horizon, constraints, and emotional discipline."
    ],
    reflectionPrompt:
      "Which investor's style feels most natural to you, and what blind spot might come with that attraction?",
    related: [
      { label: "Explore Investing", href: "/investing" },
      { label: "Start Decision Style Profile", href: "/assessments/decision-style-profile" },
      { label: "Read Cognitive Biases", href: "/lab-notes/cognitive-biases" }
    ],
    sections: [
      {
        heading: "Benjamin Graham: defensive value",
        body: [
          "Benjamin Graham is often treated as the starting point for modern value investing. His work turned stock selection into a discipline of business analysis, balance-sheet caution, and emotional restraint rather than a game of price prediction.",
          "His core idea is margin of safety: do not rely on a perfect forecast. Estimate value conservatively, then leave room for error, bad luck, and human overconfidence. This is why Graham is useful for people who are easily pulled into exciting stories.",
          "Graham's style is defensive, analytical, diversified, and price-sensitive. He separates investing from speculation by asking whether the buyer has done enough analysis and whether the price already protects against disappointment.",
          "What to learn: insist on evidence, demand a cushion, and remember that the market's mood is not the same thing as value. What not to copy blindly: buying something only because it looks cheap without understanding why it is cheap."
        ],
        links: [
          {
            label: "The Intelligent Investor - Harper Academic",
            href: "https://www.harperacademic.com/book/9780061745171/the-intelligent-investor-rev-ed/"
          },
          {
            label: "Heilbrunn Center for Graham & Dodd Investing",
            href: "https://business.columbia.edu/heilbrunn"
          }
        ]
      },
      {
        heading: "Warren Buffett: business quality and compounding",
        body: [
          "Warren Buffett began with Graham's value discipline, then gradually shifted the center of gravity from statistically cheap securities to exceptional businesses bought at sensible prices. The question became not only what is it worth, but how durable is the business engine?",
          "His style emphasizes owner thinking. A stock is a fractional claim on a business, so the investor should care about management quality, reinvestment opportunities, competitive advantage, capital allocation, and the ability to hold through noise.",
          "Buffett's most useful idea for learners is the circle of competence. You do not need an opinion on everything. You need to know what you can understand, what evidence you can evaluate, and when the honest answer is I do not know.",
          "What to learn: patience, selectivity, business literacy, and the power of compounding. What not to copy blindly: concentrating heavily without Buffett's knowledge, temperament, deal access, insurance float, and decades-long time horizon."
        ],
        links: [
          {
            label: "Berkshire Hathaway Annual Reports",
            href: "https://www.berkshirehathaway.com/reports.html"
          },
          {
            label: "Berkshire Hathaway Owner's Manual",
            href: "https://www.berkshirehathaway.com/ownman.pdf"
          }
        ]
      },
      {
        heading: "Charlie Munger: mental models and avoiding stupidity",
        body: [
          "Charlie Munger made the Buffett style broader and sharper. He pushed Berkshire toward better businesses, deeper thinking about incentives, and a multidisciplinary approach to judgment. In his view, investing was partly a test of worldly wisdom.",
          "Munger's most famous contribution is the latticework of mental models. He encouraged learning the big ideas from psychology, economics, accounting, biology, engineering, and history, then using them together instead of forcing every problem through one narrow model.",
          "His style is concentrated, patient, quality-biased, and intensely focused on error prevention. A Munger-like question is not how can I look brilliant, but what obvious mistake could destroy the outcome?",
          "What to learn: study incentives, invert problems, build checklists, and respect psychological bias. What not to copy blindly: using the language of mental models as decoration without doing the slow work of learning the models."
        ],
        links: [
          {
            label: "Poor Charlie's Almanack - Stripe Press",
            href: "https://www.stripe.press/poor-charlies-almanack"
          },
          {
            label: "The Psychology of Human Misjudgment",
            href: "https://fs.blog/great-talks/psychology-human-misjudgment/"
          }
        ]
      },
      {
        heading: "John Bogle: low-cost market ownership",
        body: [
          "John C. Bogle changed the practical life of investing by making broad, low-cost indexing a serious default for ordinary investors. His message was simple but radical: many people do not need to beat the market to benefit from capitalism.",
          "Bogle's central focus was the arithmetic of costs. Every fee, tax drag, turnover cost, and behavioral mistake comes out of the investor's return. If the future is uncertain, controlling the controllable becomes a powerful strategy.",
          "His style is diversified, passive, cost-aware, and behaviorally humble. It accepts that forecasting winners is difficult and that staying the course can matter more than having an impressive opinion.",
          "What to learn: simplicity, discipline, diversification, and low friction. What not to copy blindly: assuming indexing removes all risk. Market ownership still includes drawdowns, long waiting periods, and the need for a plan you can actually hold."
        ],
        links: [
          {
            label: "John C. Bogle Center for Financial Literacy",
            href: "https://boglecenter.net/about/"
          },
          {
            label: "Bogleheads Getting Started",
            href: "https://www.bogleheads.org/wiki/Getting_started"
          },
          {
            label: "Bogleheads for Non-US Investors",
            href: "https://www.bogleheads.org/wiki/Getting_started_for_non-US_investors"
          }
        ]
      },
      {
        heading: "Peter Lynch: knowable growth and grounded curiosity",
        body: [
          "Peter Lynch is associated with the idea that useful investment clues can appear in ordinary life, but his approach was much more rigorous than the slogan buy what you know. Observation was only the beginning.",
          "Lynch looked for understandable companies, growth at a reasonable price, and a clear story that could be checked against earnings, balance sheets, store visits, competitors, and industry conditions. The story had to become visible in the numbers.",
          "His style is active, curious, flexible, and company-specific. He was willing to study many kinds of businesses rather than forcing every idea into one category. That curiosity is part of the method.",
          "What to learn: start with what you can understand, then verify it. What not to copy blindly: confusing familiarity with analysis. Liking a product is not the same as understanding the company, valuation, balance sheet, and competitive future."
        ],
        links: [
          {
            label: "One Up On Wall Street - Simon & Schuster",
            href: "https://www.simonandschuster.com/books/One-Up-On-Wall-Street/Peter-Lynch/9780743200400"
          },
          {
            label: "Beating the Street - Simon & Schuster",
            href: "https://www.simonandschuster.com/books/Beating-the-Street/Peter-Lynch/9780671891633"
          }
        ]
      },
      {
        heading: "George Soros: reflexivity and market feedback",
        body: [
          "George Soros is most closely associated with reflexivity: the idea that market participants do not merely observe reality. Their beliefs, actions, and prices can help change the reality they are trying to understand.",
          "This matters because markets can create feedback loops. Rising prices can improve confidence, attract financing, and make a story look more true. Falling prices can tighten credit, damage confidence, and make the same story collapse.",
          "Soros's style is macro, adaptive, psychological, and willing to change when the thesis changes. The emphasis is not on being calm and passive, but on recognizing when a prevailing belief is shaping the facts around it.",
          "What to learn: watch feedback loops, crowd beliefs, leverage, policy, and turning points. What not to copy blindly: high-conviction macro trading without professional risk controls, liquidity awareness, and the ability to admit error quickly."
        ],
        links: [
          {
            label: "General Theory of Reflexivity - George Soros",
            href: "https://www.georgesoros.com/2009/10/26/general_theory_of_reflexivity_lecture/"
          },
          {
            label: "Open Society Lecture Series on Reflexivity",
            href: "https://www.opensocietyfoundations.org/publications/george-soros-open-society-financial-crisis-and-way-ahead"
          }
        ]
      },
      {
        heading: "Ray Dalio: economic machines and all-weather balance",
        body: [
          "Ray Dalio represents a more systematic macro tradition. He studies economies as machines made of credit, spending, income, productivity, policy, inflation, and expectations. The goal is to understand how environments change rather than rely on one forecast.",
          "Dalio's All Weather thinking asks what kind of portfolio might be more balanced across different economic surprises. Growth, recession, inflation, and deflation can affect assets in different ways, so concentration in one environment can be fragile.",
          "His style is systems-oriented, diversified, rules-aware, and macro-sensitive. It tries to reduce dependence on a single prediction by balancing exposures and learning from repeated historical patterns.",
          "What to learn: think in scenarios, separate process from ego, and ask how a plan behaves if the world changes. What not to copy blindly: using simplified all-weather formulas without understanding leverage, correlations, costs, taxes, and local market constraints."
        ],
        links: [
          {
            label: "The All Weather Story - Bridgewater",
            href: "https://www.bridgewater.com/research-and-insights/the-all-weather-story"
          },
          {
            label: "Principles by Ray Dalio",
            href: "https://www.principles.com/"
          }
        ]
      },
      {
        heading: "Howard Marks: risk, cycles, and second-level thinking",
        body: [
          "Howard Marks is one of the clearest writers on risk, cycles, and market psychology. His memos are valuable because they show how an investor can think probabilistically without pretending to know the future.",
          "Marks emphasizes second-level thinking. A first-level view asks whether something is a good asset. A second-level view asks what expectations are already reflected in the price, how the consensus could be wrong, and what range of outcomes is possible.",
          "His style is contrarian, cycle-aware, risk-first, and patient. He treats risk less as day-to-day volatility and more as the possibility of permanent loss, poor positioning, excessive optimism, or being forced to sell at the wrong time.",
          "What to learn: price matters, psychology swings, cycles do not disappear, and humility is part of risk control. What not to copy blindly: being contrarian for its own sake. Disagreeing with the crowd only helps when your reasoning and odds are better."
        ],
        links: [
          {
            label: "Howard Marks Memos - Oaktree",
            href: "https://www.oaktreecapital.com/insights/memos"
          },
          {
            label: "The Most Important Thing - Columbia University Press",
            href: "https://cup.columbia.edu/book/the-most-important-thing/9780231527095/"
          }
        ]
      },
      {
        heading: "What to learn, not copy",
        body: [
          "These investors disagree in method. Graham looks for safety in price, Buffett in business quality, Munger in judgment, Bogle in market ownership and low cost, Lynch in knowable companies, Soros in reflexive feedback, Dalio in macro balance, and Marks in risk and cycles.",
          "The common thread is process. Each style defines what it will ignore, what evidence matters, what risks are unacceptable, and how decisions should be reviewed. That is more transferable than any single holding, trade, fund, or market call.",
          "A useful learning practice is to keep an investment journal for ideas you study. Write down the thesis, the evidence, the risks, what would change your mind, and a review date. This turns famous-investor reading into self-observation instead of imitation.",
          "This note is for learning and self-reflection. It is not financial advice, investment advice, or a recommendation to buy or sell anything."
        ]
      }
    ]
  },
  {
    title: "Self-Determination Theory: What Motivation Needs",
    slug: "self-determination-theory",
    category: "Motivation",
    duration: "5 min",
    description: "Why motivation grows when people feel autonomy, competence, and connection.",
    type: "note",
    intro: "Self-determination theory explains why motivation often needs more than pressure or rewards.",
    takeaways: [
      "Motivation grows when autonomy, competence, and relatedness are supported.",
      "Low motivation can be a signal about the environment, not just willpower.",
      "Small changes in choice, progress, and connection can make effort feel different."
    ],
    reflectionPrompt: "Which need feels lowest right now: autonomy, competence, or connection?",
    related: [
      { label: "Start Motivation Needs Profile", href: "/assessments/motivation-needs-profile" },
      { label: "Start Well-being Check", href: "/assessments/well-being-check" }
    ],
    sections: [
      {
        heading: "What is it?",
        body: [
          "Self-determination theory focuses on the conditions that help motivation grow. It highlights three needs: autonomy, competence, and relatedness.",
          "Autonomy means feeling some meaningful choice. Competence means feeling able to make progress. Relatedness means feeling connected to others or to a shared purpose."
        ]
      },
      {
        heading: "Simple example",
        body: [
          "A project feels different when you chose the goal, understand the next step, and feel supported by someone around you. The same project can feel heavy when it is forced, confusing, and lonely.",
          "The task may not have changed. The motivational environment did."
        ]
      },
      {
        heading: "Why it matters",
        body: [
          "This model makes motivation less moralistic. Feeling stuck does not always mean you are lazy. It may mean one of the basic needs is underfed.",
          "A practical fix might be smaller choices, clearer feedback, easier progress, or more connection. Tiny changes can make the same effort feel more alive."
        ]
      },
      {
        heading: "Try it on CurioLab",
        body: [
          "The Motivation Needs Profile can help you reflect on what kind of support you may need before pushing forward. Well-being Check can give a quick emotional snapshot before you choose the next step.",
          "Use the result to ask what would make effort feel more possible, not to judge yourself."
        ]
      },
      {
        heading: "Keep in mind",
        body: [
          "Motivation is shaped by health, environment, pressure, money, relationships, and support. It is not just an inner switch.",
          "CurioLab notes are for playful learning and self-reflection. They are not medical or psychological diagnosis."
        ]
      }
    ]
  }
];

export function getNote(slug: string) {
  return notes.find((item) => item.slug === slug);
}
