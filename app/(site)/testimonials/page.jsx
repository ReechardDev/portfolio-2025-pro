// app/(site)/testimonials/page.jsx
export const metadata = { title: "Testimonials" };

const TESTIMONIALS = [
  {
    quote:
      "Clean build and fast turnaround. Calls and WhatsApp messages increased after launch.",
    author: "Brittany & Chris, Infinity Lawns & Beyond",
  },
  {
    quote:
      "Clear care plans and easier contact paths. Families find what they need faster.",
    author: "Robin M., Senior Care Owner",
  },
  {
    quote:
      "Simple structure and better CTAs. Our affiliate site is easier to navigate now.",
    author: "Team TYSB",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">What clients say</h1>
      <p className="mt-2 text-slate-600">A few words from recent projects.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="rounded-2xl border border-gray-200 p-5 hover-card bg-white"
          >
            <blockquote className="text-slate-800">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-slate-500">— {t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
