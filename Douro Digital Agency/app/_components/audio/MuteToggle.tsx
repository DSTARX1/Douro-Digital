"use client";

import { useState, useCallback } from "react";
import { useAudio } from "@/app/_contexts/AudioContext";
import { PixelVolumeOn, PixelVolumeOff } from "@/app/_components/icons/PixelIcons";
import styles from "./MuteToggle.module.css";

export default function MuteToggle() {
  const { isMuted, setMuted } = useAudio();
  const [bouncing, setBouncing] = useState(false);

  const handleClick = useCallback(() => {
    setMuted(!isMuted);
    setBouncing(true);
  }, [isMuted, setMuted]);

  const handleAnimationEnd = useCallback(() => {
    setBouncing(false);
  }, []);

  return (
    <button
      className={`${styles.toggle} ${bouncing ? styles.bouncing : ""} ${isMuted ? styles.muted : ""}`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <PixelVolumeOff size={16} /> : <PixelVolumeOn size={16} />}
    </button>
  );
}
