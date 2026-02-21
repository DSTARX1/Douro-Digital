"use client";

import MotionSection from "@/components/animations/MotionSection";
import styles from "./BlogNewsletter.module.css";

export default function BlogNewsletter() {
  return (
    <MotionSection className={styles.section}>
      <h2 className={styles.heading}>
        Get the breakdowns before everyone else does
      </h2>
      <p className={styles.sub}>
        Every two weeks: one deep-dive on AI, automation, or building systems
        that don&apos;t suck.
      </p>
      <p className={styles.sub}>
        No &quot;5 tips to optimize your funnel.&quot; No motivational quotes.
        Just technical breakdowns, real examples, and the occasional story about
        how we f*cked something up so you don&apos;t have to.
      </p>
      <p className={styles.sub}>
        We hate spam more than you do. Unsubscribe whenever. No hard feelings.
      </p>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="you@company.com"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.btn}>
          Send me the good stuff...
        </button>
      </form>
      <p className={styles.privacy}>
        We take data privacy seriously. Mostly because GDPR fines are
        terrifying, but also because it&apos;s the right thing to do.
      </p>
    </MotionSection>
  );
}
