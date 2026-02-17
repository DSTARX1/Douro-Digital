"use client";

import Image from "next/image";
import MotionSection from "@/app/_components/animations/MotionSection";
import CalInlineEmbed from "@/app/_components/cal/CalInlineEmbed";
import { aboutCTA, teamMembers } from "@/app/_data/about";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <MotionSection className={styles.section}>
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
      <p className={styles.subtitle}>{aboutCTA.subtitle}</p>
      <CalInlineEmbed className={styles.calEmbed} />
    </MotionSection>
  );
}
