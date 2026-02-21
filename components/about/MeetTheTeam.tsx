import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import { teamIntro, teamMembers, teamHighlights } from "@/data/about";
import styles from "./MeetTheTeam.module.css";

// Local overrides for this section only
const sectionOverrides: Record<string, { scale?: number; objectPosition?: string; transformOrigin?: string }> = {
  "Isaac Morgado": { scale: 1.4, objectPosition: "30% 15%" },
  "Mario Funez": { scale: 1.15, objectPosition: "center 15%" },
  "Danny Isakov": { scale: 1.1, objectPosition: "center 15%" },
  "Josh Irizarry": { scale: 2.0, objectPosition: "center 10%" },
};

export default function MeetTheTeam() {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.top}>
        <p className={styles.label}>No Layers. No Bullshit.</p>
        <p className={styles.intro}>{teamIntro}</p>
      </div>

      {/* Portrait cards */}
      <div className={styles.grid}>
        {teamMembers.map((m) => {
          const overrides = sectionOverrides[m.name];
          const scale = overrides?.scale ?? m.scale;
          const objectPosition = overrides?.objectPosition ?? m.objectPosition ?? "center";
          return (
          <div key={m.name} className={styles.card}>
            <div
              className={styles.imageWrap}
              style={{
                "--img-obj-pos": objectPosition,
                "--img-scale": scale ? `scale(${scale})` : "none",
                ...(overrides?.transformOrigin && { "--img-origin": overrides.transformOrigin }),
              } as React.CSSProperties}
            >
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(max-width: 759px) 100vw, 33vw"
                suppressHydrationWarning
              />
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{m.name}</p>
              <p className={styles.role}>{m.role}</p>
            </div>
          </div>
          );
        })}
      </div>

      {/* Highlights grid */}
      <div className={styles.highlights}>
        {teamHighlights.map((h) => (
          <div key={h.title}>
            <h4 className={styles.highlightTitle}>{h.title}</h4>
            <p className={styles.highlightDesc}>{h.description}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
