import Image from "next/image";
import MotionSection from "@/app/_components/animations/MotionSection";
import { teamMembers } from "@/app/_data/about";
import styles from "./HomeTeam.module.css";

export default function HomeTeam() {
  return (
    <MotionSection className={styles.section}>
      <p className={styles.label}>Meet the team</p>
      <div className={styles.grid}>
        {teamMembers.map((m) => (
          <div key={m.name} className={styles.card}>
            <div
              className={styles.imageWrap}
              style={{
                "--img-obj-pos": m.objectPosition || "center",
                "--img-scale": m.scale ? `scale(${m.scale})` : "none",
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
        ))}
      </div>
    </MotionSection>
  );
}
