import Link from "next/link";

export default function TestsRedirectPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <meta httpEquiv="refresh" content="0; url=/assessments" />
      <div className="rounded-[2rem] border border-ink/10 bg-white/78 p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink/48">Redirecting</p>
        <h1 className="mt-2 text-4xl font-black">Tests are now Assessments</h1>
        <p className="mt-4 text-lg leading-8 text-ink/68">
          CurioLab Tests have been upgraded into evidence-informed self-assessments.
        </p>
        <Link
          className="focus-ring mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white"
          href="/assessments"
        >
          Go to Assessments
        </Link>
      </div>
    </div>
  );
}
