import MotionSection from "@/app/_components/animations/MotionSection";
import styles from "./CaseStudyShowcase.module.css";

interface Props {
  scenarios: { title: string; description: string }[];
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
}

export default function CaseStudyShowcase({
  scenarios,
  image,
  imageAlt,
  objectPosition,
}: Props) {
  return (
    <section className={styles.section}>
      {scenarios.map((scenario, i) => (
        <MotionSection
          key={scenario.title}
          className={`${styles.row} ${i % 2 !== 0 ? styles.rowReverse : ""}`}
        >
          <div className={styles.text}>
            <h3 className={styles.title}>{scenario.title}</h3>
            <p className={styles.description}>{scenario.description}</p>
          </div>
          {image && (
            <div className={styles.imageWrap}>
              <img
                src={image}
                alt={imageAlt ?? scenario.title}
                style={objectPosition ? { objectPosition } : undefined}
              />
            </div>
          )}
        </MotionSection>
      ))}
    </section>
  );
}
