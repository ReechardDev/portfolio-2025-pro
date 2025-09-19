// app/sitemap.js
import { getAllCaseStudies } from "../lib/caseStudies"; // ← relative path fixes the build

export default async function sitemap() {
  const base = "https://portfolio-2025-pro.vercel.app";

  // Core static routes
  const staticPaths = [
    "/", "/work", "/services", "/about", "/resources",
    "/articles", "/contact", "/testimonials", "/pitch",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  // Dynamic /work/[slug] entries
  let workPaths = [];
  try {
    const cases = await getAllCaseStudies();
    workPaths = (cases || []).map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
    }));
  } catch {
    // fail-soft: sitemap still returns static routes
  }

  return [...staticPaths, ...workPaths];
}
