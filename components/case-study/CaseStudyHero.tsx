"use client";

import MotionSection from "@/components/animations/MotionSection";
import MagneticCard from "@/components/cursor/MagneticCard";
import DrawnCircle from "@/components/effects/DrawnCircle";
import MobilePauseOverlay from "@/components/video/MobilePauseOverlay";
import type { CaseStudy } from "@/data/case-studies";
import { useAudio } from "@/lib/contexts/AudioContext";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./CaseStudyHero.module.css";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyHero({ study }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { setMuted, registerVideo, unregisterVideo } = useAudio();

  // Register video & autoplay muted
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    registerVideo(video);
    video.muted = true;
    setMuted(true);
    video.play();

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      unregisterVideo(video);
    };
  }, [registerVideo, unregisterVideo, setMuted]);

  const handleClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }, []);

  return (
    <MotionSection className={styles.hero}>
      <span className={styles.subtitle}>{study.subtitle}</span>
      <h1 className={styles.title}>
        <DrawnCircle>{study.title}</DrawnCircle>
      </h1>
      {study.tagline && <p className={styles.tagline}>{study.tagline}</p>}
      {study.demoVideo && (
        <MagneticCard className={styles.videoWrap} maxMove={20} showCursor>
          <div
            className={styles.videoInner}
            onClick={handleClick}
            data-cursor-play
            {...(isPlaying ? { "data-cursor-playing": "" } : {})}
          >
            <video
              ref={videoRef}
              className={styles.video}
              src={study.demoVideo}
              poster={study.image}
              preload="metadata"
              loop
              muted
              playsInline
              aria-label={`${study.title} product demo`}
            />
            <MobilePauseOverlay isPlaying={isPlaying} />
          </div>
        </MagneticCard>
      )}
    </MotionSection>
  );
}
