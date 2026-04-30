import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { BiInline, BiText } from "@/components/BilingualText";
import ProfileRadarChart from "@/components/ProfileRadarChart";
import { getInvestmentMaster, getMasterDimensionScores, investmentMasters } from "@/data/investmentStyle";
import { getInvestmentMasterProfileSections } from "@/data/investmentMasterProfiles";

export function generateStaticParams() {
  return investmentMasters.map((master) => ({ slug: master.slug }));
}

export default function InvestmentMasterPage({ params }: { params: { slug: string } }) {
  const master = getInvestmentMaster(params.slug);

  if (!master) notFound();

  const scores = getMasterDimensionScores(master);
  const profileSections = getInvestmentMasterProfileSections(master.slug);

  return (
    <article className="mx-auto max-w-6xl overflow-hidden px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/investing/style-index"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        <BiInline text="Back to Investment Style Index" zh="返回投资风格指数" />
      </Link>

      <header className="lab-grid mt-5 rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="rounded-full bg-citron/55 px-4 py-2 text-ink">
            <BiInline text="Investment master profile" zh="投资大师画像" />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text="Style radar" zh="风格雷达" />
          </span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
          <BiText text={master.name} zh={master.nameZh} />
        </h1>
        <p className="mt-3 max-w-3xl text-2xl font-black text-ink/72">
          <BiText text={master.title} zh={master.titleZh} />
        </p>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-ink/72">
          <BiText text={master.summary} zh={master.summaryZh} />
        </p>
      </header>

      <section className="mx-auto mt-8 max-w-4xl">
        <ProfileRadarChart
          badge="0-100 style map"
          badgeZh="0-100 风格图"
          description="A compact visual snapshot of this investor's style."
          descriptionZh="这位投资者风格的直观快照。"
          scores={scores}
          title="Style Radar"
          titleZh="风格雷达"
        />
      </section>

      <section className="mt-8 grid gap-5">
        {profileSections.map((section, index) => (
          <div className="rounded-[1.5rem] border border-ink/10 bg-white/78 p-6 shadow-sm" key={section.id}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-black text-white">
                {index + 1}
              </span>
              <h2 className="text-2xl font-black">
                <BiText text={section.heading} zh={section.headingZh} />
              </h2>
            </div>
            <div className="mt-4 space-y-4 text-lg leading-9 text-ink/74">
              {section.body.map((paragraph) => (
                <p key={paragraph.en}>
                  <BiText text={paragraph.en} zh={paragraph.zh} />
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white/78 p-6 shadow-sm">
        <h2 className="text-2xl font-black">
          <BiText text="Learning Resources" zh="学习资料" />
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {master.learningLinks.map((link) => (
            <a
              className="focus-ring inline-flex max-w-full items-center gap-2 whitespace-normal break-words rounded-full border border-ink/12 bg-white px-4 py-2 text-left text-sm font-bold text-ink/72 transition hover:border-ink/28 hover:text-ink"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <BiInline text={link.label} />
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-coral/20 bg-coral/10 p-5 leading-7 text-ink/72 shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 shrink-0 text-ink" size={20} aria-hidden="true" />
          <p>
            <BiText
              text="This profile is for learning and comparison. It is not financial advice, investment advice, or a recommendation to copy any investor's portfolio or strategy."
              zh="这个画像用于学习和比较，不是金融建议、投资建议，也不是复制任何投资者持仓或策略的建议。"
            />
          </p>
        </div>
      </section>

      <section className="mt-8 flex flex-wrap gap-3">
        <Link
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          href={`/lab-notes/${master.slug}`}
        >
          <BiInline text="Read Lab Note" zh="阅读笔记" />
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
          href="/assessments/investment-style-profile"
        >
          <BiInline text="Take Investment Style Profile" zh="开始投资风格测评" />
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
          href="/lab-notes/modern-investment-masters"
        >
          <BiInline text="Read Modern Investment Masters" />
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        {master.slug === "ray-dalio" && (
          <Link
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
            href="/investing/master-skills"
          >
            <BiInline text="Open Skill Lab" zh="打开 Skill 实验" />
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </section>
    </article>
  );
}
