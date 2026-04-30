import Link from "next/link";
import { ArrowRight, BarChart3, BookOpenCheck, ListChecks, ShieldAlert } from "lucide-react";
import { BiInline, BiText } from "@/components/BilingualText";

const learningTracks = [
  {
    title: "Risk and Return Basics",
    description: "Understand volatility, drawdowns, time horizon, diversification, and why higher expected return usually comes with uncertainty.",
    icon: ShieldAlert
  },
  {
    title: "Asset Allocation Map",
    description: "Compare broad asset categories, roles, trade-offs, and how allocation choices shape risk more than single picks.",
    icon: BarChart3
  },
  {
    title: "Behavioral Investing",
    description: "Notice loss aversion, overconfidence, recency bias, herd behavior, and the emotions that can distort choices.",
    icon: BookOpenCheck
  },
  {
    title: "Investment Journal",
    description: "Use a simple record of reasons, assumptions, risks, and review dates to make decisions more observable.",
    icon: ListChecks
  }
];

const principles = [
  "Separate learning from buying or selling.",
  "Define risk before looking at return.",
  "Prefer a repeatable process over market predictions.",
  "Write down assumptions before reviewing outcomes."
];

const prompts = [
  "What time horizon am I actually planning for?",
  "What loss would make me abandon this plan?",
  "Which part of this decision is evidence, and which part is emotion?",
  "What would make me review this choice later?"
];

export default function InvestingPage() {
  return (
    <div className="mx-auto max-w-6xl overflow-hidden px-4 py-12 sm:px-6">
      <section className="min-w-0 overflow-hidden rounded-[2rem] border border-ink/10 bg-white/76 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
          <BiInline text="Financial learning" />
        </p>
        <h1 className="mt-2 text-4xl font-black sm:text-5xl">
          <BiText text="Investing" />
        </h1>
        <p className="mt-4 max-w-[19rem] break-words text-lg leading-8 text-ink/68 sm:max-w-3xl">
          <BiText text="A learning space for understanding investing behavior, risk, allocation, and decision process." />
        </p>
        <div className="mt-6 min-w-0 rounded-[1.25rem] border border-coral/20 bg-coral/10 p-4 leading-7 text-ink/72">
          <strong className="text-ink">
            <BiInline text="Important note" />
          </strong>
          <span className="mt-1 block max-w-[19rem] break-words sm:ml-2 sm:mt-0 sm:inline sm:max-w-none">
            <BiInline text="This section is for education and self-reflection only. It is not financial advice, investment advice, or a recommendation to buy or sell anything." />
          </span>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {learningTracks.map((track) => {
          const Icon = track.icon;
          return (
            <article className="min-w-0 rounded-[1.5rem] border border-ink/10 bg-white/76 p-6 shadow-soft" key={track.title}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/70 text-ink">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-black">
                <BiText text={track.title} />
              </h2>
              <p className="mt-3 max-w-[19rem] break-words leading-7 text-ink/68 sm:max-w-none">
                <BiText text={track.description} />
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[1.5rem] border border-ink/10 bg-ink p-6 text-white shadow-soft">
          <h2 className="text-2xl font-black">
            <BiText text="Starter Principles" />
          </h2>
          <div className="mt-5 grid gap-3">
            {principles.map((principle) => (
              <div className="rounded-2xl bg-white/10 px-4 py-3 font-semibold leading-7" key={principle}>
                <BiText text={principle} />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-ink/10 bg-white/76 p-6 shadow-soft">
          <h2 className="text-2xl font-black">
            <BiText text="Reflection Prompts" />
          </h2>
          <div className="mt-5 grid gap-3">
            {prompts.map((prompt) => (
              <div className="rounded-2xl bg-mist px-4 py-3 font-semibold leading-7" key={prompt}>
                <BiText text={prompt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white/76 p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">
              <BiInline text="Related self-reflection" />
            </p>
            <h2 className="mt-2 text-2xl font-black">
              <BiText text="Decision habits matter when money is involved." />
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
              href="/investing/style-index"
            >
              <BiInline text="Explore Investment Style Index" zh="探索投资风格指数" />
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
              href="/lab-notes/modern-investment-masters"
            >
              <BiInline text="Read Modern Investment Masters" />
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
              href="/assessments/investment-style-profile"
            >
              <BiInline text="Take Investment Style Profile" zh="开始投资风格测评" />
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
