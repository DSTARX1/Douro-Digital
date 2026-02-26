"use client";

import MotionSection from "@/components/animations/MotionSection";
import dynamic from "next/dynamic";

const CalInlineEmbed = dynamic(
  () => import("@/components/cal/CalInlineEmbed"),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: 700 }} />,
  },
);
import type { CaseStudy } from "@/data/case-studies";
import styles from "./CaseStudyCTA.module.css";

interface Props {
  cta: NonNullable<CaseStudy["cta"]>;
}

export default function CaseStudyCTA({ cta }: Props) {
  return (
    <MotionSection className={styles.section}>
      <h2 className={styles.heading}>{cta.heading}</h2>
      <CalInlineEmbed className={styles.calEmbed} />
    </MotionSection>
  );
}
