// app/(site)/resources/page.jsx 
import ButtonCTA from "../../../components/ui/ButtonCTA";

const RESOURCES = [
  { title: "Free Website Audit Checklist (PDF)", href: "/downloads/audit-checklist.pdf", desc: "25 quick checks for speed, SEO, UX, and conversion.", meta: "PDF · 180 KB · Updated: Sep 2025", kind: "download" },
  { title: "GA4 Starter Events (CSV)", href: "/downloads/ga4-starter-events.csv", desc: "Base events for call/WhatsApp/contact tracking.", meta: "CSV · 2 KB · Updated: Sep 2025", kind: "download" },
  { title: "Canva Portfolio Slide (Template)", href: "https://www.canva.com/", desc: "Editable slide to present your work fast.", meta: "External · Updated: Sep 2025", kind: "external" },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl/tight font-semibold text-slate-900">Resources</h1>
      <p className="mt-2 text-slate-600">Free tools and templates I use with clients.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {RESOURCES.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-brand-cta-hover bg-sky-50 p-6 shadow-sm hover-card"
          >
            <div className="text-lg font-medium">{r.title}</div>
            <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
            <div className="mt-1 text-xs text-slate-500">{r.meta}</div>
            <div className="mt-4">
              {r.kind === "download" ? (
                <ButtonCTA href={r.href}>Download</ButtonCTA>
              ) : (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                >
                  Open →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
