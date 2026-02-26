import MuteHint from "@/components/audio/MuteHint";
import MuteToggle from "@/components/audio/MuteToggle";
import CustomCursor from "@/components/cursor/CustomCursor";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import RouteProgress from "@/components/effects/RouteProgress";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SmoothScroll from "@/components/effects/SmoothScroll";
import { AudioProvider } from "@/lib/contexts/AudioContext";

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
      <RouteProgress />
      <ScrollProgress />
      <CustomCursor />
      <MuteHint />
      <MuteToggle />
      <SmoothScroll>{children}</SmoothScroll>
    </AudioProvider>
  );
}
