"use client";

import MotionSection from "@/components/animations/MotionSection";
import dynamic from "next/dynamic";
import Image from "next/image";

const CalInlineEmbed = dynamic(
  () => import("@/components/cal/CalInlineEmbed"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: 700 }} />,
  },
);
import ParallaxContainer from "@/components/animations/ParallaxContainer";
import MagneticButton from "@/components/ui/MagneticButton";
import { teamMembers } from "@/data/about";
import styles from "./HomeCTA.module.css";
import RotatingText from "./RotatingText";

export default function HomeCTA() {
  return (
    <MotionSection className={styles.section} id="contact">
      <ParallaxContainer speed={0.06} innerClassName={styles.parallaxInner}>
        <div className={styles.pfpRow}>
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className={styles.pfp}
              style={
                {
                  backgroundColor: m.color,
                  "--img-pos": m.objectPosition || "center",
                  "--img-scale": m.scale ? `scale(${m.scale})` : "none",
                } as React.CSSProperties
              }
            >
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="128px"
                quality={90}
                suppressHydrationWarning
              />
            </div>
          ))}
        </div>
        <h2 className={styles.heading}>
          Let&apos;s work on <RotatingText />
        </h2>
        <MagneticButton className={styles.ctaWrap} strength={0.3}>
          <a href="mailto:support@wearedouro.com" className={styles.cta}>
            Or just say hello
          </a>
        </MagneticButton>
      </ParallaxContainer>
      <CalInlineEmbed className={styles.calEmbed} />
    </MotionSection>
  );
}
