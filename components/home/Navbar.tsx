"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/home";
import { PixelStar, PixelArrowTopRight, PixelHamburger, PixelClose } from "@/components/icons/PixelIcons";
import ContactPanel from "./ContactPanel";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function handleDrawerLinkClick() {
    setDrawerOpen(false);
  }

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

        {/* Desktop nav */}
        <div className={styles.navRight}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive(link.href) ? styles.linkActive : ""}`}
            >
              <span className={styles.star}>
                <PixelStar size={10} color="var(--accent)" />
              </span>
              <span className={styles.linkIndex}>{link.index}</span>
              {link.label}
            </Link>
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

        {/* Hamburger button (mobile only) */}
        <button
          className={styles.hamburger}
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
        >
          {drawerOpen ? (
            <PixelClose size={20} color="var(--accent)" />
          ) : (
            <PixelHamburger size={20} color="var(--accent)" />
          )}
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className={styles.drawerOverlay}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.drawerNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.drawerLink} ${isActive(link.href) ? styles.drawerLinkActive : ""}`}
              onClick={handleDrawerLinkClick}
            >
              <span className={styles.drawerLinkIndex}>{link.index}</span>
              {link.label}
            </Link>
          ))}
          <button
            className={styles.drawerCta}
            onClick={() => {
              setDrawerOpen(false);
              setContactOpen(true);
            }}
          >
            Contact us
            <span className={styles.ctaArrow}>
              <PixelArrowTopRight size={14} color="currentColor" />
            </span>
          </button>
        </nav>
      </div>

      <ContactPanel
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
