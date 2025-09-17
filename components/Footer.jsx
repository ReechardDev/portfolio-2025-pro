import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-top border-gray-100">
      {/* Top band: message + CTA */}
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <div className="font-semibold">Let’s build something users love.</div>
          <div className="text-sm text-gray-600 mt-1">
            Next.js · Google Analytics · Product-Thinking · SEO
          </div>
        </div>
        <div className="md:text-right">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl2 bg-brand text-white hover:opacity-90"
          >
            Let’s work
          </Link>
        </div>
      </div>

      {/* Footer nav: mirror header links */}
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
          {FOOTER_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gray-900">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-6xl px-4 pb-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Inemesit David. All rights reserved.
      </div>
    </footer>
  );
}
