import MotionSection from "@/components/animations/MotionSection";
import type { CaseStudy } from "@/data/case-studies";
import styles from "./CaseStudyApproach.module.css";

interface Props {
  solution: NonNullable<CaseStudy["solution"]>;
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
}

export default function CaseStudyApproach({
  solution,
  image,
  imageAlt,
  objectPosition,
}: Props) {
  return (
    <MotionSection className={styles.section}>
      <p className={styles.label}>{solution.heading}</p>
      <h2 className={styles.heading}>{solution.description}</h2>
      {image && (
        <div className={styles.imageWrap}>
          <img
            src={image}
            alt={imageAlt ?? "Product screenshot"}
            style={objectPosition ? { objectPosition } : undefined}
          />
        </div>
      )}
      <ul className={styles.features}>
        {solution.features.map((feature) => (
          <li key={feature} className={styles.feature}>
            {feature}
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
