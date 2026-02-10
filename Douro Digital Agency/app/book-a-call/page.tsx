import type { Metadata } from "next";
import BookACall from "./BookACall";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call — Douro Digital",
  description:
    "Get a custom patient acquisition roadmap for your dental or aesthetic clinic. Book a free 30-minute strategy session with our team.",
};

export default function BookACallPage() {
  return <BookACall />;
}
