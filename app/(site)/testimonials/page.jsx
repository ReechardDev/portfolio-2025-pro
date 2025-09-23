// app/(site)/testimonials/page.jsx
import SectionHeader from "../../../components/SectionHeader";
import { TESTIMONIALS } from "../../../lib/testimonials";

export const metadata = {
  title: "Testimonials | Inemesit David",
  description:
    "What clients say about working with Inemesit David — feedback from projects in web development, performance, and conversion-focused builds.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials — Inemesit David",
    description:
      "What clients say about working with Inemesit David — web development, performance, and conversion-focused builds.",
    url: "https://portfolio-2025-pro.vercel.app/testimonials",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="Testimonials"
        title="What clients say"
        text="A few words from recent projects."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={`${t.author}-${i}`}
            className="hover-card rounded-2xl border border-brand-cta-hover bg-sky-50 p-5"
          >
            <blockquote className="text-slate-800">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-slate-500">— {t.author}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
