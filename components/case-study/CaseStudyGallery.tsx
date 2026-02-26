import MotionSection from "@/components/animations/MotionSection";
import type { CaseStudyImage } from "@/data/case-studies";
import styles from "./CaseStudyGallery.module.css";

interface Props {
  images: CaseStudyImage[];
}

export default function CaseStudyGallery({ images }: Props) {
  if (images.length === 0) return null;

  const isSingle = images.length === 1;

  return (
    <section className={styles.section}>
      {isSingle ? (
        <MotionSection as="div" className={styles.singleWrap}>
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
              ...(images[0].objectFit
                ? { objectFit: images[0].objectFit }
                : {}),
              ...(images[0].objectPosition
                ? { objectPosition: images[0].objectPosition }
                : {}),
            }}
          />
        </MotionSection>
      ) : (
        <div className={styles.collage}>
          {images.map((img, i) => (
            <MotionSection
              as="div"
              key={img.src}
              className={`${styles.collageItem} ${styles[`item${i}`] ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={
                  img.objectPosition
                    ? { objectPosition: img.objectPosition }
                    : undefined
                }
              />
            </MotionSection>
          ))}
        </div>
      )}
    </section>
  );
}
