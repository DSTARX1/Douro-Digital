"use client";

import { useEffect, useRef } from "react";
import { PixelPlay } from "@/app/_components/icons/PixelIcons";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onEnter = () => cursor.classList.add(styles.visible);
    const onLeave = () => cursor.classList.remove(styles.visible);

    window.addEventListener("mousemove", move);

    const attachToCards = () => {
      const cards = document.querySelectorAll("[data-cursor-play]");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
      });
    };

    attachToCards();

    const observer = new MutationObserver(attachToCards);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor}>
      <PixelPlay size={24} color="white" className={styles.icon} />
    </div>
  );
}
