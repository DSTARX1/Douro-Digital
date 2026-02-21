import CustomCursor from "@/components/cursor/CustomCursor";
import { AudioProvider } from "@/lib/contexts/AudioContext";
import MuteToggle from "@/components/audio/MuteToggle";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AudioProvider>
      <CustomCursor />
      <MuteToggle />
      {children}
    </AudioProvider>
  );
}
