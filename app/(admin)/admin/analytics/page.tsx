import { db } from "@/lib/db";
import { pageViews } from "@/lib/schema";
import { count, desc, sql } from "drizzle-orm";
import styles from "../../admin.module.css";
import ViewsLineChart from "@/components/admin/charts/ViewsLineChart";
import TopPagesBarChart from "@/components/admin/charts/TopPagesBarChart";
import DeviceDonutChart from "@/components/admin/charts/DeviceDonutChart";
import BrowserDonutChart from "@/components/admin/charts/BrowserDonutChart";

export const metadata = {
  title: "Analytics — Douro Digital Admin",
};

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  const dailyViews = await db
    .select({
      date: sql<string>`DATE(${pageViews.createdAt})`.as("date"),
      views: count(),
    })
    .from(pageViews)
    .where(sql`${pageViews.createdAt} >= CURRENT_DATE - INTERVAL '30 days'`)
    .groupBy(sql`DATE(${pageViews.createdAt})`)
    .orderBy(sql`DATE(${pageViews.createdAt})`);

  const [todayResult] = await db
    .select({ count: count() })
    .from(pageViews)
    .where(sql`${pageViews.createdAt} >= CURRENT_DATE`);

  const total30d = dailyViews.reduce((sum, d) => sum + d.views, 0);
  const avgDaily = dailyViews.length > 0 ? Math.round(total30d / 30) : 0;
  const peakDay = dailyViews.reduce(
    (best, d) => (d.views > best.views ? d : best),
    { date: "—", views: 0 }
  );

  const topPages = await db
    .select({ path: pageViews.path, views: count() })
    .from(pageViews)
    .groupBy(pageViews.path)
    .orderBy(desc(count()))
    .limit(20);

  const topReferrers = await db
    .select({ referrer: pageViews.referrer, views: count() })
    .from(pageViews)
    .where(
      sql`${pageViews.referrer} IS NOT NULL AND ${pageViews.referrer} != ''`
    )
    .groupBy(pageViews.referrer)
    .orderBy(desc(count()))
    .limit(15);

  const devices = await db
    .select({ device: pageViews.device, views: count() })
    .from(pageViews)
    .groupBy(pageViews.device)
    .orderBy(desc(count()));

  const browsers = await db
    .select({ browser: pageViews.browser, views: count() })
    .from(pageViews)
    .groupBy(pageViews.browser)
    .orderBy(desc(count()));

  const countries = await db
    .select({ country: pageViews.country, views: count() })
    .from(pageViews)
    .where(sql`${pageViews.country} IS NOT NULL`)
    .groupBy(pageViews.country)
    .orderBy(desc(count()))
    .limit(20);

  const utmBreakdown = await db
    .select({
      source: pageViews.utmSource,
      medium: pageViews.utmMedium,
      campaign: pageViews.utmCampaign,
      views: count(),
    })
    .from(pageViews)
    .where(sql`${pageViews.utmSource} IS NOT NULL`)
    .groupBy(pageViews.utmSource, pageViews.utmMedium, pageViews.utmCampaign)
    .orderBy(desc(count()))
    .limit(15);

  return (
    <>
      <h1>Analytics</h1>

      {/* KPI Cards */}
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Total (30d)</p>
          <p className={styles.cardValue}>{total30d.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Today</p>
          <p className={styles.cardValue}>{todayResult.count.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Avg Daily</p>
          <p className={styles.cardValue}>{avgDaily.toLocaleString()}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Peak Day</p>
          <p className={styles.cardValue}>
            {peakDay.views.toLocaleString()}
            {peakDay.date !== "—" && (
              <span className={styles.cardSub}>{peakDay.date}</span>
            )}
          </p>
        </div>
      </div>

      {/* Views Line Chart — 30 Days */}
      <div style={{ marginBottom: 16 }}>
        <ViewsLineChart data={dailyViews} />
      </div>

      {/* Top Pages + Referrers */}
      <div className={styles.chartRow2}>
        <TopPagesBarChart
          data={topPages.map((r) => ({ page: r.path, views: r.views }))}
          title="Top Pages"
        />
        <TopPagesBarChart
          data={topReferrers.map((r) => ({
            page: r.referrer ?? "Direct",
            views: r.views,
          }))}
          title="Referrers"
        />
      </div>

      {/* Devices + Browsers + Countries */}
      <div className={styles.chartRow3}>
        <DeviceDonutChart
          data={devices.map((r) => ({
            name: r.device ?? "Unknown",
            value: r.views,
          }))}
        />
        <BrowserDonutChart
          data={browsers.map((r) => ({
            name: r.browser ?? "Unknown",
            value: r.views,
          }))}
        />
        <div className={styles.chartCard}>
          <h3 className={styles.chartCardTitle}>Countries</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Country</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((row) => (
                <tr key={row.country}>
                  <td>{row.country}</td>
                  <td>{row.views}</td>
                </tr>
              ))}
              {countries.length === 0 && (
                <tr>
                  <td colSpan={2}>No country data yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* UTM Campaigns */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>UTM Campaigns</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Source</th>
              <th>Medium</th>
              <th>Campaign</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {utmBreakdown.map((row, i) => (
              <tr key={i}>
                <td>{row.source}</td>
                <td>{row.medium ?? "—"}</td>
                <td>{row.campaign ?? "—"}</td>
                <td>{row.views}</td>
              </tr>
            ))}
            {utmBreakdown.length === 0 && (
              <tr>
                <td colSpan={4}>No UTM data yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
