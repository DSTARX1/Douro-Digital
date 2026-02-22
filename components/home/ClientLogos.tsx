"use client";

import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import MagneticCard from "@/components/cursor/MagneticCard";
import ParallaxContainer from "@/components/animations/ParallaxContainer";
import { clients } from "@/data/clients";
import styles from "./ClientLogos.module.css";

export default function ClientLogos() {
  return (
    <MotionSection className={styles.section}>
      <ParallaxContainer speed={0.08}>
        <h2 className={styles.heading}>Businesses that stopped paying for tools and started making money</h2>
      </ParallaxContainer>
      <div className={styles.grid}>
        {clients.map((c) => (
          <div key={c.name} className={styles.cell}>
            <MagneticCard maxMove={8}>
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={48}
                className={styles.logo}
                suppressHydrationWarning
              />
            </MagneticCard>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
