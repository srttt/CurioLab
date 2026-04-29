import Link from "next/link";
import { FlaskConical } from "lucide-react";

const navItems = [
  { label: "Tests", href: "/tests" },
  { label: "Mind Games", href: "/games" },
  { label: "Lab Notes", href: "/lab-notes" },
  { label: "About", href: "/about" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-glass/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link className="focus-ring flex w-fit items-center gap-2 rounded-full" href="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <FlaskConical size={18} aria-hidden="true" />
          </span>
          <span className="text-lg font-bold">CurioLab</span>
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-2 text-sm font-medium text-ink/72">
          {navItems.map((item) => (
            <Link
              className="focus-ring rounded-full px-3 py-2 transition hover:bg-white hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
