"use client";

import MotionSection from "@/app/_components/animations/MotionSection";
import styles from "./BlogNewsletter.module.css";

export default function BlogNewsletter() {
  return (
    <MotionSection className={styles.section}>
      <h2 className={styles.heading}>Stay ahead of HIPAA changes</h2>
      <p className={styles.sub}>
        Get compliance updates, automation guides, and case studies delivered to
        your inbox. No spam — just the insights that matter.
      </p>
      <form
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="you@clinic.com"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.btn}>
          Subscribe
        </button>
      </form>
      <p className={styles.privacy}>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </MotionSection>
  );
}
