'use client';

import { createContext, useCallback, useContext, useRef, useState } from 'react';

interface MuseumAudioContextValue {
  startAudio: () => void;
  toggleMute: () => void;
  isMuted: boolean;
  hasStarted: boolean;
}

const MuseumAudioContext = createContext<MuseumAudioContextValue | null>(null);

export function MuseumAudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startAudio = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = isMuted ? 0 : 0.15;
    audioRef.current
      .play()
      .then(() => {
        setHasStarted(true);
      })
      .catch((err) => {
        console.warn('Audio autoplay blocked', err);
      });
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;

    setIsMuted((prev) => {
      const next = !prev;
      audioRef.current!.volume = next ? 0 : 0.15;
      return next;
    });
  }, []);

  return (
    <MuseumAudioContext.Provider value={{ startAudio, toggleMute, isMuted, hasStarted }}>
      {children}
      <audio ref={audioRef} loop>
        <source src="/audio/shamanic-meditation.mp3" type="audio/mp3" />
      </audio>
    </MuseumAudioContext.Provider>
  );
}

export function useMuseumAudio() {
  const context = useContext(MuseumAudioContext);
  if (!context) {
    throw new Error('useMuseumAudio must be used within MuseumAudioProvider');
  }
  return context;
}
