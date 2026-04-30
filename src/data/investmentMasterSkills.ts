import type { BilingualLine } from "@/data/investmentStyle";

export type InvestmentMasterSkill = {
  id: string;
  title: string;
  titleZh: string;
  observedBehavior: BilingualLine;
  reusableRule: BilingualLine;
  practice: BilingualLine;
};

export type InvestmentMasterSkillLab = {
  slug: string;
  masterName: string;
  masterNameZh: string;
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  sourceNote: string;
  sourceNoteZh: string;
  skills: InvestmentMasterSkill[];
  operatingNorms: BilingualLine[];
  sources: {
    label: string;
    href: string;
  }[];
};

export const investmentMasterSkillLabs: InvestmentMasterSkillLab[] = [
  {
    slug: "ray-dalio",
    masterName: "Ray Dalio",
    masterNameZh: "雷·达利欧",
    title: "Ray Dalio Skill Lab",
    titleZh: "雷·达利欧 Skill 实验",
    subtitle:
      "A practical translation of Dalio's behavior into reusable rules for thinking in systems, learning from mistakes, and building decision norms.",
    subtitleZh:
      "把达利欧的行为方式转译成可复用规则：系统思考、从错误中学习，以及建立决策规范。",
    sourceNote:
      "This lab is a learning abstraction inspired by Dalio's public writing on principles, Bridgewater's All Weather material, and CurioLab's investment style profile. It is not a claim that these rules reproduce Bridgewater's internal process.",
    sourceNoteZh:
      "这个实验栏目是基于达利欧公开的原则写作、桥水全天候资料，以及 CurioLab 投资风格画像做出的学习型抽象；它并不声称复现桥水内部流程。",
    skills: [
      {
        id: "principles",
        title: "Turn Repeated Decisions into Principles",
        titleZh: "把重复决策变成原则",
        observedBehavior: {
          en: "Dalio treats decisions as material for a rulebook. When a situation repeats, the goal is not only to solve it once, but to write down the principle that should guide the next similar case.",
          zh: "达利欧会把决策当作原则手册的素材。当某类情境反复出现时，目标不只是解决这一次，而是写下下一次类似情境应遵循的原则。"
        },
        reusableRule: {
          en: "If a decision is likely to repeat, write the rule before the next occurrence. A useful rule names the condition, the action, and the reason.",
          zh: "如果一个决策很可能重复，就在下一次发生前写下规则。一个好规则应说明触发条件、行动方式和背后理由。"
        },
        practice: {
          en: "After an investment decision, write: 'When I see ___, I will ___, because ___.' Review it after the outcome and revise the rule instead of only judging yourself.",
          zh: "在一次投资决策后写下：“当我看到___时，我会___，因为___。”结果出现后复盘并修正规则，而不是只评价自己对错。"
        }
      },
      {
        id: "pain-reflection",
        title: "Use Pain as a Debugging Signal",
        titleZh: "把痛感当作调试信号",
        observedBehavior: {
          en: "Dalio's 'pain plus reflection' idea treats mistakes, losses, and discomfort as information. The emotional hit is not ignored, but it is converted into diagnosis.",
          zh: "达利欧的“痛苦加反思”思想把错误、损失和不适视为信息。情绪冲击不会被忽略，而是被转化为诊断。"
        },
        reusableRule: {
          en: "When a decision hurts, separate the market outcome from the process failure. Ask what was knowable, what was random, and what rule should change.",
          zh: "当一次决策带来痛感时，把市场结果和流程失误分开。询问什么本来可知，什么属于随机，以及哪条规则需要改变。"
        },
        practice: {
          en: "Keep a mistake log with three columns: trigger, decision process, rule update. Do not let the log become a shame list; make it a repair list.",
          zh: "建立错误日志，三列分别写触发情境、决策过程、规则更新。不要让它变成羞耻清单，而要把它变成修复清单。"
        }
      },
      {
        id: "believability",
        title: "Weight Opinions by Believability",
        titleZh: "按可信度加权意见",
        observedBehavior: {
          en: "Dalio emphasizes thoughtful disagreement and believability-weighted input. The point is not to vote by rank or loudness, but to ask whose reasoning and track record fit the question.",
          zh: "达利欧强调有质量的分歧和按可信度加权的输入。重点不是按职位或声音大小投票，而是看谁的推理和过往记录更适合这个问题。"
        },
        reusableRule: {
          en: "For important decisions, seek disagreement from people with relevant evidence, experience, or a clear reasoning record. Do not average all opinions equally.",
          zh: "面对重要决策时，主动寻找拥有相关证据、经验或清晰推理记录的人提出反对意见。不要把所有意见简单平均。"
        },
        practice: {
          en: "Before acting, write the best opposing view and name what evidence would make you update. If you cannot state the opposing view fairly, keep researching.",
          zh: "行动前写下最强反方观点，并说明什么证据会让你更新判断。如果你无法公平表述反方观点，就继续研究。"
        }
      },
      {
        id: "system-map",
        title: "Map the Machine Before the Forecast",
        titleZh: "先画机器，再做预测",
        observedBehavior: {
          en: "Dalio often explains economies as machines made of credit, income, spending, productivity, inflation, policy, and expectations. The map comes before the confident forecast.",
          zh: "达利欧经常把经济解释为由信用、收入、支出、生产率、通胀、政策和预期组成的机器。先画清楚机器，再谈有把握的预测。"
        },
        reusableRule: {
          en: "Before forming a market view, draw the causal map. Identify the main drivers, feedback loops, constraints, and where your uncertainty is highest.",
          zh: "在形成市场观点前，先画出因果地图。识别主要驱动因素、反馈循环、约束条件，以及你最不确定的位置。"
        },
        practice: {
          en: "Use a one-page system map: drivers, second-order effects, policy response, and failure conditions. If the map is vague, the forecast is probably fragile.",
          zh: "使用一页系统图：驱动因素、二阶影响、政策反应和失效条件。如果图很模糊，预测通常也很脆弱。"
        }
      },
      {
        id: "diversify-drivers",
        title: "Diversify by Return Drivers",
        titleZh: "按收益驱动因素分散",
        observedBehavior: {
          en: "All Weather thinking is less about owning many labels and more about balancing exposures to growth, inflation, recession, and deflation surprises.",
          zh: "全天候思想并不只是拥有很多资产标签，而是平衡增长、通胀、衰退和通缩意外带来的风险暴露。"
        },
        reusableRule: {
          en: "Diversification should reduce dependence on one story. Ask whether the portfolio is diversified by economic driver, not only by asset name.",
          zh: "分散应降低对单一故事的依赖。要问投资组合是否按经济驱动因素分散，而不只是按资产名称分散。"
        },
        practice: {
          en: "Stress-test a plan across four boxes: rising growth, falling growth, rising inflation, falling inflation. Mark where the plan is most fragile.",
          zh: "用四个格子压力测试计划：增长上行、增长下行、通胀上行、通胀下行。标出计划最脆弱的位置。"
        }
      },
      {
        id: "evolve-process",
        title: "Evolve the Process, Not the Ego",
        titleZh: "进化流程，而不是保护自我",
        observedBehavior: {
          en: "Dalio's process culture tries to make errors discussable. The aim is to improve the system that produced the decision, rather than protect the decision-maker's ego.",
          zh: "达利欧的流程文化试图让错误可以被讨论。目标是改进产生决策的系统，而不是保护决策者的自尊。"
        },
        reusableRule: {
          en: "Review decisions as process evidence. A good review asks what the system should do differently next time, not who deserves blame.",
          zh: "把决策复盘视为流程证据。好的复盘问的是系统下一次应如何不同，而不是谁应被责备。"
        },
        practice: {
          en: "After a major choice, run a short after-action review: what did we expect, what happened, what did we miss, and what rule changes now?",
          zh: "重大选择后做简短行动复盘：我们预期什么，实际发生什么，我们漏掉什么，现在要改哪条规则。"
        }
      }
    ],
    operatingNorms: [
      {
        en: "Write the rule before you need it again.",
        zh: "在下一次需要前，把规则写下来。"
      },
      {
        en: "Separate outcome review from process review.",
        zh: "把结果复盘和流程复盘分开。"
      },
      {
        en: "Make disagreement specific, evidence-based, and updateable.",
        zh: "让分歧具体、基于证据，并且可以更新。"
      },
      {
        en: "Map drivers before making confident forecasts.",
        zh: "在自信预测之前，先画清楚驱动因素。"
      },
      {
        en: "Diversify across economic forces, not only asset labels.",
        zh: "按经济力量分散，而不只是按资产标签分散。"
      }
    ],
    sources: [
      {
        label: "Principles by Ray Dalio",
        href: "https://www.principles.com/"
      },
      {
        label: "The All Weather Story - Bridgewater",
        href: "https://www.bridgewater.com/research-and-insights/the-all-weather-story"
      },
      {
        label: "Ray Dalio profile on CurioLab",
        href: "/investing/masters/ray-dalio"
      }
    ]
  }
];
