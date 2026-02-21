"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import MotionSection from "@/components/animations/MotionSection";
import CalInlineEmbed from "@/components/cal/CalInlineEmbed";
import TextScramble from "@/components/effects/TextScramble";
import { PixelStar, PixelArrowTopRight } from "@/components/icons/PixelIcons";
import { useAudio } from "@/lib/contexts/AudioContext";
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
    <div id="main-content" className={styles.page}>
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
          Trusted by businesses that got tired of bleeding money
        </p>

        <h1 className={styles.headline}>
          Stop bleeding revenue through missed calls, broken systems, and tools
          that don&rsquo;t talk to each other
        </h1>

        <p className={styles.subheadline}>
          30-minute call. No pitch deck. No &ldquo;sign today&rdquo; pressure.
          Just a conversation about where you&rsquo;re losing money and what
          we&rsquo;d build to fix it.
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
          <TextScramble text="50+" className={styles.statValue} as="p" />
          <p className={styles.statLabel}>Businesses served</p>
        </div>
        <div className={styles.stat}>
          <TextScramble text="3x" className={styles.statValue} as="p" />
          <p className={styles.statLabel}>Average ROI</p>
        </div>
        <div className={styles.stat}>
          <TextScramble text="10,000+" className={styles.statValue} as="p" />
          <p className={styles.statLabel}>Leads converted</p>
        </div>
      </MotionSection>

      {/* ── Pain points ── */}
      <MotionSection as="section" className={styles.painPoints}>
        <p className={styles.sectionLabel}>Sound familiar?</p>
        <h2 className={styles.sectionHeading}>
          The challenges holding your business back
        </h2>

        <div className={styles.painGrid}>
          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <PixelStar size={22} color="var(--accent)" />
            </div>
            <h3 className={styles.painTitle}>Leads that vanish into the void</h3>
            <p className={styles.painDesc}>
              You&rsquo;re spending on ads, traffic is coming in, forms are
              getting filled &mdash; and then nothing. 78% of leads go to
              whoever responds first. Your average response time? 30 minutes.
            </p>
          </div>

          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <PixelStar size={22} color="var(--accent)" />
            </div>
            <h3 className={styles.painTitle}>A tool graveyard</h3>
            <p className={styles.painDesc}>
              CRM. Email platform. Scheduler. Zapier. Analytics dashboard.
              Fourteen subscriptions, zero integrations, and you&rsquo;re still
              copying data between them manually. Sounds exhausting.
            </p>
          </div>

          <div className={styles.painCard}>
            <div className={styles.painIcon}>
              <PixelStar size={22} color="var(--accent)" />
            </div>
            <h3 className={styles.painTitle}>40% of business happens after hours</h3>
            <p className={styles.painDesc}>
              Evenings. Weekends. Holidays. While you&rsquo;re asleep or with
              your family, your phone&rsquo;s going straight to voicemail
              &mdash; and those leads are calling your competitor instead.
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
                Where you&rsquo;re bleeding revenue
              </span>
              <br />
              <span className={styles.learnTextMuted}>
                Missed leads, slow follow-up, broken systems &mdash;
                we&rsquo;ll find the #1 thing costing you money.
              </span>
            </p>
          </div>

          <div className={styles.learnItem}>
            <span className={styles.learnCheck}>
              <CheckIcon />
            </span>
            <p className={styles.learnText}>
              <span className={styles.learnTextStrong}>
                What AI or custom software could fix
              </span>
              <br />
              <span className={styles.learnTextMuted}>
                Realistically, not in a perfect world. We&rsquo;ll tell you
                exactly what we&rsquo;d build and how long it&rsquo;d take.
              </span>
            </p>
          </div>

          <div className={styles.learnItem}>
            <span className={styles.learnCheck}>
              <CheckIcon />
            </span>
            <p className={styles.learnText}>
              <span className={styles.learnTextStrong}>
                Whether we&rsquo;re a good fit
              </span>
              <br />
              <span className={styles.learnTextMuted}>
                If we&rsquo;re not, we&rsquo;ll tell you. If we are,
                you&rsquo;ll get realistic projections based on what
                we&rsquo;ve built for similar businesses.
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
          We only take on 5 new clients per month. Book now to secure your spot.
        </p>
      </MotionSection>

      {/* ── Final CTA ── */}
      <MotionSection as="section" className={styles.finalCta}>
        <h2 className={styles.finalHeading}>
          Ready to stop leaking revenue?
        </h2>
        <p className={styles.finalSub}>
          Stop losing customers to competitors who respond faster.
          Let&rsquo;s build a system that actually makes you money.
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
