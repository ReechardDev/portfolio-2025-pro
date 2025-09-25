// lib/caseStudies.js
export const CASE_STUDIES = [
  {
    slug: "infinity-lawns",
    title: "Infinity Lawns & Beyond",
    summary: "Revamped local landscaping site with clear services, packages, and strong CTAs.",
    liveUrl: "https://infinity-lawns-site.vercel.app/",
    tags: ["Next.js", "Tailwind", "Local Service"],
    cover: null,
  },
  {
    slug: "robins-touch",
    title: "Robin's Touch Senior Care",
    summary: "Conversion-focused brochure site with clear care plans and contact paths.",
    liveUrl: "https://robin-senior-care.vercel.app/",
    tags: ["Next.js", "Tailwind", "Healthcare"],
    cover: null,
  },
  {
    slug: "tysb",
    title: "Things You Should Buy (TYSB)",
    summary: "Affiliate product hub with curated cards and external links.",
    liveUrl: "https://things-you-should-buy.vercel.app/",
    tags: ["Next.js", "Tailwind", "Affiliate"],
    cover: null,
  },
];

export async function getAllCaseStudies() {
  return CASE_STUDIES;
}
export async function getCaseBySlug(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug) || null;
}
