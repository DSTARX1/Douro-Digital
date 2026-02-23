"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutHero } from "@/data/about";
import styles from "./AboutHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const pinSpacerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    gsap.set(heading, { opacity: 1, y: 0 });

    // Pin + scroll-fade
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=800",
        pin: true,
        pinSpacer: pinSpacerRef.current!,
        scrub: 1,
      },
    });

    tl.to(heading, { y: -200, opacity: 0, ease: "none" }, 0);
  }, { scope: sectionRef });

  return (
    <div ref={pinSpacerRef}>
      <div ref={sectionRef} className={styles.hero} suppressHydrationWarning>
        <div className={styles.heroInner}>
          <div ref={headingRef} className={styles.headingWrap}>
            <h1 className={styles.heading}>
              {aboutHero.prefix}
              {aboutHero.italic && (
                <>
                  {" "}<em className={styles.italic}>{aboutHero.italic}</em>
                </>
              )}
              {aboutHero.suffix && (
                <>
                  {" "}{aboutHero.suffix}
                </>
              )}
            </h1>
            <p className={styles.subtitle}>{aboutHero.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
