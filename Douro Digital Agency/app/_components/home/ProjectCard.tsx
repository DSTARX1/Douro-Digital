"use client";

import Link from "next/link";
import MagneticCard from "@/app/_components/cursor/MagneticCard";
import type { CaseStudy } from "@/app/_data/case-studies";

interface Props {
  project: CaseStudy;
  height?: number;
}

const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  overflow: "hidden",
  position: "relative",
  width: "100%",
  transition: "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
};

const bgStyle = (color: string): React.CSSProperties => ({
  position: "absolute",
  inset: 0,
  background: color,
  transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
});

const infoStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: 24,
  height: 94,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
  zIndex: 1,
};

const titleStyle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 600,
  lineHeight: "22px",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: "20px",
  color: "var(--muted)",
  marginTop: 4,
};

export default function ProjectCard({ project, height }: Props) {
  const autoHeight = !height;

  return (
    <Link
      href={`/case-studies/${project.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <MagneticCard maxMove={20}>
        <div
          style={{ ...cardStyle, ...(height ? { height } : {}) }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
        >
          <div
            style={autoHeight ? { ...bgStyle(project.color), position: "relative" } : bgStyle(project.color)}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.05)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
          >
            {project.image && project.objectFit === "contain" && (
              <img
                suppressHydrationWarning
                src={project.image}
                alt=""
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "blur(40px) saturate(1.2)",
                  transform: "scale(1.15)",
                }}
              />
            )}
            {project.image && (
              <img
                suppressHydrationWarning
                src={project.image}
                alt={project.title}
                style={autoHeight
                  ? { width: "100%", height: "auto", display: "block", position: "relative" as const, ...(project.objectFit ? { objectFit: project.objectFit } : {}), ...(project.objectPosition ? { objectPosition: project.objectPosition } : {}) }
                  : { width: "100%", height: "100%", position: "relative" as const, objectFit: project.objectFit ?? "cover", ...(project.objectPosition ? { objectPosition: project.objectPosition } : {}) }
                }
              />
            )}
          </div>
          <div style={infoStyle}>
            <span style={titleStyle}>{project.title}</span>
            <span style={subtitleStyle}>{project.subtitle}</span>
          </div>
        </div>
      </MagneticCard>
    </Link>
  );
}
