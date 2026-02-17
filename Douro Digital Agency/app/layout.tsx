import type { Metadata } from "next";
import CustomCursor from "@/app/_components/cursor/CustomCursor";
import { AudioProvider } from "@/app/_contexts/AudioContext";
import MuteToggle from "@/app/_components/audio/MuteToggle";
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
      <body suppressHydrationWarning>
        <AudioProvider>
          <CustomCursor />
          <MuteToggle />
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
