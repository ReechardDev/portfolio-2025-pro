import SectionHeader from "@/components/SectionHeader";

const RESOURCES = [
  { title: "Free Website Audit Checklist (PDF)", desc: "Quick checks for IA, speed, metadata, and CTAs." },
  { title: "GA4 Event Map Template (Sheet)", desc: "Plan events, conversions, and UTM tags." },
  { title: "Canva Post/Flyer Starter Pack", desc: "Reusable layout system for service businesses." },
];

// 👇 default export MUST be a React component (function returning JSX)
export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="Freebies & tools" title="Resources" text="" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {RESOURCES.map((r) => (
          <div key={r.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
            <div className="font-semibold">{r.title}</div>
            <p className="mt-2 text-sm text-gray-700">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
