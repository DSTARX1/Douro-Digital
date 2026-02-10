"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticCard from "@/app/_components/cursor/MagneticCard";
import { PixelPlay } from "@/app/_components/icons/PixelIcons";
import { heroHeadline } from "@/app/_data/home";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const media = mediaRef.current;
    if (!section || !heading || !media) return;

    gsap.set(heading, { opacity: 1, y: 0 });
    gsap.from(media, { opacity: 0, duration: 1.2, delay: 0.3 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=800",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(heading, { y: -200, opacity: 0, ease: "none" }, 0);
    tl.to(media, { scale: 2.3, ease: "none" }, 0);
  }, { scope: sectionRef });

  // GSAP quickTo cursor follower
  useEffect(() => {
    const media = mediaRef.current;
    const cursor = cursorRef.current;
    if (!media || !cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX - 32);
      yTo(e.clientY - 32);
    };

    const onEnter = () => cursor.classList.add(styles.cursorVisible);
    const onLeave = () => cursor.classList.remove(styles.cursorVisible);

    const container = media.closest(`.${styles.mediaContainer}`) || media;
    container.addEventListener("mousemove", onMove as EventListener);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mousemove", onMove as EventListener);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.hero} suppressHydrationWarning>
      <div className={styles.heroInner}>
        <div ref={headingRef} className={styles.headingWrap}>
          <h1 className={styles.heading}>
            {heroHeadline.prefix}{" "}
            <em className={styles.italic}>{heroHeadline.italic}</em>{" "}
            {heroHeadline.suffix}
          </h1>
        </div>

        <MagneticCard className={styles.mediaContainer} maxMove={70}>
          <div ref={mediaRef} className={styles.media}>
            <div className={styles.mediaPlaceholder} />
          </div>
        </MagneticCard>
      </div>

      <div ref={cursorRef} className={styles.playCursor}>
        <PixelPlay size={24} color="white" className={styles.playCursorIcon} animate />
      </div>
    </div>
  );
}
