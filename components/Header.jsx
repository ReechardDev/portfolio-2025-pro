// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import ButtonCTA from "./ui/ButtonCTA";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, children, onClick }) {
  const pathname = usePathname() || "/";
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`px-3 py-2 rounded-2xl transition
        hover:bg-white/10 hover:text-white
        ${active ? "text-white font-semibold" : "text-white/90"}`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cta-hover text-white border-b border-white/25 shadow-sm">
      {/* Container: same max width as site, but brand anchored LEFT */}
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 h-16 flex items-center">
        {/* Brand (locked to left) */}
        <Link
          href="/"
          className="flex items-center gap-2 pl-0.5 mr-4"
          aria-label="Go to Home"
        >
          <span className="relative block h-7 w-7 overflow-hidden rounded-full ring-2 ring-white/40">
            <Image
              src="/images/about/portrait.webp" // swap to logo path if you prefer
              alt="Inemesit David"
              fill
              sizes="28px"
              className="object-cover object-[50%_18%]"
              priority
            />
          </span>
          <span className="text-base sm:text-lg font-semibold tracking-tight">
            Inemesit David
          </span>
        </Link>

        {/* Desktop nav (pushed to the RIGHT) */}
        <nav className="hidden md:flex items-center gap-2 ml-auto">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
          <ButtonCTA as={Link} href="/contact" className="ml-2" data-ga="nav_cta_contact">
            Let's work
          </ButtonCTA>
        </nav>

        {/* Mobile menu button (stays at far right on mobile) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto p-2 rounded-2xl hover:bg-white/10"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/20 bg-brand-cta-hover">
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 py-2 flex flex-col">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            <ButtonCTA
              as={Link}
              href="/contact"
              className="mt-2"
              data-ga="nav_cta_contact_mobile"
              onClick={() => setOpen(false)}
            >
              Let's work
            </ButtonCTA>
          </div>
        </div>
      )}
    </header>
  );
}
