import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/_components/home/Navbar";
import Footer from "@/app/_components/home/Footer";
import BlogPostHero from "@/app/_components/blog/BlogPostHero";
import BlogPostBody from "@/app/_components/blog/BlogPostBody";
import BlogRelated from "@/app/_components/blog/BlogRelated";
import { getAllPosts, getPostBySlug } from "@/app/_lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found — Douro Digital" };
  return {
    title: `${post.meta.title} — Douro Digital`,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.category === post.meta.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <main style={{ padding: "0 48px 0", display: "flex", flexDirection: "column" }}>
          <BlogPostHero meta={post.meta} />
          <BlogPostBody content={post.content} />
          <BlogRelated posts={related} />
        </main>
      </div>
      <Footer />
    </>
  );
}
