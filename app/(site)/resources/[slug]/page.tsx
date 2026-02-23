import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articleSchema } from "@/lib/jsonld";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostBody from "@/components/blog/BlogPostBody";
import BlogRelated from "@/components/blog/BlogRelated";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { caseStudies } from "@/data/case-studies";

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
    alternates: {
      canonical: `/resources/${slug}`,
    },
    openGraph: {
      title: `${post.meta.title} — Douro Digital`,
      description: post.meta.excerpt,
      type: "article",
      url: `/resources/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
    },
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

  const linkedCaseStudy = caseStudies.find((cs) =>
    cs.relatedBlogSlugs?.includes(slug)
  );

  const jsonLd = articleSchema({
    headline: post.meta.title,
    description: post.meta.excerpt,
    datePublished: post.meta.isoDate,
    url: `/resources/${slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <main id="main-content" className="page-padding" style={{ display: "flex", flexDirection: "column" }}>
          <BlogPostHero meta={post.meta} />
          <BlogPostBody
            content={post.content}
            relatedCaseStudy={
              linkedCaseStudy
                ? {
                    slug: linkedCaseStudy.slug,
                    title: linkedCaseStudy.title,
                    subtitle: linkedCaseStudy.subtitle,
                  }
                : undefined
            }
          />
          <BlogRelated posts={related} />
        </main>
      </div>
      <Footer />
    </>
  );
}
