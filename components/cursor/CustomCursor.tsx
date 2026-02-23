"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PixelPlay, PixelPause } from "@/components/icons/PixelIcons";
import styles from "./CustomCursor.module.css";

type CursorMode = "default" | "link" | "video" | "card" | "text";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGLineElement>(null);
  const activeElRef = useRef<Element | null>(null);
  const revealedRef = useRef(false);
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(0);
  const [mode, setMode] = useState<CursorMode>("default");
  const [revealed, setRevealed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasHover, setHasHover] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Detect hover capability once on mount
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) {
      setHasHover(true);
    }
  }, []);

  // Attach cursor tracking after DOM is rendered (hasHover triggers re-render with DOM)
  useEffect(() => {
    if (!hasHover) return;

    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!dot) return;

    // Dot follows mouse with snappy easing
    const xTo = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power2.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      xTo(e.clientX);
      yTo(e.clientY);
      if (!revealedRef.current) {
        revealedRef.current = true;
        // Snap trail to initial position (no line from -100,-100)
        trailPosRef.current.x = e.clientX;
        trailPosRef.current.y = e.clientY;
        setRevealed(true);
      }
    };

    // Trail line animation loop — lerp toward mouse position
    const tick = () => {
      const m = mouseRef.current;
      const t = trailPosRef.current;
      t.x += (m.x - t.x) * 0.12;
      t.y += (m.y - t.y) * 0.12;

      if (trail) {
        trail.setAttribute("x1", String(t.x));
        trail.setAttribute("y1", String(t.y));
        trail.setAttribute("x2", String(m.x));
        trail.setAttribute("y2", String(m.y));
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // ── Event delegation on body ─────────────────────────────────
    const resolveMode = (el: Element | null): { mode: CursorMode; target: Element | null } => {
      if (!el) return { mode: "default", target: null };

      const videoEl = el.closest("[data-cursor-play]");
      const cardEl = el.closest("[data-cursor-view]");
      const linkEl = el.closest("a, button, [role='button']");
      const textEl = el.closest("p, span, li");

      if (videoEl) return { mode: "video", target: videoEl };
      if (cardEl) return { mode: "card", target: cardEl };
      if (linkEl) return { mode: "link", target: linkEl };
      if (textEl) return { mode: "text", target: textEl };
      return { mode: "default", target: null };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;

      // Hide cursor over iframes and [data-cursor-hide] zones
      if (target.closest("[data-cursor-hide]") || target.tagName === "IFRAME") {
        setHidden(true);
        return;
      }
      setHidden(false);

      const resolved = resolveMode(target);
      activeElRef.current = resolved.target;
      if (resolved.mode === "video" && resolved.target) {
        setPlaying(resolved.target.hasAttribute("data-cursor-playing"));
      }
      setMode(resolved.mode);
    };

    const onMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as Element | null;

      // Leaving a hide-zone or iframe — restore cursor
      const leftHideZone = (e.target as Element).closest?.("[data-cursor-hide]") || (e.target as Element).tagName === "IFRAME";
      if (leftHideZone && (!relatedTarget || !relatedTarget.closest?.("[data-cursor-hide]"))) {
        setHidden(false);
      }

      if (!relatedTarget || !activeElRef.current?.contains(relatedTarget)) {
        const resolved = resolveMode(relatedTarget);
        activeElRef.current = resolved.target;
        setMode(resolved.mode);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseover", onMouseOver);
    document.body.addEventListener("mouseout", onMouseOut);

    // ── MutationObserver: attribute changes on [data-cursor-play] ──
    const attrObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (
          m.type === "attributes" &&
          m.attributeName === "data-cursor-playing" &&
          m.target === activeElRef.current
        ) {
          setPlaying((m.target as Element).hasAttribute("data-cursor-playing"));
        }
      }
    });
    attrObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-cursor-playing"],
      subtree: true,
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseover", onMouseOver);
      document.body.removeEventListener("mouseout", onMouseOut);
      attrObserver.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [hasHover]);

  if (!hasHover) return null;

  const modeClass = {
    default: styles.modeDefault,
    link: styles.modeLink,
    video: styles.modeVideo,
    card: styles.modeCard,
    text: styles.modeText,
  }[mode];

  return (
    <>
      <svg
        className={`${styles.trailSvg} ${revealed && !hidden ? styles.trailRevealed : ""}`}
      >
        <line ref={trailRef} className={styles.trailLine} />
      </svg>
      <div
        ref={dotRef}
        className={`${styles.cursor} ${modeClass} ${revealed && !hidden ? styles.revealed : ""}`}
        data-cursor-debug="true"
      >
        {mode === "video" && (
          playing ? (
            <PixelPause size={24} color="white" className={styles.pauseIcon} />
          ) : (
            <PixelPlay size={24} color="white" className={styles.icon} />
          )
        )}
        {mode === "card" && (
          <span className={styles.viewLabel}>View</span>
        )}
      </div>
    </>
  );
}
