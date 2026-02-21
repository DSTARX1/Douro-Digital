"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MotionSection from "@/components/animations/MotionSection";
import MagneticCard from "@/components/cursor/MagneticCard";
import { PixelChevronLeft, PixelChevronRight, PixelStar } from "@/components/icons/PixelIcons";
import { testimonials, videoTestimonials } from "@/data/home";
import styles from "./HomeTestimonial.module.css";

const DURATION = 1;
const EASE = "power2.inOut";
const INTERVAL = 5000;

function useCarousel(
  count: number,
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  const idx = useRef(0);
  const [active, setActive] = useState(0);
  const busy = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);
  const paused = useRef(false);
  const wrapIdx = useRef(gsap.utils.wrap(0, count));

  const goTo = useCallback(
    (next: number, dir: 1 | -1) => {
      if (busy.current || !containerRef.current || next === idx.current) return;
      busy.current = true;

      const slides =
        containerRef.current.querySelectorAll<HTMLElement>("[data-slide]");
      const from = slides[idx.current];
      const to = slides[next];

      gsap.set(to, {
        x: dir > 0 ? "100%" : "-100%",
        opacity: 0,
        visibility: "visible",
      });

      gsap
        .timeline({
          onComplete() {
            gsap.set(from, { visibility: "hidden" });
            busy.current = false;
          },
        })
        .to(
          from,
          {
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
            duration: DURATION,
            ease: EASE,
          },
          0
        )
        .to(to, { x: "0%", opacity: 1, duration: DURATION, ease: EASE }, 0);

      idx.current = next;
      setActive(next);
    },
    [count, containerRef]
  );

  const advance = useCallback(
    (dir: 1 | -1) => goTo(wrapIdx.current(idx.current + dir), dir),
    [goTo]
  );

  const resetTimer = useCallback(() => {
    clearInterval(timer.current);
    if (!paused.current) {
      timer.current = setInterval(() => advance(1), INTERVAL);
    }
  }, [advance]);

  const next = useCallback(() => {
    advance(1);
    resetTimer();
  }, [advance, resetTimer]);

  const prev = useCallback(() => {
    advance(-1);
    resetTimer();
  }, [advance, resetTimer]);

  const jumpTo = useCallback(
    (i: number) => {
      if (i === idx.current) return;
      goTo(i, i > idx.current ? 1 : -1);
      resetTimer();
    },
    [goTo, resetTimer]
  );

  const pause = useCallback(() => {
    paused.current = true;
    clearInterval(timer.current);
  }, []);

  const play = useCallback(() => {
    paused.current = false;
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    timer.current = setInterval(() => advance(1), INTERVAL);
    return () => clearInterval(timer.current);
  }, [advance]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      containerRef.current
        .querySelectorAll<HTMLElement>("[data-slide]")
        .forEach((el, i) => {
          gsap.set(
            el,
            i === 0
              ? { x: "0%", opacity: 1, visibility: "visible" }
              : { x: "100%", opacity: 0, visibility: "hidden" }
          );
        });
    },
    { scope: containerRef }
  );

  return { active, next, prev, jumpTo, pause, play };
}

const ArrowLeft = () => <PixelChevronLeft size={20} />;
const ArrowRight = () => <PixelChevronRight size={20} />;

export default function HomeTestimonial() {
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const text = useCarousel(testimonials.length, textRef);
  const video = useCarousel(videoTestimonials.length, videoRef);

  return (
    <MotionSection className={styles.section}>
      {/* Left: text testimonials */}
      <div
        className={styles.left}
        onMouseEnter={text.pause}
        onMouseLeave={text.play}
      >
        <div className={styles.quoteIcon}>
          <PixelStar size={28} color="#D42918" animate />
        </div>

        <div ref={textRef} className={styles.textSlides}>
          {testimonials.map((t, i) => (
            <div key={i} data-slide className={styles.textSlide}>
              <h3 className={styles.quote}>{t.quote}</h3>
              <div className={styles.author}>
                <div>
                  <p className={styles.authorName}>{t.author}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.nav}>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === text.active ? styles.dotActive : ""}`}
                onClick={() => text.jumpTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className={styles.arrows}>
            <button
              className={styles.arrow}
              onClick={text.prev}
              aria-label="Previous testimonial"
            >
              <ArrowLeft />
            </button>
            <button
              className={styles.arrow}
              onClick={text.next}
              aria-label="Next testimonial"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Right: video testimonials */}
      <div
        className={styles.right}
        onMouseEnter={video.pause}
        onMouseLeave={video.play}
      >
        <MagneticCard maxMove={20} showCursor>
          <div ref={videoRef} className={styles.videoSlides}>
            {videoTestimonials.map((v, i) => (
              <div key={i} data-slide className={styles.videoSlide}>
                <div className={styles.videoCard}>
                  <div className={styles.videoOverlay}>
                    <p className={styles.videoName}>{v.name}</p>
                    <p className={styles.videoRole}>
                      {v.role}, {v.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MagneticCard>

        <div className={styles.nav}>
          <div className={styles.dots}>
            {videoTestimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === video.active ? styles.dotActive : ""}`}
                onClick={() => video.jumpTo(i)}
                aria-label={`Video testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className={styles.arrows}>
            <button
              className={styles.arrow}
              onClick={video.prev}
              aria-label="Previous video"
            >
              <ArrowLeft />
            </button>
            <button
              className={styles.arrow}
              onClick={video.next}
              aria-label="Next video"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
