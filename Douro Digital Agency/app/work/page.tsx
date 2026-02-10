import Navbar from "../_components/home/Navbar";
import WorkHero from "../_components/work/WorkHero";
import WorkBentoGrid from "../_components/work/WorkBentoGrid";
import Footer from "../_components/home/Footer";

export const metadata = {
  title: "Work — Douro Digital | AI-Powered Digital Products",
  description:
    "Explore our portfolio of AI-powered digital products. From voice coaching to social media platforms, we build solutions that drive real business impact.",
};

export default function WorkPage() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <main
          style={{
            padding: "0 48px 180px",
            display: "flex",
            flexDirection: "column" as const,
            gap: 0,
          }}
        >
          <WorkHero />
          <WorkBentoGrid />
        </main>
      </div>
      <Footer />
    </>
  );
}
