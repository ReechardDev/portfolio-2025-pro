import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { getAllArticles } from "@/lib/articles";

export const metadata = { title: "Articles" };

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader
        eyebrow="Articles"
        title="Notes, how-tos & quick wins"
        text="Short, practical reads from real projects."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="block rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{a.excerpt}</p>
            <div className="mt-4 text-xs text-slate-500">
              {a.date} • {a.readTime}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
