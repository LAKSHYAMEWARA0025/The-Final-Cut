import { useRef, useState, useEffect, useCallback, SVGProps } from "react";
import { motion } from "framer-motion";

// --- SVG Icons (Unchanged) ---
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
  </svg>
);

const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
    <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5-21.5 48-48 48h96c26.5 0 48-21.5 48-48z"></path>
  </svg>
);

const VolumeUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" {...props}>
    <path d="M533.6 32.5C512.2 11.1 479.2 0 448 0h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c19.3 0 37.9 7.6 51.6 21.3l80 80c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L426.7 138.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l102.4 102.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c13.7-13.7 21.3-32.3 21.3-51.6v-16c0-31.2-11.1-64.2-32.5-85.6zM256 0c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM128 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"></path>
  </svg>
);

const VolumeMuteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" {...props}>
    <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>
  </svg>
);

const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" {...props}>
    <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
  </svg>
);

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" {...props}>
    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
  </svg>
);

// --- Data ---
const originalContent = [
  {
    title: "Motivational Content",
    videoSrc: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760275298/videoplayback_1_kcqas6.mp4",
  },
  {
    title: "Intro for a channel",
    videoSrc: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273112/long4_hpglcu.mp4",
  },
  {
    title: "Cinematic Story Telling",
    videoSrc: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273206/long1_coei4s.mp4",
  },
  {
    title: "Talking Head",
    videoSrc: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273232/long3_bsge2x.mp4",
  },
  {
    title: "Promotional Video",
    videoSrc: "https://res.cloudinary.com/dsol6ftem/video/upload/v1770214833/D2_Cello_1_fp3gfy.mp4",
  },
  {
    title: "Promotional Video",
    videoSrc: "https://res.cloudinary.com/dsol6ftem/video/upload/v1770216041/Yes_Securities__The_Wize_Whispers_1_infnyd.mp4",
  },
];

// --- Infinite Loop Setup ---
// Prepend Last item, Append First item
const extendedContent = [
  { ...originalContent[originalContent.length - 1], id: "clone-last" },
  ...originalContent.map((item, i) => ({ ...item, id: `original-${i}` })),
  { ...originalContent[0], id: "clone-first" },
];

// --- Single Video Card Component ---
const VideoCard = ({ videoSrc, title, isActive }: { videoSrc: string; title: string; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play active video, pause others
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isActive) {
      vid.play().catch(() => {});
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isPlaying) {
      vid.pause();
    } else {
      vid.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div 
      // Scale Effect: Active (100%), Others (90%) + Fade
      className={`relative flex flex-col gap-4 transition-all duration-500 ease-out
                 ${isActive ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-40 blur-[1px] z-0'}`}
      style={{ width: 'var(--card-width)', flexShrink: 0 }} 
    >
      {/* Title (Orange Gradient) */}
      <h3 className="text-xl md:text-2xl font-bold text-center truncate px-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
        {title}
      </h3>

      {/* Video Player Card */}
      <div className="relative aspect-video bg-[var(--color-card-bg)] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl border border-[var(--color-border)] group">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
        >
          {isMuted ? <VolumeMuteIcon className="w-5 h-5" /> : <VolumeUpIcon className="w-5 h-5" />}
        </button>

        {/* Play Overlay */}
        <div 
          onClick={togglePlay}
          className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity duration-300 cursor-pointer 
            ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
        >
          <div className="bg-black/40 p-4 rounded-full border border-white/10 backdrop-blur-sm transform transition hover:scale-110">
             {isPlaying ? <PauseIcon className="w-8 h-8 text-white" /> : <PlayIcon className="w-8 h-8 text-white" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LongFormSection = () => {
  // Start at index 1 because index 0 is the "Clone Last"
  const [index, setIndex] = useState(1);
  const [isResetting, setIsResetting] = useState(false);
  
  // Gap between cards in px
  const GAP = 32; 

  // --- Infinite Loop Handlers ---
  
  const handleNext = useCallback(() => {
    if (isResetting) return;
    setIndex((prev) => prev + 1);
  }, [isResetting]);

  const handlePrev = useCallback(() => {
    if (isResetting) return;
    setIndex((prev) => prev - 1);
  }, [isResetting]);

  // Handle Snap Effect when reaching clones
  const onAnimationComplete = () => {
    if (index === extendedContent.length - 1) {
      // Reached "Clone First" at the end -> Snap to "Real First" (Index 1)
      setIsResetting(true);
      setIndex(1);
    } else if (index === 0) {
      // Reached "Clone Last" at the start -> Snap to "Real Last" (Length - 2)
      setIsResetting(true);
      setIndex(extendedContent.length - 2);
    }
  };

  // Re-enable animation after snap (brief delay to allow DOM update)
  useEffect(() => {
    if (isResetting) {
      const timer = setTimeout(() => {
        setIsResetting(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isResetting]);

  return (
    <section className="bg-black text-[var(--color-text-primary)] py-20 overflow-hidden font-sans border-b border-[var(--color-border)]">
      
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-16 px-4">
        Long Form{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
          Content
        </span>
      </h2>

      {/* CAROUSEL CONTAINER */}
      <div className="relative w-full flex flex-col items-center gap-10" style={{ '--card-width': 'min(75vw, 600px)' } as React.CSSProperties}>
        
        {/* Track */}
        <div className="w-full flex justify-center overflow-visible">
          <motion.div 
            className="flex gap-8 items-start"
            animate={{
              // Center the current card
              x: `calc(50% - (var(--card-width) / 2) - (${index} * (var(--card-width) + ${GAP}px)))`
            }}
            // Disable animation during 'snap' reset
            transition={isResetting ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
            onAnimationComplete={onAnimationComplete}
          >
            {extendedContent.map((content, i) => (
              <VideoCard 
                key={`${content.id}-${i}`} 
                {...content} 
                isActive={i === index} 
              />
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons (Below) */}
        <div className="flex items-center gap-6 mt-4 z-20">
          <button
            onClick={handlePrev}
            disabled={isResetting}
            className="bg-[var(--color-card-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-white rounded-full p-4 transition-all shadow-lg hover:scale-110 hover:bg-[var(--color-card-bg)]/80 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous Video"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={isResetting}
            className="bg-[var(--color-card-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-white rounded-full p-4 transition-all shadow-lg hover:scale-110 hover:bg-[var(--color-card-bg)]/80 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next Video"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LongFormSection;