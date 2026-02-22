"use client";

import MagneticCard from "@/components/cursor/MagneticCard";
import { PixelArrowTopRight } from "@/components/icons/PixelIcons";
import type { CaseStudy } from "@/data/case-studies";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

interface Props {
  project: CaseStudy;
  height?: number;
}

export default function ProjectCard({ project, height }: Props) {
  const autoHeight = !height;
  const services = project.projectDetails?.services?.slice(0, 3);

  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className={styles.link}
      data-cursor-view
    >
      <MagneticCard maxMove={20}>
        <div className={styles.card} style={height ? { height } : undefined}>
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
                  ...(project.objectFit
                    ? { objectFit: project.objectFit }
                    : {}),
                  ...(project.objectPosition
                    ? { objectPosition: project.objectPosition }
                    : {}),
                }}
              />
            )}
          </div>
          <div className={styles.overlay} />
          <span className={styles.hoverPill}>View project</span>
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>{project.title}</h3>
              <span className={styles.subtitle}>{project.subtitle}</span>
              {project.tagline && (
                <p className={styles.tagline}>{project.tagline}</p>
              )}
              {services && services.length > 0 && (
                <div className={styles.serviceTags}>
                  <div className={styles.serviceTagsInner}>
                    {services.map((service, si) => (
                      <span
                        key={service}
                        className={styles.serviceTag}
                        style={{ transitionDelay: `${0.05 + 0.1 * si}s` }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.heroStats && project.heroStats.length > 0 && (
                <div className={styles.stats}>
                  {project.heroStats.slice(0, 2).map((stat) => (
                    <div key={stat.label} className={styles.stat}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <span className={styles.arrow}>
              <PixelArrowTopRight size={16} color="currentColor" />
            </span>
          </div>
        </div>
      </MagneticCard>
    </Link>
  );
}
