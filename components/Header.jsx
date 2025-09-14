"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl2 transition hover:bg-gray-100 ${active ? "text-brand font-semibold" : "text-gray-700"}`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-lg">
          Inemesit<span className="text-brand">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-xl2 hover:bg-gray-100" aria-label="Toggle Menu">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
