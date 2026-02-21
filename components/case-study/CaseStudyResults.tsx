import MotionSection from "@/components/animations/MotionSection";
import TextScramble from "@/components/effects/TextScramble";
import type { CaseStudy } from "@/data/case-studies";
import styles from "./CaseStudyResults.module.css";

interface Props {
  results: NonNullable<CaseStudy["results"]>;
}

export default function CaseStudyResults({ results }: Props) {
  return (
    <MotionSection className={styles.section}>
      <p className={styles.label}>{results.heading}</p>
      <div className={styles.grid}>
        {results.items.map((item) => (
          <div key={item.label} className={styles.card}>
            <span className={styles.cardLabel}>{item.label}</span>
            <span className={styles.before}>{item.before}</span>
            <TextScramble text={item.after} className={styles.after} />
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
