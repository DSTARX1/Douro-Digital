"use client";

import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import ParallaxContainer from "@/components/animations/ParallaxContainer";
import { clients } from "@/data/clients";
import styles from "./ClientLogos.module.css";

export default function ClientLogos() {
  return (
    <MotionSection className={styles.section}>
      <ParallaxContainer speed={0.08}>
        <h2 className={styles.heading}>Businesses that stopped paying for tools and started making money</h2>
      </ParallaxContainer>

      <div className={styles.marqueeWrapper}>
        <div className={styles.track}>
          {/* Primary set */}
          {clients.map((c) => (
            <div key={c.name} className={styles.item}>
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={48}
                className={styles.logo}
                suppressHydrationWarning
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((c) => (
            <div key={`dup-${c.name}`} className={styles.item} aria-hidden="true">
              <Image
                src={c.logo}
                alt=""
                width={120}
                height={48}
                className={styles.logo}
                suppressHydrationWarning
              />
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
