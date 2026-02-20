"use client";

import MotionSection from "@/app/_components/animations/MotionSection";
import { workHero } from "@/app/_data/work";
import styles from "./WorkHero.module.css";

export default function WorkHero() {
  return (
    <MotionSection className={styles.hero}>
      <div className={styles.grid}>
        <h1 className={styles.headline}>{workHero.headline}</h1>
        <p className={styles.subtitle} style={{ whiteSpace: "pre-line" }}>
          {workHero.subtitle}
        </p>
      </div>
    </MotionSection>
  );
}
