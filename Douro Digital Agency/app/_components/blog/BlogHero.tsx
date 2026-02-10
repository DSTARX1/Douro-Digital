import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.label}>RESOURCES</span>
      <h1 className={styles.heading}>
        Insights for HIPAA-compliant <em className={styles.italic}>AI</em>
      </h1>
      <p className={styles.sub}>
        Practical guides, compliance deep-dives, and case studies for healthcare
        teams building with artificial intelligence.
      </p>
    </section>
  );
}
