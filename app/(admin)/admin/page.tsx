import { db } from "@/lib/db";
import { pageViews } from "@/lib/schema";
import { count, sql, desc } from "drizzle-orm";
import styles from "../admin.module.css";

export const metadata = {
  title: "Admin — Douro Digital",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [totalResult] = await db.select({ count: count() }).from(pageViews);

  const [todayResult] = await db
    .select({ count: count() })
    .from(pageViews)
    .where(sql`${pageViews.createdAt} >= CURRENT_DATE`);

  const [topPage] = await db
    .select({
      path: pageViews.path,
      views: count(),
    })
    .from(pageViews)
    .groupBy(pageViews.path)
    .orderBy(desc(count()))
    .limit(1);

  const [topReferrer] = await db
    .select({
      referrer: pageViews.referrer,
      views: count(),
    })
    .from(pageViews)
    .where(sql`${pageViews.referrer} IS NOT NULL AND ${pageViews.referrer} != ''`)
    .groupBy(pageViews.referrer)
    .orderBy(desc(count()))
    .limit(1);

  return (
    <>
      <h1>Dashboard</h1>
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Total Views</p>
          <p className={styles.cardValue}>{totalResult.count.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Today</p>
          <p className={styles.cardValue}>{todayResult.count.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Top Page</p>
          <p className={styles.cardValue}>{topPage?.path ?? "—"}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Top Referrer</p>
          <p className={styles.cardValue}>{topReferrer?.referrer ?? "—"}</p>
        </div>
      </div>
    </>
  );
}
