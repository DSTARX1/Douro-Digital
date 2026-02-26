import MotionSection from "@/components/animations/MotionSection";
import { PixelChevronLeft } from "@/components/icons/PixelIcons";
import { getCategoryMeta } from "@/data/blog";
import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import styles from "./BlogPostHero.module.css";

interface Props {
  meta: BlogPostMeta;
}

export default function BlogPostHero({ meta }: Props) {
  const cat = getCategoryMeta(meta.category);

  return (
    <MotionSection className={styles.hero}>
      <Link href="/resources" className={styles.back}>
        <PixelChevronLeft size={14} color="currentColor" /> Back to Resources
      </Link>
      <span
        className={styles.badge}
        style={{
          color: cat.color,
          background: `${cat.color}1f`,
        }}
      >
        {cat.label}
      </span>
      <h1 className={styles.title}>{meta.title}</h1>
      <div className={styles.metaRow}>
        <span>{meta.date}</span>
        <span>·</span>
        <span>{meta.readingTime}</span>
      </div>
      <div
        className={styles.image}
        style={{
          background: `linear-gradient(135deg, ${meta.gradientFrom}, ${meta.gradientTo})`,
        }}
      />
    </MotionSection>
  );
}
