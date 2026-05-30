import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/repertoire", label: "Repertoire" },
];

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 px-5 py-3 backdrop-blur sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link
          className="font-heading text-base uppercase tracking-[0.12em] text-heaven-text sm:text-lg"
          href="/"
        >
          {siteConfig.nameJa}
        </Link>
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              className="border border-white/10 bg-black/25 px-3 py-2 font-heading text-xs uppercase tracking-[0.12em] text-heaven-muted transition duration-300 hover:border-heaven-red hover:text-heaven-text sm:text-sm"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
