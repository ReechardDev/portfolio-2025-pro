export const site = {
  name: "Inemesit David — Product-minded Web Dev",
  url: "https://portfolio-2025-pro.vercel.app",
  description: "I design and build conversion-focused websites for local businesses with Next.js, Tailwind, with Google Analytics installed. Fast, accessible, measurable.",
};

export function absoluteUrl(path = "") {
  const base = site.url.replace(/\/$/, "");
  const p = String(path || "").replace(/^\//, "");
  return p ? `${base}/${p}` : base;
}
