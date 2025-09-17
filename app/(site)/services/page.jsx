// app/(site)/services/page.jsx
import ButtonCTA from "../../../components/ui/ButtonCTA";

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
    points: ["Up to 6 pages", "GA4 call/WhatsApp/form events", "On-page SEO + OG images"],
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "Custom (₵)",
    includes: "Listings, admin, integrations",
    blurb: "Advanced site or mini-commerce with integrations.",
    points: ["Unlimited pages", "Performance + accessibility pass", "Integrations (Calendly, GA4, more)"],
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl/tight font-semibold text-slate-900">Services & Pricing</h1>
        <p className="mt-2 text-slate-600">Clear packages with room to customize—built fast, measured, and improved.</p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {p.badge && (
              <div className="absolute -top-3 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
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
    </main>
  );
}
