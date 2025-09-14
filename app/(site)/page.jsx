import Link from "next/link";
import dynamic from "next/dynamic";
import SectionHeader from "@/components/SectionHeader";
import { getAllCaseStudies } from "@/lib/caseStudies";

// Framer Motion hero (client component)
const HeroMotion = dynamic(() => import("@/components/HeroMotion"), { ssr: false });

export default async function HomePage() {
  const work = await getAllCaseStudies();
  const featured = work.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <HeroMotion />

      {/* Logos / social proof strip (dummies) */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-70">
          <div className="h-8 rounded bg-gray-100" aria-hidden />
          <div className="h-8 rounded bg-gray-100" aria-hidden />
          <div className="h-8 rounded bg-gray-100" aria-hidden />
          <div className="h-8 rounded bg-gray-100" aria-hidden />
        </div>
        <p className="mt-3 text-xs text-gray-500">Trusted by local businesses & founders — swap with real logos later.</p>
      </section>

      {/* Capabilities snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I do quickly and well"
          text="Product-minded web development with measurable impact."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="font-semibold">Design & UX</div>
            <p className="mt-2 text-gray-600 text-sm">
              Structure, copy hierarchy, and accessible components that guide users to action.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>IA & wireframes</li>
              <li>Design systems</li>
              <li>Content clarity</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="font-semibold">Build & Performance</div>
            <p className="mt-2 text-gray-600 text-sm">
              Next.js + Tailwind with an image strategy, routing, and best-in-class Web Vitals.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>LCP & CLS budgets</li>
              <li>Responsive images</li>
              <li>SSR/SSG routing</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="font-semibold">Measure & Grow</div>
            <p className="mt-2 text-gray-600 text-sm">
              Analytics events and funnels to prove what works and iterate with confidence.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>GA4 events</li>
              <li>Lead capture</li>
              <li>SEO/OG polish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Selected Work"
          title="Recent case studies"
          text="A few projects shipped with care for UX, performance, and business impact."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm transition"
            >
              <img
                src={p.cover || "/og/default.png"}
                alt={p.title || "Project cover"}
                className="w-full aspect-video object-cover group-hover:scale-[1.02] transition"
              />
              <div className="p-4">
                <div className="text-sm text-gray-500">
                  {p.role} • {Array.isArray(p.stack) ? p.stack.join(", ") : p.stack}
                </div>
                <div className="mt-1 font-semibold">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 hover:bg-gray-50"
          >
            Browse all work
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader
          eyebrow="Social Proof"
          title="Clients say nice things"
          text="Swap these with real names, photos, and companies."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5">
            <p className="text-gray-700">
              “Clear process, fast delivery, and our quote requests jumped.”
            </p>
            <div className="mt-3 text-sm text-gray-500">Brittany — Infinity Lawns</div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <p className="text-gray-700">
              “Parents immediately understood our care plans. The site feels trustworthy.”
            </p>
            <div className="mt-3 text-sm text-gray-500">Robin — Senior-Care Owner</div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <p className="text-gray-700">
              “Loved the attention to performance and accessibility.”
            </p>
            <div className="mt-3 text-sm text-gray-500">Client — E-commerce</div>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-sm text-brand font-semibold uppercase tracking-wider">Let’s build</div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight">
              Ready for a clean, conversion-focused site?
            </h3>
            <p className="mt-2 text-gray-600">
              I ship fast, accessible websites with measurable outcomes.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl2 bg-brand text-white hover:opacity-90">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
