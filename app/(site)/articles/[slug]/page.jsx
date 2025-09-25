import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { getArticleBySlug } from "@/lib/articles";

export async function generateMetadata({ params }) {
  const a = getArticleBySlug(params.slug);
  return { title: a ? a.title : "Article" };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <SectionHeader
        eyebrow="Article"
        title={article.title}
        text={`${article.date} • ${article.readTime}`}
      />
      <article
        className="prose prose-slate mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </main>
  );
}
