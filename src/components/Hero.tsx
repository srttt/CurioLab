import Link from "next/link";
import { ArrowRight, BrainCircuit, Gamepad2, NotebookText } from "lucide-react";

const actions = [
  { label: "Start an Assessment", href: "/assessments", icon: BrainCircuit },
  { label: "Play a Mind Game", href: "/games", icon: Gamepad2 },
  { label: "Read a Lab Note", href: "/lab-notes", icon: NotebookText }
];

export default function Hero() {
  return (
    <section className="lab-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 w-fit rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-semibold text-ink/70">
            Assessments, mind games, and curious psychology.
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">CurioLab</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">
            Explore yourself through evidence-informed self-assessments, quick games, and short psychology notes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink/90"
                  href={action.href}
                  key={action.href}
                >
                  <Icon size={17} aria-hidden="true" />
                  {action.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="min-h-[320px] rounded-[2rem] border border-ink/10 bg-white/76 p-4 shadow-soft backdrop-blur">
          <div className="grid h-full grid-rows-[auto_1fr] gap-4 rounded-[1.5rem] border border-ink/10 bg-mist/70 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
                Live directory
              </span>
              <span className="h-3 w-3 rounded-full bg-coral" aria-hidden="true" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Well-being", "Memory", "Attention", "Personality"].map((label, index) => (
                <div
                  className="flex min-h-28 flex-col justify-between rounded-3xl border border-ink/10 bg-white/82 p-4"
                  key={label}
                >
                  <span className="text-sm font-semibold text-ink/58">0{index + 1}</span>
                  <strong className="text-xl">{label}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
