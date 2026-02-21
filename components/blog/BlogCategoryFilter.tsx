"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { blogCategories } from "@/data/blog";
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
    <div className={styles.wrap}>
      <button
        className={`${styles.pill} ${active === "all" ? styles.active : ""}`}
        onClick={() => handleClick("all")}
      >
        All
      </button>
      {blogCategories.map((cat) => (
        <button
          key={cat.slug}
          className={`${styles.pill} ${active === cat.slug ? styles.active : ""}`}
          onClick={() => handleClick(cat.slug)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
