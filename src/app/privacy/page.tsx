export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="rounded-[2rem] border border-ink/10 bg-white/78 p-8 shadow-soft">
        <h1 className="text-4xl font-black">Privacy</h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-ink/72">
          <p>CurioLab does not provide medical or psychological diagnosis.</p>
          <p>The tests and games are designed for playful self-reflection and entertainment.</p>
          <p>In the MVP version, CurioLab does not require user accounts.</p>
          <p>If analytics or saved results are added later, this page should be updated clearly.</p>
        </div>
      </div>
    </div>
  );
}
