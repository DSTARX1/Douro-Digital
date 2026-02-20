import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/app/_components/home/Navbar";
import Footer from "@/app/_components/home/Footer";
import BlogHero from "@/app/_components/blog/BlogHero";
import BlogFeatured from "@/app/_components/blog/BlogFeatured";
import BlogCategoryFilter from "@/app/_components/blog/BlogCategoryFilter";
import BlogGrid from "@/app/_components/blog/BlogGrid";
import BlogNewsletter from "@/app/_components/blog/BlogNewsletter";
import { getAllPosts, getFeaturedPosts } from "@/app/_lib/blog";
import type { BlogCategory } from "@/app/_data/blog";

export const metadata: Metadata = {
  title: "Resources — Douro Digital",
  description:
    "AI breakdowns, compliance deep-dives, and the occasional rant about why your tech stack is a dumpster fire.",
};

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  const filteredPosts = category
    ? allPosts.filter((p) => p.category === (category as BlogCategory))
    : allPosts;

  return (
    <>
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <main style={{ padding: "0 48px 0", display: "flex", flexDirection: "column" }}>
          <BlogHero />
          <BlogFeatured posts={featuredPosts} />
          <Suspense fallback={null}>
            <BlogCategoryFilter />
          </Suspense>
          <BlogGrid posts={filteredPosts} />
          <BlogNewsletter />
        </main>
      </div>
      <Footer />
    </>
  );
}
