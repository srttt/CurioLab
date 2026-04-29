import Link from "next/link";
import type { TestResult } from "@/types/content";

export default function ResultCard({ result }: { result: TestResult }) {
  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">You are</p>
      <h2 className="mt-2 text-3xl font-black">{result.name}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div>
          <h3 className="font-bold">Your traits</h3>
          <ul className="mt-3 space-y-2 text-ink/68">
            {result.traits.map((trait) => (
              <li key={trait}>- {trait}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Your hidden strength</h3>
          <p className="mt-3 leading-7 text-ink/68">{result.strength}</p>
        </div>
        <div>
          <h3 className="font-bold">Your watch-out</h3>
          <p className="mt-3 leading-7 text-ink/68">{result.watchOut}</p>
        </div>
      </div>
      <p className="mt-6 rounded-2xl bg-mist p-4 text-sm font-medium text-ink/68">
        This is not a diagnosis. Just a playful self-reflection tool.
      </p>
      <Link
        className="focus-ring mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
        href="/tests"
      >
        Try another experiment
      </Link>
    </section>
  );
}
