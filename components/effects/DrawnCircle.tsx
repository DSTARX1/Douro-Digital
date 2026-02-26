"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./DrawnCircle.module.css";

interface Props {
  children: React.ReactNode;
  color?: string;
  strokeWidth?: number;
}

export default function DrawnCircle({
  children,
  color = "var(--accent)",
  strokeWidth = 2.5,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [visible, setVisible] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const filterId = useId();

  // Measure wrapped text
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setDims({ w: el.offsetWidth, h: el.offsetHeight });
  }, []);

  // Get path length after dims are set
  useEffect(() => {
    const path = pathRef.current;
    if (path && dims.w > 0) {
      setPathLength(path.getTotalLength());
    }
  }, [dims]);

  // IntersectionObserver trigger
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

  const pad = 14;
  const cx = dims.w / 2;
  const cy = dims.h / 2;
  const rx = dims.w / 2 + pad;
  const ry = dims.h / 2 + pad;

  // Hand-drawn ellipse with ~30% overshoot past start (like a real pen circle)
  const d =
    dims.w > 0
      ? [
          // Start left-center
          `M ${cx - rx},${cy}`,
          // Top-left quarter
          `C ${cx - rx},${cy - ry * 0.55} ${cx - rx * 0.55},${cy - ry - 2} ${cx},${cy - ry}`,
          // Top-right quarter
          `C ${cx + rx * 0.55},${cy - ry + 2} ${cx + rx + 1},${cy - ry * 0.55} ${cx + rx},${cy + 2}`,
          // Bottom-right quarter
          `C ${cx + rx - 1},${cy + ry * 0.55} ${cx + rx * 0.55},${cy + ry + 1} ${cx - 2},${cy + ry}`,
          // Bottom-left quarter (back to start)
          `C ${cx - rx * 0.55},${cy + ry - 1} ${cx - rx + 2},${cy + ry * 0.55} ${cx - rx},${cy}`,
          // Overshoot: continue ~30% past start with slightly different wobble
          `C ${cx - rx + 1},${cy - ry * 0.5} ${cx - rx * 0.45},${cy - ry + 1} ${cx + 3},${cy - ry - 1}`,
        ].join(" ")
      : "";

  const svgW = dims.w + pad * 2;
  const svgH = dims.h + pad * 2;
  const dl = pathLength || 300;

  return (
    <span ref={ref} className={styles.wrapper}>
      {children}
      {dims.w > 0 && (
        <svg
          className={styles.svg}
          viewBox={`${-pad} ${-pad} ${svgW} ${svgH}`}
          style={{
            left: -pad,
            top: -pad,
            width: svgW,
            height: svgH,
          }}
          aria-hidden="true"
        >
          <defs>
            {/* Ink-bleed filter: turbulence displacement for rough pen edges */}
            <filter id={filterId} x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.04"
                numOctaves="4"
                result="noise"
                seed={3}
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={3}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <path
            ref={pathRef}
            d={d}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={dl}
            strokeDashoffset={dl}
            filter={`url(#${filterId})`}
            className={`${styles.path} ${visible ? styles.drawing : ""}`}
            style={{ "--path-length": dl } as React.CSSProperties}
          />
        </svg>
      )}
    </span>
  );
}
