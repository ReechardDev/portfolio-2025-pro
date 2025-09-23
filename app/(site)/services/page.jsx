// app/(site)/services/page.jsx
import ButtonCTA from "../../../components/ui/ButtonCTA";

export const metadata = {
  title: "Services & Pricing",
  description:
    "Clear packages with room to customize—built fast, measured, and improved. Starter, Standard, and Pro options for local businesses.",
  openGraph: {
    title: "Services & Pricing — Inemesit David",
    description:
      "Clear packages with room to customize—built fast, measured, and improved.",
    url: "https://portfolio-2025-pro.vercel.app/services",
    type: "website",
  },
};

const PLANS = [
  {
    name: "Starter",
    price: "From ₵1,000",
    includes: "1–3 pages, mobile-ready, basic SEO",
    blurb: "One-page or small site to get you live fast.",
    points: ["Responsive build", "Basic SEO + sitemap.xml", "Contact form / WhatsApp"],
  },
  {
    name: "Standard",
    price: "From ₵3,000",
    includes: "Up to 6 pages, GA4 events, CMS-ready",
    blurb: "Brochure site with strong conversion paths.",
    points: [
      "Up to 6 pages",
      "GA4 call/WhatsApp/form events",
      "On-page SEO + OG images",
    ],
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "Custom (₵)",
    includes: "Listings, admin, integrations",
    blurb: "Advanced site or mini-commerce with integrations.",
    points: [
      "Unlimited pages",
      "Performance + accessibility pass",
      "Integrations (Calendly, GA4, more)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl/tight font-semibold text-slate-900">Services & Pricing</h1>
        <p className="mt-2 text-slate-600">
          Clear packages with room to customize—built fast, measured, and improved.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          All prices in GHS (₵). Final quote depends on scope and integrations.
        </p>
      </header>

      <section
        aria-label="Website packages"
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PLANS.map((p) => (
          <div
            key={p.name}
            className="hover-card relative rounded-2xl border border-brand-cta-hover bg-sky-50 p-6 shadow-sm"
          >
            {p.badge && (
              <div
                aria-label={`${p.badge} plan`}
                className="absolute -top-3 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs text-white"
              >
                {p.badge}
              </div>
            )}
            <div className="text-lg font-medium text-slate-900">{p.name}</div>
            <div className="mt-1 text-2xl font-semibold text-slate-900">{p.price}</div>
            <div className="mt-1 text-sm text-slate-600">{p.includes}</div>
            <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonCTA href="/contact" className="w-full">
                Choose plan
              </ButtonCTA>
            </div>
          </div>
        ))}
      </section>

      {/* Pricing clarifier */}
      <section className="mt-12 max-w-2xl text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">What affects final pricing?</h2>
        <ul className="mt-3 list-disc pl-5">
          <li>Number of pages, custom layouts, and content volume</li>
          <li>Integrations (Calendly, GA4, forms, maps, basic CMS)</li>
          <li>Performance targets, accessibility depth, and SEO scope</li>
          <li>Stock assets vs. original graphics and copywriting needs</li>
        </ul>
        <p className="mt-3">
          Share your goals on the{" "}
          <a href="/contact" className="underline underline-offset-2">
            contact page
          </a>
          , and I’ll confirm an exact quote.
        </p>
      </section>
    </main>
  );
}
