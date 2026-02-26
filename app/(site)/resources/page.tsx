import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogHero from "@/components/blog/BlogHero";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import type { BlogCategory } from "@/data/blog";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Resources — Douro Digital",
  description:
    "AI breakdowns, compliance deep-dives, and the occasional rant about why your tech stack is a dumpster fire.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources — Douro Digital",
    description:
      "AI breakdowns, compliance deep-dives, and the occasional rant about why your tech stack is a dumpster fire.",
    type: "website",
    url: "/resources",
  },
  twitter: {
    card: "summary_large_image",
  },
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
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "var(--bg)",
          marginBottom: "var(--footer-h, 600px)",
        }}
      >
        <Navbar />
        <main
          id="main-content"
          className="page-padding"
          style={{ display: "flex", flexDirection: "column" }}
        >
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
