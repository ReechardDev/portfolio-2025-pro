// app/(site)/work/page.jsx
import Link from "next/link";
import { getAllCaseStudies } from "../../../lib/caseStudies";
import ButtonCTA from "../../../components/ui/ButtonCTA";

export default async function WorkPage() {
  const work = await getAllCaseStudies();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl/tight font-semibold text-slate-900">Selected Work</h1>
        <p className="mt-2 text-slate-600">Case studies and live sites I’ve built and improved.</p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {work.map((w) => (
          <article
            key={w.slug}
            className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm hover-card"
          >
            <div className="text-lg font-semibold text-slate-900">{w.title}</div>
            <p className="mt-2 text-sm text-slate-600">{w.summary}</p>

            {w.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonCTA as={Link} href={`/work/${w.slug}`}>
                View case study
              </ButtonCTA>

              {w.liveUrl && (
                <a
                  href={w.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                >
                  Visit site →
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
