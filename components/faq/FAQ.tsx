"use client";

import MotionSection from "@/components/animations/MotionSection";
import { PixelChevronDown } from "@/components/icons/PixelIcons";
import styles from "./FAQ.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
  label?: string;
  heading?: string;
}

export default function FAQ({
  items,
  label = "FAQ",
  heading = "Questions we hear all the time",
}: Props) {
  return (
    <MotionSection className={styles.section}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.list}>
        {items.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.summary}>
              <span className={styles.question}>{item.question}</span>
              <span className={styles.icon}>
                <PixelChevronDown size={24} />
              </span>
            </summary>
            <div className={styles.answerGrid}>
              <div className={styles.answerInner}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </MotionSection>
  );
}
