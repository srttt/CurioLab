import Link from "next/link";
import { notFound } from "next/navigation";
import TestRunner from "@/components/TestRunner";
import { getTest, tests } from "@/data/tests";

export function generateStaticParams() {
  return tests.map((test) => ({ slug: test.slug }));
}

export default function TestDetailPage({ params }: { params: { slug: string } }) {
  const test = getTest(params.slug);

  if (!test) notFound();

  const nextTest = tests.find((item) => item.slug !== test.slug) ?? tests[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link className="focus-ring rounded-full text-sm font-bold text-ink/60 hover:text-ink" href="/tests">
        Back to Tests
      </Link>
      <div className="mt-5">
        <h1 className="text-4xl font-black">{test.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/68">{test.description}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-sm font-bold text-ink/64">
          <span className="rounded-full bg-white px-4 py-2">{test.duration}</span>
          <span className="rounded-full bg-white px-4 py-2">{test.category}</span>
          <span className="rounded-full bg-white px-4 py-2">Just for fun</span>
        </div>
      </div>
      <div className="mt-8">
        <TestRunner slug={test.slug} />
      </div>
      <aside className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white/70 p-5">
        <h2 className="font-black">Recommended next</h2>
        <Link className="focus-ring mt-3 block rounded-2xl bg-mist p-4 font-bold" href={`/tests/${nextTest.slug}`}>
          {nextTest.title}
        </Link>
      </aside>
    </div>
  );
}
