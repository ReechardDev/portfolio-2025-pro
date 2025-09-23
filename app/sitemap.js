// app/sitemap.js
import { getAllCaseStudies } from "../lib/caseStudies";

// Rebuild the sitemap at most once per day (safe for production)
export const revalidate = 86400; // 24 hours

export default async function sitemap() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://portfolio-2025-pro.vercel.app";
  const now = new Date();

  // Static routes with changefreq/priority
  const statics = [
    { path: "/",             priority: 1.0, changeFrequency: "weekly" },
    { path: "/work",         priority: 0.9, changeFrequency: "weekly" },
    { path: "/services",     priority: 0.8, changeFrequency: "monthly" },
    { path: "/about",        priority: 0.7, changeFrequency: "yearly" },
    { path: "/resources",    priority: 0.6, changeFrequency: "monthly" },
    { path: "/articles",     priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact",      priority: 0.6, changeFrequency: "yearly" },
    { path: "/testimonials", priority: 0.5, changeFrequency: "yearly" },
    { path: "/pitch",        priority: 0.7, changeFrequency: "monthly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Dynamic /work/[slug] entries (fail-soft if data unavailable)
  let work = [];
  try {
    const cases = await getAllCaseStudies();
    if (Array.isArray(cases)) {
      work = cases
        .filter((c) => c?.slug)
        .map((c) => ({
          url: `${base}/work/${c.slug}`,
          lastModified: c?.updatedAt ? new Date(c.updatedAt) : now,
          changeFrequency: "monthly",
          priority: 0.8,
        }));
    }
  } catch {
    // No-op: keep sitemap valid even if fetching cases fails
  }

  return [...statics, ...work];
}
