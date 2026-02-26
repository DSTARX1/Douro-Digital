"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Highlight.module.css";

interface Props {
  children: React.ReactNode;
  color?: string;
}

export default function Highlight({
  children,
  color = "rgba(212, 41, 24, 0.25)",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <mark
      ref={ref}
      className={`${styles.highlight} ${visible ? styles.visible : ""}`}
      style={
        {
          "--highlight-color": color,
        } as React.CSSProperties
      }
    >
      {children}
    </mark>
  );
}
