"use client";

import MagneticCard from "@/components/cursor/MagneticCard";
import ScrollPrompt from "@/components/effects/ScrollPrompt";
import { PixelArrowTopRight } from "@/components/icons/PixelIcons";
import { caseStudies } from "@/data/case-studies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import styles from "./WorkShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function WorkShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* ── Desktop: pinned stacking cards ─────────────────────── */
      mm.add("(min-width: 769px)", () => {
          const sections = containerRef.current?.querySelectorAll<HTMLElement>(
            `.${styles.section}`,
          );
          if (!sections?.length) return;

          sections.forEach((section, i) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
              end: i === sections.length - 1 ? "+=50%" : undefined,
            });

            const inner = section.querySelector<HTMLElement>(
              `.${styles.cardInner}`,
            );
            if (inner && i < sections.length - 1) {
              gsap.to(inner, {
                scale: 0.9,
                opacity: 0.5,
                filter: "blur(4px)",
                borderRadius: "24px",
                ease: "none",
                scrollTrigger: {
                  trigger: sections[i + 1],
                  start: "top bottom",
                  end: "top top",
                  scrub: 1,
                },
              });
            }
          });
        },
      );

      /* ── Mobile: fade-in + slide-up on scroll ────────────── */
      mm.add("(max-width: 768px)", () => {
          const sections = containerRef.current?.querySelectorAll<HTMLElement>(
            `.${styles.section}`,
          );
          if (!sections?.length) return;

          sections.forEach((section, i) => {
            gsap.fromTo(
              section,
              { opacity: 0, y: 60, scale: 0.94 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
                delay: i === 0 ? 0.1 : 0,
                scrollTrigger: {
                  trigger: section,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={styles.showcase}>
      {caseStudies.map((project, i) => {
        const services = project.projectDetails?.services?.slice(0, 3);
        return (
          <section
            key={project.slug}
            className={styles.section}
            style={{ zIndex: i + 1, backgroundColor: project.color }}
          >
            <Link
              href={`/case-studies/${project.slug}`}
              className={styles.link}
              data-cursor-view
            >
              <MagneticCard maxMove={20} className={styles.magneticWrap}>
                <div className={styles.cardInner}>
                  <div
                    className={styles.imageWrap}
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
                      <h2 className={styles.title}>{project.title}</h2>
                      <span className={styles.subtitle}>
                        {project.subtitle}
                      </span>
                      {project.tagline && (
                        <p className={styles.tagline}>{project.tagline}</p>
                      )}
                      {services && services.length > 0 && (
                        <div className={styles.serviceTags}>
                          {services.map((service, si) => (
                            <span
                              // biome-ignore lint/suspicious/noArrayIndexKey: services slice has no stable id
                              key={si}
                              className={styles.serviceTag}
                              style={{ transitionDelay: `${0.05 + 0.1 * si}s` }}
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                      {project.heroStats && project.heroStats.length > 0 && (
                        <div className={styles.stats}>
                          {project.heroStats.map((stat) => (
                            <div key={stat.label} className={styles.stat}>
                              <span className={styles.statValue}>
                                {stat.value}
                              </span>
                              <span className={styles.statLabel}>
                                {stat.label}
                              </span>
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
            {i === 0 && <ScrollPrompt className={styles.scrollPrompt} />}
          </section>
        );
      })}
    </div>
  );
}
