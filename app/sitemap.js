// app/sitemap.js
import { getAllCaseStudies } from "../lib/caseStudies";

export default async function sitemap() {
  const base = "https://portfolio-2025-pro.vercel.app";
  const now = new Date();

  // Static routes with changefreq/priority
  const statics = [
    { path: "/",                priority: 1.0, changeFrequency: "weekly" },
    { path: "/work",            priority: 0.9, changeFrequency: "weekly" },
    { path: "/services",        priority: 0.8, changeFrequency: "monthly" },
    { path: "/about",           priority: 0.7, changeFrequency: "yearly" },
    { path: "/resources",       priority: 0.6, changeFrequency: "monthly" },
    { path: "/articles",        priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact",         priority: 0.6, changeFrequency: "yearly" },
    { path: "/testimonials",    priority: 0.5, changeFrequency: "yearly" },
    { path: "/pitch",           priority: 0.7, changeFrequency: "monthly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Dynamic work pages
  let work = [];
  try {
    const cases = await getAllCaseStudies();
    work = (cases || []).map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: c.updatedAt ? new Date(c.updatedAt) : now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch {
    // fail-soft
  }

  return [...statics, ...work];
}
