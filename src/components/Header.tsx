import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { BiInline } from "@/components/BilingualText";
import LanguageSelector from "@/components/LanguageSelector";

const navItems = [
  { label: "Assessments", href: "/assessments" },
  { label: "Mind Games", href: "/games" },
  { label: "Lab Notes", href: "/lab-notes" },
  { label: "Investing", href: "/investing" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-glass/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl min-w-0 flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link className="focus-ring flex w-fit items-center gap-2 rounded-full" href="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <FlaskConical size={18} aria-hidden="true" />
          </span>
          <span className="text-lg font-bold">CurioLab</span>
        </Link>
        <div className="flex w-full min-w-0 flex-wrap items-center gap-3 sm:w-auto">
          <nav aria-label="Main navigation" className="grid w-full min-w-0 grid-cols-1 gap-1 text-xs font-medium leading-snug text-ink/72 sm:flex sm:w-auto sm:flex-wrap sm:gap-2 sm:text-sm">
            {navItems.map((item) => (
              <Link
                className="focus-ring min-w-0 rounded-full px-3 py-2 transition hover:bg-white hover:text-ink"
                href={item.href}
                key={item.href}
              >
                <BiInline text={item.label} />
              </Link>
            ))}
          </nav>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
