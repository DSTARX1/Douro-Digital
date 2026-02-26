import MotionSection from "@/components/animations/MotionSection";
import { PixelQuote } from "@/components/icons/PixelIcons";
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
        <div className={styles.quoteIcon}>
          <PixelQuote size={48} color="#D42918" animate />
        </div>
        <blockquote className={styles.quote}>{quote}</blockquote>
      </div>
      <p className={styles.attribution}>
        <span className={styles.author}>{author}</span>
        <span className={styles.role}>{role}</span>
      </p>
    </MotionSection>
  );
}
