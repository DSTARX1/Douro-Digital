import { PixelArrowRight } from "@/components/icons/PixelIcons";
import { getCategoryMeta } from "@/data/blog";
import type { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";
import styles from "./StudioStories.module.css";

interface Props {
  posts: BlogPostMeta[];
}

export default function StudioStories({ posts }: Props) {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.heading}>From the blog</h3>
      {posts.map((post) => {
        const cat = getCategoryMeta(post.category);
        return (
          <Link
            key={post.slug}
            href={`/resources/${post.slug}`}
            className={styles.card}
          >
            <div
              className={styles.thumb}
              style={{
                background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
              }}
            />
            <div className={styles.cardBody}>
              <span
                className={styles.badge}
                style={{
                  color: cat.color,
                  background: `${cat.color}1f`,
                }}
              >
                {cat.label}
              </span>
              <span className={styles.title}>{post.title}</span>
              <span className={styles.meta}>
                {post.date} · {post.readingTime}
              </span>
            </div>
          </Link>
        );
      })}
      <Link href="/resources" className={styles.browseAll}>
        Browse all articles <PixelArrowRight size={14} color="currentColor" />
      </Link>
    </div>
  );
}
