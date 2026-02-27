import MotionSection from "@/components/animations/MotionSection";
import styles from "./AboutServices.module.css";

const approachSteps = [
  {
    title: "Map",
    text: "We map your revenue process \u2014 how people find you, trust you, buy from you.",
  },
  {
    title: "Build",
    text: "We build the automation \u2014 voice, social systems, whatever you need to run 24/7.",
  },
  {
    title: "Own",
    text: "You own it forever. We train you, hand over the keys, then you\u2019re free.",
  },
];

export default function AboutServices() {
  return (
    <MotionSection className={styles.section}>
      <p className={styles.label}>Our Approach</p>
      {approachSteps.map((step) => (
        <div key={step.title} className={styles.stepRow}>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepText}>{step.text}</p>
        </div>
      ))}
    </MotionSection>
  );
}
