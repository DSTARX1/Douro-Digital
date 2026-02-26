import MotionSection from "@/components/animations/MotionSection";
import { PixelArrowRight } from "@/components/icons/PixelIcons";
import type { CaseStudy } from "@/data/case-studies";
import Link from "next/link";
import styles from "./CaseStudyApproachV2.module.css";

interface BlogLink {
  slug: string;
  title: string;
}

interface Props {
  solution: NonNullable<CaseStudy["solution"]>;
  image?: string;
  imageAlt: string;
  color: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  blogLinks?: BlogLink[];
}

export default function CaseStudyApproachV2({
  solution,
  image,
  imageAlt,
  color,
  objectFit,
  objectPosition,
  blogLinks,
}: Props) {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <span className={styles.label}>The Approach</span>
          <h2 className={styles.heading}>{solution.heading}</h2>
          <p className={styles.description}>{solution.description}</p>
          {solution.features.length > 0 && (
            <ul className={styles.features}>
              {solution.features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {blogLinks && blogLinks.length > 0 && (
            <div className={styles.blogLinks}>
              <span className={styles.blogLinksLabel}>
                Read more on our blog
              </span>
              {blogLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={`/resources/${link.slug}`}
                  className={styles.blogLink}
                >
                  {link.title}{" "}
                  <PixelArrowRight size={12} color="currentColor" />
                </Link>
              ))}
            </div>
          )}
        </div>
        {image && (
          <div
            className={styles.imageContainer}
            style={{ "--project-color": color } as React.CSSProperties}
          >
            <img
              src={image}
              alt={imageAlt}
              style={{
                ...(objectFit ? { objectFit } : {}),
                ...(objectPosition ? { objectPosition } : {}),
              }}
            />
          </div>
        )}
      </div>
    </MotionSection>
  );
}
