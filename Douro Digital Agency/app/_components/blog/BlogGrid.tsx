import Link from "next/link";
import MotionSection from "@/app/_components/animations/MotionSection";
import { getCategoryMeta } from "@/app/_data/blog";
import type { BlogPostMeta } from "@/app/_lib/blog";
import styles from "./BlogGrid.module.css";

interface Props {
  posts: BlogPostMeta[];
}

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <MotionSection className={styles.section}>
        <p className={styles.empty}>No articles found in this category.</p>
      </MotionSection>
    );
  }

  return (
    <MotionSection className={styles.section}>
      <div className={styles.grid}>
        {posts.map((post) => {
          const cat = getCategoryMeta(post.category);
          return (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className={styles.card}
            >
              <div
                className={styles.image}
                style={{
                  background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
                }}
              />
              <div className={styles.body}>
                <span
                  className={styles.badge}
                  style={{
                    color: cat.color,
                    background: `${cat.color}1f`,
                  }}
                >
                  {cat.label}
                </span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.meta}>
                  {post.date} · {post.readingTime}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </MotionSection>
  );
}
