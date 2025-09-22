// app/(site)/articles/page.jsx
import SectionHeader from "../../../components/SectionHeader";

const ARTICLES = [
  {
    title: "Service Website IA: How to Make it Obvious",
    date: "Wed Aug 20 2025",
    href: "#",
    excerpt:
      "A practical IA checklist so visitors instantly know what you do and how to contact you.",
  },
  {
    title: "GA4 Events to Track for Local Services",
    date: "Thu Aug 28 2025",
    href: "#",
    excerpt:
      "Essential events (call, WhatsApp, form) to measure real leads—plus simple naming tips.",
  },
  {
    title: "Tailwind Component Rhythm for Readability",
    date: "Mon Sep 01 2025",
    href: "#",
    excerpt:
      "Spacing, font sizes, and small utility patterns that keep pages scannable and clean.",
  },
];

function formatDate(input) {
  const d = new Date(input);
  return isNaN(d)
    ? input
    : d.toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" });
}

export default function ArticlesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="Short, practical notes" title="Articles" text="" />
      <div className="mt-6 grid gap-4">
        {ARTICLES.map((a) => (
          <a
            key={a.title}
            href={a.href}
            className="group rounded-2xl border border-gray-200 p-5 bg-white transition hover:bg-gray-50 hover:border-brand-cta-hover"
          >
            <div className="font-medium">{a.title}</div>
            <div className="mt-1 text-xs text-gray-500">
              {formatDate(a.date)}{" "}
              <span className="inline-block transition group-hover:translate-x-0.5">→</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              {a.excerpt ||
                "A quick read on improving small service websites with clear paths to contact and GA4 tracking."}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
