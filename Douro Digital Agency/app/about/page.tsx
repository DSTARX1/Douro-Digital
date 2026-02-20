import Navbar from "../_components/home/Navbar";
import AboutHero from "../_components/about/AboutHero";
import AboutIntro from "../_components/about/AboutIntro";
import AboutServices from "../_components/about/AboutServices";
import MeetTheTeam from "../_components/about/MeetTheTeam";
import AboutCTA from "../_components/about/AboutCTA";
import Footer from "../_components/home/Footer";

export const metadata = {
  title: "About \u2014 Douro Digital | AI Agents & Custom Software",
  description:
    "We build AI agents and custom software for businesses tired of paying for tools that don\u2019t do anything. Four people. No layers. No hand-offs. Just systems that work.",
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
