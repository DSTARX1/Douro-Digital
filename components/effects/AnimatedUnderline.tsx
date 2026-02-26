"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedUnderline.module.css";

interface Props {
  children: React.ReactNode;
  color?: string;
  width?: number;
}

export default function AnimatedUnderline({
  children,
  color = "var(--accent)",
  width = 2,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [visible, setVisible] = useState(false);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      setPathLength(path.getTotalLength());
    }
  }, []);

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
    <span ref={ref} className={styles.wrapper}>
      {children}
      <svg
        className={styles.svg}
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d="M0,5 Q12.5,1 25,5 Q37.5,9 50,5 Q62.5,1 75,5 Q87.5,9 100,5"
          fill="none"
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
          strokeDasharray={pathLength || 120}
          strokeDashoffset={visible ? 0 : pathLength || 120}
          className={styles.path}
        />
      </svg>
    </span>
  );
}
