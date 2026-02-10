import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PixelArrowRight } from "@/app/_components/icons/PixelIcons";
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
        <h3 className={styles.ctaHeading}>Want help with HIPAA compliance?</h3>
        <p className={styles.ctaSub}>
          We help healthcare teams build AI-powered workflows that are secure,
          compliant, and actually useful.
        </p>
        <Link href="/book-a-call" className={styles.ctaBtn}>
          Book a call <PixelArrowRight size={14} color="currentColor" />
        </Link>
      </div>
    </section>
  );
}
