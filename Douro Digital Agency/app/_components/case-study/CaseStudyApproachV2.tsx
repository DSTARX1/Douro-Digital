import MotionSection from "@/app/_components/animations/MotionSection";
import type { CaseStudy } from "@/app/_data/case-studies";
import styles from "./CaseStudyApproachV2.module.css";

interface Props {
  solution: NonNullable<CaseStudy["solution"]>;
  image?: string;
  imageAlt: string;
  color: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

export default function CaseStudyApproachV2({
  solution,
  image,
  imageAlt,
  color,
  objectFit,
  objectPosition,
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
