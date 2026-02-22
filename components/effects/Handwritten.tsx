"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Handwritten.module.css";

type ArrowDirection = "left" | "right" | "up" | "down" | false;

interface Props {
  children: React.ReactNode;
  arrow?: ArrowDirection;
  arrowColor?: string;
  className?: string;
}

// Curved arrow paths for each direction
const arrowPaths: Record<NonNullable<Exclude<ArrowDirection, false>>, { path: string; viewBox: string; width: number; height: number }> = {
  down: {
    path: "M5,2 C5,10 15,18 10,28 M10,28 L6,22 M10,28 L14,22",
    viewBox: "0 0 20 32",
    width: 20,
    height: 32,
  },
  up: {
    path: "M5,30 C5,22 15,14 10,4 M10,4 L6,10 M10,4 L14,10",
    viewBox: "0 0 20 32",
    width: 20,
    height: 32,
  },
  right: {
    path: "M2,5 C10,5 18,8 28,10 M28,10 L22,6 M28,10 L22,14",
    viewBox: "0 0 32 20",
    width: 32,
    height: 20,
  },
  left: {
    path: "M30,5 C22,5 14,8 4,10 M4,10 L10,6 M4,10 L10,14",
    viewBox: "0 0 32 20",
    width: 32,
    height: 20,
  },
};

export default function Handwritten({
  children,
  arrow = false,
  arrowColor = "var(--accent)",
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const arrowPathRef = useRef<SVGPathElement>(null);
  const [visible, setVisible] = useState(false);
  const [arrowPathLength, setArrowPathLength] = useState(0);

  useEffect(() => {
    const path = arrowPathRef.current;
    if (path) {
      setArrowPathLength(path.getTotalLength());
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
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const arrowDef = arrow ? arrowPaths[arrow] : null;

  return (
    <span
      ref={ref}
      className={`${styles.handwritten} ${className ?? ""}`}
    >
      {children}
      {arrowDef && (
        <svg
          className={`${styles.arrow} ${styles[`arrow--${arrow}`]}`}
          viewBox={arrowDef.viewBox}
          width={arrowDef.width}
          height={arrowDef.height}
          aria-hidden="true"
        >
          <path
            ref={arrowPathRef}
            d={arrowDef.path}
            fill="none"
            stroke={arrowColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={arrowPathLength || 80}
            strokeDashoffset={visible ? 0 : arrowPathLength || 80}
            className={styles.arrowPath}
          />
        </svg>
      )}
    </span>
  );
}
