"use client";

import MotionSection from "@/components/animations/MotionSection";
import { PixelArrowRight } from "@/components/icons/PixelIcons";
import styles from "./ProblemTeaser.module.css";

const stats = [
  { value: "71%", label: "of calls never convert" },
  { value: "$4,200+", label: "lost monthly from missed calls" },
  { value: "47%", label: "of bookings happen after hours" },
];

export default function ProblemTeaser() {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.content}>
        <p className={styles.label}>The Problem</p>
        <h2 className={styles.heading}>
          Your dental practice is{" "}
          <em className={styles.italic}>leaking revenue</em> — and most
          clinics don&apos;t even know it.
        </h2>
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
        <a href="/about" className={styles.link}>
          More about us
          <PixelArrowRight size={16} animate />
        </a>
      </div>
    </MotionSection>
  );
}
