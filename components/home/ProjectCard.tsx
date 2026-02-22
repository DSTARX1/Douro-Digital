"use client";

import Link from "next/link";
import MagneticCard from "@/components/cursor/MagneticCard";
import { PixelArrowTopRight } from "@/components/icons/PixelIcons";
import type { CaseStudy } from "@/data/case-studies";
import styles from "./ProjectCard.module.css";

interface Props {
  project: CaseStudy;
  height?: number;
}

export default function ProjectCard({ project, height }: Props) {
  const autoHeight = !height;

  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className={styles.link}
      data-cursor-view
    >
      <MagneticCard maxMove={20}>
        <div
          className={styles.card}
          style={height ? { height } : undefined}
        >
          <div
            className={autoHeight ? styles.imageWrapAuto : styles.imageWrap}
            style={{ background: project.color }}
          >
            {project.image && project.objectFit === "contain" && (
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className={styles.blurBg}
              />
            )}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
                style={{
                  ...(autoHeight ? { height: "auto" } : {}),
                  ...(project.objectFit ? { objectFit: project.objectFit } : {}),
                  ...(project.objectPosition ? { objectPosition: project.objectPosition } : {}),
                }}
              />
            )}
          </div>
          <div className={styles.overlay} />
          <span className={styles.hoverPill}>View project</span>
          <div className={styles.info}>
            <div className={styles.textGroup}>
              <span className={styles.title}>{project.title}</span>
              <span className={styles.subtitle}>{project.subtitle}</span>
            </div>
            <span className={styles.arrow}>
              <PixelArrowTopRight size={14} color="currentColor" />
            </span>
          </div>
        </div>
      </MagneticCard>
    </Link>
  );
}
