// app/(site)/testimonials/page.jsx
import SectionHeader from "../../../components/SectionHeader";
import { TESTIMONIALS } from "../../../lib/testimonials";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        eyebrow="Testimonials"
        title="What clients say"
        text="A few words from recent projects."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="rounded-2xl border border-brand-cta-hover bg-sky-50 p-5 hover-card"
          >
            <blockquote className="text-slate-800">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-slate-500">— {t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
