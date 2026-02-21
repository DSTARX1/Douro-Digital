import MotionSection from "@/components/animations/MotionSection";
import styles from "./CaseStudyTestimonial.module.css";

interface Props {
  quote: string;
  author: string;
  role: string;
}

export default function CaseStudyTestimonial({ quote, author, role }: Props) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.quoteWrap}>
        <blockquote className={styles.quote}>{quote}</blockquote>
      </div>
      <p className={styles.attribution}>
        <span className={styles.author}>{author}</span>
        <span className={styles.role}>{role}</span>
      </p>
    </MotionSection>
  );
}
