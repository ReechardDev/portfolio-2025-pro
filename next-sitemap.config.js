/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://portfolio-2025-pro.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  transform: async (config, path) => ({
    loc: path,
    changefreq: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
    alternateRefs: [],
  }),
};
