import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { getAllCaseStudies } from "@/lib/caseStudies";

export const metadata = { title: "Work — Case Studies" };

export default async function WorkPage() {
  const items = await getAllCaseStudies();
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader eyebrow="Portfolio" title="All case studies" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(item => (
          <Link key={item.slug} href={`/work/${item.slug}`} className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm transition">
            <img src={item.cover || "/og/default.png"} alt="" className="w-full aspect-video object-cover group-hover:scale-[1.02] transition" />
            <div className="p-4">
              <div className="text-sm text-gray-500">{item.role} • {item.stack?.join(", ")}</div>
              <div className="mt-1 font-semibold">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
