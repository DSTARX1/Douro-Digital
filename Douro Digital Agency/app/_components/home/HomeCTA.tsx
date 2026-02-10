"use client";

import MotionSection from "@/app/_components/animations/MotionSection";
import MagneticCard from "@/app/_components/cursor/MagneticCard";
import { PixelEnvelope } from "@/app/_components/icons/PixelIcons";
import { teamMembers } from "@/app/_data/about";
import RotatingText from "./RotatingText";
import styles from "./HomeCTA.module.css";

export default function HomeCTA() {
  return (
    <MotionSection className={styles.section} id="contact">
      <div className={styles.pfpRow}>
        {teamMembers.map((m) => (
          <div
            key={m.name}
            className={styles.pfp}
            style={{ backgroundColor: m.color }}
          />
        ))}
      </div>
      <h2 className={styles.heading}>
        Let&apos;s work on <RotatingText />
      </h2>
      <MagneticCard maxMove={15}>
        <a href="mailto:hello@dourodigital.com" className={styles.emailBtn}>
          <span className={styles.emailIcon}>
            <PixelEnvelope size={16} animate />
          </span>
          hello@dourodigital.com
        </a>
      </MagneticCard>
    </MotionSection>
  );
}
