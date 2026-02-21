"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../admin.module.css";

export default function ContentEditor({
  contentKey,
  initialValue,
}: {
  contentKey: string;
  initialValue: unknown;
}) {
  const router = useRouter();
  const [json, setJson] = useState(JSON.stringify(initialValue, null, 2));
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setError(null);

    let parsed: unknown;
    try {
      parsed = JSON.parse(json);
    } catch {
      setError("Invalid JSON");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: contentKey, value: parsed }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Save failed");
      }

      router.push("/admin/content");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      {error && (
        <p className={styles.loginError} style={{ marginBottom: 16 }}>
          {error}
        </p>
      )}
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        rows={24}
        spellCheck={false}
        style={{
          width: "100%",
          padding: "12px",
          background: "#0a0a0a",
          border: "1px solid #333",
          borderRadius: "8px",
          color: "#fafafa",
          fontFamily: "monospace",
          fontSize: "13px",
          lineHeight: 1.5,
          resize: "vertical",
          marginBottom: "16px",
        }}
      />
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={handleSave} disabled={saving} className={styles.loginButton}>
          {saving ? "Saving..." : "Save"}
        </button>
        <button onClick={() => router.push("/admin/content")} className={styles.logoutButton}>
          Cancel
        </button>
      </div>
    </div>
  );
}
