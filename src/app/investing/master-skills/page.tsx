import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, FlaskConical, ListChecks, ShieldAlert } from "lucide-react";
import { BiInline, BiText } from "@/components/BilingualText";
import { investmentMasterSkillLabs } from "@/data/investmentMasterSkills";

export default function InvestmentMasterSkillsPage() {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden px-4 py-12 sm:px-6">
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-ink/60 hover:text-ink"
        href="/investing"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        <BiInline text="Back to Investing" zh="返回投资板块" />
      </Link>

      <header className="mt-5 rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="inline-flex items-center gap-2 rounded-full bg-citron/55 px-4 py-2 text-ink">
            <FlaskConical size={15} aria-hidden="true" />
            <BiInline text="Experimental column" zh="实验栏目" />
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            <BiInline text="Reusable rules" zh="可复用规则" />
          </span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
          <BiText text="Investment Master Skills" zh="投资大师的 Skills" />
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-ink/72">
          <BiText
            text="This lab turns influential investors' behavior into reusable decision rules, norms, and practice templates."
            zh="这个实验栏目把重要投资者的行为方式，转译成可复用的决策规则、规范和练习模板。"
          />
        </p>
      </header>

      <section className="mt-8 rounded-[1.5rem] border border-coral/20 bg-coral/10 p-5 leading-7 text-ink/72 shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-1 shrink-0 text-ink" size={20} aria-hidden="true" />
          <p>
            <strong className="text-ink">
              <BiInline text="Important note" zh="重要说明" />
            </strong>{" "}
            <BiText
              className="inline"
              text="These are learning abstractions for self-reflection. They are not financial advice, investment advice, or instructions to copy any investor."
              zh="这些内容是用于学习和自我反思的抽象总结，不是金融建议、投资建议，也不是复制任何投资者的操作说明。"
            />
          </p>
        </div>
      </section>

      <div className="mt-8 grid gap-8">
        {investmentMasterSkillLabs.map((lab) => (
          <section className="rounded-[2rem] border border-ink/10 bg-white/78 p-6 shadow-soft sm:p-8" key={lab.slug}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
                  <BiInline text={lab.masterName} zh={lab.masterNameZh} />
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  <BiText text={lab.title} zh={lab.titleZh} />
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-ink/70">
                  <BiText text={lab.subtitle} zh={lab.subtitleZh} />
                </p>
              </div>
              <Link
                className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
                href={`/investing/masters/${lab.slug}`}
              >
                <BiInline text="View profile" zh="查看人物介绍" />
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-6 rounded-[1.25rem] bg-mist px-4 py-3 text-sm font-medium leading-7 text-ink/64">
              <BiText text={lab.sourceNote} zh={lab.sourceNoteZh} />
            </p>

            <div className="mt-6 grid gap-5">
              {lab.skills.map((skill, index) => (
                <article className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm" key={skill.id}>
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-black">
                        <BiText text={skill.title} zh={skill.titleZh} />
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    <div className="rounded-2xl bg-mist p-4">
                      <p className="text-sm font-black uppercase tracking-wide text-ink/52">
                        <BiInline text="Observed behavior" zh="观察到的行为" />
                      </p>
                      <p className="mt-2 leading-7 text-ink/72">
                        <BiText text={skill.observedBehavior.en} zh={skill.observedBehavior.zh} />
                      </p>
                    </div>
                    <div className="rounded-2xl bg-citron/35 p-4">
                      <p className="text-sm font-black uppercase tracking-wide text-ink/52">
                        <BiInline text="Reusable rule" zh="可复用规则" />
                      </p>
                      <p className="mt-2 leading-7 text-ink/72">
                        <BiText text={skill.reusableRule.en} zh={skill.reusableRule.zh} />
                      </p>
                    </div>
                    <div className="rounded-2xl border border-ink/10 bg-white p-4">
                      <p className="text-sm font-black uppercase tracking-wide text-ink/52">
                        <BiInline text="Practice" zh="练习方式" />
                      </p>
                      <p className="mt-2 leading-7 text-ink/72">
                        <BiText text={skill.practice.en} zh={skill.practice.zh} />
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-6 rounded-[1.5rem] border border-ink/10 bg-ink p-5 text-white shadow-sm">
              <div className="flex items-center gap-2">
                <ListChecks size={18} aria-hidden="true" />
                <h3 className="text-2xl font-black">
                  <BiText text="Operating Norms" zh="操作规范" />
                </h3>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {lab.operatingNorms.map((norm) => (
                  <div className="rounded-2xl bg-white/10 px-4 py-3 font-semibold leading-7" key={norm.en}>
                    <BiText text={norm.en} zh={norm.zh} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6 rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-black">
                <BiText text="Sources and Further Reading" zh="资料与延伸阅读" />
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {lab.sources.map((source) => {
                  const isInternal = source.href.startsWith("/");
                  const className =
                    "focus-ring inline-flex max-w-full items-center gap-2 whitespace-normal break-words rounded-full border border-ink/12 bg-white px-4 py-2 text-left text-sm font-bold text-ink/72 transition hover:border-ink/28 hover:text-ink";

                  if (isInternal) {
                    return (
                      <Link className={className} href={source.href} key={source.href}>
                        <BiInline text={source.label} />
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    );
                  }

                  return (
                    <a
                      className={className}
                      href={source.href}
                      key={source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <BiInline text={source.label} />
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </section>
          </section>
        ))}
      </div>
    </div>
  );
}
