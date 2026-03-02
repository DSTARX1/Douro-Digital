"use client";

import TextReveal from "@/components/animations/TextReveal";
import MagneticCard from "@/components/cursor/MagneticCard";
import { PixelArrowTopRight } from "@/components/icons/PixelIcons";
import MagneticButton from "@/components/ui/MagneticButton";
import MobilePauseOverlay from "@/components/video/MobilePauseOverlay";
import { heroHeadline } from "@/data/home";
import { useAudio } from "@/lib/contexts/AudioContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const { setMuted, registerVideo, unregisterVideo } = useAudio();

  // Register video & autoplay muted
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    registerVideo(video);
    video.muted = true;
    setMuted(true);
    video.play().catch(() => {});

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

  useGSAP(
    () => {
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
    },
    { scope: sectionRef },
  );

  const handleVideoClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

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
              <div
                ref={mediaRef}
                className={styles.media}
                onClick={handleVideoClick}
                data-cursor-play
                {...(isPlaying ? { "data-cursor-playing": "" } : {})}
              >
                <video
                  ref={videoRef}
                  className={styles.mediaVideo}
                  src="/videos/durolanding.mp4"
                  poster="/videos/durolanding-poster.jpg"
                  preload="metadata"
                  loop
                  muted
                  playsInline
                />
                <MobilePauseOverlay isPlaying={isPlaying} />
              </div>
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
