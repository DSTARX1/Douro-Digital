"use client";

import { PixelStar } from "@/components/icons/PixelIcons";
import { aboutHero } from "@/data/about";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "./AboutHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      if (!section || !heading) return;

      const intro = document.querySelector<HTMLElement>("[data-about-intro]");
      if (!intro) return;

      gsap.set(heading, { opacity: 1, y: 0 });
      gsap.set(intro, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400",
          scrub: 0.3,
          pin: true,
          snap: {
            snapTo: 1,
            duration: { min: 0.3, max: 0.5 },
            ease: "power2.inOut",
          },
        },
      });

      tl.to(heading, { opacity: 0, y: -60, ease: "none" }, 0);
      tl.to(intro, { opacity: 1, y: 0, ease: "none" }, 0.2);
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className={styles.hero} suppressHydrationWarning>
      <div className={styles.heroInner}>
        <div ref={headingRef} className={styles.headingWrap}>
          {[
            "sparkleDot1",
            "sparkleDot2",
            "sparkleDot3",
            "sparkleDot4",
            "sparkleDot5",
            "sparkleDot6",
          ].map((cls) => (
            <span
              key={cls}
              className={`${styles.sparkleDot} ${styles[cls]}`}
              aria-hidden="true"
            >
              <PixelStar size={20} color="var(--accent)" />
            </span>
          ))}
          <h1 className={styles.heading}>
            {aboutHero.prefix}
            {aboutHero.italic && (
              <>
                {" "}
                <em className={styles.italic}>{aboutHero.italic}</em>
              </>
            )}
            {aboutHero.suffix && <> {aboutHero.suffix}</>}
          </h1>
          <p className={styles.subtitle}>{aboutHero.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
