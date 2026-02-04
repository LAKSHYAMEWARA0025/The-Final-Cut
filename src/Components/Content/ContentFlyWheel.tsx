import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Icons ---
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-red-600">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077b5]">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-[#E1306C]">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);

const ShortsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-white">
    <path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 00-3.36-6 3.74 3.74 0 00-2.12.66L6.6 8.5a3.74 3.74 0 002.16 6.8l1.2.5-1.43.76a3.74 3.74 0 003.36 6 3.74 3.74 0 002.12-.66L20.12 16.7a3.74 3.74 0 00-2.35-6.38zM8.76 13.9a1.73 1.73 0 01-1-3.14l5.9-4.76a1.74 1.74 0 011 3.14l-5.9 4.76z" />
  </svg>
);

// --- Items Configuration ---
const items = [
  { 
    id: 'instagram',
    icon: InstagramIcon, 
    label: "Instagram Reels", 
    color: "bg-pink-900/20 border-pink-500/50", 
    style: { left: "100%", top: "50%" }, // Right Edge
    appearStart: 0.1, 
    appearEnd: 0.25
  },
  { 
    id: 'shorts',
    icon: ShortsIcon, 
    label: "Youtube Shorts", 
    color: "bg-stone-800/50 border-white/20", 
    style: { left: "50%", top: "100%" }, // Bottom Edge
    appearStart: 0.35,
    appearEnd: 0.5
  },
  { 
    id: 'youtube',
    icon: YouTubeIcon, 
    label: "Youtube Long", 
    color: "bg-red-900/20 border-red-500/50", 
    style: { left: "0%", top: "50%" }, // Left Edge
    appearStart: 0.6,
    appearEnd: 0.75
  },
  { 
    id: 'linkedin',
    icon: LinkedInIcon, 
    label: "LinkedIn Posts", 
    color: "bg-blue-900/20 border-blue-500/50", 
    style: { left: "50%", top: "0%" }, // Top Edge
    appearStart: 0.85,
    appearEnd: 1.0
  },
];

const ContentFlywheel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], 
  });

  // Rotate wheel background 360 degrees
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-black text-white h-[300vh] font-sans"
    >
      {/* LAYOUT FIX:
        - justify-center: Centers the Title + Wheel block vertically in the viewport.
        - gap-12 sm:gap-20: Provides flexible spacing between Title and Wheel instead of rigid margins.
        - No fixed top padding (pt-32 removed) to prevent pushing content off-screen on desktops.
      */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-visible px-4 gap-12 sm:gap-20">
        
        {/* Title Section */}
        <div className="flex-shrink-0 text-center z-10">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            The Content Flywheel
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base xs:text-lg max-w-xl mx-auto">
            One core idea, infinite distribution.
          </p>
        </div>

        {/* --- MAIN WHEEL CONTAINER --- */}
        {/* - w-[200px] to sm:w-[450px]: Keeps responsive width logic.
           - max-h-[50vh]: ensures that even on wide but short screens, the wheel shrinks to fit.
        */}
        <div className="relative w-[200px] xs:w-[280px] sm:w-[450px] max-h-[50vh] aspect-square flex-shrink-0 flex items-center justify-center">
          
          {/* 1. ROTATING BACKGROUND RING */}
          <motion.div 
            style={{ rotate }}
            className="absolute inset-0 rounded-full flex items-center justify-center"
          >
             <svg viewBox="0 0 600 600" className="w-full h-full opacity-40">
                <defs>
                  <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0077b5" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="100%" stopColor="#FF0000" />
                  </linearGradient>
                </defs>
                {/* Outer Ring */}
                <circle cx="300" cy="300" r="290" stroke="url(#wheelGradient)" strokeWidth="4" fill="none" strokeDasharray="20 10" />
                {/* Inner Ring */}
                <circle cx="300" cy="300" r="200" stroke="url(#wheelGradient)" strokeWidth="1" strokeOpacity="0.5" fill="none" />
             </svg>
          </motion.div>

          {/* 2. STATIC CENTRAL HUB */}
          <div className="absolute z-10 flex flex-col items-center justify-center w-24 h-24 xs:w-28 xs:h-28 sm:w-44 sm:h-44 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_0_50px_-10px_rgba(255,122,42,0.3)]">
            <span className="text-lg xs:text-xl sm:text-3xl font-bold text-[var(--color-primary)]">Core</span>
            <span className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-widest mt-1">Content</span>
          </div>

          {/* 3. STATIC ITEMS (Fixed Cardinal Positions) */}
          {items.map((item) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
                scrollYProgress,
                [item.appearStart, item.appearEnd],
                [0, 1]
            );
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(
                scrollYProgress,
                [item.appearStart, item.appearEnd],
                [0.5, 1]
            );

            return (
              <motion.div
                key={item.id}
                style={{ 
                    left: item.style.left,
                    top: item.style.top,
                    opacity, 
                    scale,
                    x: "-50%",
                    y: "-50%"
                }}
                className="absolute z-30"
              >
                {/* Item Card Sizing */}
                <div className={`flex flex-col items-center justify-center gap-1 sm:gap-2 w-[72px] h-[72px] xs:w-24 xs:h-24 sm:w-36 sm:h-36 rounded-2xl backdrop-blur-xl bg-black/95 border ${item.color} shadow-2xl p-2 sm:p-4 text-[var(--color-text-primary)]`}>
                    <item.icon />
                    <span className="text-[9px] xs:text-[10px] sm:text-sm font-bold text-center leading-tight">
                      {item.label}
                    </span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Decorative connecting lines (Background) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]" />
      </div>
    </section>
  );
};

export default ContentFlywheel;