"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import MotionSection from "@/app/_components/animations/MotionSection";
import CalInlineEmbed from "@/app/_components/cal/CalInlineEmbed";
import { PixelStar, PixelArrowTopRight } from "@/app/_components/icons/PixelIcons";
import { useAudio } from "@/app/_contexts/AudioContext";
import styles from "./BookACall.module.css";

function ArrowIcon() {
  return <PixelArrowTopRight size={14} color="currentColor" />;
}

function CheckIcon() {
  return (
    <PixelStar size={14} color="var(--accent)" />
  );
}

export default function BookACall() {
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
    <div className={styles.page}>
      {/* ── Minimal nav ── */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/douro-logo.png"
            alt="Douro Digital"
            width={70}
            height={70}
            className={styles.logo}
            priority
          />
        </Link>
      </nav>

      {/* ── Hero ── */}
      <MotionSection as="section" className={styles.hero}>
        <p className={styles.trustBar}>
          Trusted by dental &amp; aesthetic clinics worldwide
        </p>

        <h1 className={styles.headline}>
          Get 30+ new high-value patients every month &mdash; predictably
        </h1>

        <p className={styles.subheadline}>
          For dental and aesthetic clinic owners who are done relying on
          word-of-mouth and ready for a system that delivers.
        </p>

        {/* VSL video */}
        <div className={styles.videoWrap}>
          <div className={styles.videoCard} onClick={handleVideoClick}>
            <video
              ref={videoRef}
              className={styles.video}
              src="/videos/durolanding.mov"
              loop
              playsInline
            />
          </div>
        </div>

        <a
          href="#book"
          className={styles.ctaBtn}
        >
          <span className={styles.ctaArrow}>
            <ArrowIcon />
          </span>
          Book your free strategy call
        </a>
      </MotionSection>

      {/* ── Social proof stats ── */}
      <MotionSection as="section" className={styles.stats}>
        <div className={styles.stat}>
          <p className={styles.statValue}>50+</p>
          <p className={styles.statLabel}>Clinics served</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statValue}>3x</p>
          <p className={styles.statLabel}>Average ROI</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statValue}>10,000+</p>
          <p className={styles.statLabel}>Patients generated</p>
        </div>
      </MotionSection>

      {/* ── Pain points ── */}
      <MotionSection as="section" className={styles.painPoints}>
        <p className={styles.sectionLabel}>Sound familiar?</p>
        <h2 className={styles.sectionHeading}>
          The challenges holding your clinic back
        </h2>

        <div className={styles.painGrid}>
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <PixelStar size={22} color="var(--accent)" />
            </div>
            <h3 className={styles.painTitle}>Inconsistent patient flow</h3>
            <p className={styles.painDesc}>
              Some months are packed, others are painfully quiet. You can&rsquo;t
              plan growth when you don&rsquo;t know where next month&rsquo;s
              patients are coming from.
            </p>
          </div>

          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <PixelStar size={22} color="var(--accent)" />
            </div>
            <h3 className={styles.painTitle}>Wasted ad spend</h3>
            <p className={styles.painDesc}>
              You&rsquo;ve tried agencies, Google Ads, social media &mdash; but
              nothing seems to stick. Leads come in but they don&rsquo;t
              convert, or worse, they never show up.
            </p>
          </div>

          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <PixelStar size={22} color="var(--accent)" />
            </div>
            <h3 className={styles.painTitle}>Competing on price</h3>
            <p className={styles.painDesc}>
              Instead of attracting patients who value quality, you&rsquo;re
              stuck in a race to the bottom. Your expertise deserves premium
              positioning.
            </p>
          </div>
        </div>
      </MotionSection>

      {/* ── What you'll learn on the call ── */}
      <MotionSection as="section" className={styles.learn}>
        <p className={styles.sectionLabel}>What you&rsquo;ll get</p>
        <h2 className={styles.sectionHeading}>
          On your free strategy call, we&rsquo;ll cover:
        </h2>

        <div className={styles.learnList}>
          <div className={styles.learnItem}>
            <span className={styles.learnCheck}>
              <CheckIcon />
            </span>
            <p className={styles.learnText}>
              <span className={styles.learnTextStrong}>
                Your clinic&rsquo;s growth bottleneck
              </span>
              <br />
              <span className={styles.learnTextMuted}>
                We&rsquo;ll identify the #1 thing holding you back from
                predictable patient flow.
              </span>
            </p>
          </div>

          <div className={styles.learnItem}>
            <span className={styles.learnCheck}>
              <CheckIcon />
            </span>
            <p className={styles.learnText}>
              <span className={styles.learnTextStrong}>
                A custom patient acquisition roadmap
              </span>
              <br />
              <span className={styles.learnTextMuted}>
                A step-by-step plan tailored to your clinic, market, and goals.
              </span>
            </p>
          </div>

          <div className={styles.learnItem}>
            <span className={styles.learnCheck}>
              <CheckIcon />
            </span>
            <p className={styles.learnText}>
              <span className={styles.learnTextStrong}>
                Expected ROI within 90 days
              </span>
              <br />
              <span className={styles.learnTextMuted}>
                Realistic projections based on your current numbers and what
                we&rsquo;ve achieved for similar clinics.
              </span>
            </p>
          </div>
        </div>

        <a
          href="#book"
          className={styles.ctaBtn}
        >
          <span className={styles.ctaArrow}>
            <ArrowIcon />
          </span>
          Book your free strategy call
        </a>
      </MotionSection>

      {/* ── Cal.com embed area ── */}
      <MotionSection as="section" className={styles.calEmbed} id="book">
        <p className={styles.sectionLabel}>Schedule your session</p>
        <h2 className={styles.sectionHeading}>
          Choose a time that works for you
        </h2>

        <CalInlineEmbed className={styles.calEmbedInner} />

        <p className={styles.scarcity}>
          We only take on 5 new clinics per month. Book now to secure your spot.
        </p>
      </MotionSection>

      {/* ── Final CTA ── */}
      <MotionSection as="section" className={styles.finalCta}>
        <h2 className={styles.finalHeading}>
          Ready to grow your practice?
        </h2>
        <p className={styles.finalSub}>
          Stop losing patients to competitors who invest in their growth.
          Let&rsquo;s build a system that works for your clinic.
        </p>
        <a
          href="#book"
          className={styles.ctaBtn}
        >
          <span className={styles.ctaArrow}>
            <ArrowIcon />
          </span>
          Book your free strategy call
        </a>
      </MotionSection>

      {/* ── Minimal footer ── */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Douro Digital. All rights reserved.
      </footer>
    </div>
  );
}
