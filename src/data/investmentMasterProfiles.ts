import type { BilingualLine } from "@/data/investmentStyle";

export type InvestmentMasterProfileSection = {
  id: string;
  heading: string;
  headingZh: string;
  body: BilingualLine[];
};

export const investmentMasterProfileSections: Record<string, InvestmentMasterProfileSection[]> = {
  "benjamin-graham": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Graham turned investing into a discipline of evidence, valuation, and emotional restraint. His central question is not whether a story sounds attractive, but whether the price leaves enough margin of safety if the story is partly wrong.",
          zh: "格雷厄姆把投资变成一种由证据、估值和情绪克制构成的纪律。他的核心问题不是一个故事是否动人，而是如果故事部分出错，当前价格是否仍然留下足够的安全边际。"
        },
        {
          en: "His famous Mr. Market metaphor treats market prices as offers from an emotional partner, not as commands. The investor's job is to use price when it is helpful and ignore it when it is only mood.",
          zh: "他著名的“市场先生”隐喻把市场价格看作一个情绪化伙伴给出的报价，而不是必须服从的命令。投资者的任务是在价格有帮助时利用它，在价格只是情绪时忽略它。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "Graham is often associated with net-net investing: buying companies whose market value was below conservative estimates of liquid assets. The case is less about nostalgia for old balance sheets and more about the habit of demanding a cushion before acting.",
          zh: "格雷厄姆常与“净流动资产”式投资联系在一起：用低于保守清算资产估计的价格买入公司。这个案例的重点不是怀旧地寻找旧式资产负债表，而是行动前必须要求保护垫的习惯。"
        },
        {
          en: "His work at Graham-Newman and his influence on Warren Buffett made the method a foundation for modern value investing: calculate conservatively, diversify enough to survive error, and avoid paying for hope.",
          zh: "他在 Graham-Newman 的实践以及对沃伦·巴菲特的影响，让这种方法成为现代价值投资的重要基础：保守计算，适度分散以承受错误，并避免为希望支付过高价格。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Graham-style process begins with financial statements, asset values, earnings power, debt, and price. It asks what could go wrong first, then asks whether the current price already compensates for those risks.",
          zh: "格雷厄姆式流程从财务报表、资产价值、盈利能力、债务和价格开始。它先问哪里可能出错，再问当前价格是否已经为这些风险提供补偿。"
        },
        {
          en: "The style usually prefers many small edges over one heroic prediction. Diversification is not a lack of conviction; it is a recognition that even careful analysis can be wrong.",
          zh: "这种风格通常更偏好多数小优势，而不是一次英雄式预测。分散并不是缺乏信念，而是承认即使认真分析也可能出错。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Graham's long-run importance is partly performance and partly method. His record helped prove that disciplined security analysis could work, but his larger legacy is a repeatable way to think under uncertainty.",
          zh: "格雷厄姆的长期重要性一部分来自业绩，一部分来自方法。他的记录帮助证明有纪律的证券分析可以有效，但更大的遗产是提供了一种在不确定性下可重复思考的方式。"
        },
        {
          en: "The approach tends to look best when markets overreact, neglect unpopular assets, or reward patience. It can look slow when expensive growth stories keep working for a long time.",
          zh: "当市场过度反应、忽视冷门资产，或重新奖励耐心时，这种方法通常更显优势。当高估值成长故事长期持续有效时，它可能显得缓慢。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Graham is a strong antidote to excitement, overconfidence, and price-insensitive optimism. The limitation is that cheapness alone is not enough when business quality is permanently deteriorating.",
          zh: "格雷厄姆是对抗兴奋、过度自信和不看价格的乐观主义的强力解药。局限在于，当企业质量永久恶化时，仅仅便宜并不够。"
        },
        {
          en: "The useful lesson is not to copy every old formula, but to preserve the habit: define value, demand evidence, and leave room for being wrong.",
          zh: "真正有用的不是复制每一个旧公式，而是保留这种习惯：定义价值、要求证据，并为犯错留下空间。"
        }
      ]
    }
  ],
  "warren-buffett": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Buffett's mature philosophy is business ownership rather than stock trading. A share is a claim on a business, so the investor should care about durable economics, management, reinvestment, and whether time helps or hurts the company.",
          zh: "巴菲特成熟期的哲学是企业所有权，而不是股票交易。一股股票代表对企业的部分所有权，所以投资者应关心持久的经济特征、管理层、再投资能力，以及时间究竟帮助还是伤害这家公司。"
        },
        {
          en: "He keeps Graham's price discipline but adds a stronger preference for quality. The ideal is a business that can compound capital for a long time without requiring constant reinvention by the investor.",
          zh: "他保留了格雷厄姆的价格纪律，但更加强调企业质量。理想对象是能够长期复利资本、且不需要投资者不断重新发明判断逻辑的企业。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "See's Candies is often used to explain Buffett's shift from merely cheap assets to excellent businesses. The company showed pricing power, brand strength, and the ability to produce cash beyond its reinvestment needs.",
          zh: "喜诗糖果常被用来解释巴菲特从单纯便宜资产转向优秀企业的变化。它展示了定价权、品牌力，以及在再投资需求之外持续产生现金的能力。"
        },
        {
          en: "Coca-Cola and American Express illustrate another part of the style: recognizable consumer economics, long holding periods, and the patience to let a strong business keep working after the purchase.",
          zh: "可口可乐和美国运通体现了这种风格的另一面：可理解的消费经济特征、长期持有，以及买入后让强企业继续发挥作用的耐心。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Buffett-style process starts with circle of competence. If the business cannot be understood, the opportunity is passed over, no matter how exciting the market story sounds.",
          zh: "巴菲特式流程从能力圈开始。如果无法理解这门生意，无论市场故事多么令人兴奋，都应跳过。"
        },
        {
          en: "The strategy favors selectivity, patience, sensible price, and high trust in business economics. Concentration appears only after understanding, not before it.",
          zh: "这种策略偏好选择性、耐心、合理价格，以及对企业经济特征的高度信任。集中持仓应出现在理解之后，而不是理解之前。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Berkshire Hathaway's long-term record made Buffett one of the most studied investors in the world. The performance is tied not only to stock selection, but also to insurance float, capital allocation, deal structure, taxes, and culture.",
          zh: "伯克希尔·哈撒韦的长期记录让巴菲特成为全球最被研究的投资者之一。这种表现不仅来自选股，也与保险浮存金、资本配置、交易结构、税务和企业文化有关。"
        },
        {
          en: "That matters for learners because copying visible holdings misses much of the system. The process behind the decision is more transferable than the portfolio at any one moment.",
          zh: "这对学习者很重要，因为复制可见持仓会遗漏系统中的许多部分。决策背后的流程比某一时刻的投资组合更可迁移。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Buffett's approach is powerful when a business can be understood and held through noise. It is less helpful when the investor overestimates their competence or pays any price for quality.",
          zh: "当一家企业可以被理解，并能穿越噪音长期持有时，巴菲特方法非常有力。当投资者高估自己的能力圈，或愿意为质量支付任何价格时，它就会变危险。"
        },
        {
          en: "The core lesson is not hero worship. It is owner thinking, patience, and the humility to say no often.",
          zh: "核心教训不是英雄崇拜，而是所有者思维、耐心，以及经常说“不”的谦逊。"
        }
      ]
    }
  ],
  "charlie-munger": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Munger treats investing as a judgment problem. The investor needs accounting, psychology, incentives, competitive dynamics, and basic worldly wisdom, not only a valuation spreadsheet.",
          zh: "芒格把投资视为判断力问题。投资者需要会计、心理学、激励机制、竞争动态和基本的世事智慧，而不仅仅是一张估值表。"
        },
        {
          en: "His favorite move is inversion: instead of asking how to become brilliant, ask what would produce failure and remove it. Avoiding obvious stupidity is part of the edge.",
          zh: "他最常用的动作是反向思考：与其问怎样变得聪明，不如问什么会导致失败，并把它移除。避免显而易见的愚蠢本身就是优势的一部分。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "Munger is often linked with the See's Candies lesson: a high-quality business with pricing power can be worth far more than a merely cheap asset. That idea influenced Berkshire's move toward better businesses.",
          zh: "芒格常与喜诗糖果的案例联系在一起：一家拥有定价权的高质量企业，可能比单纯便宜的资产更有价值。这个想法影响了伯克希尔向更优秀企业转型。"
        },
        {
          en: "His public talks on incentives and human misjudgment became a practical casebook for investors: many bad decisions are not caused by math errors, but by envy, denial, authority pressure, and misplaced incentives.",
          zh: "他关于激励机制和人类误判的公开演讲，成为投资者的实践案例集：许多坏决策并不是数学错误，而是嫉妒、否认、权威压力和错误激励造成的。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Munger-style process is selective and checklist-driven. It asks whether the business is understandable, whether the incentives are sane, whether the moat can last, and what obvious failure mode is being ignored.",
          zh: "芒格式流程高度挑选，并带有清单意识。它会问：企业是否可理解，激励机制是否合理，护城河能否持续，以及哪个显而易见的失败模式被忽略了。"
        },
        {
          en: "The strategy accepts concentration only when knowledge, quality, and temperament are unusually strong. Sitting still is a deliberate act, not laziness.",
          zh: "这种策略只有在知识、质量和心态都异常强时才接受集中。静坐不动是一种主动选择，而不是懒惰。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Munger's performance is usually discussed through Berkshire and through his influence on Buffett's capital allocation. His largest contribution may be the quality filter that changed what counted as a good opportunity.",
          zh: "芒格的表现通常通过伯克希尔以及他对巴菲特资本配置的影响来讨论。他最大的贡献可能是改变了“好机会”的质量筛选标准。"
        },
        {
          en: "The style tends to shine when patience, scarcity of action, and deep judgment are rewarded. It can underperform socially because doing almost nothing often looks unimpressive while it is happening.",
          zh: "当耐心、少行动和深度判断受到奖励时，这种风格往往更有优势。它在社交层面可能显得“不够精彩”，因为在结果出现前，几乎不行动常常看起来并不耀眼。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Munger's great strength is error prevention. The danger for learners is using mental-model language as decoration while skipping the hard work of learning the models deeply.",
          zh: "芒格最大的优势是预防错误。学习者的危险在于把思维模型当作装饰性语言，却跳过深入学习模型的艰苦工作。"
        },
        {
          en: "The best takeaway is practical: study incentives, invert the problem, and build systems that make foolish action harder.",
          zh: "最好的收获是实践性的：研究激励，反向思考，并建立让愚蠢行动更难发生的系统。"
        }
      ]
    }
  ],
  "john-bogle": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Bogle's philosophy begins with the arithmetic of investing. Before skill, story, or prediction, every investor faces costs, taxes, turnover, and behavior. Lower friction leaves more of the market return in the investor's hands.",
          zh: "博格尔的哲学从投资算术开始。在技巧、故事或预测之前，每个投资者都会面对费用、税收、换手和行为问题。更低的摩擦能让投资者保留更多市场回报。"
        },
        {
          en: "He reframed ordinary investing around broad ownership rather than manager selection. The aim is not to win every contest, but to avoid losing through unnecessary complexity.",
          zh: "他把普通人的投资重新定义为广泛拥有市场，而不是挑选明星管理人。目标不是赢下每场比赛，而是避免因不必要的复杂性而输掉。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "The Vanguard index fund is the central case. It made low-cost market ownership available at scale and challenged the assumption that most investors should search for superior active managers.",
          zh: "先锋指数基金是核心案例。它把低成本市场持有大规模提供给普通投资者，并挑战了“多数投资者应寻找更优秀主动管理人”的假设。"
        },
        {
          en: "The Bogleheads community is another legacy case: a culture built around simplicity, diversification, low cost, and staying the course rather than constant forecasting.",
          zh: "Bogleheads 社群是另一个遗产案例：它围绕简单、分散、低成本和坚持计划建立文化，而不是围绕持续预测。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Bogle-style strategy usually starts with asset allocation, broad index funds, low fees, tax awareness, and a plan the investor can hold during drawdowns.",
          zh: "博格尔式策略通常从资产配置、宽基指数基金、低费用、税务意识，以及投资者能在回撤中坚持的计划开始。"
        },
        {
          en: "The discipline is behavioral as much as mathematical. A simple plan only works if the investor can avoid abandoning it at the worst moment.",
          zh: "这种纪律既是数学问题，也是行为问题。简单计划只有在投资者不会在最糟糕时刻放弃时才有效。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Bogle's performance contribution is institutional and practical: he helped reduce the cost of investing for millions of people. The effect is not one spectacular trade, but decades of fee compression and better defaults.",
          zh: "博格尔的表现贡献是制度性和实践性的：他帮助数以百万计的人降低了投资成本。其影响不是某一次惊艳交易，而是数十年的费率压缩和更好的默认选择。"
        },
        {
          en: "Indexing will not remove market risk. It performs with the market, including long drawdowns, but it avoids many avoidable costs of trying to outguess everyone else.",
          zh: "指数化不会消除市场风险。它会跟随市场表现，包括长期回撤，但它避免了许多试图猜赢所有人所带来的可避免成本。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Bogle's approach is strongest for investors who need a durable default rather than a heroic identity. Its weakness is psychological: simple can feel unsatisfying when markets reward exciting stories.",
          zh: "博格尔方法最适合需要持久默认方案、而不是英雄身份的投资者。它的弱点是心理层面：当市场奖励刺激故事时，简单可能让人觉得不满足。"
        },
        {
          en: "The lesson is to control what can be controlled and respect what cannot: costs, allocation, behavior, and time are more controllable than next year's winner.",
          zh: "关键教训是控制可控之事，并尊重不可控之事：成本、配置、行为和时间比明年的赢家更可控。"
        }
      ]
    }
  ],
  "peter-lynch": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Lynch's philosophy begins with grounded curiosity. Ordinary life can reveal clues, but the clue is only a starting point; it must be checked against earnings, valuation, balance sheet, competitors, and runway.",
          zh: "林奇的哲学从贴近日常的好奇心开始。普通生活可以提供线索，但线索只是起点；它必须被盈利、估值、资产负债表、竞争对手和成长空间验证。"
        },
        {
          en: "He liked understandable companies with room to grow, but he did not reduce investing to liking a product. The story had to become visible in the numbers.",
          zh: "他喜欢可理解且仍有成长空间的公司，但并没有把投资简化成喜欢某个产品。故事必须能在数字中变得可见。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "The Magellan Fund years are the central performance case for Lynch. He is associated with finding many different kinds of winners, not with forcing every idea into one rigid style box.",
          zh: "麦哲伦基金时期是林奇最核心的业绩案例。他的特点是发现许多不同类型的赢家，而不是把所有想法强行塞进一个固定风格盒子。"
        },
        {
          en: "His idea of the tenbagger is often remembered, but the more useful case is the research habit behind it: observe, classify the company, check the facts, and keep updating the story.",
          zh: "他的“十倍股”概念常被记住，但更有用的案例是背后的研究习惯：观察、给公司分类、核查事实，并持续更新故事。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Lynch-style process asks what kind of company this is: slow grower, stalwart, fast grower, cyclical, turnaround, or asset play. The right evidence depends on the category.",
          zh: "林奇式流程会先问这是什么类型的公司：缓慢增长、稳定增长、快速增长、周期股、困境反转，还是资产型机会。正确证据取决于分类。"
        },
        {
          en: "The strategy values field observation, but it also demands humility. Familiarity with a product can create overconfidence if the investor does not understand margins, valuation, debt, and competition.",
          zh: "这种策略重视实地观察，但也要求谦逊。熟悉产品可能制造过度自信，尤其当投资者并不了解利润率、估值、债务和竞争时。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Lynch's historical reputation rests on exceptionally strong active management at Fidelity Magellan. The record is also tied to intense research, broad opportunity scanning, and a market environment that cannot be simply recreated.",
          zh: "林奇的历史声誉建立在富达麦哲伦基金极强的主动管理表现之上。这一记录也与高强度研究、广泛寻找机会以及无法简单重现的市场环境有关。"
        },
        {
          en: "For learners, the transferable part is not trying to own hundreds of names. It is the habit of turning curiosity into a testable thesis.",
          zh: "对学习者来说，可迁移的部分不是试图持有数百只股票，而是把好奇心转化为可检验投资论点的习惯。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Lynch is useful for people who want investing to stay connected to observable reality. The limitation is that observation can become anecdote unless it is tested against financial evidence.",
          zh: "林奇对那些希望投资保持与可观察现实连接的人很有用。局限在于，如果不被财务证据检验，观察很容易变成轶事。"
        },
        {
          en: "The best lesson is to start where you can understand, then do the work. Familiar does not automatically mean investable.",
          zh: "最好的教训是从自己能理解的地方开始，然后完成研究工作。熟悉并不自动等于值得投资。"
        }
      ]
    }
  ],
  "george-soros": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Soros's core idea is reflexivity: market participants do not merely observe reality; their beliefs and actions can change the reality they are trying to understand.",
          zh: "索罗斯的核心思想是反身性：市场参与者并不只是观察现实；他们的信念和行动也会改变他们试图理解的现实。"
        },
        {
          en: "This makes markets feedback systems. Prices, narratives, credit, policy, and behavior can reinforce one another until the gap between perception and reality becomes unstable.",
          zh: "这让市场成为反馈系统。价格、叙事、信用、政策和行为可能相互强化，直到认知与现实之间的差距变得不稳定。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "The 1992 British pound trade is the best-known Soros case. It is usually remembered as a macro bet, but the deeper lesson is pressure in a policy regime that could not hold under market and economic constraints.",
          zh: "1992 年英镑交易是索罗斯最知名的案例。它通常被记作宏观押注，但更深层的教训是：当政策制度无法承受市场和经济约束时，压力会集中爆发。"
        },
        {
          en: "His broader work studies boom-bust sequences: belief pushes prices, prices validate belief, leverage expands, and then the feedback loop can reverse violently.",
          zh: "他更广泛的工作研究繁荣—崩溃序列：信念推动价格，价格验证信念，杠杆扩张，然后反馈循环可能剧烈反转。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Soros-style process looks for unstable systems: currency pegs, credit booms, policy contradictions, crowded narratives, and moments when price action changes the facts on the ground.",
          zh: "索罗斯式流程寻找不稳定系统：汇率盯住、信用繁荣、政策矛盾、拥挤叙事，以及价格行为正在改变现实事实的时刻。"
        },
        {
          en: "The style requires adaptability. Being wrong is not fatal if the position is controlled and the thesis can be changed quickly; refusing to change is the bigger risk.",
          zh: "这种风格要求适应性。只要仓位受控且论点能迅速调整，犯错并不致命；拒绝改变才是更大的风险。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Soros's reputation comes from high-impact macro investing and the Quantum Fund era. The results depended on risk control, liquidity, timing, and institutional capacity, not only on having a bold opinion.",
          zh: "索罗斯的声誉来自高影响力的宏观投资以及量子基金时代。其结果依赖风险控制、流动性、时机和机构能力，而不仅仅是拥有大胆观点。"
        },
        {
          en: "For learners, the performance lesson is not to imitate large macro trades. It is to notice when a system's internal contradictions are becoming visible.",
          zh: "对学习者来说，表现层面的教训不是模仿大型宏观交易，而是注意一个系统内部矛盾何时变得可见。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Soros is powerful for thinking about feedback loops, policy, leverage, and crowd belief. The limitation is that macro trading is hard to copy without professional infrastructure and strict risk control.",
          zh: "索罗斯非常适合理解反馈循环、政策、杠杆和群体信念。局限在于，如果没有专业基础设施和严格风控，宏观交易很难复制。"
        },
        {
          en: "The useful takeaway is intellectual: ask how beliefs are changing reality, and how reality may later punish the belief.",
          zh: "有用的收获是思维上的：询问信念如何改变现实，以及现实之后可能如何惩罚这种信念。"
        }
      ]
    }
  ],
  "ray-dalio": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Dalio thinks in systems. Economies are machines made of credit, spending, income, policy, productivity, inflation, and human behavior; investment results depend on how those parts interact.",
          zh: "达利欧以系统方式思考。经济是一台由信用、支出、收入、政策、生产率、通胀和人类行为组成的机器；投资结果取决于这些部分如何相互作用。"
        },
        {
          en: "His philosophy is also anti-one-scenario. If the future can surprise in several ways, a portfolio should not depend entirely on one economic environment being correct.",
          zh: "他的哲学也反对单一情景。如果未来可能以多种方式令人意外，投资组合就不应完全依赖某一种经济环境正确。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "Bridgewater's All Weather thinking is the central case. It tries to balance exposures so that growth, inflation, recession, and deflation surprises do not all hurt the portfolio in the same way.",
          zh: "桥水的全天候思想是核心案例。它试图平衡风险暴露，使增长、通胀、衰退和通缩的意外不会以同一种方式伤害投资组合。"
        },
        {
          en: "Dalio's public 'economic machine' framework is another case: instead of starting from a stock idea, it starts from credit cycles, debt burdens, policy responses, and regime shifts.",
          zh: "达利欧公开的“经济机器”框架是另一个案例：它不是从某只股票开始，而是从信用周期、债务负担、政策反应和环境切换开始。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Dalio-style process defines environments first, then asks how different assets behave in each environment. Diversification is about return drivers, not merely owning more line items.",
          zh: "达利欧式流程先定义经济环境，再问不同资产在各环境中如何表现。分散是关于收益驱动因素，而不只是持有更多项目。"
        },
        {
          en: "The style values rules, scenario thinking, and risk balance. It tries to reduce dependence on heroic forecasting by preparing for multiple worlds.",
          zh: "这种风格重视规则、情景思维和风险平衡。它通过为多个世界做准备，减少对英雄式预测的依赖。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Dalio's performance reputation is tied to Bridgewater's scale, macro research, and systematic portfolio construction. The visible All Weather idea is only a simplified doorway into a much larger institutional process.",
          zh: "达利欧的表现声誉与桥水的规模、宏观研究和系统化组合构建相关。可见的全天候思想只是进入更大机构流程的简化入口。"
        },
        {
          en: "The approach can help when economic regimes shift, but simplified versions can be misunderstood if investors ignore leverage, correlations, fees, taxes, and local market constraints.",
          zh: "当经济环境切换时，这种方法可能有帮助；但如果投资者忽视杠杆、相关性、费用、税收和本地市场限制，简化版本很容易被误解。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Dalio is valuable for moving investors beyond one favored forecast. The limitation is complexity: system language can create false confidence if the actual implementation is not understood.",
          zh: "达利欧的价值在于把投资者从单一偏好预测中拉出来。局限在于复杂性：如果不理解实际执行，系统语言可能制造虚假信心。"
        },
        {
          en: "The best lesson is to ask what kind of world would hurt the plan, then design the plan before that world arrives.",
          zh: "最好的教训是先问什么样的世界会伤害计划，然后在那个世界到来之前设计计划。"
        }
      ]
    }
  ],
  "howard-marks": [
    {
      id: "philosophy",
      heading: "Core Philosophy",
      headingZh: "核心思想",
      body: [
        {
          en: "Marks centers investing on risk, cycles, and second-level thinking. The question is not only whether an asset is good, but what expectations are already reflected in the price.",
          zh: "马克斯把投资的核心放在风险、周期和二阶思维上。问题不仅是资产是否优秀，而是价格中已经反映了什么预期。"
        },
        {
          en: "He treats risk as more than volatility. Permanent loss, poor positioning, excessive optimism, and forced selling can matter more than day-to-day price movement.",
          zh: "他把风险看得远不止波动。永久损失、错误站位、过度乐观和被迫卖出，可能比日常价格波动更重要。"
        }
      ]
    },
    {
      id: "cases",
      heading: "Representative Cases",
      headingZh: "代表案例",
      body: [
        {
          en: "Oaktree's distressed debt work is a representative case: look where fear, complexity, or forced selling may create mispricing, but insist on careful downside analysis.",
          zh: "橡树资本的困境债投资是代表案例：在恐惧、复杂性或被迫卖出可能制造错价的地方寻找机会，但必须坚持严谨的下行分析。"
        },
        {
          en: "Marks's memos are also cases in real time. They show how to read market psychology, identify excesses, and stay humble about what cannot be known.",
          zh: "马克斯的备忘录本身也是实时案例。它们展示了如何阅读市场心理、识别过度行为，并对不可知之事保持谦逊。"
        }
      ]
    },
    {
      id: "strategy",
      heading: "Strategy in Practice",
      headingZh: "策略方法",
      body: [
        {
          en: "A Marks-style process starts by asking where we are in the cycle. Are investors fearful or euphoric? Is capital easy or scarce? Are prices paying the investor for risk?",
          zh: "马克斯式流程会先问我们处在周期的哪个位置。投资者是恐惧还是亢奋？资本容易获得还是稀缺？价格是否在为承担风险付费？"
        },
        {
          en: "The strategy is contrarian only when the odds justify it. Disagreeing with the crowd is not enough; the reasoning, price, and risk control must be better.",
          zh: "这种策略只有在赔率支持时才逆向。与大众意见不同并不够；推理、价格和风险控制必须更好。"
        }
      ]
    },
    {
      id: "performance",
      heading: "Performance Lens",
      headingZh: "表现视角",
      body: [
        {
          en: "Marks's performance reputation is tied to credit, distressed investing, and risk-aware opportunism. The style is designed to survive bad environments and have capital ready when others are forced to retreat.",
          zh: "马克斯的表现声誉与信用、困境投资和风险敏感的机会主义相关。这种风格旨在穿越恶劣环境，并在他人被迫退场时仍有资本可用。"
        },
        {
          en: "Its results are best judged over full cycles, not by whether it looks exciting in a single bullish phase.",
          zh: "它的结果最好放在完整周期中评价，而不是看它在某一个牛市阶段是否足够令人兴奋。"
        }
      ]
    },
    {
      id: "evaluation",
      heading: "Evaluation and Limits",
      headingZh: "评价与局限",
      body: [
        {
          en: "Marks is valuable for investors who need a language for risk and market psychology. The limitation is that caution can become passivity if it is not paired with action when odds are favorable.",
          zh: "马克斯对需要理解风险和市场心理的投资者非常有价值。局限在于，如果在赔率有利时不能行动，谨慎可能变成被动。"
        },
        {
          en: "The best lesson is second-level thinking: ask not only what might happen, but what the market already believes will happen.",
          zh: "最好的教训是二阶思维：不仅问可能发生什么，还要问市场已经相信会发生什么。"
        }
      ]
    }
  ]
};

export function getInvestmentMasterProfileSections(slug: string) {
  return investmentMasterProfileSections[slug] ?? [];
}
