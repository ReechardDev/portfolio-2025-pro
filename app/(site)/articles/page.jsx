import SectionHeader from "@/components/SectionHeader";

const ARTICLES = [
  { title: "Service Website IA: How to Make it Obvious", date: "Wed Aug 20 2025", href: "#" },
  { title: "GA4 Events to Track for Local Services", date: "Thu Aug 28 2025", href: "#" },
  { title: "Tailwind Component Rhythm for Readability", date: "Mon Sep 01 2025", href: "#" },
];

export default function ArticlesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="Short, practical notes" title="Articles" text="" />
      <div className="mt-6 grid gap-4">
        {ARTICLES.map((a) => (
          <a
            key={a.title}
            href={a.href}
            className="rounded-2xl border border-gray-200 p-5 bg-white hover:bg-gray-50 transition"
          >
            <div className="font-medium">{a.title}</div>
            <div className="mt-1 text-xs text-gray-500">{a.date} →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
