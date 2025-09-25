// app/(site)/pricing/page.jsx
import Link from "next/link";
import SectionHeader from "../../../components/SectionHeader";
import ButtonCTA from "../../../components/ui/ButtonCTA";

const PLANS = [
  {
    name: "Starter",
    price: "₵1,500 – ₵2,500",
    audience: "Small shops & solo service providers",
    features: [
      "1-5 pages (Home, About, Services/Products, Contact)",
      "Mobile-friendly",
      "WhatsApp button",
      "Basic Google listing setup",
      "Free 1-month support",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
  {
    name: "Business",
    price: "₵3,000 – ₵5,000",
    audience: "Growing shops & service providers",
    features: [
      "Up to 10 pages",
      "Gallery / catalog",
      "Contact form + WhatsApp integration",
      "Basic SEO",
      "Hosting setup included",
      "Free 2-month support",
    ],
    mostPopular: true,
    cta: { label: "Start Business Plan", href: "/contact" },
  },
  {
    name: "Premium",
    price: "₵6,000+",
    audience: "Car sellers, dealerships & larger businesses",
    features: [
      "Everything in starter & Premium",
      "Admin panel (manage cars/products)",
      "Optional online payments",
      "Advanced SEO + speed optimization",
      "3-month support & training",
    ],
    cta: { label: "Talk to Me", href: "/contact" },
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="Pricing"
        title="Website packages for local businesses"
        text="Simple, transparent tiers. Hosting/domain paid separately if needed."
      />

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            {p.mostPopular && (
              <div className="absolute -top-3 right-4 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold">
                Most Popular
              </div>
            )}

            <div className="font-semibold text-slate-900">{p.name}</div>
            <div className="mt-1 text-2xl font-bold text-slate-900">{p.price}</div>
            <div className="mt-1 text-sm text-gray-600">{p.audience}</div>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="mt-6">
              <ButtonCTA as={Link} href={p.cta.href} className="w-full">
                {p.cta.label}
              </ButtonCTA>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="font-semibold text-slate-900">Hosting & Domains (Ghana)</div>
        <p className="mt-2 text-sm text-gray-600">
          Typical yearly costs: small sites ₵150-₵500 (Vercel free plan + .com), bigger listing sites ₵1,000–₵3,000
          (cloud/VPS). See the full guide for details.
        </p>
        <div className="mt-4">
          <a
            href="/docs/website-packages-hosting-guide.pdf"
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-5 py-3 transition hover:bg-gray-50"
            download
          >
            Download Packages &amp; Hosting Guide
          </a>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          Details based on my Ghana-friendly pricing &amp; hosting guide.
        </div>
      </section>
    </main>
  );
}
