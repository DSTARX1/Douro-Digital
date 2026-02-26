"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PIXEL_CHARS =
  "\u2588\u2593\u2592\u2591\u25aa\u25ab\u25cf\u25cb\u25c6\u25c7\u25a0\u25a1\u25b2\u25b3";
const RESOLVE_MS = 600;
const TICK_MS = 30;

interface Props {
  text: string;
  className?: string;
  as?: "span" | "p";
}

export default function TextScramble({
  text,
  className,
  as: Tag = "span",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(text);
  const triggered = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  const scramble = useCallback(() => {
    const chars = text.split("");
    const len = chars.length;
    const totalTicks = Math.ceil(RESOLVE_MS / TICK_MS);
    let tick = 0;

    const id = setInterval(() => {
      tick++;
      const progress = tick / totalTicks;
      const resolved = Math.floor(progress * len);

      setDisplay(
        chars
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < resolved) return ch;
            return PIXEL_CHARS[Math.floor(Math.random() * PIXEL_CHARS.length)];
          })
          .join(""),
      );

      if (tick >= totalTicks) {
        clearInterval(id);
        setDisplay(text);
      }
    }, TICK_MS);

    return () => clearInterval(id);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          // Start fully scrambled, then resolve
          setDisplay(
            text
              .split("")
              .map((ch) =>
                ch === " "
                  ? " "
                  : PIXEL_CHARS[Math.floor(Math.random() * PIXEL_CHARS.length)],
              )
              .join(""),
          );
          cleanupRef.current = scramble();
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      cleanupRef.current?.();
    };
  }, [text, scramble]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLSpanElement & HTMLParagraphElement>}
      className={className}
    >
      {display}
    </Tag>
  );
}
