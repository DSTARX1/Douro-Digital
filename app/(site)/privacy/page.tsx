import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy — Douro Digital",
  description:
    "How we handle your data. Short version: we collect almost nothing, we don't sell anything, and we don't use cookies to track you.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
            <h1 className={styles.heading}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: February 27, 2026</p>

            <div className={styles.body}>
              <p>
                This is the privacy policy for Douro Digital (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; &ldquo;our&rdquo;). We build AI agents and
                custom software. This page explains what data we collect, why,
                and what we do with it.
              </p>
              <p>
                Short version: we collect almost nothing, we don&apos;t sell
                anything, and we don&apos;t use cookies to track you.
              </p>

              <h2>What We Collect</h2>

              <h3>Website Analytics (Automatic)</h3>
              <p>
                When you visit our site, we collect basic, anonymous page view
                data. This is not Google Analytics or any third-party tracker.
                It&apos;s our own system, hosted on our own servers.
              </p>
              <p>What we record per page view:</p>
              <ul>
                <li>
                  <strong>Page path</strong> &mdash; which page you visited
                  (e.g. &ldquo;/about&rdquo;)
                </li>
                <li>
                  <strong>Referrer</strong> &mdash; where you came from (e.g.
                  Google, a link on Twitter)
                </li>
                <li>
                  <strong>UTM parameters</strong> &mdash; if you clicked a
                  marketing link, we see which campaign it was
                </li>
                <li>
                  <strong>Country</strong> &mdash; derived from your connection,
                  not precise location
                </li>
                <li>
                  <strong>Device type and browser</strong> &mdash; desktop vs
                  mobile, Chrome vs Safari, etc.
                </li>
              </ul>
              <p>What we do NOT record:</p>
              <ul>
                <li>
                  Your IP address (used for rate-limiting only, never stored)
                </li>
                <li>Your name, email, or any personal identifier</li>
                <li>No user IDs, no session IDs, no fingerprinting</li>
              </ul>
              <p>
                This data is completely anonymous. We can&apos;t identify you
                from it. We use it to understand which pages people visit and
                where our traffic comes from. That&apos;s it.
              </p>

              <h3>Newsletter Signup (You Provide This)</h3>
              <p>
                If you subscribe to our newsletter, we collect your{" "}
                <strong>email address</strong>. Nothing else. No name, no phone
                number, no blood type.
              </p>
              <p>
                Your email is stored in our own database (not Mailchimp, not
                ConvertKit, not some third-party platform). We use it to send
                you our newsletter. You can unsubscribe at any time, and
                we&apos;ll delete your email when you do.
              </p>

              <h3>Booking a Call (Cal.com)</h3>
              <p>
                When you book a call with us, you use a Cal.com scheduling
                widget embedded on our site. Cal.com is a third-party service.
                When you fill in your name, email, and pick a time slot, that
                data goes to Cal.com&apos;s servers.
              </p>
              <p>
                We receive the booking details (your name, email, and the time
                you picked). Cal.com has its own privacy policy that governs how
                they handle your data within their platform. We recommend
                reviewing it at{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cal.com/privacy
                </a>
                .
              </p>

              <h2>Cookies</h2>
              <p>
                We don&apos;t set any cookies on visitors. None. No tracking
                cookies, no analytics cookies, no &ldquo;necessary&rdquo;
                cookies, no cookie banners asking you to accept cookies that
                don&apos;t exist.
              </p>
              <p>
                The only cookie on this entire site is an admin session cookie (
                <code>dd_admin_session</code>) used exclusively for our internal
                admin panel. If you&apos;re not logging into our admin
                dashboard, you&apos;ll never see it.
              </p>

              <h2>Third-Party Services</h2>
              <p>Here&apos;s every external service that touches your data:</p>
              <ul>
                <li>
                  <strong>Cal.com</strong> &mdash; booking widget. Receives your
                  name, email, and meeting details when you schedule a call.
                </li>
                <li>
                  <strong>Vercel</strong> &mdash; our hosting provider. All web
                  requests pass through their infrastructure (like any hosted
                  website).
                </li>
              </ul>
              <p>
                That&apos;s the complete list. No Google Analytics, no Facebook
                Pixel, no Hotjar, no Intercom, no ad retargeting. Nothing.
              </p>

              <h2>How We Use Your Data</h2>
              <ul>
                <li>
                  <strong>Analytics</strong> &mdash; to understand our traffic
                  and improve the site
                </li>
                <li>
                  <strong>Newsletter emails</strong> &mdash; to send you our
                  newsletter (and nothing else)
                </li>
                <li>
                  <strong>Booking data</strong> &mdash; to have a call with you
                </li>
              </ul>
              <p>
                We don&apos;t sell your data. We don&apos;t share it with
                advertisers. We don&apos;t use it for profiling or targeted ads.
                We don&apos;t have ads.
              </p>

              <h2>Data Storage and Security</h2>
              <p>
                Your data is stored in a PostgreSQL database with encrypted
                connections. Access is restricted to our team. We use HTTPS
                everywhere, enforce strict security headers, and follow
                reasonable security practices.
              </p>
              <p>
                We retain analytics data indefinitely (it&apos;s anonymous).
                Newsletter emails are retained until you unsubscribe, at which
                point they&apos;re deleted.
              </p>

              <h2>Your Rights (GDPR)</h2>
              <p>
                If you&apos;re in the UK or European Economic Area, you have the
                right to:
              </p>
              <ul>
                <li>
                  <strong>Access</strong> &mdash; ask us what data we have about
                  you
                </li>
                <li>
                  <strong>Correction</strong> &mdash; ask us to fix any
                  incorrect data
                </li>
                <li>
                  <strong>Deletion</strong> &mdash; ask us to delete your data
                </li>
                <li>
                  <strong>Portability</strong> &mdash; ask for your data in a
                  portable format
                </li>
                <li>
                  <strong>Objection</strong> &mdash; object to how we process
                  your data
                </li>
              </ul>
              <p>
                Since the only personal data we hold is newsletter emails,
                exercising these rights is straightforward: email us and
                we&apos;ll handle it.
              </p>

              <h2>Your Rights (CCPA)</h2>
              <p>
                If you&apos;re a California resident, you have the right to:
              </p>
              <ul>
                <li>Know what personal information we collect and why</li>
                <li>Request deletion of your personal information</li>
                <li>
                  Opt out of the sale of your personal information (we
                  don&apos;t sell it, so there&apos;s nothing to opt out of)
                </li>
                <li>Non-discrimination for exercising your rights</li>
              </ul>

              <h2>Children</h2>
              <p>
                This site isn&apos;t directed at anyone under 18. We don&apos;t
                knowingly collect data from minors. If you&apos;re a parent and
                think your child has submitted data to us, contact us and
                we&apos;ll delete it.
              </p>

              <h2>Changes</h2>
              <p>
                If we change this policy, we&apos;ll update the date at the top.
                We won&apos;t send you a 47-paragraph email about it, but the
                latest version will always be here.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about your data? Want something deleted? Just want to
                say hi?
              </p>
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
