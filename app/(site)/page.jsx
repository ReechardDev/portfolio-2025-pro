import Link from "next/link";
import dynamic from "next/dynamic";
import SectionHeader from "@/components/SectionHeader";
import { getAllCaseStudies } from "@/lib/caseStudies";

// Dynamically load a small client component that uses Framer Motion
const HeroMotion = dynamic(() => import("@/components/HeroMotion"), { ssr: false });

export default async function HomePage() {
  const work = await getAllCaseStudies();
  const featured = work.slice(0, 3);

  return (
    <div>
      {/* Hero (Framer Motion inside a client component) */}
      <HeroMotion />

      {/* Selected Work */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Selected Work"
          title="Recent case studies"
          text="A few projects shipped with care for UX, performance, and business impact."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-sm transition"
            >
              <img
                src={p.cover || "/og/default.png"}
                alt=""
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
    </div>
  );
}
