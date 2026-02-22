"use client";

import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import dynamic from "next/dynamic";

const CalInlineEmbed = dynamic(() => import("@/components/cal/CalInlineEmbed"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 700 }} />,
});
import ParallaxContainer from "@/components/animations/ParallaxContainer";
import { aboutCTA, teamMembers } from "@/data/about";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <MotionSection className={styles.section}>
      <ParallaxContainer speed={0.06}>
      <h2 className={styles.heading}>
        {aboutCTA.heading} <span className={styles.accent}>{aboutCTA.accentPhrase}</span>
      </h2>
      <div className={styles.pfpRow}>
        {teamMembers.map((m) => (
          <div
            key={m.name}
            className={styles.pfp}
            style={{
              backgroundColor: m.color,
              "--img-pos": m.objectPosition || "center",
              "--img-scale": m.scale ? `scale(${m.scale})` : "none",
            } as React.CSSProperties}
          >
            <Image
              src={m.image}
              alt={m.name}
              fill
              sizes="64px"
              suppressHydrationWarning
            />
          </div>
        ))}
      </div>
      </ParallaxContainer>
      <p className={styles.subtitle} style={{ whiteSpace: "pre-line" }}>
        {aboutCTA.subtitle}
      </p>
      {aboutCTA.email && (
        <p style={{ fontSize: "16px", color: "var(--muted)", marginTop: "16px" }}>
          Not a call person? Email us:{" "}
          <a
            href={`mailto:${aboutCTA.email}`}
            style={{ color: "var(--fg)", textDecoration: "underline" }}
          >
            {aboutCTA.email}
          </a>
        </p>
      )}
      <CalInlineEmbed className={styles.calEmbed} />
    </MotionSection>
  );
}
