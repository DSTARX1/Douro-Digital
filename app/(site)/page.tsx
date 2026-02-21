import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import MissionServices from "@/components/home/MissionServices";
import WorkGrid from "@/components/home/WorkGrid";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import ClientLogos from "@/components/home/ClientLogos";
import HomeCTA from "@/components/home/HomeCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1, background: "var(--bg)", marginBottom: "var(--footer-h, 600px)" }}>
        <Navbar />
        <Hero />
        <main style={{ padding: "0 48px 180px", display: "flex", flexDirection: "column", gap: 0 }}>
          <MissionServices />
          <WorkGrid />
          <HomeTestimonial />
          <ClientLogos />
          <HomeCTA />
        </main>
      </div>
      <Footer />
    </>
  );
}
