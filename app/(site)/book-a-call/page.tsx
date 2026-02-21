import type { Metadata } from "next";
import BookACall from "./BookACall";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call \u2014 Douro Digital",
  description:
    "30-minute call. No pitch deck. We\u2019ll look at where you\u2019re bleeding revenue and whether AI agents or custom software can fix it.",
  openGraph: {
    title: "Book a Free Strategy Call \u2014 Douro Digital",
    description:
      "30-minute call. No pitch deck. We\u2019ll look at where you\u2019re bleeding revenue and whether AI agents or custom software can fix it.",
    type: "website",
    url: "/book-a-call",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function BookACallPage() {
  return <BookACall />;
}
