import { getAllCaseStudies } from "@/lib/caseStudies";

export default async function sitemap() {
  const base = "https://portfolio-2025-pro.vercel.app";
  const staticPaths = ["/","/work","/services","/about","/resources","/articles","/contact","/testimonials","/pitch"]
    .map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  let workPaths = [];
  try {
    const cases = await getAllCaseStudies();
    workPaths = (cases || []).map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
    }));
  } catch {}

  return [...staticPaths, ...workPaths];
}
