"use client";

import { useRef, useEffect, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxMove?: number;
  showCursor?: boolean;
}

export default function MagneticCard({
  children,
  className,
  style,
  maxMove = 40,
  showCursor = false,
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const s = stateRef.current;
      s.x = lerp(s.x, s.tx, 0.1);
      s.y = lerp(s.y, s.ty, 0.1);
      inner.style.transform = `translate(${s.x}px, ${s.y}px)`;

      // Stop animating when settled close enough to target
      if (Math.abs(s.x - s.tx) > 0.1 || Math.abs(s.y - s.ty) > 0.1) {
        s.raf = requestAnimationFrame(tick);
      } else {
        s.x = s.tx;
        s.y = s.ty;
        inner.style.transform = `translate(${s.x}px, ${s.y}px)`;
        s.raf = 0;
      }
    };

    const startTicking = () => {
      if (!stateRef.current.raf) {
        stateRef.current.raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = outer.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      stateRef.current.tx = Math.max(-maxMove, Math.min(maxMove, dx * 0.35));
      stateRef.current.ty = Math.max(-maxMove, Math.min(maxMove, dy * 0.35));
      startTicking();
    };

    const onLeave = () => {
      stateRef.current.tx = 0;
      stateRef.current.ty = 0;
      startTicking();
    };

    outer.addEventListener("mousemove", onMove as EventListener);
    outer.addEventListener("mouseleave", onLeave);

    return () => {
      outer.removeEventListener("mousemove", onMove as EventListener);
      outer.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(stateRef.current.raf);
    };
  }, [maxMove]);

  return (
    <div
      ref={outerRef}
      className={className}
      style={style}
      {...(showCursor ? { "data-cursor-play": "" } : {})}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
