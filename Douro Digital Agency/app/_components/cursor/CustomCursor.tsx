"use client";

import { useEffect, useRef, useState } from "react";
import { PixelPlay, PixelPause } from "@/app/_components/icons/PixelIcons";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const activeElRef = useRef<Element | null>(null);
  const [playing, setPlaying] = useState(false);


  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;


    const move = (e: MouseEvent) => {
      // Check if we're in fullscreen mode - if so, always show cursor
      const isInFullscreen = cursor.parentElement?.tagName === "VIDEO";
      const fsElement = document.fullscreenElement ?? (document as any).webkitFullscreenElement;


      if (isInFullscreen && fsElement) {
        // In fullscreen: use top/left instead of transform (video blocks transform in fullscreen)
        cursor.style.position = 'absolute';
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.transform = 'translate(-50%, -50%)';
        cursor.style.setProperty('left', `${e.clientX}px`, 'important');
        cursor.style.setProperty('top', `${e.clientY}px`, 'important');
        if (!cursor.classList.contains(styles.visible)) {
          cursor.classList.add(styles.visible);
        }
        return;
      }

      // Normal mode: use original logic
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onEnter = (e: Event) => {
      const el = e.currentTarget as Element;
      activeElRef.current = el;
      setPlaying(el.hasAttribute("data-cursor-playing"));
      cursor.classList.add(styles.visible);
    };

    const onLeave = () => {
      // Don't hide cursor if we're in fullscreen
      const isInFullscreen = cursor.parentElement?.tagName === "VIDEO";
      const fsElement = document.fullscreenElement ?? (document as any).webkitFullscreenElement;

      if (isInFullscreen && fsElement) {
        return;
      }

      activeElRef.current = null;
      cursor.classList.remove(styles.visible);
      setPlaying(false);
    };

    window.addEventListener("mousemove", move);

    const attachToCards = () => {
      const cards = document.querySelectorAll("[data-cursor-play]");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
      });
    };

    attachToCards();

    // Observe DOM for new [data-cursor-play] elements
    const childObserver = new MutationObserver(attachToCards);
    childObserver.observe(document.body, { childList: true, subtree: true });

    // Observe attribute changes on [data-cursor-play] elements so
    // the icon switches in real-time when data-cursor-playing is toggled
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
      window.removeEventListener("mousemove", move);
      childObserver.disconnect();
      attrObserver.disconnect();
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} data-cursor-debug="true">
      {playing ? (
        <PixelPause size={24} color="white" className={styles.pauseIcon} />
      ) : (
        <PixelPlay size={24} color="white" className={styles.icon} />
      )}
    </div>
  );
}
