"use client";

import { useRef, useCallback, useEffect } from "react";
import MotionSection from "@/app/_components/animations/MotionSection";
import MagneticCard from "@/app/_components/cursor/MagneticCard";
import type { CaseStudy } from "@/app/_data/case-studies";
import styles from "./CaseStudyHero.module.css";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyHero({ study }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause when exiting fullscreen so it resumes from the same spot on next click
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const customCursor = document.querySelector('[data-cursor-debug="true"]');
    const originalParent = customCursor?.parentNode;

    const onFsChange = () => {
      const fsEl = document.fullscreenElement ?? (document as any).webkitFullscreenElement;
      console.log("[CaseStudyHero] Fullscreen change", {
        fullscreenElement: fsEl?.tagName,
        videoPaused: video.paused,
        videoMuted: video.muted,
      });

      if (!fsEl) {
        // Exiting fullscreen
        console.log("[CaseStudyHero] Exiting fullscreen, moving cursor back");
        video.pause();
        video.muted = true;
        // Move cursor back to original parent
        if (customCursor && originalParent) {
          console.log("[CaseStudyHero] Moving cursor back to", originalParent.tagName);
          originalParent.appendChild(customCursor);
        }
      }
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
    };
  }, []);

  const handleClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play();

    // Append custom cursor to video element so it appears in fullscreen
    const customCursor = document.querySelector('[data-cursor-debug="true"]');
    console.log("[CaseStudyHero] Click to fullscreen", {
      hasCursor: !!customCursor,
      cursorParent: customCursor?.parentNode?.tagName,
      videoTag: video.tagName,
    });

    if (customCursor && video.requestFullscreen) {
      console.log("[CaseStudyHero] Moving cursor to video element");
      video.appendChild(customCursor);
      console.log("[CaseStudyHero] Cursor new parent:", customCursor.parentNode?.tagName);
    }

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitEnterFullscreen) {
      (video as any).webkitEnterFullscreen();
    }
  }, []);

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
              autoPlay
              loop
              muted
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
