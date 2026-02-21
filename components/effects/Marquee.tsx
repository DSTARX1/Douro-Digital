import styles from "./Marquee.module.css";

const DEFAULT_ITEMS = [
  "AI Agents",
  "Custom Software",
  "Revenue Growth",
  "Go-to-Market Strategy",
  "Automation",
  "Digital Transformation",
];

export default function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  // Duplicate items to fill the seamless loop
  const repeated = [...items, ...items];

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
