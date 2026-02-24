"use client";

import { PixelPause } from "@/components/icons/PixelIcons";
import styles from "./MobilePauseOverlay.module.css";

interface Props {
  isPlaying: boolean;
}

export default function MobilePauseOverlay({ isPlaying }: Props) {
  if (isPlaying) return null;
  return (
    <div className={styles.overlay}>
      <PixelPause size={32} color="white" />
    </div>
  );
}
