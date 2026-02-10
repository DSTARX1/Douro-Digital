"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MotionSection from "@/app/_components/animations/MotionSection";
import { PixelPlay, PixelStar, PixelArrowTopRight } from "@/app/_components/icons/PixelIcons";
import styles from "./BookACall.module.css";

const CAL_LINK = "dourodigital";
const CAL_URL = `https://cal.com/${CAL_LINK}`;

function ArrowIcon() {
  return <PixelArrowTopRight size={14} color="currentColor" />;
}

function CheckIcon() {
  return (
    <PixelStar size={14} color="var(--accent)" />
  );
}

export default function BookACall() {
  useEffect(() => {
    // Load Cal.com embed script
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.head.appendChild(d.createElement("script"));
          s.src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          (api as any).q = (api as any).q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", { origin: "https://cal.com" });
    Cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink: CAL_LINK,
      layout: "month_view",
    });
    Cal("ui", {
      styles: { branding: { brandColor: "#D42918" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

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

        {/* VSL placeholder */}
        <div className={styles.videoWrap}>
          <div className={styles.videoCard}>
            <div className={styles.playBtn}>
              <PixelPlay size={28} color="#fff" />
            </div>
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

        <div id="cal-embed" className={styles.calEmbedInner} />

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
