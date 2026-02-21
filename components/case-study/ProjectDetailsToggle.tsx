"use client";

import { useState } from "react";
import type { CaseStudy, CaseStudyStat } from "@/data/case-studies";
import styles from "./CaseStudyDescription.module.css";

interface Props {
  projectDetails: NonNullable<CaseStudy["projectDetails"]>;
  stats?: CaseStudyStat[];
}

export default function ProjectDetailsToggle({ projectDetails, stats }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.toggle}>
      <button
        className={styles.toggleButton}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={styles.toggleIcon} data-open={open}>
          &#9654;
        </span>
        Show project details
      </button>
      <div
        className={styles.toggleContent}
        style={{
          maxHeight: open ? "600px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <div className={styles.detailsGrid}>
          {projectDetails.client && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Client</span>
              <span className={styles.detailValue}>{projectDetails.client}</span>
            </div>
          )}
          {projectDetails.year && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Year</span>
              <span className={styles.detailValue}>{projectDetails.year}</span>
            </div>
          )}
          {projectDetails.platform && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Platform</span>
              <span className={styles.detailValue}>{projectDetails.platform}</span>
            </div>
          )}
          {projectDetails.duration && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Duration</span>
              <span className={styles.detailValue}>{projectDetails.duration}</span>
            </div>
          )}
          {projectDetails.services && projectDetails.services.length > 0 && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Services</span>
              <span className={styles.detailValue}>
                {projectDetails.services.join(", ")}
              </span>
            </div>
          )}
        </div>
        {stats && stats.length > 0 && (
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
