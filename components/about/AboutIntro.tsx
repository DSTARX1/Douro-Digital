"use client";

import MotionSection from "@/components/animations/MotionSection";
import Accordion from "@/components/home/Accordion";
import { aboutIntro, aboutValues } from "@/data/about";
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <p className={styles.label}>About us</p>
          <p className={styles.intro}>{aboutIntro}</p>
        </div>
        <div className={styles.right}>
          <Accordion items={aboutValues} defaultOpen={0} />
        </div>
      </div>
    </MotionSection>
  );
}
