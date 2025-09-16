import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default async function WorkPage() {
  const work = await getAllCaseStudies();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader eyebrow="Portfolio" title="Work" text="Case cards below summarize role, stack, and actions. Detailed case studies can be added per project." />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {work.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm transition"
          >
            <img
              src={p.cover || "/og/default.png"}
              alt={p.title || "Project cover"}
              className="w-full aspect-video object-cover group-hover:scale-[1.02] transition"
            />
            <div className="p-4">
              <div className="text-sm text-gray-500">
                {p.role} • {Array.isArray(p.stack) ? p.stack.join(", ") : p.stack}
              </div>
              <div className="mt-1 font-semibold">{p.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
