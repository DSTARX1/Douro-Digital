import MotionSection from "@/app/_components/animations/MotionSection";
import type { CaseStudy } from "@/app/_data/case-studies";
import styles from "./CaseStudyHero.module.css";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyHero({ study }: Props) {
  return (
    <MotionSection className={styles.hero}>
      <span className={styles.subtitle}>{study.subtitle}</span>
      <h1 className={styles.title}>{study.title}</h1>
      {study.tagline && <p className={styles.tagline}>{study.tagline}</p>}
    </MotionSection>
  );
}
