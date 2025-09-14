import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <div className="font-semibold">Let’s build something users love.</div>
          <div className="text-sm text-gray-600 mt-1">Next.js · Tailwind · Product thinking · A11y · SEO</div>
        </div>
        <div className="md:text-right">
          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-3 rounded-xl2 bg-brand text-white hover:opacity-90">
            Start a project
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Inemesit David. All rights reserved.
      </div>
    </footer>
  );
}
