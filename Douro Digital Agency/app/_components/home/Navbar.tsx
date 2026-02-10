"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/_data/home";
import { PixelStar, PixelArrowTopRight } from "@/app/_components/icons/PixelIcons";
import ContactPanel from "./ContactPanel";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/douro-logo.png"
            alt="Douro Digital"
            width={70}
            height={70}
            className={styles.logo}
            priority
            suppressHydrationWarning
          />
        </Link>

        <div className={styles.navRight}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              <span className={styles.star}>
                <PixelStar size={10} color="var(--accent)" />
              </span>
              {link.label}
            </a>
          ))}
          <button
            className={styles.cta}
            onClick={() => setContactOpen(true)}
          >
            Contact us
            <span className={styles.ctaArrow}>
              <PixelArrowTopRight size={14} color="currentColor" />
            </span>
          </button>
        </div>
      </nav>

      <ContactPanel
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
