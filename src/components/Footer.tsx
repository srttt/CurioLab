import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-ink/68 sm:grid-cols-[1fr_auto] sm:px-6">
        <p>CurioLab is for playful self-reflection, not diagnosis.</p>
        <div className="flex gap-4">
          <Link className="focus-ring rounded hover:text-ink" href="/about">
            About
          </Link>
          <Link className="focus-ring rounded hover:text-ink" href="/privacy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
