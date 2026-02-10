"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutHero } from "@/app/_data/about";
import styles from "./AboutHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    gsap.set(heading, { opacity: 1, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=600",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(heading, { y: -200, opacity: 0, ease: "none" }, 0);
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={styles.hero} suppressHydrationWarning>
      <div className={styles.heroInner}>
        <div ref={headingRef} className={styles.headingWrap}>
          <h1 className={styles.heading}>
            {aboutHero.prefix}{" "}
            <em className={styles.italic}>{aboutHero.italic}</em>{" "}
            {aboutHero.suffix}
          </h1>
          <p className={styles.subtitle}>{aboutHero.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
