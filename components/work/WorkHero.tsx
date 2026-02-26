"use client";

import MotionSection from "@/components/animations/MotionSection";
import TextReveal from "@/components/animations/TextReveal";
import AnimatedUnderline from "@/components/effects/AnimatedUnderline";
import Highlight from "@/components/effects/Highlight";
import styles from "./WorkHero.module.css";

export default function WorkHero() {
  return (
    <MotionSection className={styles.hero}>
      <div className={styles.grid}>
        <TextReveal
          text="Real systems. Real revenue. Real results."
          as="h1"
          className={styles.headline}
          delay={0.1}
        />
        <div className={styles.subtitle}>
          <p>
            (Not case studies where we take credit for your entire business
            &mdash; just the specific thing we built and what it did)
          </p>
          <p>
            No <Highlight>vanity metrics</Highlight>. No &ldquo;increased
            engagement by 300%&rdquo; (engagement doesn&rsquo;t pay your
            mortgage).
          </p>
          <p>
            Just businesses that needed AI agents or custom software, got them,
            and made more money or saved more time as a direct result.
          </p>
          <p>
            <AnimatedUnderline>
              Revenue up. Costs down. Time saved.
            </AnimatedUnderline>{" "}
            That&rsquo;s it.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
