"use client";

import Image from "next/image";
import MotionSection from "@/app/_components/animations/MotionSection";
import CalInlineEmbed from "@/app/_components/cal/CalInlineEmbed";
import { teamMembers } from "@/app/_data/about";
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
            />
          </div>
        ))}
      </div>
      <h2 className={styles.heading}>
        Let&apos;s work on <RotatingText />
      </h2>
      <CalInlineEmbed className={styles.calEmbed} />
    </MotionSection>
  );
}
