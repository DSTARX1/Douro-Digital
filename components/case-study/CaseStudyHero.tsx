"use client";

import { useRef, useCallback, useEffect } from "react";
import MotionSection from "@/components/animations/MotionSection";
import MagneticCard from "@/components/cursor/MagneticCard";
import { useAudio } from "@/lib/contexts/AudioContext";
import type { CaseStudy } from "@/data/case-studies";
import styles from "./CaseStudyHero.module.css";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyHero({ study }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, setMuted, registerVideo, unregisterVideo } = useAudio();

  // Register video & attempt unmuted autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    registerVideo(video);

    video.muted = false;
    video.play().then(() => {
      if (!cancelled) setMuted(false);
    }).catch(() => {
      if (cancelled) return;
      video.muted = true;
      setMuted(true);
      video.play();
    });

    return () => {
      cancelled = true;
      unregisterVideo(video);
    };
  }, [registerVideo, unregisterVideo, setMuted]);

  // Sync mute state on fullscreen exit, keep play/pause state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onFsChange = () => {
      const fsEl = document.fullscreenElement ?? (document as any).webkitFullscreenElement;

      if (!fsEl) {
        video.muted = isMuted;
      }
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
    };
  }, [isMuted]);

  const handleClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    video.play();

    if (typeof video.requestFullscreen === "function") {
      video.requestFullscreen();
    } else if (typeof (video as any).webkitEnterFullscreen === "function") {
      (video as any).webkitEnterFullscreen();
    }
  }, [setMuted]);

  return (
    <MotionSection className={styles.hero}>
      <span className={styles.subtitle}>{study.subtitle}</span>
      <h1 className={styles.title}>{study.title}</h1>
      {study.tagline && <p className={styles.tagline}>{study.tagline}</p>}
      {study.demoVideo && (
        <MagneticCard
          className={styles.videoWrap}
          maxMove={20}
          showCursor
        >
          <div className={styles.videoInner} onClick={handleClick}>
            <video
              ref={videoRef}
              className={styles.video}
              src={study.demoVideo}
              loop
              playsInline
              preload="auto"
              aria-label={`${study.title} product demo`}
            />
          </div>
        </MagneticCard>
      )}
    </MotionSection>
  );
}
