"use client";

import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface AudioContextValue {
  isMuted: boolean;
  setMuted: (muted: boolean) => void;
  registerVideo: (video: HTMLVideoElement) => void;
  unregisterVideo: (video: HTMLVideoElement) => void;
}

const AudioCtx = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const videosRef = useRef<Set<HTMLVideoElement>>(new Set());

  // Keep a ref in sync so registerVideo always applies the latest muted state
  const isMutedRef = useRef(isMuted);
  useEffect(() => {
    isMutedRef.current = isMuted;
    // Safety net: re-sync all videos whenever isMuted changes
    for (const v of videosRef.current) {
      v.muted = isMuted;
    }
  }, [isMuted]);

  const syncMuted = useCallback((muted: boolean) => {
    for (const v of videosRef.current) {
      v.muted = muted;
    }
  }, []);

  const setMuted = useCallback(
    (muted: boolean) => {
      setIsMuted(muted);
      syncMuted(muted);
    },
    [syncMuted],
  );

  const registerVideo = useCallback((video: HTMLVideoElement) => {
    videosRef.current.add(video);
    video.muted = isMutedRef.current;
  }, []);

  const unregisterVideo = useCallback((video: HTMLVideoElement) => {
    videosRef.current.delete(video);
  }, []);

  const value = useMemo(
    () => ({ isMuted, setMuted, registerVideo, unregisterVideo }),
    [isMuted, setMuted, registerVideo, unregisterVideo],
  );

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
