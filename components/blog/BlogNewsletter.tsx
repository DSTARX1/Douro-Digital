"use client";

import MotionSection from "@/components/animations/MotionSection";
import { type FormEvent, useState } from "react";
import styles from "./BlogNewsletter.module.css";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMsg("That doesn't look like a valid email.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <MotionSection className={styles.section}>
        <span className={styles.label}>Confirmed</span>
        <h2 className={styles.heading}>
          You&apos;re <em>in.</em>
        </h2>
        <p className={styles.sub}>
          Check your inbox (or spam, we won&apos;t judge). First issue drops
          soon.
        </p>
      </MotionSection>
    );
  }

  return (
    <MotionSection className={styles.section}>
      <span className={styles.label}>Newsletter</span>
      <h2 className={styles.heading}>
        Get the breakdowns <em>before everyone else does</em>
      </h2>
      <p className={styles.sub}>
        Every two weeks: one deep-dive on AI, automation, or building systems
        that don&apos;t suck.
      </p>
      <p className={styles.detail}>
        No &quot;5 tips to optimize your funnel.&quot; No motivational quotes.
        Just technical breakdowns, real examples, and the occasional story about
        how we f*cked something up so you don&apos;t have to.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@company.com"
          className={styles.input}
          aria-label="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className={styles.btn}
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Subscribing..."
            : "Send me the good stuff..."}
        </button>
      </form>
      {status === "error" && <p className={styles.error}>{errorMsg}</p>}
      <p className={styles.privacy}>
        We hate spam more than you do. Unsubscribe whenever. No hard feelings.
      </p>
    </MotionSection>
  );
}
