// app/(site)/page.jsx
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionHeader from "../../components/SectionHeader";
import { getAllCaseStudies } from "../../lib/caseStudies";
import { TESTIMONIALS } from "../../lib/testimonials";
import PitchTeaser from "../../components/PitchTeaser";
import SkillPills from "../../components/SkillPills";
import ButtonCTA from "../../components/ui/ButtonCTA";

const HeroMotion = dynamic(() => import("../../components/HeroMotion"), { ssr: false });

const SKILLS = [
  "HTML","CSS","JavaScript","React","Next.js","Google Analytics","Lucide","Google Domain",
  "Tailwind","Copywriting","GitHub","WordPress","SEO","Vercel","Canva","Wireframes","Content Strategy",
];

function coverFor(p = {}) {
  const s = (p.slug || "").toLowerCase();
  const t = (p.title || "").toLowerCase();
  if (s.includes("robin") || t.includes("robin")) return "/work/robin-senior-care.jpg";
  if (s.includes("infinity") || t.includes("infinity")) return "/work/infinitylawns.jpg";
  if (s.includes("things") || s.includes("buy") || t.includes("things")) return "/work/things-you-should-buy.jpg";
  return "/og/default.png";
}

const BLUR =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const metadata = {
  title: "Home | Inemesit David",
  description:
    "Product-minded web developer building clean, fast, conversion-ready websites for small businesses — measured with Google Analytics.",
};

export default async function HomePage() {
  const work = await getAllCaseStudies();
  const featured = work.slice(0, 3);

  return (
    <div id="content">
      {/* HERO */}
      <HeroMotion />

      {/* Warm intro + proof bullets */}
      <section className="mx-auto max-w-6xl px-4 pt-2">
        <p className="text-slate-700">
          I'm <strong>Inemesit Richard David</strong>. I build clean, fast websites for small businesses and local owners, then wire in Google Analytics so we can see what works.
        </p>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Analytic Events on calls, WhatsApp, and forms</li>
          <li>Real gains in load speed and qualified enquiries</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader eyebrow="Skills" title="Skills I build with" text="" />
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
          <div className="hover-card rounded-2xl border border-brand-cta-hover bg-sky-50 p-5">
            <div className="font-semibold">Design & UX</div>
            <p className="mt-2 text-sm text-gray-700">
              Clear layouts, helpful copy, and accessible components that guide visitors to take action.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>wireframes & IA</li>
              <li>Design systems</li>
              <li>Content clarity</li>
            </ul>
          </div>
          <div className="hover-card rounded-2xl border border-brand-cta-hover bg-sky-50 p-5">
            <div className="font-semibold">Build & Performance</div>
            <p className="mt-2 text-sm text-gray-700">
              Next.js and Tailwind with smart routing, responsive images, and strong Web Vitals on every device.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>LCP and CLS budgets</li>
              <li>Responsive images</li>
              <li>SSR and SSG routing</li>
            </ul>
          </div>
          <div className="hover-card rounded-2xl border border-brand-cta-hover bg-sky-50 p-5">
            <div className="font-semibold">Measure & Grow</div>
            <p className="mt-2 text-sm text-gray-700">
              Analytics, events, and funnels that show what works, so we can improve with confidence.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>Google Analytics events</li>
              <li>Lead capture</li>
              <li>SEO and OG polish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Work"
          title="Recent case studies"
          text="A few projects I built for local business owners."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <a
              key={p.slug}
              href={p.liveUrl || `/work/${p.slug}`}
              target={p.liveUrl ? "_blank" : undefined}
              rel={p.liveUrl ? "noopener noreferrer" : undefined}
              aria-label={p.liveUrl ? `${p.title} (opens in a new tab)` : undefined}
              className="group overflow-hidden rounded-2xl border border-gray-200 transition hover:border-brand-cta-hover hover:shadow-md"
            >
              <Image
                src={p.cover || coverFor(p)}
                alt={p.title || "Project cover"}
                width={1280}
                height={720}
                placeholder="blur"
                blurDataURL={BLUR}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-video w-full object-cover transition group-hover:scale-[1.02]"
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
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 transition hover:border-brand-cta-hover hover:text-brand-cta-hover"
          >
            Browse all work
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader eyebrow="Testimonials" title="What clients say" text="A few words from recent projects." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="hover-card rounded-2xl border border-brand-cta-hover bg-sky-50 p-5">
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 transition hover:border-brand-cta-hover hover:text-brand-cta-hover"
          >
            Read more
          </Link>
        </div>
      </section>

      {/* Pitch teaser */}
      <PitchTeaser />

      {/* Divider */}
      <hr className="mx-auto my-12 max-w-6xl border-sky-100 md:my-16" />

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-20 md:pt-12">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-cta-hover bg-sky-50 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-brand">Let's work</div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight">Do you have a project in mind?</h3>
            <p className="mt-2 text-gray-700">
              I build fast, smooth websites with clear goals and measurable outcomes.
            </p>
          </div>
          <div className="shrink-0">
            <ButtonCTA href="/contact">Start a project</ButtonCTA>
          </div>
        </div>
      </section>

      {/* JSON-LD Person */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Inemesit David",
            url: "https://portfolio-2025-pro.vercel.app",
            sameAs: [
              "https://github.com/ReechardDev",
              "https://www.linkedin.com/in/inemesit-david-739676318/",
            ],
            knowsAbout: ["Next.js", "Google Analytics", "Local SEO", "Tailwind CSS"],
          }),
        }}
      />
    </div>
  );
}
