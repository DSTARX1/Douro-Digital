import MotionSection from "@/app/_components/animations/MotionSection";
import type { CaseStudyImage } from "@/app/_data/case-studies";
import styles from "./CaseStudyImageGrid.module.css";

interface Props {
  images: CaseStudyImage[];
}

export default function CaseStudyImageGrid({ images }: Props) {
  if (images.length === 0) return null;

  const isSingle = images.length < 3;

  return (
    <MotionSection className={styles.section}>
      {isSingle ? (
        <div className={styles.single} style={{ position: "relative", overflow: "hidden" }}>
          {images[0].objectFit === "contain" && (
            <img
              src={images[0].src}
              alt=""
              aria-hidden
              className={styles.blurBg}
            />
          )}
          <img
            src={images[0].src}
            alt={images[0].alt}
            style={{
              position: "relative",
              ...(images[0].objectFit ? { objectFit: images[0].objectFit } : {}),
              ...(images[0].objectPosition ? { objectPosition: images[0].objectPosition } : {}),
            }}
          />
        </div>
      ) : (
        <div className={styles.grid}>
          <div className={styles.large}>
            <img
              src={images[0].src}
              alt={images[0].alt}
              style={images[0].objectPosition ? { objectPosition: images[0].objectPosition } : undefined}
            />
          </div>
          <div className={styles.small}>
            <img
              src={images[1].src}
              alt={images[1].alt}
              style={images[1].objectPosition ? { objectPosition: images[1].objectPosition } : undefined}
            />
          </div>
          <div className={styles.small}>
            <img
              src={images[2].src}
              alt={images[2].alt}
              style={images[2].objectPosition ? { objectPosition: images[2].objectPosition } : undefined}
            />
          </div>
        </div>
      )}
    </MotionSection>
  );
}
