"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { footerDescription, footerContact, footerNav } from "@/app/_data/home";
import styles from "./Footer.module.css";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sync = () => {
      document.documentElement.style.setProperty("--footer-h", `${el.offsetHeight}px`);
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <footer ref={ref} className={styles.footer}>
      {/* Full-bleed image (top — may extend above viewport) */}
      <div className={styles.imageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          suppressHydrationWarning
          src="/images/douro-wordmark.jpeg"
          alt="Douro Digital"
          width={1440}
          height={600}
          className={styles.footerImg}
        />
      </div>

      {/* Links + description (bottom — always visible) */}
      <div className={styles.top}>
        <p className={styles.desc}>{footerDescription}</p>
        <div className={styles.columns}>
          <div className={styles.column}>
            <span className={styles.colLabel}>Navigate</span>
            {footerNav.map((l) => (
              <Link key={l.href} href={l.href} className={styles.colLink}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className={styles.column}>
            <span className={styles.colLabel}>Contact</span>
            <a href={`mailto:${footerContact.email}`} className={styles.colLink}>
              {footerContact.email}
            </a>
            <span className={styles.colLink}>{footerContact.phone}</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} Douro Digital. All rights reserved.</span>
        <span>{footerContact.address}</span>
      </div>
    </footer>
  );
}
