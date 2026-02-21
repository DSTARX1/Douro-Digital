import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import { organizationSchema, webSiteSchema } from "@/lib/jsonld";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
