import MotionSection from "@/components/animations/MotionSection";
import ScrollPrompt from "@/components/effects/ScrollPrompt";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import styles from "./WorkGrid.module.css";

export default function WorkGrid() {
  return (
    <MotionSection className={styles.section} id="work">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Shit we&apos;ve built that actually makes money
        </h2>
        <Link href="/work" className={styles.viewAll}>
          View all projects →
        </Link>
      </div>
      <div className={styles.grid}>
        <ProjectCard project={caseStudies[0]} height={520} />
        <ProjectCard project={caseStudies[2]} height={520} />
        <ProjectCard project={caseStudies[1]} height={520} />
        <ProjectCard project={caseStudies[3]} height={520} />
      </div>
      <ScrollPrompt className={styles.scrollPrompt} text="Keep scrolling" />
    </MotionSection>
  );
}
