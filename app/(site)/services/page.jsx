// app/(site)/services/page.jsx
import ButtonCTA from "../../../components/ui/ButtonCTA";

const PLANS = [
  {
    name: "Starter",
    price: "From $499",
    blurb: "One-page site or landing page to get you live fast.",
    points: [
      "1 page • responsive • fast load",
      "Basic SEO + sitemap.xml",
      "Contact form wired (email)",
    ],
  },
  {
    name: "Standard",
    price: "From $1,200",
    badge: "Most Popular",
    blurb: "Multi-page brochure site with strong conversion paths.",
    points: [
      "Up to 6 pages • CMS ready",
      "GA4 events (call, WhatsApp, contact)",
      "On-page SEO + OG images",
    ],
  },
  {
    name: "Pro",
    price: "Custom",
    blurb: "Advanced site or mini-e-commerce with integrations.",
    points: [
      "Unlimited pages • blog/resources",
      "Performance + accessibility pass",
      "Integrations (Calendly, GA4, more)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Simple header (avoids SectionHeader import issues) */}
      <header className="max-w-2xl">
        <h1 className="text-3xl/tight font-semibold text-slate-900">Services & Pricing</h1>
        <p className="mt-2 text-slate-600">
          Clear packages with room to customize—built fast, measured, and improved.
        </p>
      </header>

      {/* Plan grid */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {p.badge && (
              <div className="absolute -top-3 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
                {p.badge}
              </div>
            )}
            <div className="text-lg font-medium text-slate-900">{p.name}</div>
            <div className="mt-1 text-sm text-slate-600">{p.blurb}</div>
            <div className="mt-4 text-2xl font-semibold text-slate-900">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonCTA href="/contact" className="w-full">Choose plan</ButtonCTA>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ teaser */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold text-slate-900">Common questions</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl2 border border-slate-200 bg-white p-4">
            <div className="font-medium">How long does a site take?</div>
            <p className="mt-1 text-sm text-slate-600">
              Starter: ~1 week. Standard: 2–3 weeks. Pro: depends on scope and integrations.
            </p>
          </div>
          <div className="rounded-xl2 border border-slate-200 bg-white p-4">
            <div className="font-medium">What’s needed to start?</div>
            <p className="mt-1 text-sm text-slate-600">
              Logo/brand, copy or rough notes, and example sites you like. I’ll guide the rest.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
