import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PixelArrowRight } from "@/components/icons/PixelIcons";
import styles from "./BlogPostBody.module.css";

interface Props {
  content: string;
}

export default function BlogPostBody({ content }: Props) {
  return (
    <section className={styles.body}>
      <div className="prose">
        <MDXRemote source={content} />
      </div>
      <div className={styles.cta}>
        <h3 className={styles.ctaHeading}>Want help building systems that actually work?</h3>
        <p className={styles.ctaSub}>
          We build AI agents and custom software for businesses tired of paying
          for tools that don&apos;t do anything.
        </p>
        <Link href="/book-a-call" className={styles.ctaBtn}>
          Book a call <PixelArrowRight size={14} color="currentColor" />
        </Link>
      </div>
    </section>
  );
}
