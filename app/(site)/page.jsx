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
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Lucide",
  "Google Domain",
  "GitHub",
  "Copywriting",
  "GA4",
  "GTM (basic)",
  "On-page SEO",
  "Vercel",
  "Canva",
  "Wireframes",
  "Content Strategy",
];

export default async function HomePage() {
  const work = await getAllCaseStudies();
  const featured = work.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <HeroMotion />

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader eyebrow="SKILLS" title="Skills I use in building" text="" />
        <SkillPills skills={SKILLS} />
      </section>

      {/* Capabilities snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I do well"
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
              Google analytics, events and funnels to prove what works and iterate with confidence.
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
              className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm transition"
            >
              <img
                src={p.cover || "/og/default.png"}
                alt={p.title || "Project cover"}
                className="w-full aspect-video object-cover group-hover:scale-[1.02] transition"
              />
              <div className="p-4">
                {/* show tags instead of role/stack */}
                {Array.isArray(p.tags) && p.tags.length > 0 ? (
                  <div className="text-sm text-gray-500">{p.tags.join(" • ")}</div>
                ) : (
                  <div className="text-sm text-gray-500">Case study</div>
                )}
                <div className="mt-1 font-semibold">{p.title}</div>
              </div>
            </a>
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

      {/* Service-business snapshots */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Service Businesses"
          title="Quick wins delivered"
          text="Short, real outcomes for the kinds of businesses I specialize in."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Landscaping</div>
            <div className="mt-1 font-semibold">Infinity Lawns & Beyond</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li><span className="font-medium">Problem:</span> Low website trust + few quote requests.</li>
              <li><span className="font-medium">Move:</span> Clear service cards, sticky CTAs, GA4 events.</li>
              <li><span className="font-medium">Win:</span> More “Request a Quote” clicks within first week.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Senior Care</div>
            <div className="mt-1 font-semibold">Robin’s Touch / Marie-Care</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li><span className="font-medium">Problem:</span> Confusing plans, weak conversions.</li>
              <li><span className="font-medium">Move:</span> Clean plan grid, badges, WhatsApp/call events.</li>
              <li><span className="font-medium">Win:</span> Clearer plans → more inquiries by phone/WhatsApp.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Salon & Beauty</div>
            <div className="mt-1 font-semibold">Greene Hair Luxury</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li><span className="font-medium">Problem:</span> Sparse visuals, low trust.</li>
              <li><span className="font-medium">Move:</span> Gallery-first layout, testimonials, fast LCP.</li>
              <li><span className="font-medium">Win:</span> More DM leads from IG + site.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Local Services</div>
            <div className="mt-1 font-semibold">Various SMEs</div>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li><span className="font-medium">Problem:</span> No funnel tracking.</li>
              <li><span className="font-medium">Move:</span> GA4 events (call_click, whatsapp_click, book_consult).</li>
              <li><span className="font-medium">Win:</span> Measurable leads → better decisions.</li>
            </ul>
          </div>
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
    </div>
  );
}
