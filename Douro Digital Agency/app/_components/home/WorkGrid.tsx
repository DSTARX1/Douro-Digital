import Link from "next/link";
import { caseStudies } from "@/app/_data/case-studies";
import { getRecentPosts } from "@/app/_lib/blog";
import ProjectCard from "./ProjectCard";
import StudioStories from "./StudioStories";
import styles from "./WorkGrid.module.css";

export default function WorkGrid() {
  const recentPosts = getRecentPosts(3);

  return (
    <section className={styles.section} id="work">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Selected work</h2>
        <Link href="/work" className={styles.viewAll}>
          View all projects →
        </Link>
      </div>
      <div className={styles.grid}>
        <ProjectCard project={caseStudies[0]} height={504} />
        <ProjectCard project={caseStudies[2]} height={504} />
        <ProjectCard project={caseStudies[1]} />
        <StudioStories posts={recentPosts} />
        <ProjectCard project={caseStudies[3]} />
      </div>
    </section>
  );
}
