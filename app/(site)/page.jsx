import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default async function HomePage() {
  const work = await getAllCaseStudies();
  const featured = work.slice(0, 3);
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            I design & build <span className="text-brand">conversion‑focused</span> websites.
          </h1>
          <p className="mt-4 text-gray-600">
            Product‑minded developer specializing in Next.js, Tailwind, and clean UX. I care about speed, accessibility, and measurable outcomes.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/work" className="rounded-xl2 bg-brand text-white px-5 py-3">See my work</Link>
            <Link href="/contact" className="rounded-xl2 border border-gray-200 px-5 py-3 hover:bg-gray-50">Start a project</Link>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader eyebrow="Selected Work" title="Recent case studies" text="A few projects shipped with care for UX, performance, and business impact." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map(p => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm transition">
              <img src={p.cover || "/og/default.png"} alt="" className="w-full aspect-video object-cover group-hover:scale-[1.02] transition" />
              <div className="p-4">
                <div className="text-sm text-gray-500">{p.role} • {p.stack?.join(", ")}</div>
                <div className="mt-1 font-semibold">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
