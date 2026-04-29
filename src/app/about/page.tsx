export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="rounded-[2rem] border border-ink/10 bg-white/78 p-8 shadow-soft">
        <h1 className="text-4xl font-black">About CurioLab</h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-ink/72">
          <p>CurioLab is a tiny digital playground for curious minds.</p>
          <p>
            We make playful quizzes, quick games, and short psychology notes that help you explore
            personality, mood, attention, choices, and imagination.
          </p>
          <p>Nothing here is a diagnosis.</p>
          <p>Everything here is a starting point for curiosity.</p>
        </div>
      </div>
    </div>
  );
}
