export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: /sitemap.xml`;
  return new Response(body, { headers: { "content-type": "text/plain" } });
}
