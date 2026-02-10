import Image from "next/image";
import MotionSection from "@/app/_components/animations/MotionSection";
import { teamIntro, teamMembers, teamHighlights } from "@/app/_data/about";
import styles from "./MeetTheTeam.module.css";

export default function MeetTheTeam() {
  return (
    <MotionSection className={styles.section}>
      {/* Top: intro + circular PFPs */}
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <p className={styles.label}>Meet the team</p>
          <p className={styles.intro}>{teamIntro}</p>
        </div>
        <div className={styles.topRight}>
          <div className={styles.pfpRow}>
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className={styles.pfp}
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="120px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Member rows */}
      {teamMembers.map((m) => (
        <div key={m.name} className={styles.memberRow}>
          <span className={styles.memberName}>{m.name}</span>
          <span className={styles.memberRole}>{m.role}</span>
        </div>
      ))}

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
