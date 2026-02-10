import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogCategory } from "@/app/_data/blog";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  isoDate: string;
  readingTime: string;
  featured: boolean;
  gradientFrom: string;
  gradientTo: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category as BlogCategory,
      date: data.date ?? "",
      isoDate: data.isoDate ?? "",
      readingTime: data.readingTime ?? "",
      featured: data.featured === true,
      gradientFrom: data.gradientFrom ?? "#1a1a2e",
      gradientTo: data.gradientTo ?? "#16213e",
    } satisfies BlogPostMeta;
  });
  return posts.sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );
}

export function getPostBySlug(
  slug: string
): { meta: BlogPostMeta; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category as BlogCategory,
      date: data.date ?? "",
      isoDate: data.isoDate ?? "",
      readingTime: data.readingTime ?? "",
      featured: data.featured === true,
      gradientFrom: data.gradientFrom ?? "#1a1a2e",
      gradientTo: data.gradientTo ?? "#16213e",
    },
    content,
  };
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getFeaturedPosts(): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getRecentPosts(count = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}
