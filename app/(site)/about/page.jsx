// app/(site)/about/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SectionHeader from "../../../components/SectionHeader";
import ButtonCTA from "../../../components/ui/ButtonCTA";

export const metadata = { title: "About" };

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Inemesit David",
    jobTitle: "Web Developer",
    url: "https://portfolio-2025-pro.vercel.app/about",
    sameAs: [
      "https://portfolio-2025-pro.vercel.app/",
      "https://www.linkedin.com/in/inemesit-david-739676318/",
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* JSON-LD for SEO */}
      <Script
        id="person-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Lightweight GA4 click hook (uses data-ga attributes) */}
      <Script id="about-ga-clicks" strategy="afterInteractive">
        {`
          window.addEventListener('click', (e) => {
            const el = e.target.closest('[data-ga]');
            if (!el || typeof window.gtag !== 'function') return;
            const event = el.getAttribute('data-ga');
            window.gtag('event', event, { page: 'about' });
          });
        `}
      </Script>

      {/* Hero: portrait × value */}
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-50">
          <Image
            src="/images/about/portrait.webp" // put your cropped waist-up image here
            alt="Inemesit David, web developer"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[50%_20%]" // keep face nicely framed on mobile
          />
        </div>
        <div>
          <p className="text-sm tracking-widest uppercase text-slate-500">About</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">
            Product-minded web developer for small businesses
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-700">
            I build clean, fast websites that turn visitors into real enquiries.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>Next.js and Tailwind on Vercel for speed and stability</li>
            <li>GA4 events wired to calls, WhatsApp, and forms</li>
            <li>Clear copy and structure that helps people take action</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonCTA asChild>
              <Link
                href="/contact"
                aria-label="Start a project from About hero"
                data-ga="about_hero_start_project"
              >
                Start a project
              </Link>
            </ButtonCTA>
            <Link
              href="/work"
              className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-slate-50"
              aria-label="See my work from About hero"
              data-ga="about_see_work"
            >
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility strip (added tiny top margin) */}
      <section className="mt-2 grid grid-cols-1 gap-4 rounded-2xl border bg-white p-6 sm:grid-cols-3">
        <Fact title="8+ years">Digital and web</Fact>
        <Fact title="Ghana and U.S.">Clients served</Fact>
        <Fact title="Performance and SEO">Friendly builds</Fact>
      </section>

      {/* Story in three paras */}
      <section>
        <SectionHeader
          eyebrow="Story"
          title="A bit about me"
          text="Practical work that ships, measures, and improves."
        />
        <div className="prose prose-slate max-w-none">
          <p>
            I’m Inemesit David, a developer and digital marketer based in Accra. I help small businesses look sharp online and collect more enquiries without guessing.
          </p>
          <p>
            I care about simple structure, clear copy, and pages that load fast. I prefer shipping something solid, measuring results, and improving with real data.
          </p>
          <p>
            You get quick communication, clean code, and a practical plan. I meet you where you are, then build what will move the needle first.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section>
        <SectionHeader
          eyebrow="Process"
          title="How I work"
          text="Three simple steps that keep projects moving."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Discover" items={["Short brief", "Pages and priorities", "Success metrics"]} />
          <Card title="Build" items={["Next.js and Tailwind", "Content hierarchy", "On-page SEO and CTAs"]} />
          <Card title="Measure" items={["GA4 events for calls and forms", "Review and refine", "Simple reports you can read"]} />
        </div>
      </section>

      {/* Signature strengths */}
      <section>
        <SectionHeader
          eyebrow="Strengths"
          title="What I am good at"
          text="Design and UX, performance, and growth analytics."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Design and UX"
            items={["Clear sections and headings", "Mobile-first layouts", "Easy paths to contact"]}
          />
          <Card
            title="Performance"
            items={["Fast loads on Vercel", "Core Web Vitals in mind", "Image and asset optimization"]}
          />
          <Card
            title="Growth and analytics"
            items={["GA4 events and funnels", "SEO basics done right", "Simple reports and next steps"]}
          />
        </div>
      </section>

      {/* Results and kind words */}
      <section>
        <SectionHeader eyebrow="Results" title="Kind words" text="Short quotes from recent projects." />
        <div className="grid gap-4 rounded-2xl border bg-white p-6">
          <Quote>Clean build and more calls in week one.</Quote>
          <Quote>Fast delivery and easy to maintain.</Quote>
          <Quote>Finally a site that explains our services clearly.</Quote>
          <div className="pt-2">
            <Link href="/work" className="text-sm font-medium underline-offset-4 hover:underline">
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section>
        <SectionHeader
          eyebrow="At a glance"
          title="Quick facts"
          text="What you may want to know before we start."
        />
        <dl className="grid gap-4 rounded-2xl border bg-white p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Fact title="Based in Accra">Work with Ghanaian and U.S. clients</Fact>
          <Fact title="Background">ICT degree with 8+ years in digital marketing and web development</Fact>
          <Fact title="Stack">Next.js, React, Tailwind, Vercel, GA4, SEO tools</Fact>
          <Fact title="Delivery">Fast turnarounds, clean code, measurable results</Fact>
          <Fact title="Extras">Content writing in Web3 and business, branding support</Fact>
          <Fact title="Personal">Football on weekends, design systems, dad life</Fact>
        </dl>
      </section>

      {/* Personality strip with full-body photo */}
      <section className="rounded-2xl border bg-white p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-50">
            <Image
              src="/images/about/full.webp" // put your full-body image here
              alt="Inemesit David standing, full-body studio photo"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">A simple approach</h3>
            <p className="mt-3 max-w-prose text-slate-700">
              Simple tools. Simple flows. Websites people understand in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Have a project in mind</h2>
        <p className="mt-2 text-slate-200">
          Tell me what you want to build and I will show you the fastest path to live.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <ButtonCTA asChild>
            <Link href="/contact" aria-label="Start a project" data-ga="about_final_start_project">
              Start a project
            </Link>
          </ButtonCTA>
          <Link
            href="https://wa.me/+233595633424" // TODO: replace with your actual WhatsApp link
            className="inline-flex items-center rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
            aria-label="WhatsApp"
            data-ga="about_whatsapp_click"
          >
            WhatsApp
          </Link>
          <Link
            href="/Inemesit-David-CV.pdf"
            className="inline-flex items-center rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            Download CV
          </Link>
        </div>
      </section>
    </main>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-1 text-slate-700">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Fact({ title, children }) {
  return (
    <div className="min-h-[72px]">
      <dt className="text-sm font-medium text-slate-500">{title}</dt>
      <dd className="mt-1 text-base text-slate-900">{children}</dd>
    </div>
  );
}

function Quote({ children }) {
  return <div className="text-slate-800">“{children}”</div>;
}
