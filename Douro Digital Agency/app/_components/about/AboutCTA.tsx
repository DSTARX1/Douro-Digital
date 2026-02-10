"use client";

import Image from "next/image";
import MotionSection from "@/app/_components/animations/MotionSection";
import MagneticCard from "@/app/_components/cursor/MagneticCard";
import { PixelEnvelope } from "@/app/_components/icons/PixelIcons";
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
            style={{ backgroundColor: m.color }}
          >
            <Image
              src={m.image}
              alt={m.name}
              fill
              sizes="64px"
              style={{
                objectFit: "cover",
                objectPosition: m.objectPosition || "center",
                transform: m.scale ? `scale(${m.scale})` : undefined,
                transformOrigin: m.scale ? "center top" : undefined,
              }}
            />
          </div>
        ))}
      </div>
      <p className={styles.subtitle}>{aboutCTA.subtitle}</p>
      <MagneticCard maxMove={15}>
        <a href={`mailto:${aboutCTA.email}`} className={styles.emailBtn}>
          <span className={styles.emailIcon}>
            <PixelEnvelope size={16} animate />
          </span>
          {aboutCTA.email}
        </a>
      </MagneticCard>
    </MotionSection>
  );
}
