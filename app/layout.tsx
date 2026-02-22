import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Analytics from "@/components/Analytics";
import { organizationSchema, webSiteSchema } from "@/lib/jsonld";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dourodigital.com"),
  title: {
    default: "Douro Digital — AI-Powered Digital Agency",
    template: "%s | Douro Digital",
  },
  description:
    "We build AI solutions, custom software, and digital products for ambitious companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={caveat.variable}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()).replace(/</g, '\\u003c') }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
