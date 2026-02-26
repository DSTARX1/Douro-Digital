"use client";

import MotionSection from "@/components/animations/MotionSection";
import { blogCategories } from "@/data/blog";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./BlogCategoryFilter.module.css";

export default function BlogCategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  function handleClick(slug: string) {
    if (slug === "all") {
      router.push("/resources", { scroll: false });
    } else {
      router.push(`/resources?category=${slug}`, { scroll: false });
    }
  }

  return (
    <MotionSection as="div" className={styles.wrap}>
      <button
        type="button"
        className={`${styles.pill} ${active === "all" ? styles.active : ""}`}
        onClick={() => handleClick("all")}
        aria-pressed={active === "all"}
      >
        All
      </button>
      {blogCategories.map((cat) => (
        <button
          type="button"
          key={cat.slug}
          className={`${styles.pill} ${active === cat.slug ? styles.active : ""}`}
          onClick={() => handleClick(cat.slug)}
          aria-pressed={active === cat.slug}
        >
          {cat.label}
        </button>
      ))}
    </MotionSection>
  );
}
