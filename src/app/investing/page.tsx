import Link from "next/link";
import { ArrowRight, BarChart3, BookOpenCheck, ClipboardList, ShieldAlert, UserRound } from "lucide-react";
import { BiInline, BiText } from "@/components/BilingualText";
import { investmentMasters } from "@/data/investmentStyle";

const featuredLinks = [
  {
    title: "Investment Style Index",
    titleZh: "投资风格指数",
    description:
      "Compare investing styles with reusable benchmarks and radar maps for influential investors.",
    descriptionZh: "用通用指标和雷达图比较不同投资风格，以及几位重要投资者的风格画像。",
    href: "/investing/style-index",
    cta: "Explore index",
    ctaZh: "查看指数",
    icon: BarChart3
  },
  {
    title: "Modern Investment Masters",
    titleZh: "现代投资大师",
    description:
      "Read the overview of major investors, their ideas, learning links, and paths into each detailed profile.",
    descriptionZh: "阅读主要投资者的总览，包括理念、学习资料，以及进入每位投资者详细介绍的链接。",
    href: "/lab-notes/modern-investment-masters",
    cta: "Read overview",
    ctaZh: "阅读总览",
    icon: BookOpenCheck
  },
  {
    title: "Investment Style Profile",
    titleZh: "投资风格测试",
    description:
      "Take a self-assessment and compare your radar profile with similar and opposite investment masters.",
    descriptionZh: "完成自评后，把你的雷达图与最相似和最相反的投资大师进行对比。",
    href: "/assessments/investment-style-profile",
    cta: "Take assessment",
    ctaZh: "开始测试",
    icon: ClipboardList
  }
];

export default function InvestingPage() {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden px-4 py-12 sm:px-6">
      <section className="min-w-0 overflow-hidden rounded-[2rem] border border-ink/10 bg-white/76 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
          <BiInline text="Financial learning" zh="金融学习" />
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">
          <BiText text="Investing" zh="投资" />
        </h1>
        <p className="mt-4 max-w-[19rem] break-words text-lg leading-8 text-ink/68 sm:max-w-3xl">
          <BiText
            text="A focused learning space for investment styles, influential investors, and self-reflection about decision process."
            zh="一个聚焦投资风格、重要投资者，以及投资决策自我反思的学习空间。"
          />
        </p>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        {featuredLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              className="focus-ring group min-w-0 rounded-[1.5rem] border border-ink/10 bg-white/76 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
              href={item.href}
              key={item.href}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/70 text-ink">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black">
                <BiText text={item.title} zh={item.titleZh} />
              </h2>
              <p className="mt-3 leading-7 text-ink/68">
                <BiText text={item.description} zh={item.descriptionZh} />
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-ink">
                <BiInline text={item.cta} zh={item.ctaZh} />
                <ArrowRight className="transition group-hover:translate-x-1" size={16} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white/76 p-6 shadow-soft">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
              <BiInline text="Investor profiles" zh="投资者介绍" />
            </p>
            <h2 className="mt-1 text-3xl font-black">
              <BiText text="Study a Master" zh="查看具体投资者" />
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-ink/58">
            <BiText
              text="Each profile now focuses on philosophy, cases, strategy, performance lens, and evaluation."
              zh="每个 profile 现在聚焦核心思想、代表案例、策略方法、表现视角和评价。"
            />
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {investmentMasters.map((master) => (
            <Link
              className="focus-ring group rounded-2xl border border-ink/10 bg-mist px-4 py-4 transition hover:-translate-y-0.5 hover:border-ink/25 hover:bg-white"
              href={`/investing/masters/${master.slug}`}
              key={master.slug}
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink">
                  <UserRound size={17} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-black leading-6">
                    <BiText text={master.name} zh={master.nameZh} />
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-5 text-ink/58">
                    <BiText text={master.title} zh={master.titleZh} />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-coral/20 bg-coral/10 p-5 leading-7 text-ink/72 shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-1 shrink-0 text-ink" size={20} aria-hidden="true" />
          <p>
            <strong className="text-ink">
              <BiInline text="Important note" zh="重要说明" />
            </strong>{" "}
            <BiText
              className="inline"
              text="This section is for education and self-reflection only. It is not financial advice, investment advice, or a recommendation to buy or sell anything."
              zh="这个板块仅用于学习和自我反思，不是金融建议、投资建议，也不是任何买入或卖出建议。"
            />
          </p>
        </div>
      </section>
    </div>
  );
}
