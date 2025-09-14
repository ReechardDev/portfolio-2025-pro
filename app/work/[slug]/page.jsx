import SectionHeader from "@/components/SectionHeader";
import MetricCard from "@/components/MetricCard";
import { getCaseStudy } from "@/lib/caseStudies";

export async function generateMetadata({ params }) {
  const { meta } = await getCaseStudy(params.slug);
  return {
    title: `${meta.title} — Case Study`,
    description: meta.summary || "Case study"
  };
}

export default async function CaseStudyPage({ params }) {
  const { meta, Content } = await getCaseStudy(params.slug);
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 prose prose-slate">
      <SectionHeader eyebrow={meta.role} title={meta.title} text={meta.summary} align="left" />
      {meta.metrics?.length ? (
        <div className="not-prose mt-6 grid gap-4 sm:grid-cols-3">
          {meta.metrics.map((m, i) => <MetricCard key={i} label={m.label} value={m.value} hint={m.hint} />)}
        </div>
      ) : null}

      <div className="mt-8">
        <Content />
      </div>
    </article>
  );
}
