"use client";

import MotionSection from "@/components/animations/MotionSection";
import { caseStudies } from "@/data/case-studies";
import WorkProjectCard from "./WorkProjectCard";
import styles from "./WorkBentoGrid.module.css";

const voiceNoob = caseStudies.find((c) => c.slug === "voice-noob")!;
const socialBro = caseStudies.find((c) => c.slug === "social-bro")!;
const pocketAgent = caseStudies.find((c) => c.slug === "pocket-agent")!;
const viralKid = caseStudies.find((c) => c.slug === "viral-kid")!;

export default function WorkBentoGrid() {
  return (
    <MotionSection as="div" className={styles.grid}>
      <div className={styles.row}>
        <WorkProjectCard project={voiceNoob} height={600} />
        <WorkProjectCard project={socialBro} height={600} />
      </div>
      <div className={styles.row}>
        <WorkProjectCard project={pocketAgent} height={600} />
        <WorkProjectCard project={viralKid} height={600} />
      </div>
    </MotionSection>
  );
}
