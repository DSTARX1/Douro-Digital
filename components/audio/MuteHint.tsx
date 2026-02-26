"use client";

import { PixelChevronDown } from "@/components/icons/PixelIcons";
import { useAudio } from "@/lib/contexts/AudioContext";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MuteHint.module.css";

export default function MuteHint() {
  const { videosRef } = useAudio();
  const [videoVisible, setVideoVisible] = useState(false);
  const visibleCountRef = useRef(0);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      visibleCountRef.current += entry.isIntersecting ? 1 : -1;
    }
    setVideoVisible(visibleCountRef.current > 0);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(handleIntersect, { threshold: 0.1 });

    const videos = videosRef.current;
    if (videos) {
      for (const v of videos) {
        obs.observe(v);
      }
    }

    // Poll for new videos (they register asynchronously)
    const interval = setInterval(() => {
      if (!videos) return;
      for (const v of videos) {
        obs.observe(v);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      obs.disconnect();
      visibleCountRef.current = 0;
    };
  }, [videosRef, handleIntersect]);

  return (
    <div className={`${styles.hint} ${videoVisible ? styles.visible : ""}`}>
      <span className={styles.text}>Mute</span>
      <PixelChevronDown size={10} className={styles.chevron} />
    </div>
  );
}
