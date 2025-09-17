// app/(site)/page.jsx
import Link from "next/link";
import dynamic from "next/dynamic";
import SectionHeader from "../../components/SectionHeader";
import { getAllCaseStudies } from "../../lib/caseStudies";
import SkillPills from "../../components/SkillPills";
import ButtonCTA from "../../components/ui/ButtonCTA";

// Framer Motion hero (client component)
const HeroMotion = dynamic(() => import("../../components/HeroMotion"), { ssr: false });

const SKILLS = [
  "HTML","CSS","JavaScript","React","Next.js","TailwindCSS","Lucide","Google Domain",
  "GitHub","Copywriting","GA4","GTM (basic)","On-page SEO","Vercel","Canva","Wireframes","Content Strategy",
];

// Helper: choose a cover image by slug/title if `p.cover` is missing
function coverFor(p = {}) {
  const s = (p.slug || "").toLowerCase();
  const t = (p.title || "").toLowerCase();

  if (s.includes("robin") || t.includes("robin")) {
    return "/work/robin-senior-care.jpg";
  }
  if (s.includes("infinity") || t.includes("infinity")) {
    return "/work/infinitylawns.jpg";
  }
  if (s.includes("things") || s.includes("buy") || t.includes("things")) {
    return "/work/things-you-should-buy.jpg";
  }
  return "/og/default.png"; // fallback
}

export default async function HomePage() {
  const work = await getAllCaseStudies();
  const featured = work.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <HeroMotion />

      {/* ONE-LINER PROMISE + 2 bullets (content-only, same layout) */}
      <section className="mx-auto max-w-6xl px-4 pt-2">
        <p className="text-slate-600">
          I build conversion-ready sites for local businesses—measured and fast.
        </p>
        <ul className="mt-2 text-sm text-slate-600 list-disc pl-5">
          <li>GA4 events on calls, WhatsApp & forms</li>
          <li>Real improvements in site speed & leads</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader eyebrow="SKILLS" title="Skills I use in building" text="" />
        <SkillPills skills={SKILLS} />
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I do well"
          text="Product-minded web development with measurable impact."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5 hover-card">
            <div className="font-semibold">Design & UX</div>
            <p className="mt-2 text-gray-600 text-sm">
              Structure, copy hierarchy, and accessible components that guide users to action.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>IA & wireframes</li><li>Design systems</li><li>Content clarity</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 hover-card">
            <div className="font-semibold">Build & Performance</div>
            <p className="mt-2 text-gray-600 text-sm">
              Next.js + Tailwind with an image strategy, routing, and best-in-class Web Vitals.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>LCP & CLS budgets</li><li>Responsive images</li><li>SSR/SSG routing</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5 hover-card">
            <div className="font-semibold">Measure & Grow</div>
            <p className="mt-2 text-gray-600 text-sm">
              Google analytics, events and funnels to prove what works and iterate with confidence.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>GA4 events</li><li>Lead capture</li><li>SEO/OG polish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Selected Work (each card opens live site if available) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Work"
          title="Recent case studies"
          text="A few projects I've built for local business owners."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <a
              key={p.slug}
              href={p.liveUrl || `/work/${p.slug}`}
              target={p.liveUrl ? "_blank" : undefined}
              rel={p.liveUrl ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-brand-cta-hover transition"
            >
              <img
                src={p.cover || coverFor(p)}
                alt={p.title || "Project cover"}
                className="w-full aspect-video object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="p-4">
                <div className="text-sm text-gray-500">
                  {Array.isArray(p.tags) && p.tags.length ? p.tags.join(" • ") : "Case study"}
                </div>
                <div className="mt-1 font-semibold">{p.title}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-slate-800 transition group-hover:text-brand-cta-hover">
                  Visit {p.liveUrl ? "site" : "case"} <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 hover:border-brand-cta-hover hover:text-brand-cta-hover transition"
          >
            Browse all work
          </Link>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-sm text-brand font-semibold uppercase tracking-wider">Let’s Work</div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight">Do you have a project in mind?</h3>
            <p className="mt-2 text-gray-600">
              I build fast, accessible websites with measurable outcomes.
            </p>
          </div>
          <div className="shrink-0">
            <ButtonCTA as={Link} href="/contact">
              Start a project
            </ButtonCTA>
          </div>
        </div>
      </section>

      {/* JSON-LD Person for rich results */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Inemesit Richard David",
            url: "https://portfolio-2025-pro.vercel.app",
            sameAs: [
              "https://github.com/ReechardDev",
              "https://www.linkedin.com/in/inemesit-david-739676318/"
            ],
            knowsAbout: ["Next.js","GA4","Local SEO","Tailwind CSS"]
          }),
        }}
      />
    </div>
  );
}
