import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import styles from "../privacy/privacy.module.css";

export const metadata = {
  title: "Terms of Use — Douro Digital",
  description:
    "The rules of using our website. They're reasonable, we promise.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "var(--bg)",
          marginBottom: "var(--footer-h, 600px)",
        }}
      >
        <Navbar />
        <main id="main-content" className={styles.page}>
          <div className={styles.container}>
            <p className={styles.label}>Legal</p>
            <h1 className={styles.heading}>Terms of Use</h1>
            <p className={styles.updated}>Last updated: February 27, 2026</p>

            <div className={styles.body}>
              <p>
                These terms govern your use of the Douro Digital website
                (wearedouro.com). By using the site, you agree to these terms.
                If you don&apos;t agree, that&apos;s fine &mdash; but please
                don&apos;t use the site.
              </p>

              <h2>What This Site Is</h2>
              <p>
                This is the website for Douro Digital. We use it to show our
                work, publish blog posts, let people book calls with us, and
                collect newsletter signups. That&apos;s it.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                Everything on this site &mdash; the design, the code, the copy,
                the blog posts, the case studies, the images &mdash; belongs to
                Douro Digital unless stated otherwise.
              </p>
              <p>
                You&apos;re welcome to link to our content, quote us (with
                attribution), or share our blog posts. You&apos;re not welcome
                to copy our site, scrape our content, or pass our work off as
                yours.
              </p>

              <h2>Your Use of the Site</h2>
              <p>Use the site normally. Don&apos;t:</p>
              <ul>
                <li>Try to break it, hack it, or exploit vulnerabilities</li>
                <li>Scrape content or data at scale</li>
                <li>Use it to send spam, malware, or anything malicious</li>
                <li>
                  Impersonate us or pretend to be affiliated with us (unless you
                  actually are)
                </li>
                <li>Use automated tools to overload our servers or APIs</li>
              </ul>
              <p>Basically: be a normal person using a normal website.</p>

              <h2>Blog Content</h2>
              <p>
                Our blog posts are written to be helpful and informative, but
                they&apos;re not professional advice. We&apos;re developers and
                marketers, not lawyers or accountants. If something we write
                about affects a legal or financial decision, consult an actual
                professional.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                We occasionally link to other websites. We&apos;re not
                responsible for their content, their privacy practices, or
                anything else they do. A link isn&apos;t an endorsement &mdash;
                it&apos;s just a link.
              </p>

              <h2>Booking Calls</h2>
              <p>
                When you book a call through our site, you&apos;re using Cal.com
                (a third-party service). Their terms apply to that interaction.
                Booking a call doesn&apos;t create a contractual obligation on
                either side &mdash; it&apos;s just a conversation.
              </p>

              <h2>Disclaimers</h2>
              <p>
                The site is provided &ldquo;as is.&rdquo; We do our best to keep
                it running, accurate, and up to date, but we don&apos;t
                guarantee uptime, error-free content, or that everything will
                work perfectly on every device and browser combination known to
                humanity.
              </p>
              <p>
                We&apos;re not liable for any damages arising from your use of
                the site. This includes (but isn&apos;t limited to) lost
                revenue, data loss, or hurt feelings from reading our blog
                posts.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Douro Digital&apos;s
                total liability for any claim related to this website is limited
                to the amount you paid us to use it &mdash; which is nothing,
                because the website is free to use.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any
                disputes will be resolved in the courts of England and Wales. If
                you&apos;re outside the UK, the relevant local consumer
                protection laws in your jurisdiction may also apply where
                required.
              </p>

              <h2>Changes</h2>
              <p>
                We may update these terms from time to time. When we do,
                we&apos;ll update the date at the top. Continued use of the site
                after changes means you accept the updated terms.
              </p>

              <h2>Contact</h2>
              <p>Questions or concerns about these terms?</p>
              <p>
                <a href="mailto:support@wearedouro.com">
                  support@wearedouro.com
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
