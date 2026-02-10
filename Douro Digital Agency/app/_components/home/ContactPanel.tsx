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
      const cal = await getCalApi();
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

        <h2 className={styles.heading}>Book a free call</h2>
        <p className={styles.subtitle}>
          Pick a time that works for you and we&rsquo;ll chat about growing your
          practice.
        </p>

        <div className={styles.calEmbed}>
          <Cal
            calLink="dourodigital/discovery-call"
            config={{ layout: "month_view", theme: "dark" }}
            style={{ width: "100%", height: "100%", overflow: "auto" }}
          />
        </div>

        <p className={styles.phone}>
          Or email us at{" "}
          <a href="mailto:hello@dourodigital.com" className={styles.phoneLink}>
            hello@dourodigital.com
          </a>
        </p>
      </aside>
    </>
  );
}
