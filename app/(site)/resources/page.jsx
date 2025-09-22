// app/(site)/resources/page.jsx
import ButtonCTA from "../../../components/ui/ButtonCTA";
import WallpaperCard from "../../../components/WallpaperCard";
import { WALLPAPERS } from "../../../lib/wallpapers";

export const metadata = {
  title: "Resources — Free wallpapers & reusable assets",
  description:
    "Download free phone wallpapers and helpful templates. I’ll add new drops regularly, plus Canva reusables soon.",
};

const RESOURCES = [
  {
    title: "Free Website Audit Checklist (PDF)",
    href: "/downloads/audit-checklist.pdf",
    desc: "25 quick checks for speed, SEO, UX, and conversion.",
    meta: "PDF · 180 KB · Updated: Sep 2025",
    kind: "download",
  },
  {
    title: "GA4 Starter Events (CSV)",
    href: "/downloads/ga4-starter-events.csv",
    desc: "Base events for call/WhatsApp/contact tracking.",
    meta: "CSV · 2 KB · Updated: Sep 2025",
    kind: "download",
  },
  {
    title: "Canva Portfolio Slide (Template)",
    href: "https://www.canva.com/",
    desc: "Editable slide to present your work fast.",
    meta: "External · Updated: Sep 2025",
    kind: "external",
  },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Page header */}
      <h1 className="text-3xl/tight font-semibold text-slate-900">Resources</h1>
      <p className="mt-2 text-slate-600">
        Free downloads you can use—wallpapers today, Canva reusables next.
      </p>

      {/* Wallpapers */}
      <section className="mt-8">
        <div className="mb-4 text-sm text-slate-600">
          Tap a card to download. I’ll keep adding new sets—check back!
        </div>

        {WALLPAPERS?.length ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {WALLPAPERS.map((w) => (
              <WallpaperCard key={w.slug} item={w} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6 text-slate-700">
            Wallpapers will appear here soon. Have a style you want?{" "}
            <a className="underline" href="/contact">
              Tell me on the contact page
            </a>
            .
          </div>
        )}
      </section>

      {/* Divider */}
      <hr className="my-12 border-sky-100" />

      {/* Canva Reusables (placeholder) */}
      <section className="rounded-2xl border border-brand-cta-hover bg-sky-50 p-6">
        <div className="text-sm text-brand font-semibold uppercase tracking-wider">
          Canva Reusables (coming soon)
        </div>
        <p className="mt-2 text-slate-700">
          I’ll share reusable Canva components here—badges, banners, and post
          templates. Want something specific?{" "}
          <a className="underline" href="/contact">
            Request it
          </a>
          .
        </p>
      </section>

      {/* Tools & templates */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900">Tools & templates</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
                  <a
                    href={r.href}
                    download
                    className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover"
                  >
                    Download
                  </a>
                ) : (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover"
                  >
                    Open →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
