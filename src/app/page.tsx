import Link from "next/link";
import CategoryNav from "@/components/CategoryNav";
import ContentCard from "@/components/ContentCard";
import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import { games } from "@/data/games";
import { notes } from "@/data/notes";
import { tests } from "@/data/tests";
import type { ContentItem } from "@/types/content";

const featured: ContentItem[] = [
  tests[0],
  tests[1],
  tests[2],
  games[0],
  games[2],
  notes[0]
];

const columns = [
  {
    title: "Popular Tests",
    items: tests.slice(0, 3),
    path: "/tests"
  },
  {
    title: "Quick Mind Games",
    items: [games[0], games[1], games[2]],
    path: "/games"
  },
  {
    title: "Latest Lab Notes",
    items: [notes[0], notes[4], notes[3]],
    path: "/lab-notes"
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section className="grid gap-5 md:grid-cols-3">
          <SectionCard
            cta="Explore Tests"
            description="Discover your mood, personality, thinking style, and social energy."
            href="/tests"
            icon="tests"
            title="Tests"
          />
          <SectionCard
            cta="Play Games"
            description="Play quick games that challenge reaction, memory, attention, and choices."
            href="/games"
            icon="games"
            title="Mind Games"
          />
          <SectionCard
            cta="Read Notes"
            description="Read short psychology notes behind the tests and games."
            href="/lab-notes"
            icon="notes"
            title="Lab Notes"
          />
        </section>

        <div className="mt-10">
          <CategoryNav />
        </div>

        <section className="mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">Start here</p>
              <h2 className="mt-2 text-3xl font-black">Featured Experiments</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <ContentCard item={item} key={`${item.type}-${item.slug}`} />
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 lg:grid-cols-3">
          {columns.map((column) => (
            <div className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-5" key={column.title}>
              <h2 className="text-xl font-black">{column.title}</h2>
              <div className="mt-4 divide-y divide-ink/10">
                {column.items.map((item) => (
                  <Link
                    className="focus-ring block rounded-xl py-3 transition hover:px-3 hover:bg-mist"
                    href={`${column.path}/${item.slug}`}
                    key={item.slug}
                  >
                    <span className="font-bold">{item.title}</span>
                    <span className="mt-1 block text-sm text-ink/58">{item.duration}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
