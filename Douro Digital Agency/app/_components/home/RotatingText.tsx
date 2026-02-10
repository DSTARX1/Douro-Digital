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

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        height: "1.2em",
        verticalAlign: "bottom",
      }}
    >
      <span style={{ visibility: "hidden", whiteSpace: "nowrap" }}>
        {ctaTexts.reduce((a, b) => (a.length > b.length ? a : b))}
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
        {ctaTexts[index]}
      </span>
    </span>
  );
}
