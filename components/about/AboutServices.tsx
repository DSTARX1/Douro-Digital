import MotionSection from "@/components/animations/MotionSection";
import styles from "./AboutServices.module.css";

const approachSteps = [
  {
    title: "Discovery",
    text: "We dig into your business, find where you\u2019re bleeding revenue, and map out exactly what needs to be built.",
  },
  {
    title: "Build fast",
    text: "We prototype, test, iterate, and ship. No 18-month roadmaps that turn into vaporware.",
  },
  {
    title: "Launch",
    text: "Your system goes live. We train your team. We monitor it closely. We fix anything that breaks.",
  },
  {
    title: "Iterate",
    text: "Business changes. Tech changes. We adjust. No \u201Csorry that\u2019s not in scope\u201D \u2014 if it makes you money, we build it.",
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
      <p className={styles.closing}>
        Fast, focused builds that ship. Not 6-month death marches. Not
        &quot;we&apos;ll get to it next quarter.&quot;
      </p>
    </MotionSection>
  );
}
