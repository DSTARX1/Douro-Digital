"use client";

import Link from "next/link";
import MagneticCard from "@/components/cursor/MagneticCard";
import { PixelArrowTopRight } from "@/components/icons/PixelIcons";
import type { CaseStudy } from "@/data/case-studies";
import styles from "./WorkProjectCard.module.css";

interface Props {
  project: CaseStudy;
  height: number;
}

export default function WorkProjectCard({ project, height }: Props) {
  const services = project.projectDetails?.services;

  return (
    <Link
      href={`/case-studies/${project.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <MagneticCard maxMove={20}>
        <div className={styles.card} style={{ height }}>
          <div className={styles.imageWrap} style={{ background: project.color }}>
            {project.image && project.objectFit === "contain" && (
              <img
                src={project.image}
                alt=""
                aria-hidden
                className={`${styles.image} ${styles.blurBg}`}
              />
            )}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
                style={{
                  ...(project.objectFit ? { objectFit: project.objectFit, position: "relative" as const } : {}),
                  ...(project.objectPosition ? { objectPosition: project.objectPosition } : {}),
                }}
              />
            )}
          </div>
          <div className={styles.overlay} />
          <span className={styles.hoverPill}>View project</span>
          <div className={styles.info}>
            <div className={styles.titleRow}>
              <div className={styles.textGroup}>
                <span className={styles.title}>{project.title}</span>
                <span className={styles.subtitle}>{project.subtitle}</span>
              </div>
              <span className={styles.arrow}>
                <PixelArrowTopRight size={14} color="currentColor" />
              </span>
            </div>
            {services && services.length > 0 && (
              <span className={styles.tags}>{services.join(" · ")}</span>
            )}
          </div>
        </div>
      </MagneticCard>
    </Link>
  );
}
