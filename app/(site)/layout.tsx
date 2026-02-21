import CustomCursor from "@/components/cursor/CustomCursor";
import { AudioProvider } from "@/lib/contexts/AudioContext";
import MuteToggle from "@/components/audio/MuteToggle";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SmoothScroll from "@/components/effects/SmoothScroll";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AudioProvider>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <NoiseOverlay />
      <ScrollProgress />
      <CustomCursor />
      <MuteToggle />
      <SmoothScroll>{children}</SmoothScroll>
    </AudioProvider>
  );
}
