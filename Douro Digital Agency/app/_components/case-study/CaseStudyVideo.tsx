"use client";

import { useRef, useCallback } from "react";
import MotionSection from "@/app/_components/animations/MotionSection";
import MagneticCard from "@/app/_components/cursor/MagneticCard";
import styles from "./CaseStudyVideo.module.css";

interface Props {
  src: string;
  title: string;
}

export default function CaseStudyVideo({ src, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    if (video.paused) {
      video.play();
      wrap.setAttribute("data-cursor-playing", "");
    } else {
      video.pause();
      wrap.removeAttribute("data-cursor-playing");
    }
  }, []);

  return (
    <MotionSection className={styles.section}>
      <div
        ref={wrapRef}
        className={styles.videoWrap}
        data-cursor-play
        onClick={toggle}
      >
        <MagneticCard className={styles.magnetic} maxMove={20}>
          <video
            ref={videoRef}
            className={styles.video}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${title} product demo`}
          />
        </MagneticCard>
      </div>
    </MotionSection>
  );
}
