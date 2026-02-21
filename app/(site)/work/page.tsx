import Navbar from "@/components/home/Navbar";
import WorkHero from "@/components/work/WorkHero";
import WorkBentoGrid from "@/components/work/WorkBentoGrid";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Work — Douro Digital | AI-Powered Digital Products",
  description:
    "Explore our portfolio of AI-powered digital products. From voice coaching to social media platforms, we build solutions that drive real business impact.",
  openGraph: {
    title: "Work — Douro Digital | AI-Powered Digital Products",
    description:
      "Explore our portfolio of AI-powered digital products. From voice coaching to social media platforms, we build solutions that drive real business impact.",
    type: "website",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
};

export default function WorkPage() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <main
          id="main-content"
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
