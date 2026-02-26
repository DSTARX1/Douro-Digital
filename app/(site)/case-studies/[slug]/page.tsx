import CaseStudyApproachV2 from "@/components/case-study/CaseStudyApproachV2";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";
import CaseStudyDescription from "@/components/case-study/CaseStudyDescription";
import CaseStudyGallery from "@/components/case-study/CaseStudyGallery";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyImageGrid from "@/components/case-study/CaseStudyImageGrid";
import CaseStudyMoreWork from "@/components/case-study/CaseStudyMoreWork";
import CaseStudyResults from "@/components/case-study/CaseStudyResults";
import CaseStudyTestimonial from "@/components/case-study/CaseStudyTestimonial";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { caseStudies } from "@/data/case-studies";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Douro Digital | Case Study`,
    description: study.tagline ?? study.subtitle,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title: `${study.title} — Douro Digital | Case Study`,
      description: study.tagline ?? study.subtitle,
      type: "website",
      url: `/case-studies/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const studyIndex = caseStudies.findIndex((s) => s.slug === slug);
  if (studyIndex === -1) notFound();
  const study = caseStudies[studyIndex];
  const otherProjects = caseStudies.filter((_, i) => i !== studyIndex);

  const pageJsonLd = webPageSchema({
    name: `${study.title} — Douro Digital | Case Study`,
    description: study.tagline ?? study.subtitle,
    url: `/case-studies/${slug}`,
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/work" },
    { name: study.title, url: `/case-studies/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "var(--bg)",
          marginBottom: "var(--footer-h, 600px)",
        }}
      >
        <Navbar />
        <CaseStudyHero study={study} />
        <main id="main-content">
          {study.challenge && (
            <CaseStudyDescription
              description={study.challenge.description}
              projectDetails={study.projectDetails}
              stats={study.heroStats}
            />
          )}
          {study.imageGrid && study.imageGrid.length > 0 && (
            <CaseStudyImageGrid images={study.imageGrid} />
          )}
          {study.solution && (
            <CaseStudyApproachV2
              solution={study.solution}
              image={study.approachImage ?? study.image}
              imageAlt={study.title}
              color={study.color}
              objectFit={study.objectFit}
              objectPosition={study.objectPosition}
              blogLinks={
                study.relatedBlogSlugs
                  ? study.relatedBlogSlugs
                      .map((blogSlug) => {
                        const post = getAllPosts().find(
                          (p) => p.slug === blogSlug,
                        );
                        return post
                          ? { slug: post.slug, title: post.title }
                          : null;
                      })
                      .filter(
                        (link): link is { slug: string; title: string } =>
                          link !== null,
                      )
                  : undefined
              }
            />
          )}
          {study.cta && <CaseStudyCTA cta={study.cta} />}
          {study.results && <CaseStudyResults results={study.results} />}
          {study.testimonial && (
            <CaseStudyTestimonial
              quote={study.testimonial.quote}
              author={study.testimonial.author}
              role={study.testimonial.role}
            />
          )}
          {study.galleryImages && study.galleryImages.length > 0 && (
            <CaseStudyGallery images={study.galleryImages} />
          )}
          <CaseStudyMoreWork projects={otherProjects} />
        </main>
      </div>
      <Footer />
    </>
  );
}
