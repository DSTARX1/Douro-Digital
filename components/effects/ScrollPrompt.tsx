import { PixelChevronDown } from "@/components/icons/PixelIcons";
import styles from "./ScrollPrompt.module.css";

interface Props {
  className?: string;
  text?: string;
}

export default function ScrollPrompt({
  className,
  text = "Scroll to explore",
}: Props) {
  return (
    <div className={`${styles.prompt} ${className || ""}`}>
      <span className={styles.text}>{text}</span>
      <PixelChevronDown
        size={14}
        color="currentColor"
        className={styles.chevron}
      />
    </div>
  );
}
