import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/app/_data/case-studies";
import Navbar from "@/app/_components/home/Navbar";
import Footer from "@/app/_components/home/Footer";
import CaseStudyHero from "@/app/_components/case-study/CaseStudyHero";
import CaseStudyDescription from "@/app/_components/case-study/CaseStudyDescription";
import CaseStudyImageGrid from "@/app/_components/case-study/CaseStudyImageGrid";
import CaseStudyApproachV2 from "@/app/_components/case-study/CaseStudyApproachV2";
import CaseStudyResults from "@/app/_components/case-study/CaseStudyResults";
import CaseStudyTestimonial from "@/app/_components/case-study/CaseStudyTestimonial";
import CaseStudyGallery from "@/app/_components/case-study/CaseStudyGallery";
import CaseStudyCTA from "@/app/_components/case-study/CaseStudyCTA";
import CaseStudyMoreWork from "@/app/_components/case-study/CaseStudyMoreWork";

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

  return (
    <>
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <CaseStudyHero study={study} />
        <main>
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
