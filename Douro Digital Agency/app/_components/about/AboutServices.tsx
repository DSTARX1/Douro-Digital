"use client";

import { useState } from "react";
import MotionSection from "@/app/_components/animations/MotionSection";
import { PixelChevronDown } from "@/app/_components/icons/PixelIcons";
import { aboutServices } from "@/app/_data/about";
import styles from "./AboutServices.module.css";

export default function AboutServices() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <MotionSection className={styles.section}>
      <p className={styles.label}>Our services</p>
      {aboutServices.map((svc, i) => (
        <div key={svc.title} className={styles.serviceRow}>
          <h3 className={styles.serviceTitle}>{svc.title}</h3>
          <div
            className={styles.placeholder}
            style={{ backgroundColor: svc.placeholderColor }}
          />
          <div className={styles.serviceBody}>
            <p className={styles.serviceDesc}>{svc.description}</p>
            <button
              className={styles.toggleBtn}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              {openIndex === i ? "Less" : "More"}
              <span
                className={styles.toggleArrow}
                style={{
                  transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                <PixelChevronDown size={16} />
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                maxHeight: openIndex === i ? "300px" : "0",
                opacity: openIndex === i ? 1 : 0,
                transition: "max-height 0.3s ease, opacity 0.3s ease",
              }}
            >
              <ul className={styles.bulletList}>
                {svc.bullets.map((b) => (
                  <li key={b} className={styles.bulletItem}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </MotionSection>
  );
}
