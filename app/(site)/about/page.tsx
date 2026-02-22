import { aboutPageSchema, faqSchema } from "@/lib/jsonld";
import { aboutFAQ } from "@/data/faq";
import Navbar from "@/components/home/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutServices from "@/components/about/AboutServices";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import AboutCTA from "@/components/about/AboutCTA";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "About \u2014 Douro Digital | AI Agents & Custom Software",
  description:
    "We build AI agents and custom software for businesses tired of paying for tools that don\u2019t do anything. Four people. No layers. No hand-offs. Just systems that work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About \u2014 Douro Digital | AI Agents & Custom Software",
    description:
      "We build AI agents and custom software for businesses tired of paying for tools that don\u2019t do anything. Four people. No layers. No hand-offs. Just systems that work.",
    type: "website" as const,
    url: "/about",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
};

export default function AboutPage() {
  const jsonLd = aboutPageSchema({
    name: "About — Douro Digital | AI Agents & Custom Software",
    description:
      "We build AI agents and custom software for businesses tired of paying for tools that don\u2019t do anything. Four people. No layers. No hand-offs. Just systems that work.",
  });

  const faqJsonLd = faqSchema(aboutFAQ);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <AboutHero />
        <main id="main-content">
          <AboutIntro />
          <AboutServices />
          <MeetTheTeam />
          <FAQ
            items={aboutFAQ}
            label="About Us"
            heading="Things people ask before working with us"
          />
          <AboutCTA />
        </main>
      </div>
      <Footer />
    </>
  );
}
