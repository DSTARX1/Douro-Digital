"use client";

import { useState, useEffect } from "react";
import { ctaTexts } from "@/app/_data/home";

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ctaTexts.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const current = ctaTexts[index];
  const text = typeof current === "string" ? current : current.text;
  const description = typeof current === "string" ? null : current.description;

  // For sizing, use the longest text
  const longestText = ctaTexts.reduce((a, b) => {
    const aText = typeof a === "string" ? a : a.text;
    const bText = typeof b === "string" ? b : b.text;
    return aText.length > bText.length ? a : b;
  });
  const longestStr = typeof longestText === "string" ? longestText : longestText.text;

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
      }}
    >
      <span style={{ visibility: "hidden", whiteSpace: "nowrap" }}>
        {longestStr}
      </span>
      <span
        style={{
          color: "var(--accent)",
          position: "absolute",
          left: 0,
          top: 0,
          whiteSpace: "nowrap",
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
  );
}
