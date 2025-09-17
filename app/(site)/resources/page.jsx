import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Resources — Inemesit David",
  description:
    "Free checklists, GA4 templates, and Canva starters for service businesses.",
};

const RESOURCES = [
  {
    title: "Free Website Audit Checklist (PDF)",
    desc: "Quick checks for IA, speed, metadata, and CTAs.",
    href: "#", // replace with a real file later, e.g. /files/website-audit.pdf
  },
  {
    title: "GA4 Event Map Template (Sheet)",
    desc: "Plan events, conversions, and UTM tags.",
    href: "#", // e.g. Google Sheet link
  },
  {
    title: "Canva Post/Flyer Starter Pack",
    desc: "Reusable layout system for service businesses.",
    href: "#", // e.g. Canva template link
  },
];

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="Freebies & tools" title="Resources" text="" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {RESOURCES.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-gray-200 p-6 bg-white"
          >
            <div className="font-semibold">{r.title}</div>
            <p className="mt-2 text-sm text-gray-700">{r.desc}</p>
            {r.href && r.href !== "#" && (
              <a
                href={r.href}
                className="mt-4 inline-block text-brand text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
