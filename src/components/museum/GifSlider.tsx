'use client';

import { useState, useRef, useEffect } from 'react';

interface GifSliderProps {
  videoSrc: string;
  alt?: string;
  heading?: string;
  subheading?: string;
}

export default function GifSlider({ 
  videoSrc, 
  alt = "Interactive timeline", 
  heading = "Historical Timeline",
  subheading = "Explore the changes over time"
}: GifSliderProps) {
  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isSeeking = useRef(false);

  // Map video progress to years (1980-2010)
  const START_YEAR = 1980;
  const END_YEAR = 2010;
  
  const getCurrentYear = () => {
    const progress = sliderValue / 100;
    const yearRange = END_YEAR - START_YEAR;
    const currentYear = START_YEAR + Math.round(progress * yearRange);
    return currentYear;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      if (!isSeeking.current && video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        setSliderValue(progress);
        setCurrentTime(video.currentTime);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setSliderValue(100);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const value = Number(e.target.value);
    setSliderValue(value);
    isSeeking.current = true;

    const time = (value / 100) * video.duration;
    video.currentTime = time;
    setCurrentTime(time);

    // Reset seeking flag after a short delay
    setTimeout(() => {
      isSeeking.current = false;
    }, 100);
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0e0d] to-black py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,182,126,0.03),transparent_70%)]" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          {subheading && (
            <p className="text-[#d9b67e]/60 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl md:text-5xl font-light text-gold-gradient glow-gold-text">
              {heading}
            </h2>
          )}
        </div>

        {/* Video Display */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              preload="metadata"
              playsInline
              aria-label={alt}
            />
            {/* Year Overlay */}
            <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-6 py-3 rounded-lg border border-[#d9b67e]/30">
              <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Year</div>
              <div className="text-4xl md:text-5xl font-light text-[#d9b67e] tabular-nums">
                {getCurrentYear()}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="flex-shrink-0 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 group"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Slider */}
              <div className="flex-1 relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider-custom"
                  style={{
                    background: `linear-gradient(to right, rgba(217,182,126,0.6) 0%, rgba(217,182,126,0.6) ${sliderValue}%, rgba(255,255,255,0.1) ${sliderValue}%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
              </div>

              {/* Year Display */}
              <div className="flex-shrink-0 text-[#d9b67e]/80 text-2xl font-light tabular-nums min-w-[5rem] text-right">
                {getCurrentYear()}
              </div>
            </div>

            {/* Timeline Labels */}
            <div className="flex justify-between text-sm text-white/50 px-14 font-light">
              <span>{START_YEAR}</span>
              <span className="text-white/30">Slide to explore timeline</span>
              <span>{END_YEAR}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-custom::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #d9b67e;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.2s ease;
        }

        .slider-custom::-webkit-slider-thumb:hover {
          background: #dfb899;
          transform: scale(1.2);
          box-shadow: 0 0 12px rgba(217, 182, 126, 0.6);
        }

        .slider-custom::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #d9b67e;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.2s ease;
        }

        .slider-custom::-moz-range-thumb:hover {
          background: #dfb899;
          transform: scale(1.2);
          box-shadow: 0 0 12px rgba(217, 182, 126, 0.6);
        }
      `}</style>
    </section>
  );
}

