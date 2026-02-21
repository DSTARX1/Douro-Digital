"use client";

import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import CalInlineEmbed from "@/components/cal/CalInlineEmbed";
import { teamMembers } from "@/data/about";
import MagneticButton from "@/components/ui/MagneticButton";
import RotatingText from "./RotatingText";
import styles from "./HomeCTA.module.css";

export default function HomeCTA() {
  return (
    <MotionSection className={styles.section} id="contact">
      <div className={styles.pfpRow}>
        {teamMembers.map((m) => (
          <div
            key={m.name}
            className={styles.pfp}
            style={{
              backgroundColor: m.color,
              "--img-pos": m.objectPosition || "center",
              "--img-scale": m.scale ? `scale(${m.scale})` : "none",
            } as React.CSSProperties}
          >
            <Image
              src={m.image}
              alt={m.name}
              fill
              sizes="64px"
              suppressHydrationWarning
            />
          </div>
        ))}
      </div>
      <h2 className={styles.heading}>
        Let&apos;s work on <RotatingText />
      </h2>
      <MagneticButton className={styles.ctaWrap} strength={0.3}>
        <a href="mailto:hello@dourodigital.com" className={styles.cta}>
          Or just say hello
        </a>
      </MagneticButton>
      <CalInlineEmbed className={styles.calEmbed} />
    </MotionSection>
  );
}
