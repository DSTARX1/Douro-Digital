import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import MotionSection from "@/components/animations/MotionSection";
import { PixelArrowRight, PixelArrowTopRight } from "@/components/icons/PixelIcons";
import styles from "./BlogPostBody.module.css";

import type { Options as PrettyCodeOptions } from "rehype-pretty-code";

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
};

interface Props {
  content: string;
  relatedCaseStudy?: {
    slug: string;
    title: string;
    subtitle: string;
  };
}

export default function BlogPostBody({ content, relatedCaseStudy }: Props) {
  return (
    <MotionSection as="section" className={styles.body}>
      <div className="prose">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
        />
      </div>
      {relatedCaseStudy && (
        <Link
          href={`/case-studies/${relatedCaseStudy.slug}`}
          className={styles.callout}
        >
          <span className={styles.calloutLabel}>Related case study</span>
          <span className={styles.calloutTitle}>
            {relatedCaseStudy.title}: {relatedCaseStudy.subtitle}
          </span>
          <span className={styles.calloutLink}>
            View case study <PixelArrowTopRight size={12} color="currentColor" />
          </span>
        </Link>
      )}
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
    </MotionSection>
  );
}
