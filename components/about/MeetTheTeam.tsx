import MotionSection from "@/components/animations/MotionSection";
import { PixelArrowTopRight } from "@/components/icons/PixelIcons";
import {
  type HighlightItem,
  type ProjectHighlight,
  type TeamMember,
  teamHighlights as staticTeamHighlights,
  teamIntro as staticTeamIntro,
  teamMembers as staticTeamMembers,
  teamProjects as staticTeamProjects,
} from "@/data/about";
import { getContentWithFallback } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import styles from "./MeetTheTeam.module.css";

// Local overrides for this section only
const sectionOverrides: Record<
  string,
  { scale?: number; objectPosition?: string; transformOrigin?: string }
> = {
  "Isaac Morgado": { scale: 1.6, objectPosition: "center 60%" },
  "Mario Funez": { scale: 1.5, objectPosition: "center 0%" },
  "Danny Isakov": { scale: 2.0, objectPosition: "20% 90%" },
  "Josh Irizarry": { scale: 2.5, objectPosition: "center 23%" },
};

export default async function MeetTheTeam() {
  const teamIntro = await getContentWithFallback<string>(
    "about.team.intro",
    staticTeamIntro,
  );
  const teamMembers = await getContentWithFallback<TeamMember[]>(
    "about.team.members",
    staticTeamMembers,
  );
  const teamHighlights = await getContentWithFallback<HighlightItem[]>(
    "about.team.highlights",
    staticTeamHighlights,
  );
  const teamProjects = await getContentWithFallback<ProjectHighlight[]>(
    "about.team.projects",
    staticTeamProjects,
  );
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
          const objectPosition =
            overrides?.objectPosition ?? m.objectPosition ?? "center";
          return (
            <div key={m.name} className={styles.card}>
              <div
                className={styles.imageWrap}
                style={
                  {
                    "--img-obj-pos": objectPosition,
                    "--img-scale": scale ? `scale(${scale})` : "none",
                    ...(overrides?.transformOrigin && {
                      "--img-origin": overrides.transformOrigin,
                    }),
                  } as React.CSSProperties
                }
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

      {/* Project cards */}
      <p className={styles.projectsLabel}>What We&apos;ve Built</p>
      <div className={styles.projects}>
        {teamProjects.map((p) => (
          <Link key={p.title} href={p.link} className={styles.projectCard}>
            <div className={styles.projectImageWrap}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 45vw, 25vw"
              />
            </div>
            <div className={styles.projectInfo}>
              <div>
                <p className={styles.projectTitle}>{p.title}</p>
                <p className={styles.projectDesc}>{p.description}</p>
              </div>
              <span className={styles.projectArrow}>
                <PixelArrowTopRight size={14} color="currentColor" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Stat highlights */}
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
