"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import ButtonCTA from "./ui/ButtonCTA";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`px-3 py-2 rounded-xl2 transition hover:bg-sky-100 hover:text-brand-cta-hover ${
        active ? "text-brand font-semibold" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sky-50/80 backdrop-blur border-b border-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-lg">
          Inemesit Richard. David<span className="text-brand">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}

          {/* Primary CTA */}
          <ButtonCTA as={Link} href="/contact" className="ml-2">
            Let’s work
          </ButtonCTA>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-xl2 hover:bg-sky-100"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-sky-100">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
            <ButtonCTA as={Link} href="/contact" className="mt-2">
              Let’s work
            </ButtonCTA>
          </div>
        </div>
      )}
    </header>
  );
}
