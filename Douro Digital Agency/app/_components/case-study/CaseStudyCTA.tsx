"use client";

import MotionSection from "@/app/_components/animations/MotionSection";
import MagneticCard from "@/app/_components/cursor/MagneticCard";
import type { CaseStudy } from "@/app/_data/case-studies";
import styles from "./CaseStudyCTA.module.css";

interface Props {
  cta: NonNullable<CaseStudy["cta"]>;
}

export default function CaseStudyCTA({ cta }: Props) {
  return (
    <MotionSection className={styles.section}>
      <h2 className={styles.heading}>{cta.heading}</h2>
      <MagneticCard maxMove={15}>
        <a href={cta.buttonHref} className={styles.demoBtn}>
          {cta.buttonText}
        </a>
      </MagneticCard>
    </MotionSection>
  );
}
