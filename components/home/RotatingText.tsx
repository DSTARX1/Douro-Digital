"use client";

import { ctaTexts } from "@/data/home";
import { useEffect, useState } from "react";
import styles from "./RotatingText.module.css";

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      timeoutId = setTimeout(() => {
        setIndex((prev) => (prev + 1) % ctaTexts.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const current = ctaTexts[index];
  const text = typeof current === "string" ? current : current.text;
  const description = typeof current === "string" ? null : current.description;

  // For sizing, use the longest text and longest description
  const longestText = ctaTexts.reduce((a, b) => {
    const aText = typeof a === "string" ? a : a.text;
    const bText = typeof b === "string" ? b : b.text;
    return aText.length > bText.length ? a : b;
  });
  const longestStr =
    typeof longestText === "string" ? longestText : longestText.text;

  const longestDesc = ctaTexts.reduce((longest, item) => {
    const desc = typeof item === "string" ? "" : item.description || "";
    return desc.length > longest.length ? desc : longest;
  }, "");

  return (
    <span className={styles.wrapper}>
      {/* Ghost layer — invisible, determines box size */}
      <span aria-hidden="true" style={{ visibility: "hidden" }}>
        <span className={styles.textLine}>{longestStr}</span>
        {longestDesc && (
          <span
            style={{
              display: "block",
              fontSize: "0.4em",
              lineHeight: 1.4,
              marginTop: "0.3em",
              whiteSpace: "normal",
            }}
          >
            {longestDesc}
          </span>
        )}
      </span>

      {/* Visible overlay — absolute, mirrors ghost structure */}
      <span style={{ position: "absolute", inset: 0 }}>
        <span
          className={styles.textLine}
          style={{
            color: "var(--accent)",
            opacity: visible ? 1 : 0,
            transform: `translateY(${visible ? 0 : -20}px)`,
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {text}
        </span>
        {description && (
          <span
            style={{
              display: "block",
              fontSize: "0.4em",
              lineHeight: 1.4,
              color: "var(--muted)",
              fontWeight: 400,
              fontStyle: "normal",
              marginTop: "0.3em",
              opacity: visible ? 1 : 0,
              transform: `translateY(${visible ? 0 : 10}px)`,
              transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
              whiteSpace: "normal",
            }}
          >
            {description}
          </span>
        )}
      </span>
    </span>
  );
}
