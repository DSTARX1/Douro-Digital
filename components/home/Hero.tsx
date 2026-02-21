"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticCard from "@/components/cursor/MagneticCard";
import { PixelPlay } from "@/components/icons/PixelIcons";
import { useAudio } from "@/lib/contexts/AudioContext";
import { heroHeadline } from "@/data/home";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const pinSpacerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, setMuted, registerVideo, unregisterVideo } = useAudio();

  // Register video & attempt unmuted autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    registerVideo(video);

    // Attempt unmuted autoplay; fall back to muted if browser blocks it
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

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const media = mediaRef.current;
    if (!section || !heading || !media) return;

    gsap.set(heading, { opacity: 1, y: 0 });
    gsap.from(media, { opacity: 0, duration: 1.2, delay: 0.3 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=800",
        pin: true,
        pinSpacer: pinSpacerRef.current!,
        scrub: 1,
      },
    });

    tl.to(heading, { y: -200, opacity: 0, ease: "none" }, 0);
    tl.to(media, { scale: 2.3, ease: "none" }, 0);
  }, { scope: sectionRef });

  // GSAP quickTo cursor follower
  useEffect(() => {
    const media = mediaRef.current;
    const cursor = cursorRef.current;
    if (!media || !cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX - 32);
      yTo(e.clientY - 32);
    };

    const onEnter = () => cursor.classList.add(styles.cursorVisible);
    const onLeave = () => cursor.classList.remove(styles.cursorVisible);

    const container = media.closest(`.${styles.mediaContainer}`) || media;
    container.addEventListener("mousemove", onMove as EventListener);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mousemove", onMove as EventListener);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Keep playing inline when exiting fullscreen, respect mute state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onFsChange = () => {
      const fsEl = document.fullscreenElement ?? (document as any).webkitFullscreenElement;
      if (!fsEl) {
        // Respect global mute state, but keep current play/pause state
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

  const handleVideoClick = useCallback(() => {
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
    <>
      <div ref={pinSpacerRef}>
        <div ref={sectionRef} className={styles.hero} suppressHydrationWarning>
          <div className={styles.heroInner}>
            <div ref={headingRef} className={styles.headingWrap}>
              <h1 className={styles.heading}>
                {heroHeadline.prefix}{" "}
                <em className={styles.italic}>{heroHeadline.italic}</em>{" "}
                {heroHeadline.suffix}
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "var(--muted)",
                  marginTop: "16px",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                (Not chatbots. Not dashboards. Not &quot;insights.&quot; Just AI
                that picks up the phone, books the call, and makes you money.)
              </p>
            </div>

            <MagneticCard className={styles.mediaContainer} maxMove={70}>
              <div ref={mediaRef} className={styles.media} onClick={handleVideoClick}>
                <video
                  ref={videoRef}
                  className={styles.mediaVideo}
                  src="/videos/durolanding.mov"
                  loop
                  playsInline
                />
              </div>
            </MagneticCard>
          </div>
        </div>
      </div>

      <div ref={cursorRef} className={styles.playCursor}>
        <PixelPlay size={24} color="white" className={styles.playCursorIcon} animate />
      </div>
    </>
  );
}
