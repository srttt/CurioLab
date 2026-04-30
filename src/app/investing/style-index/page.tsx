import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, ClipboardList, ShieldCheck } from "lucide-react";
import { BiInline, BiText } from "@/components/BilingualText";
import ProfileRadarChart from "@/components/ProfileRadarChart";
import {
  getMasterDimensionScores,
  investmentMasters,
  investmentStyleBenchmarks
} from "@/data/investmentStyle";

export default function InvestmentStyleIndexPage() {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/investing"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        <BiInline text="Back to Investing" zh="返回投资板块" />
      </Link>

      <header className="lab-grid mt-5 rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="inline-flex items-center gap-2 rounded-full bg-citron/55 px-4 py-2 text-ink">
            <BarChart3 size={15} aria-hidden="true" />
            <BiInline text="Investment style system" zh="投资风格系统" />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text="10 benchmarks" zh="10 个指标" />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text="0-100 radar scores" zh="0-100 雷达分" />
          </span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
          <BiText text="Investment Style Index" zh="投资风格指数" />
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-ink/72">
          <BiText
            text="A reusable benchmark map for comparing investment styles across value, quality, research, diversification, costs, macro awareness, adaptation, risk, time horizon, and behavior."
            zh="这是一套可复用的投资风格指标，用来比较价值、质量、研究、分散、成本、宏观意识、适应性、风险、时间跨度和行为纪律。"
          />
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
            href="/assessments/investment-style-profile"
          >
            <ClipboardList size={16} aria-hidden="true" />
            <BiInline text="Take Investment Style Profile" zh="开始投资风格测评" />
          </Link>
          <Link
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
            href="/lab-notes/modern-investment-masters"
          >
            <BiInline text="Read Modern Investment Masters" />
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-coral/20 bg-coral/10 p-5 leading-7 text-ink/72 shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 shrink-0 text-ink" size={20} aria-hidden="true" />
          <p>
            <strong className="text-ink">
              <BiInline text="Important note" />
            </strong>{" "}
            <BiText
              className="inline"
              text="These scores are learning-oriented style maps, not rankings, predictions, financial advice, or recommendations to buy or sell anything."
              zh="这些分数是用于学习的风格地图，不是排名、预测、金融建议，也不是任何买入或卖出建议。"
            />
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
              <BiInline text="Benchmarks" zh="指标" />
            </p>
            <h2 className="mt-1 text-3xl font-black">
              <BiText text="Universal Style Dimensions" zh="通用风格维度" />
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-ink/58">
            <BiText
              text="The same dimensions can describe an individual investor, a strategy, a fund, a learning plan, or your own self-assessment profile."
              zh="同一组维度可以描述一个投资者、一种策略、一只基金、一个学习计划，也可以描述你自己的测评画像。"
            />
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {investmentStyleBenchmarks.map((benchmark) => (
            <article className="rounded-[1.25rem] border border-ink/10 bg-white/76 p-5 shadow-sm" key={benchmark.id}>
              <h3 className="font-black">
                <BiText text={benchmark.label} zh={benchmark.labelZh} />
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/62">
                <BiText text={benchmark.description} zh={benchmark.descriptionZh} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
              <BiInline text="Master profiles" zh="大师画像" />
            </p>
            <h2 className="mt-1 text-3xl font-black">
              <BiText text="Radar Maps by Investing Style" zh="按投资风格绘制的雷达图" />
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-ink/58">
            <BiText
              text="The radar charts show relative emphasis in each style. They are interpretive summaries for comparison, not precise measurements."
              zh="雷达图展示每种风格相对强调的方向。它们是用于比较的解释性摘要，不是精确测量。"
            />
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {investmentMasters.map((master) => (
            <article className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-soft" key={master.slug}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    <BiText text={master.name} zh={master.nameZh} />
                  </h3>
                  <p className="mt-1 font-bold text-ink/62">
                    <BiText text={master.title} zh={master.titleZh} />
                  </p>
                </div>
                <Link
                  className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold text-ink"
                  href={`/investing/masters/${master.slug}`}
                >
                  <BiInline text="View profile" zh="查看画像" />
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-3 leading-7 text-ink/68">
                <BiText text={master.shortStyle} zh={master.shortStyleZh} />
              </p>
              <div className="mt-4">
                <ProfileRadarChart
                  badge="Style radar"
                  badgeZh="风格雷达"
                  compact
                  description=""
                  framed={false}
                  scores={getMasterDimensionScores(master)}
                  showLabels={false}
                  title=""
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
