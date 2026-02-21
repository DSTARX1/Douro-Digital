import MotionSection from "@/components/animations/MotionSection";
import ProjectDetailsToggle from "./ProjectDetailsToggle";
import type { CaseStudy } from "@/data/case-studies";
import styles from "./CaseStudyDescription.module.css";

interface Props {
  description: string;
  projectDetails?: CaseStudy["projectDetails"];
  stats?: CaseStudy["heroStats"];
}

export default function CaseStudyDescription({
  description,
  projectDetails,
  stats,
}: Props) {
  return (
    <MotionSection className={styles.section}>
      <p className={styles.description}>{description}</p>
      {projectDetails && (
        <ProjectDetailsToggle projectDetails={projectDetails} stats={stats} />
      )}
    </MotionSection>
  );
}
