import SectionHeader from "@/components/SectionHeader";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="WHAT I DELIVER" title="Services" text="" />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Website Revamp */}
        <div className="rounded-2xl border border-gray-200 p-5 bg-white">
          <h3 className="text-lg font-semibold">Website Revamp (Service Businesses)</h3>
          <p className="mt-2 text-gray-700">
            Audit → IA → UI kit → 5-page build (Home/Services/Pricing/About/Contact) → GA4 → deploy
          </p>
          <div className="mt-3 text-sm text-gray-600">
            <span className="font-medium">Timeline:</span> 2–4 weeks
          </div>
          <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>UX audit &amp; sitemap</li>
            <li>Component system in Tailwind</li>
            <li>On-page SEO &amp; metadata</li>
            <li>GA4 events and goals</li>
            <li>Deploy to Vercel/Netlify</li>
          </ul>
        </div>

        {/* New Site (MVP) */}
        <div className="rounded-2xl border border-gray-200 p-5 bg-white">
          <h3 className="text-lg font-semibold">New Site (MVP)</h3>
          <p className="mt-2 text-gray-700">Brand starter, copy, 3–5 sections, forms, GA4</p>
          <div className="mt-3 text-sm text-gray-600">
            <span className="font-medium">Timeline:</span> 1–2 weeks
          </div>
          <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>Hero + offer</li>
            <li>Services overview</li>
            <li>Contact/booking</li>
            <li>Analytics wiring</li>
          </ul>
        </div>

        {/* Analytics Setup (GA4) */}
        <div className="rounded-2xl border border-gray-200 p-5 bg-white">
          <h3 className="text-lg font-semibold">Analytics Setup (GA4)</h3>
          <p className="mt-2 text-gray-700">Events, conversions, UTM plan, simple dashboard</p>
          <div className="mt-3 text-sm text-gray-600">
            <span className="font-medium">Timeline:</span> 2–4 days
          </div>
          <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>Key event map</li>
            <li>Conversions in GA4</li>
            <li>Traffic tagging plan</li>
          </ul>
        </div>

        {/* Design Systems (Canva) */}
        <div className="rounded-2xl border border-gray-200 p-5 bg-white">
          <h3 className="text-lg font-semibold">Design Systems (Canva)</h3>
          <p className="mt-2 text-gray-700">Reusable templates (posts, flyers, proposals)</p>
          <div className="mt-3 text-sm text-gray-600">
            <span className="font-medium">Timeline:</span> 3–5 days
          </div>
          <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>Post/flyer set</li>
            <li>Proposal template</li>
            <li>Brand color/typography</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
