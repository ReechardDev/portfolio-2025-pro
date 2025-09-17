// app/(site)/about/page.jsx
import SectionHeader from "../../../components/SectionHeader";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        eyebrow="About"
        title="A bit about me"
        text="Product-minded web developer focused on fast, measured outcomes for local businesses."
      />

      {/* Row 1 */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover-card">
          <h2 className="text-lg font-semibold text-slate-900">Background</h2>
          <p className="mt-2 text-sm text-slate-600">
            I design and build conversion-ready websites with clear structure, accessible UI,
            and analytics that prove what works. My focus is on real performance and lead flow.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Next.js + Tailwind, server/SSG routing</li>
            <li>GA4 events for calls, WhatsApp & forms</li>
            <li>On-page SEO, OG images, sitemaps</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover-card">
          <h2 className="text-lg font-semibold text-slate-900">Approach</h2>
          <p className="mt-2 text-sm text-slate-600">
            Ship small, measure impact, then iterate. I keep content clear, reduce friction to
            contact, and optimize the paths users actually take.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Clarity in copy, hierarchy, and CTAs</li>
            <li>Page speed + Core Web Vitals awareness</li>
            <li>Tidy code, reusable components, maintainable CSS</li>
          </ul>
        </section>
      </div>

      {/* Row 2 */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover-card">
          <h3 className="font-medium text-slate-900">Capabilities</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Design & UX structure</li>
            <li>Build & performance</li>
            <li>Measure & grow</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover-card">
          <h3 className="font-medium text-slate-900">Toolbox</h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-700">
            <li className="rounded-full border border-slate-200 px-2.5 py-1">Next.js</li>
            <li className="rounded-full border border-slate-200 px-2.5 py-1">Tailwind</li>
            <li className="rounded-full border border-slate-200 px-2.5 py-1">GA4</li>
            <li className="rounded-full border border-slate-200 px-2.5 py-1">GTM (basic)</li>
            <li className="rounded-full border border-slate-200 px-2.5 py-1">SEO/OG</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover-card">
          <h3 className="font-medium text-slate-900">What clients get</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Clear structure and copy</li>
            <li>Fast pages with measurable results</li>
            <li>Easy paths to call, chat, or book</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
