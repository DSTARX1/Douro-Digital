import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.label}>
        The Blog (not &quot;thought leadership&quot;)
      </span>
      <h1 className={styles.heading}>
        Breakdowns, deep-dives, and the occasional rant about why your tech
        stack is a <em className={styles.italic}>dumpster fire</em>
      </h1>
      <p className={styles.sub}>
        (We don&apos;t do LinkedIn-style &quot;10 tips to scale your
        business&quot; nonsense. If we&apos;re writing it, it&apos;s because we
        actually built it or learned it the expensive way.)
      </p>
      <p className={styles.sub}>
        AI automation strategies. Compliance deep-dives. Security breakdowns.
        Operations teardowns. How we built specific systems and what we learned.
      </p>
      <p className={styles.sub}>
        No fluff. No AI-generated &quot;content.&quot; Just the shit we know
        because we do this every day.
      </p>
    </section>
  );
}
