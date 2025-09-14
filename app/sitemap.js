import { absoluteUrl } from "@/lib/seo";

export default async function sitemap() {
  const routes = ["", "/work", "/about", "/contact"].map((r) => ({
    url: absoluteUrl(r),
    lastModified: new Date()
  }));
  return routes;
}
