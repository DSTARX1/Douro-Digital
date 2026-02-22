import type { Metadata } from "next";
import { webPageSchema, faqSchema } from "@/lib/jsonld";
import { homeFAQ } from "@/data/faq";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/effects/Marquee";
import MissionServices from "@/components/home/MissionServices";
import WorkGrid from "@/components/home/WorkGrid";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import ClientLogos from "@/components/home/ClientLogos";
import HomeCTA from "@/components/home/HomeCTA";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Douro Digital — AI Agents & Custom Software for Revenue Growth",
  description:
    "We build AI agents, custom software, and go-to-market strategies that turn missed calls into booked jobs, automate admin, and drive measurable revenue growth.",
  openGraph: {
    title: "Douro Digital — AI Agents & Custom Software for Revenue Growth",
    description:
      "We build AI agents, custom software, and go-to-market strategies that turn missed calls into booked jobs, automate admin, and drive measurable revenue growth.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  const jsonLd = webPageSchema({
    name: "Douro Digital — AI Agents & Custom Software for Revenue Growth",
    description:
      "We build AI agents, custom software, and go-to-market strategies that turn missed calls into booked jobs, automate admin, and drive measurable revenue growth.",
    url: "/",
  });

  const faqJsonLd = faqSchema(homeFAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <Hero />
        <Marquee />
        <main id="main-content" style={{ padding: "0 48px 180px", display: "flex", flexDirection: "column", gap: 0 }}>
          <MissionServices />
          <WorkGrid />
          <HomeTestimonial />
          <ClientLogos />
          <FAQ items={homeFAQ} heading="Questions we hear all the time" />
          <HomeCTA />
        </main>
      </div>
      <Footer />
    </>
  );
}
