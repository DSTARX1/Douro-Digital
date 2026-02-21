"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import styles from "./ContactPanel.module.css";

interface ContactPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactPanel({ open, onClose }: ContactPanelProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Initialize Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "contact" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.panel} ${open ? styles.open : ""}`}>
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.heading}>Let&rsquo;s talk (no pressure, we promise)</h2>
        <p className={styles.subtitle}>This call covers:</p>
        <ul className={styles.bullets}>
          <li>Where you&rsquo;re losing revenue (missed leads, slow follow-up, broken systems)</li>
          <li>What AI or custom software could fix (realistically, not in a perfect world)</li>
          <li>Whether we&rsquo;re a good fit (if we&rsquo;re not, we&rsquo;ll tell you)</li>
        </ul>
        <p className={styles.antiPressure}>
          No pitch deck. No &ldquo;sign today&rdquo; pressure. Just a conversation. If it makes sense,
          we&rsquo;ll send a proposal. If it doesn&rsquo;t, we&rsquo;ll shake hands (virtually) and
          you&rsquo;ll have learned something useful.
        </p>

        <div className={styles.calEmbed}>
          {open && (
            <Cal
              namespace="contact"
              calLink="josh-irizarry-axan3n/30min"
              config={{ layout: "month_view", theme: "dark" }}
              style={{ width: "100%", height: "100%", overflow: "auto" }}
            />
          )}
        </div>

        <p className={styles.phone}>
          Not a phone person? Email us:{" "}
          <a href="mailto:hello@dourodigital.com" className={styles.phoneLink}>
            hello@dourodigital.com
          </a>{" "}
          (we get it, some people prefer typing)
        </p>
      </aside>
    </>
  );
}
