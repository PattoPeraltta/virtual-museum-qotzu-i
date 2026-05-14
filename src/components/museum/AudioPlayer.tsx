'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AmbientAudioControls {
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<AmbientAudioControls | null>(null);
  const isPlayingRef = useRef(isPlaying);
  const volumeRef = useRef(volume);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const AudioContext =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(audioContext.destination);

    const oscillators: OscillatorNode[] = [];
    const frequencies = [65.41, 98.0, 130.81, 196.0];

    frequencies.forEach((freq, index) => {
      const osc = audioContext.createOscillator();
      const oscGain = audioContext.createGain();

      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      oscGain.gain.value = 0.15 / (index + 1);

      osc.connect(oscGain);
      oscGain.connect(gainNode);
      osc.start();
      oscillators.push(osc);
    });

    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();
    lfo.frequency.value = 0.1;
    lfoGain.gain.value = 5;
    lfo.connect(lfoGain);
    lfoGain.connect(oscillators[0].frequency);
    lfo.start();

    audioRef.current = {
      play: () => {
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
        gainNode.gain.linearRampToValueAtTime(volumeRef.current, audioContext.currentTime + 2);
      },
      pause: () => {
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
      },
      setVolume: (v: number) => {
        if (isPlayingRef.current) {
          gainNode.gain.linearRampToValueAtTime(v, audioContext.currentTime + 0.5);
        }
      },
    };

    return () => {
      oscillators.forEach((osc) => osc.stop());
      lfo.stop();
      audioContext.close();
    };
  }, []);

  useEffect(() => {
    volumeRef.current = volume;
    audioRef.current?.setVolume(volume);
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowPrompt(false);
  };

  return (
    <>
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center px-8"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                    '0 0 40px rgba(212, 175, 55, 0.5)',
                    '0 0 20px rgba(212, 175, 55, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 mx-auto mb-8 rounded-full border-2 border-gold flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
              >
                <svg className="w-10 h-10 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <h2 className="text-3xl md:text-4xl text-gold-gradient font-light mb-4 tracking-wider">
                Enter the Experience
              </h2>
              <p className="text-gray-400 text-lg max-w-md mx-auto mb-6">
                This immersive journey includes ambient audio for the full mystical experience
              </p>
              <button
                onClick={togglePlay}
                className="px-8 py-3 border border-gold/50 text-gold hover:bg-gold/10 transition-all duration-300 tracking-widest text-sm uppercase"
              >
                Begin with Sound
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="block mx-auto mt-4 text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                Continue without sound
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
      >
        <AnimatePresence>
          {isPlaying && (
            <motion.input
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-1 bg-charcoal-light rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full"
            />
          )}
        </AnimatePresence>
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-charcoal border border-gold/30 flex items-center justify-center hover:border-gold/60 transition-all duration-300 group"
          aria-label={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
        >
          {isPlaying ? (
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 h-4 bg-gold rounded-full"
                />
              ))}
            </div>
          ) : (
            <svg className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </motion.div>
    </>
  );
}
