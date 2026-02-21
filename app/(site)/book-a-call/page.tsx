import type { Metadata } from "next";
import BookACall from "./BookACall";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call — Douro Digital",
  description:
    "30-minute call. No pitch deck. We\u2019ll look at where you\u2019re bleeding revenue and whether AI agents or custom software can fix it.",
};

export default function BookACallPage() {
  return <BookACall />;
}
