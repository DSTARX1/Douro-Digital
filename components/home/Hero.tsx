"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticCard from "@/components/cursor/MagneticCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { PixelArrowTopRight } from "@/components/icons/PixelIcons";
import { useAudio } from "@/lib/contexts/AudioContext";
import { heroHeadline } from "@/data/home";
import TextReveal from "@/components/animations/TextReveal";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const pinSpacerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoCtaRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
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
    const cta = ctaRef.current;
    const videoCta = videoCtaRef.current;
    const media = mediaRef.current;
    if (!section || !heading || !cta || !videoCta || !media) return;

    gsap.set(heading, { opacity: 1, y: 0 });
    gsap.from(media, { opacity: 0, duration: 1.2, delay: 0.3 });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
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
      tl.to(cta, { opacity: 0, ease: "none" }, 0);
      tl.to(videoCta, { opacity: 0, ease: "none" }, 0);
      tl.to(media, { scale: 1.8, y: -120, ease: "none" }, 0);
    });

    mm.add("(max-width: 768px)", () => {
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
      tl.to(cta, { opacity: 0, ease: "none" }, 0);
      tl.to(videoCta, { opacity: 0, ease: "none" }, 0);
      tl.to(media, { scale: 1.84, ease: "none" }, 0);
    });
  }, { scope: sectionRef });

  // Keep playing inline when exiting fullscreen, respect mute state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onFsChange = () => {
      const fsEl = document.fullscreenElement ?? document.webkitFullscreenElement;
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

  const handleVideoClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    video.play();
    if (typeof video.requestFullscreen === "function") {
      video.requestFullscreen();
    } else if (typeof video.webkitEnterFullscreen === "function") {
      video.webkitEnterFullscreen();
    }
  }, [setMuted]);

  return (
    <>
      <div ref={pinSpacerRef}>
        <div ref={sectionRef} className={styles.hero} suppressHydrationWarning>
          <div className={styles.heroInner}>
            <div ref={headingRef} className={styles.headingWrap}>
              <TextReveal
                text={heroHeadline.prefix}
                as="h1"
                className={styles.heading}
                delay={0.2}
              />
              {heroHeadline.italic && (
                <em className={styles.italic}>{heroHeadline.italic}</em>
              )}
            </div>

            <MagneticCard className={styles.mediaContainer} maxMove={70}>
              <div ref={mediaRef} className={styles.media} onClick={handleVideoClick}>
                <video
                  ref={videoRef}
                  className={styles.mediaVideo}
                  src="/videos/durolanding.mov"
                  preload="metadata"
                  loop
                  playsInline
                />
                <div ref={videoCtaRef} className={styles.videoCta}>
                  <MagneticButton strength={0.4}>
                    <a href="#contact" className={styles.cta}>
                      Book a free call
                      <span className={styles.ctaArrow}>
                        <PixelArrowTopRight size={14} color="currentColor" />
                      </span>
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </MagneticCard>

            <div ref={ctaRef} className={styles.ctaBelow}>
              <p className={styles.subtitle}>
                (Not chatbots. Not dashboards. Not &quot;insights.&quot; Just AI
                that picks up the phone, books the call, and makes you money.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
