import Navbar from "../_components/home/Navbar";
import AboutHero from "../_components/about/AboutHero";
import AboutIntro from "../_components/about/AboutIntro";
import AboutServices from "../_components/about/AboutServices";
import MeetTheTeam from "../_components/about/MeetTheTeam";
import AboutCTA from "../_components/about/AboutCTA";
import Footer from "../_components/home/Footer";

export const metadata = {
  title: "About — Douro Digital | AI Systems for Dental & Aesthetic Clinics",
  description:
    "We build AI systems for dental and aesthetic clinics that capture every lead, book every appointment, and reactivate dormant revenue — HIPAA-compliant by design.",
};

export default function AboutPage() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <AboutHero />
        <main>
          <AboutIntro />
          <AboutServices />
          <MeetTheTeam />
          <AboutCTA />
        </main>
      </div>
      <Footer />
    </>
  );
}
