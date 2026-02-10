import MotionSection from "@/app/_components/animations/MotionSection";
import type { CaseStudy } from "@/app/_data/case-studies";
import styles from "./CaseStudyNextProject.module.css";

interface Props {
  nextStudy: CaseStudy;
}

export default function CaseStudyNextProject({ nextStudy }: Props) {
  return (
    <MotionSection className={styles.section}>
      <span className={styles.label}>Next project</span>
      <a href={`/case-studies/${nextStudy.slug}`} className={styles.link}>
        <span className={styles.title}>{nextStudy.title}</span>
        <span className={styles.arrow}>&rarr;</span>
      </a>
    </MotionSection>
  );
}
