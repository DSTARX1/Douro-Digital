"use client";

import MotionSection from "@/components/animations/MotionSection";
import AnimatedUnderline from "@/components/effects/AnimatedUnderline";
import Handwritten from "@/components/effects/Handwritten";
import Highlight from "@/components/effects/Highlight";
import Accordion from "@/components/home/Accordion";
import { aboutValues } from "@/data/about";
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <MotionSection className={styles.section}>
      <div className={styles.columns}>
        <div className={styles.left}>
          <p className={styles.label}>About us</p>
          <h2 className={styles.leadIn}>Lemme guess...</h2>
          <div className={styles.body}>
            <p>
              You&apos;re running traffic. Ads are performing (ish). Leads are
              coming in.{" "}
              <Handwritten>And then they vanish into the void.</Handwritten>
            </p>
            <p>
              Because you didn&apos;t respond in 5 minutes. Because your CRM
              didn&apos;t notify you. Because the lead came in at 8pm on a
              Saturday and your team was (rightfully) not working.
            </p>
            <p>
              Or maybe you&apos;re drowning in tools. Salesforce. HubSpot.
              Zapier. Calendly. Slack. Notion. Stripe. Google Analytics.{" "}
              <Highlight>Fourteen subscriptions, zero integrations</Highlight>,
              and you&apos;re STILL manually copying data between them like
              it&apos;s a punishment from the gods.
            </p>
            <p>
              Your team is burned out. Your margins are shrinking. And every
              time you ask your agency for help, you get a deck full of
              &ldquo;insights&rdquo; and zero actual solutions.
            </p>
          </div>

          <h3 className={styles.subheading}>Here&apos;s what we do:</h3>
          <div className={styles.body}>
            <p>
              We build <AnimatedUnderline>AI agents</AnimatedUnderline> that
              pick up the phone, qualify leads, book appointments, and follow up
              &mdash; 24/7, no sick days, no vacation requests.
            </p>
            <p>
              We build <AnimatedUnderline>custom software</AnimatedUnderline>{" "}
              that replaces your <Highlight>SaaS graveyard</Highlight> with one
              system that actually does what you need (not what some VC-funded
              startup THINKS you need).
            </p>
            <p>
              We audit your stack, kill the bloat, and build a{" "}
              <Highlight>revenue system</Highlight> instead of a cost center.
            </p>
          </div>

          <p className={styles.closer}>
            Just Isaac, Mario, Danny, and Josh &mdash; building the thing you
            need so your business stops{" "}
            <AnimatedUnderline>bleeding money</AnimatedUnderline>.
          </p>
        </div>
        <div className={styles.right}>
          <Accordion items={aboutValues} defaultOpen={0} />
        </div>
      </div>
    </MotionSection>
  );
}
