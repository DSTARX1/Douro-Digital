import MotionSection from "@/app/_components/animations/MotionSection";
import styles from "./CaseStudyChallenge.module.css";

interface Props {
  heading: string;
  description: string;
}

export default function CaseStudyChallenge({ heading, description }: Props) {
  return (
    <MotionSection className={styles.section}>
      <p className={styles.label}>{heading}</p>
      <p className={styles.description}>{description}</p>
    </MotionSection>
  );
}
