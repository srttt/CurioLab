import Link from "next/link";

const motivations = [
  { label: "I want to know myself", href: "/assessments" },
  { label: "I want a quick challenge", href: "/games" },
  { label: "I want to understand my mood", href: "/assessments" },
  { label: "I want a profile", href: "/assessments" },
  { label: "I want to learn a tiny idea", href: "/lab-notes" }
];

export default function CategoryNav() {
  return (
    <section className="rounded-[1.75rem] border border-ink/10 bg-ink p-6 text-white shadow-soft">
      <h2 className="text-2xl font-black">What are you curious about today?</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {motivations.map((item) => (
          <Link
            className="focus-ring rounded-full bg-white/12 px-4 py-2.5 text-sm font-bold transition hover:bg-white hover:text-ink"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
