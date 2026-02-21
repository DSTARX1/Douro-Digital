import { db } from "@/lib/db";
import { pageViews } from "@/lib/schema";
import { count, desc, sql } from "drizzle-orm";
import styles from "../../admin.module.css";

export const metadata = {
  title: "Analytics — Douro Digital Admin",
};

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
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

  const dailyViews = await db
    .select({
      date: sql<string>`DATE(${pageViews.createdAt})`.as("date"),
      views: count(),
    })
    .from(pageViews)
    .where(sql`${pageViews.createdAt} >= CURRENT_DATE - INTERVAL '30 days'`)
    .groupBy(sql`DATE(${pageViews.createdAt})`)
    .orderBy(sql`DATE(${pageViews.createdAt})`);

  const maxDaily = Math.max(...dailyViews.map((d) => d.views), 1);

  return (
    <>
      <h1>Analytics</h1>

      {/* Daily Views — Last 30 Days */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Last 30 Days</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th style={{ width: "50%" }}></th>
            </tr>
          </thead>
          <tbody>
            {dailyViews.map((row) => (
              <tr key={row.date}>
                <td>{row.date}</td>
                <td>{row.views}</td>
                <td>
                  <span
                    className={styles.bar}
                    style={{ width: `${(row.views / maxDaily) * 100}%` }}
                  />
                </td>
              </tr>
            ))}
            {dailyViews.length === 0 && (
              <tr>
                <td colSpan={3}>No data yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Top Pages */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Top Pages</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Path</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((row) => (
              <tr key={row.path}>
                <td>{row.path}</td>
                <td>{row.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Referrers */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Referrers</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Source</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {topReferrers.map((row, i) => (
              <tr key={i}>
                <td>{row.referrer}</td>
                <td>{row.views}</td>
              </tr>
            ))}
            {topReferrers.length === 0 && (
              <tr>
                <td colSpan={2}>No referrers yet</td>
              </tr>
            )}
          </tbody>
        </table>
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

      {/* Devices + Browsers + Countries */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Devices</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((row) => (
                <tr key={row.device}>
                  <td>{row.device}</td>
                  <td>{row.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Browsers</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Browser</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              {browsers.map((row) => (
                <tr key={row.browser}>
                  <td>{row.browser}</td>
                  <td>{row.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Countries</h2>
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
    </>
  );
}
