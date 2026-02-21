import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douro Digital — AI-Powered Digital Agency",
  description:
    "We build AI solutions, custom software, and digital products for ambitious companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
