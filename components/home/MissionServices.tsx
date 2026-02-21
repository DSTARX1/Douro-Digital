"use client";

import MotionSection from "@/components/animations/MotionSection";
import TextScramble from "@/components/effects/TextScramble";
import { PixelStar } from "@/components/icons/PixelIcons";
import ServiceAccordion from "./ServiceAccordion";
import styles from "./MissionServices.module.css";

const stats = [
  { value: "78%", label: "of leads go to whoever responds first", aside: "They don\u2019t wait. They don\u2019t give you a second chance." },
  { value: "50%", label: "of potential revenue walks out the door", aside: "Five minutes. That\u2019s all you\u2019ve got." },
  { value: "40%", label: "of your business happens outside 9-5", aside: "When you\u2019re asleep \u2014 and your phone\u2019s going straight to voicemail." },
];

export default function MissionServices() {
  return (
    <MotionSection className={styles.section} id="services">
      <div className={styles.left}>
        <p className={styles.label}>The Leak</p>
        <h2 className={styles.heading}>Walk with me here.</h2>
        <div className={styles.body}>
          <p>
            You&apos;re running ads. Traffic is coming in. Leads are filling out
            forms.
          </p>
          <p>And then... nothing.</p>
        </div>
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <TextScramble text={s.value} className={styles.statValue} />
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statAside}>{s.aside}</span>
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <p>Here&apos;s the thing nobody tells you...</p>
          <p>
            You&apos;re not losing leads because your offer sucks. You&apos;re
            losing them because your <strong>SYSTEM</strong> can&apos;t keep up.
            Manual follow-up. Missed calls. Leads sitting in your CRM for 30
            minutes (the average response time, by the way — might as well be 30
            days).
          </p>
          <p className={styles.closing}>
            Your business is bleeding revenue through holes you didn&apos;t even
            know existed.
          </p>
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
