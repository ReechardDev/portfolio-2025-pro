// app/(site)/work/[slug]/page.jsx
import Link from "next/link";
import ButtonCTA from "../../../../components/ui/ButtonCTA";
import { getAllCaseStudies, getCaseBySlug } from "../../../../lib/caseStudies";

export async function generateStaticParams() {
  const all = await getAllCaseStudies();
  return all.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const item = await getCaseBySlug(params.slug);
  return {
    title: item ? `${item.title} — Case Study` : "Case Study",
    description: item?.summary || "Case study",
  };
}

export default async function CaseStudyPage({ params }) {
  const item = await getCaseBySlug(params.slug);
  if (!item) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p className="mt-2 text-slate-600">This case study doesn’t exist.</p>
        <div className="mt-6">
          <ButtonCTA as={Link} href="/work">Back to work</ButtonCTA>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl/tight font-semibold text-slate-900">{item.title}</h1>
      <p className="mt-3 max-w-2xl text-slate-600">{item.summary}</p>

      {/* MINI STATS (replace values with real numbers when you have them) */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { k: "Lighthouse Perf", v: "95+" },
          { k: "Leads ↑", v: "+42%" },
          { k: "Bounce ↓", v: "–18%" },
          { k: "Build time", v: "2 wks" },
        ].map(({k,v}) => (
          <div key={k} className="rounded-xl2 border border-slate-200 p-4">
            <div className="text-xs text-slate-500">{k}</div>
            <div className="mt-1 text-xl font-semibold">{v}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonCTA as={Link} href="/contact">Start a project</ButtonCTA>
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Visit live site →
          </a>
        )}
        <a
          href="/work"
          className="inline-flex items-center gap-2 rounded-xl2 border border-slate-200 bg-white px-5 py-3 text-slate-900 transition hover:border-brand-cta-hover hover:text-brand-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
        >
          Back to work
        </a>
      </div>
    </main>
  );
}
