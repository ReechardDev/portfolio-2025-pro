export const ARTICLES = [
  {
    slug: "how-i-build-fast-portfolios",
    title: "How I build fast, focused portfolio sites",
    date: "2025-09-20",
    readTime: "4 min",
    excerpt:
      "A lightweight stack, ruthless scope, and measurable CTAs. Here's my playbook.",
    // keep content simple JSX-as-string for now
    html: `
      <p>I focus on fast iteration: pick a lean stack, define one clear CTA, and deploy.</p>
      <h3>Stack</h3>
      <ul>
        <li>Next.js App Router + Tailwind</li>
        <li>Image optimization + Google Analytic events</li>
      </ul>
      <p>Then measure: what actually gets clicked? Optimize that.</p>
    `,
  },
  {
    slug: "checklist-before-shipping",
    title: "My checklist before deploying a client site",
    date: "2025-09-15",
    readTime: "3 min",
    excerpt:
      "From favicons to sitemap, here's the bare minimum I never skip.",
    html: `
      <p>Performance, accessibility, and basic SEO are non-negotiable.</p>
      <ol>
        <li>Meta titles/descriptions per page</li>
        <li>Canonical + sitemap + robots</li>
        <li>Image sizes and alt text</li>
      </ol>
    `,
  },
];

export function getAllArticles() {
  return ARTICLES;
}

export function getArticleBySlug(slug) {
  return ARTICLES.find(a => a.slug === slug) || null;
}
