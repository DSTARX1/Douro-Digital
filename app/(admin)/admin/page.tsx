import { db } from "@/lib/db";
import { pageViews } from "@/lib/schema";
import { count, sql, desc } from "drizzle-orm";
import styles from "../admin.module.css";
import ViewsLineChart from "@/components/admin/charts/ViewsLineChart";
import TopPagesBarChart from "@/components/admin/charts/TopPagesBarChart";
import DeviceDonutChart from "@/components/admin/charts/DeviceDonutChart";

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

  const [uniquePagesResult] = await db
    .select({ count: sql<number>`COUNT(DISTINCT ${pageViews.path})` })
    .from(pageViews);

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

  // 7-day trend: this week vs last week
  const [thisWeek] = await db
    .select({ count: count() })
    .from(pageViews)
    .where(sql`${pageViews.createdAt} >= CURRENT_DATE - INTERVAL '7 days'`);

  const [lastWeek] = await db
    .select({ count: count() })
    .from(pageViews)
    .where(
      sql`${pageViews.createdAt} >= CURRENT_DATE - INTERVAL '14 days' AND ${pageViews.createdAt} < CURRENT_DATE - INTERVAL '7 days'`
    );

  const trendPct =
    lastWeek.count > 0
      ? Math.round(((thisWeek.count - lastWeek.count) / lastWeek.count) * 100)
      : null;

  // Daily views (last 30 days) for line chart
  const dailyViews = await db
    .select({
      date: sql<string>`DATE(${pageViews.createdAt})`.as("date"),
      views: count(),
    })
    .from(pageViews)
    .where(sql`${pageViews.createdAt} >= CURRENT_DATE - INTERVAL '30 days'`)
    .groupBy(sql`DATE(${pageViews.createdAt})`)
    .orderBy(sql`DATE(${pageViews.createdAt})`);

  // Top pages for bar chart
  const topPages = await db
    .select({ path: pageViews.path, views: count() })
    .from(pageViews)
    .groupBy(pageViews.path)
    .orderBy(desc(count()))
    .limit(10);

  // Devices for donut chart
  const devices = await db
    .select({ device: pageViews.device, views: count() })
    .from(pageViews)
    .groupBy(pageViews.device)
    .orderBy(desc(count()));

  return (
    <>
      <h1>Dashboard</h1>
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Total Views</p>
          <p className={styles.cardValue}>
            {totalResult.count.toLocaleString()}
            {trendPct !== null && (
              <span
                className={`${styles.cardTrend} ${trendPct >= 0 ? styles.cardTrendUp : styles.cardTrendDown}`}
              >
                {trendPct >= 0 ? "+" : ""}
                {trendPct}%
              </span>
            )}
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Today</p>
          <p className={styles.cardValue}>{todayResult.count.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Unique Pages</p>
          <p className={styles.cardValue}>{uniquePagesResult.count.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Top Referrer</p>
          <p className={styles.cardValue}>{topReferrer?.referrer ?? "—"}</p>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <ViewsLineChart data={dailyViews} />
      </div>

      <div className={styles.chartRow2}>
        <TopPagesBarChart
          data={topPages.map((r) => ({ page: r.path, views: r.views }))}
        />
        <DeviceDonutChart
          data={devices.map((r) => ({
            name: r.device ?? "Unknown",
            value: r.views,
          }))}
        />
      </div>
    </>
  );
}
