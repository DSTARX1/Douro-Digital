"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  as?: "section" | "div" | "footer";
  /** When true, child elements stagger in one by one (CSS-only, 0.1s increments). */
  stagger?: boolean;
}

export default function MotionSection({
  children,
  className,
  style,
  id,
  as: Tag = "section",
  stagger = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement>}
      data-animate=""
      data-stagger={stagger ? "" : undefined}
      className={className}
      style={style}
      id={id}
    >
      {children}
    </Tag>
  );
}
