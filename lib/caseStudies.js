import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const CONTENT_DIR = path.join(process.cwd(), "content", "work");

export async function getAllCaseStudies() {
  const files = await fs.readdir(CONTENT_DIR);
  const mdxFiles = files.filter(f => f.endsWith(".mdx"));
  const items = [];
  for (const file of mdxFiles) {
    const slug = file.replace(/\.mdx$/, "");
    const src = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(src);
    items.push({ slug, ...data });
  }
  // sort by priority or date desc if available
  items.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
  return items;
}

export async function getCaseStudy(slug) {
  const full = path.join(CONTENT_DIR, `${slug}.mdx`);
  const src = await fs.readFile(full, "utf8");
  const { data, content } = matter(src);
  const { content: Content } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false }
  });
  return { meta: { slug, ...data }, Content };
}
