"use client";

import Link from "next/link";
import MotionSection from "@/components/animations/MotionSection";
import MagneticCard from "@/components/cursor/MagneticCard";
import type { CaseStudy } from "@/data/case-studies";
import styles from "./CaseStudyMoreWork.module.css";

interface Props {
  projects: CaseStudy[];
}

export default function CaseStudyMoreWork({ projects }: Props) {
  if (projects.length === 0) return null;

  return (
    <MotionSection className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>More work.</h2>
        <p className={styles.subheading}>In case you want to see more.</p>
      </div>
      <div className={styles.carousel}>
        {projects.map((project) => (
          <MagneticCard
            key={project.slug}
            className={styles.card}
            maxMove={10}
          >
            <Link href={`/case-studies/${project.slug}`} className={styles.cardLink} data-cursor-view>
              {project.image && (
                <div className={styles.cardImage}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
                  />
                </div>
              )}
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                {project.tagline && (
                  <p className={styles.cardTagline}>{project.tagline}</p>
                )}
              </div>
            </Link>
          </MagneticCard>
        ))}
      </div>
    </MotionSection>
  );
}
