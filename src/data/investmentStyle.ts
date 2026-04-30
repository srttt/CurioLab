import type { DimensionScore } from "@/types/assessment";

export type BilingualLine = {
  en: string;
  zh: string;
};

export type InvestmentBenchmarkId =
  | "valuationAnchor"
  | "durabilityPreference"
  | "researchDepth"
  | "portfolioBreadth"
  | "costFrictionAwareness"
  | "macroRegimeAwareness"
  | "adaptability"
  | "downsideDiscipline"
  | "timeHorizon"
  | "behavioralDiscipline";

export type InvestmentBenchmark = {
  id: InvestmentBenchmarkId;
  label: string;
  labelZh: string;
  description: string;
  descriptionZh: string;
};

export type InvestmentScoreMap = Record<InvestmentBenchmarkId, number>;

export type InvestmentMaster = {
  slug: string;
  name: string;
  nameZh: string;
  title: string;
  titleZh: string;
  shortStyle: string;
  shortStyleZh: string;
  summary: string;
  summaryZh: string;
  strengths: BilingualLine[];
  watchOuts: BilingualLine[];
  learningLinks: { label: string; href: string }[];
  scores: InvestmentScoreMap;
};

export const investmentStyleBenchmarks: InvestmentBenchmark[] = [
  {
    id: "valuationAnchor",
    label: "Valuation Anchor",
    labelZh: "估值锚定",
    description: "How strongly price, intrinsic value, and margin of safety guide the decision.",
    descriptionZh: "价格、内在价值和安全边际在多大程度上指导决策。"
  },
  {
    id: "durabilityPreference",
    label: "Durability Preference",
    labelZh: "耐久性偏好",
    description: "How much the style favors resilient businesses, assets, or strategies.",
    descriptionZh: "这种风格在多大程度上偏好有韧性的企业、资产或策略。"
  },
  {
    id: "researchDepth",
    label: "Research Depth",
    labelZh: "研究深度",
    description: "How much evidence, verification, and first-principles work the style requires.",
    descriptionZh: "这种风格需要多少证据、验证和第一性原理式研究。"
  },
  {
    id: "portfolioBreadth",
    label: "Portfolio Breadth",
    labelZh: "组合广度",
    description: "How much the style uses diversification across positions, assets, or return drivers.",
    descriptionZh: "这种风格在多大程度上通过多个持仓、资产或收益来源来分散风险。"
  },
  {
    id: "costFrictionAwareness",
    label: "Cost & Friction Awareness",
    labelZh: "成本与摩擦意识",
    description: "How much fees, taxes, turnover, liquidity, and implementation simplicity matter.",
    descriptionZh: "费用、税负、换手、流动性和执行简洁性有多重要。"
  },
  {
    id: "macroRegimeAwareness",
    label: "Macro & Regime Awareness",
    labelZh: "宏观与环境意识",
    description: "How much the style considers cycles, rates, inflation, credit, policy, and regimes.",
    descriptionZh: "这种风格在多大程度上考虑周期、利率、通胀、信用、政策和市场环境。"
  },
  {
    id: "adaptability",
    label: "Adaptability",
    labelZh: "适应与修正",
    description: "How readily the style updates when evidence, price action, or context changes.",
    descriptionZh: "当证据、价格行为或环境变化时，这种风格有多容易更新判断。"
  },
  {
    id: "downsideDiscipline",
    label: "Downside Discipline",
    labelZh: "下行纪律",
    description: "How much the style emphasizes permanent loss, forced selling, and risk controls.",
    descriptionZh: "这种风格在多大程度上强调永久损失、被迫卖出和风险控制。"
  },
  {
    id: "timeHorizon",
    label: "Time Horizon",
    labelZh: "时间跨度",
    description: "How much the style is built around patience, compounding, and long feedback loops.",
    descriptionZh: "这种风格在多大程度上建立在耐心、复利和长期反馈之上。"
  },
  {
    id: "behavioralDiscipline",
    label: "Behavioral Discipline",
    labelZh: "行为纪律",
    description: "How much the style tries to reduce emotional, social, and cognitive errors.",
    descriptionZh: "这种风格在多大程度上试图减少情绪、群体和认知错误。"
  }
];

export const investmentMasters: InvestmentMaster[] = [
  {
    slug: "benjamin-graham",
    name: "Benjamin Graham",
    nameZh: "本杰明·格雷厄姆",
    title: "Defensive value and margin of safety",
    titleZh: "防守型价值与安全边际",
    shortStyle: "Analytical, price-sensitive, diversified, and cautious about stories.",
    shortStyleZh: "分析型、价格敏感、偏分散，并对故事保持谨慎。",
    summary:
      "Graham's style starts with conservative valuation and asks whether the price already protects the investor from error. The method is useful when excitement, forecasts, or narratives are pulling attention away from evidence.",
    summaryZh:
      "格雷厄姆的风格从保守估值出发，追问价格是否已经为错误留出了保护。当前景、预测或叙事把注意力从证据上拉走时，这种方法尤其有用。",
    strengths: [
      {
        en: "Forces the decision back to evidence, value, and downside protection.",
        zh: "把决策拉回证据、价值和下行保护。"
      },
      {
        en: "Works well as an antidote to overpaying for exciting future stories.",
        zh: "能有效抵抗为激动人心的未来故事支付过高价格。"
      }
    ],
    watchOuts: [
      {
        en: "A low price is not enough if the business or asset is deteriorating for good reasons.",
        zh: "如果企业或资产因合理原因恶化，低价格本身并不足够。"
      },
      {
        en: "The style can become too backward-looking when future quality truly changes.",
        zh: "当未来质量真的发生变化时，这种风格可能过度依赖过去。"
      }
    ],
    learningLinks: [
      {
        label: "The Intelligent Investor - Harper Academic",
        href: "https://www.harperacademic.com/book/9780061745171/the-intelligent-investor-rev-ed/"
      },
      {
        label: "Heilbrunn Center for Graham & Dodd Investing",
        href: "https://business.columbia.edu/heilbrunn"
      }
    ],
    scores: {
      valuationAnchor: 95,
      durabilityPreference: 55,
      researchDepth: 85,
      portfolioBreadth: 70,
      costFrictionAwareness: 65,
      macroRegimeAwareness: 25,
      adaptability: 45,
      downsideDiscipline: 90,
      timeHorizon: 75,
      behavioralDiscipline: 85
    }
  },
  {
    slug: "warren-buffett",
    name: "Warren Buffett",
    nameZh: "沃伦·巴菲特",
    title: "Business quality and compounding",
    titleZh: "企业质量与复利",
    shortStyle: "Owner-minded, quality-focused, selective, and very long-term.",
    shortStyleZh: "所有者思维、重视质量、极度挑选，并且非常长期。",
    summary:
      "Buffett's mature style combines price discipline with durable business quality. It asks whether the investor understands the business well enough to let compounding work across many years.",
    summaryZh:
      "巴菲特成熟期的风格把价格纪律与耐久企业质量结合起来。它追问投资者是否足够理解一家企业，以便让复利在多年时间里发挥作用。",
    strengths: [
      {
        en: "Keeps attention on business economics rather than short-term quotation changes.",
        zh: "把注意力放在企业经济特征上，而不是短期报价变化上。"
      },
      {
        en: "Rewards patience, selectivity, and staying inside a circle of competence.",
        zh: "奖励耐心、选择性和留在能力圈之内。"
      }
    ],
    watchOuts: [
      {
        en: "Heavy concentration is dangerous without deep knowledge, temperament, and liquidity.",
        zh: "如果没有深度知识、心态和流动性，高度集中会很危险。"
      },
      {
        en: "Quality can still be overpaid for when the story becomes too popular.",
        zh: "当优质故事过于热门时，质量也可能被买得太贵。"
      }
    ],
    learningLinks: [
      { label: "Berkshire Hathaway Annual Reports", href: "https://www.berkshirehathaway.com/reports.html" },
      { label: "Berkshire Hathaway Owner's Manual", href: "https://www.berkshirehathaway.com/ownman.pdf" }
    ],
    scores: {
      valuationAnchor: 80,
      durabilityPreference: 95,
      researchDepth: 80,
      portfolioBreadth: 35,
      costFrictionAwareness: 55,
      macroRegimeAwareness: 35,
      adaptability: 50,
      downsideDiscipline: 85,
      timeHorizon: 100,
      behavioralDiscipline: 95
    }
  },
  {
    slug: "charlie-munger",
    name: "Charlie Munger",
    nameZh: "查理·芒格",
    title: "Mental models and error prevention",
    titleZh: "思维模型与错误预防",
    shortStyle: "Quality-biased, concentrated, patient, and intensely focused on avoiding stupidity.",
    shortStyleZh: "偏质量、偏集中、很有耐心，并极度重视避免愚蠢错误。",
    summary:
      "Munger's style treats investing as a test of judgment. It combines durable business preference with multidisciplinary thinking, inversion, incentives, and psychological error control.",
    summaryZh:
      "芒格把投资视为判断力测试。他把耐久企业偏好与跨学科思维、反向思考、激励机制和心理错误控制结合起来。",
    strengths: [
      {
        en: "Uses mental models to catch errors that a single financial lens can miss.",
        zh: "用思维模型捕捉单一财务视角容易遗漏的错误。"
      },
      {
        en: "Makes patience and selectivity part of the risk-control system.",
        zh: "把耐心和选择性变成风险控制系统的一部分。"
      }
    ],
    watchOuts: [
      {
        en: "Mental-model language can become decoration if it is not backed by real study.",
        zh: "如果没有真实学习，思维模型语言容易变成装饰。"
      },
      {
        en: "Concentration requires unusually strong judgment and emotional discipline.",
        zh: "集中持仓需要非常强的判断力和情绪纪律。"
      }
    ],
    learningLinks: [
      { label: "Poor Charlie's Almanack - Stripe Press", href: "https://www.stripe.press/poor-charlies-almanack" },
      { label: "The Psychology of Human Misjudgment", href: "https://fs.blog/great-talks/psychology-human-misjudgment/" }
    ],
    scores: {
      valuationAnchor: 70,
      durabilityPreference: 95,
      researchDepth: 75,
      portfolioBreadth: 30,
      costFrictionAwareness: 50,
      macroRegimeAwareness: 45,
      adaptability: 65,
      downsideDiscipline: 90,
      timeHorizon: 95,
      behavioralDiscipline: 100
    }
  },
  {
    slug: "john-bogle",
    name: "John Bogle",
    nameZh: "约翰·博格",
    title: "Low-cost market ownership",
    titleZh: "低成本市场所有权",
    shortStyle: "Diversified, low-cost, passive, and behaviorally humble.",
    shortStyleZh: "分散、低成本、被动，并在行为上保持谦逊。",
    summary:
      "Bogle's style accepts that many investors cannot reliably identify winners in advance. It controls what can be controlled: costs, diversification, simplicity, taxes, turnover, and behavior.",
    summaryZh:
      "博格的风格承认许多投资者无法可靠地提前识别赢家。它控制那些可以控制的东西：成本、分散、简洁、税负、换手和行为。",
    strengths: [
      {
        en: "Turns humility about forecasting into a practical, low-friction process.",
        zh: "把对预测的谦逊转化为实际、低摩擦的流程。"
      },
      {
        en: "Makes broad diversification and low cost central rather than secondary.",
        zh: "把广泛分散和低成本放在核心位置，而不是次要位置。"
      }
    ],
    watchOuts: [
      {
        en: "Indexing still includes market drawdowns and long periods of uncomfortable waiting.",
        zh: "指数化依然包含市场回撤和漫长的不舒服等待期。"
      },
      {
        en: "Simplicity only works when the investor can actually stay with the plan.",
        zh: "只有当投资者真的能坚持计划时，简洁才有效。"
      }
    ],
    learningLinks: [
      { label: "John C. Bogle Center for Financial Literacy", href: "https://boglecenter.net/about/" },
      { label: "Bogleheads Getting Started", href: "https://www.bogleheads.org/wiki/Getting_started" },
      { label: "Bogleheads for Non-US Investors", href: "https://www.bogleheads.org/wiki/Getting_started_for_non-US_investors" }
    ],
    scores: {
      valuationAnchor: 35,
      durabilityPreference: 55,
      researchDepth: 35,
      portfolioBreadth: 100,
      costFrictionAwareness: 100,
      macroRegimeAwareness: 30,
      adaptability: 35,
      downsideDiscipline: 80,
      timeHorizon: 95,
      behavioralDiscipline: 90
    }
  },
  {
    slug: "peter-lynch",
    name: "Peter Lynch",
    nameZh: "彼得·林奇",
    title: "Knowable growth and grounded curiosity",
    titleZh: "可理解的成长与扎实好奇心",
    shortStyle: "Company-specific, curious, active, and flexible across categories.",
    shortStyleZh: "聚焦公司、保持好奇、主动研究，并能跨类别灵活判断。",
    summary:
      "Lynch's style starts with understandable observations but insists on checking the story against fundamentals. Familiarity is a starting clue, not a substitute for analysis.",
    summaryZh:
      "林奇的风格从可理解的观察出发，但坚持用基本面验证故事。熟悉只是起点线索，不是分析的替代品。",
    strengths: [
      {
        en: "Turns everyday observation into research questions that can be tested.",
        zh: "把日常观察转化为可以检验的研究问题。"
      },
      {
        en: "Stays flexible across growth, cyclicals, turnarounds, and other categories.",
        zh: "能在成长股、周期股、困境反转等类别之间保持灵活。"
      }
    ],
    watchOuts: [
      {
        en: "Knowing a product is not the same as understanding the company or valuation.",
        zh: "熟悉产品不等于理解公司或估值。"
      },
      {
        en: "Active curiosity can become overactivity without a clear review process.",
        zh: "如果没有清晰复盘流程，主动好奇可能变成过度活跃。"
      }
    ],
    learningLinks: [
      { label: "One Up On Wall Street - Simon & Schuster", href: "https://www.simonandschuster.com/books/One-Up-On-Wall-Street/Peter-Lynch/9780743200400" },
      { label: "Beating the Street - Simon & Schuster", href: "https://www.simonandschuster.com/books/Beating-the-Street/Peter-Lynch/9780671891633" }
    ],
    scores: {
      valuationAnchor: 65,
      durabilityPreference: 75,
      researchDepth: 95,
      portfolioBreadth: 55,
      costFrictionAwareness: 45,
      macroRegimeAwareness: 30,
      adaptability: 60,
      downsideDiscipline: 60,
      timeHorizon: 75,
      behavioralDiscipline: 70
    }
  },
  {
    slug: "george-soros",
    name: "George Soros",
    nameZh: "乔治·索罗斯",
    title: "Reflexivity and market feedback",
    titleZh: "反身性与市场反馈",
    shortStyle: "Macro-aware, adaptive, psychological, and focused on feedback loops.",
    shortStyleZh: "关注宏观、适应性强、重视心理，并聚焦反馈循环。",
    summary:
      "Soros's style asks how beliefs, prices, leverage, and policy can change the reality investors are trying to analyze. It is built around feedback loops and rapid reassessment.",
    summaryZh:
      "索罗斯的风格追问信念、价格、杠杆和政策如何改变投资者正在分析的现实。它建立在反馈循环和快速再评估之上。",
    strengths: [
      {
        en: "Recognizes that markets can reshape the facts they appear to measure.",
        zh: "认识到市场可以重塑它看似正在衡量的事实。"
      },
      {
        en: "Treats changing one's mind as part of discipline, not as weakness.",
        zh: "把改变看法视为纪律的一部分，而不是软弱。"
      }
    ],
    watchOuts: [
      {
        en: "High-conviction macro trading can be dangerous without professional risk controls.",
        zh: "如果没有专业风险控制，高信念宏观交易可能很危险。"
      },
      {
        en: "Reflexive narratives can become too abstract unless tied to position sizing and exit rules.",
        zh: "如果不和仓位与退出规则相连，反身性叙事可能变得过于抽象。"
      }
    ],
    learningLinks: [
      { label: "General Theory of Reflexivity - George Soros", href: "https://www.georgesoros.com/2009/10/26/general_theory_of_reflexivity_lecture/" },
      { label: "Open Society Lecture Series on Reflexivity", href: "https://www.opensocietyfoundations.org/publications/george-soros-open-society-financial-crisis-and-way-ahead" }
    ],
    scores: {
      valuationAnchor: 45,
      durabilityPreference: 35,
      researchDepth: 70,
      portfolioBreadth: 35,
      costFrictionAwareness: 35,
      macroRegimeAwareness: 100,
      adaptability: 100,
      downsideDiscipline: 85,
      timeHorizon: 45,
      behavioralDiscipline: 75
    }
  },
  {
    slug: "ray-dalio",
    name: "Ray Dalio",
    nameZh: "瑞·达利欧",
    title: "Economic machines and all-weather balance",
    titleZh: "经济机器与全天候平衡",
    shortStyle: "Systems-oriented, diversified, macro-sensitive, and rules-aware.",
    shortStyleZh: "系统导向、分散、宏观敏感，并重视规则。",
    summary:
      "Dalio's style studies economies as systems and asks how portfolios behave across different growth and inflation environments. It tries to reduce dependence on one forecast.",
    summaryZh:
      "达利欧的风格把经济视为系统，追问组合在不同增长和通胀环境中如何表现。它试图减少对单一预测的依赖。",
    strengths: [
      {
        en: "Makes scenario thinking and environment balance explicit.",
        zh: "明确使用情景思维和环境平衡。"
      },
      {
        en: "Looks across return drivers instead of relying on one asset or one story.",
        zh: "跨收益驱动因素思考，而不是依赖单一资产或单一故事。"
      }
    ],
    watchOuts: [
      {
        en: "Simplified all-weather formulas can hide leverage, correlation, cost, and local-market issues.",
        zh: "简化的全天候公式可能掩盖杠杆、相关性、成本和本地市场问题。"
      },
      {
        en: "A system map is useful only when assumptions are reviewed as the world changes.",
        zh: "只有在世界变化时持续复核假设，系统地图才有用。"
      }
    ],
    learningLinks: [
      { label: "The All Weather Story - Bridgewater", href: "https://www.bridgewater.com/research-and-insights/the-all-weather-story" },
      { label: "Principles by Ray Dalio", href: "https://www.principles.com/" }
    ],
    scores: {
      valuationAnchor: 35,
      durabilityPreference: 45,
      researchDepth: 75,
      portfolioBreadth: 90,
      costFrictionAwareness: 60,
      macroRegimeAwareness: 100,
      adaptability: 80,
      downsideDiscipline: 90,
      timeHorizon: 80,
      behavioralDiscipline: 85
    }
  },
  {
    slug: "howard-marks",
    name: "Howard Marks",
    nameZh: "霍华德·马克斯",
    title: "Risk, cycles, and second-level thinking",
    titleZh: "风险、周期与二阶思维",
    shortStyle: "Risk-first, cycle-aware, contrarian, and probabilistic.",
    shortStyleZh: "风险优先、周期敏感、逆向，并以概率方式思考。",
    summary:
      "Marks's style studies what expectations are already in the price and where the cycle may be encouraging poor behavior. It treats risk as permanent loss, bad positioning, and forced selling.",
    summaryZh:
      "马克斯的风格研究价格中已经包含了什么预期，以及周期在何处鼓励错误行为。它把风险视为永久损失、错误站位和被迫卖出。",
    strengths: [
      {
        en: "Connects valuation, psychology, cycles, and risk control in plain language.",
        zh: "用清晰语言把估值、心理、周期和风险控制连接起来。"
      },
      {
        en: "Encourages probabilistic thinking instead of pretending the future is knowable.",
        zh: "鼓励概率思维，而不是假装未来可以被准确知道。"
      }
    ],
    watchOuts: [
      {
        en: "Being contrarian only helps when the reasoning and odds are actually better.",
        zh: "只有当推理和赔率真的更好时，逆向才有帮助。"
      },
      {
        en: "Cycle awareness should guide risk, not become a need to forecast every turn.",
        zh: "周期意识应当指导风险，而不是变成预测每个转折的冲动。"
      }
    ],
    learningLinks: [
      { label: "Howard Marks Memos - Oaktree", href: "https://www.oaktreecapital.com/insights/memos" },
      { label: "The Most Important Thing - Columbia University Press", href: "https://cup.columbia.edu/book/the-most-important-thing/9780231527095/" }
    ],
    scores: {
      valuationAnchor: 85,
      durabilityPreference: 70,
      researchDepth: 75,
      portfolioBreadth: 65,
      costFrictionAwareness: 55,
      macroRegimeAwareness: 70,
      adaptability: 75,
      downsideDiscipline: 100,
      timeHorizon: 85,
      behavioralDiscipline: 95
    }
  }
];

export function getInvestmentMaster(slug: string) {
  return investmentMasters.find((master) => master.slug === slug);
}

export function getInvestmentDimensionScores(scores: InvestmentScoreMap): DimensionScore[] {
  return investmentStyleBenchmarks.map((benchmark) => ({
    id: benchmark.id,
    label: benchmark.label,
    description: benchmark.description,
    score: scores[benchmark.id]
  }));
}

export function getMasterDimensionScores(master: InvestmentMaster) {
  return getInvestmentDimensionScores(master.scores);
}

export function toInvestmentScoreMap(scores: DimensionScore[]): InvestmentScoreMap {
  return investmentStyleBenchmarks.reduce((result, benchmark) => {
    result[benchmark.id] = scores.find((score) => score.id === benchmark.id)?.score ?? 50;
    return result;
  }, {} as InvestmentScoreMap);
}

function cosineSimilarity(a: InvestmentScoreMap, b: InvestmentScoreMap) {
  const ids = investmentStyleBenchmarks.map((benchmark) => benchmark.id);
  const dot = ids.reduce((sum, id) => sum + a[id] * b[id], 0);
  const aMagnitude = Math.sqrt(ids.reduce((sum, id) => sum + a[id] * a[id], 0));
  const bMagnitude = Math.sqrt(ids.reduce((sum, id) => sum + b[id] * b[id], 0));

  if (aMagnitude === 0 || bMagnitude === 0) return 0;

  return dot / (aMagnitude * bMagnitude);
}

export function getMostSimilarInvestmentMaster(scores: DimensionScore[]) {
  const userScores = toInvestmentScoreMap(scores);
  const ranked = investmentMasters
    .map((master) => ({
      master,
      similarity: cosineSimilarity(userScores, master.scores)
    }))
    .sort((a, b) => b.similarity - a.similarity);

  return ranked[0];
}

function normalizedDistance(a: InvestmentScoreMap, b: InvestmentScoreMap) {
  const ids = investmentStyleBenchmarks.map((benchmark) => benchmark.id);
  const squaredDistance = ids.reduce((sum, id) => sum + (a[id] - b[id]) ** 2, 0);

  return Math.sqrt(squaredDistance / (ids.length * 10000));
}

export function getMostOppositeInvestmentMaster(scores: DimensionScore[]) {
  const userScores = toInvestmentScoreMap(scores);
  const ranked = investmentMasters
    .map((master) => ({
      master,
      difference: normalizedDistance(userScores, master.scores)
    }))
    .sort((a, b) => b.difference - a.difference);

  return ranked[0];
}

export function getMostComplementaryInvestmentMaster(scores: DimensionScore[]) {
  const userScores = toInvestmentScoreMap(scores);
  const quietBenchmarks = investmentStyleBenchmarks
    .filter((benchmark) => userScores[benchmark.id] < 55)
    .sort((a, b) => userScores[a.id] - userScores[b.id]);
  const comparisonBenchmarks = quietBenchmarks.length > 0 ? quietBenchmarks.slice(0, 4) : [...investmentStyleBenchmarks]
    .sort((a, b) => userScores[a.id] - userScores[b.id])
    .slice(0, 3);

  const ranked = investmentMasters
    .map((master) => {
      const coverage =
        comparisonBenchmarks.reduce((sum, benchmark) => {
          const gap = Math.max(0, master.scores[benchmark.id] - userScores[benchmark.id]);
          return sum + gap;
        }, 0) / comparisonBenchmarks.length;

      return {
        master,
        fit: coverage,
        dimensions: comparisonBenchmarks
      };
    })
    .sort((a, b) => b.fit - a.fit);

  return ranked[0];
}
