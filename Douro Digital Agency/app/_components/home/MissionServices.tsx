"use client";

import MotionSection from "@/app/_components/animations/MotionSection";
import { PixelStar } from "@/app/_components/icons/PixelIcons";
import ServiceAccordion from "./ServiceAccordion";
import styles from "./MissionServices.module.css";

const stats = [
  { value: "71%", label: "of calls never convert" },
  { value: "$4,200+", label: "lost monthly from missed calls" },
  { value: "47%", label: "of bookings happen after hours" },
];

export default function MissionServices() {
  return (
    <MotionSection className={styles.section} id="services">
      <div className={styles.left}>
        <p className={styles.label}>The Problem</p>
        <h2 className={styles.heading}>
          Your clinic is{" "}
          <em className={styles.italic}>leaking revenue</em> — and most
          practices don&apos;t even know it.
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
          <span className={styles.star}>
            <PixelStar size={14} animate />
          </span>
          More about us
        </a>
      </div>
      <div className={styles.right}>
        <p className={styles.sectionLabel}>Services</p>
        <ServiceAccordion />
      </div>
    </MotionSection>
  );
}
