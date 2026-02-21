import Link from "next/link";
import { listContent } from "@/lib/content";
import styles from "../../admin.module.css";

export const metadata = { title: "Content — Douro Digital Admin" };
export const dynamic = "force-dynamic";

function describeValue(value: unknown): string {
  if (Array.isArray(value)) return `array [${value.length}]`;
  if (typeof value === "object" && value !== null) return `object {${Object.keys(value).length}}`;
  if (typeof value === "string") return `string (${value.length} chars)`;
  return typeof value;
}

export default async function ContentPage() {
  const blocks = await listContent();

  const groups: Record<string, typeof blocks> = {};
  for (const block of blocks) {
    const section = block.key.split(".")[0];
    if (!groups[section]) groups[section] = [];
    groups[section].push(block);
  }

  return (
    <>
      <h1>Content</h1>
      {blocks.length === 0 ? (
        <p style={{ color: "#888" }}>
          No content blocks yet. Run <code>npx tsx scripts/seed-content.ts</code> to populate.
        </p>
      ) : (
        Object.entries(groups).map(([section, items]) => (
          <div key={section} className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ textTransform: "capitalize" }}>
              {section}
            </h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Type</th>
                  <th>Updated</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((block) => (
                  <tr key={block.key}>
                    <td>{block.key}</td>
                    <td style={{ color: "#888" }}>{describeValue(block.value)}</td>
                    <td style={{ color: "#888" }}>
                      {block.updatedAt
                        ? new Date(block.updatedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </td>
                    <td>
                      <Link
                        href={`/admin/content/${encodeURIComponent(block.key)}`}
                        style={{ color: "#3b82f6" }}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </>
  );
}
