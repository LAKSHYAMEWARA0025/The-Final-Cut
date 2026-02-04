import { useRef, useState, useEffect, useCallback, SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Icons (Unchanged) ---
const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 256 512"
    className="w-5 h-5"
    {...props}
  >
    <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
  </svg>
);

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 256 512"
    className="w-5 h-5"
    {...props}
  >
    <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
  </svg>
);

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className="w-5 h-5"
    {...props}
  >
    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
  </svg>
);

const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className="w-5 h-5"
    {...props}
  >
    <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5-21.5 48-48 48h96c26.5 0 48-21.5 48-48z"></path>
  </svg>
);

const VolumeUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 640 512"
    className="w-5 h-5"
    {...props}
  >
    <path d="M533.6 32.5C512.2 11.1 479.2 0 448 0h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c19.3 0 37.9 7.6 51.6 21.3l80 80c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L426.7 138.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l102.4 102.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c13.7-13.7 21.3-32.3 21.3-51.6v-16c0-31.2-11.1-64.2-32.5-85.6zM256 0c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM128 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"></path>
  </svg>
);

const VolumeMuteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    className="w-5 h-5"
    {...props}
  >
    <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>
  </svg>
);

interface Testimonial {
  video: string;
  name: string;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    video:
      "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273120/Raj_dmmst5.mp4",
    name: "Striver(Raj)",
    role: "Founder of TUF, ex SDE at Google & Amazon",
    review:
      "He takes the ownership. I would call him around 2 Am and will tell him that we need it live within next 12 hours and he delivers it!.",
  },
  {
    video:
      "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273156/Aarushi_pmzyme.mov",
    name: "Aarushi Bedi",
    role: "Founder of The Fluent Flyers, Ex International Cabin Crew",
    review:
      "He always delivered on time and were always up for last minute changes. Really good ctr.",
  },
  {
    video:
      "https://res.cloudinary.com/dsol6ftem/video/upload/v1760275963/Saumya_vblbiu.mov",
    name: "Saumya Singh",
    role: "TEDx Speaker, Josh Talks Speaker, ex-SDE at RedHat",
    review:
      "Very satisfied and impress by his work, very talented and hardworking guy! He takes the responsibility!",
  },
  {
    video:
      "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273142/Shreyansh_pmqxx8.mp4",
    name: "Shreyansh Goyal",
    role: "TEDx speaker, SDE",
    review:
      "I started working with him when I had somewhat 2k subscribers and with him I've scaled to 150k subscribers.",
  },
  {
    video:
      "https://res.cloudinary.com/dsol6ftem/video/upload/v1760275405/VidhiKalra_uo53x8.mp4",
    name: "Vidhi Karla",
    role: "Founder of 5-minute economics",
    review:
      "He is really good with editing and apart from that he also helped me grow my channel 10x.",
  },
];

// PROPS updated: accepts global mute state and toggle handler
const VideoPlayer = ({ src, isMuted, toggleMute }: { src: string; isMuted: boolean; toggleMute: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // When 'isMuted' prop changes, update the actual video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
        // Ensure mute state is correct on load/mount
        video.muted = isMuted;
        video.play().catch(() => {});
    }
    // No pause on cleanup to allow smooth transitions if needed, 
    // but typically cleanup is fine. keeping it simple.
  }, [src]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full md:w-[280px] aspect-[9/16] rounded-[var(--radius-lg)] overflow-hidden shadow-lg shadow-black/50 transition-all duration-300 group border border-[var(--color-border)]">
      <video
        ref={videoRef}
        key={src}
        src={src}
        autoPlay
        loop
        muted={isMuted} // Controlled by parent
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={togglePlay}
          className="bg-black/60 hover:bg-[var(--color-primary)] text-white p-3 rounded-full transition shadow-lg flex items-center justify-center border border-white/10"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        {/* Mute button now calls the Parent's toggle function */}
        <button
          onClick={toggleMute}
          className="bg-black/60 hover:bg-[var(--color-primary)] text-white p-3 rounded-full transition shadow-lg flex items-center justify-center border border-white/10"
        >
          {isMuted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
        </button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  // Global mute state for all testimonials
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);

  const nextTestimonial = useCallback(
    () => setIndex((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prevTestimonial = useCallback(
    () =>
      setIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      ),
    []
  );

  return (
    <section
      id="testimonials"
      className="bg-black text-[var(--color-text-primary)] py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden font-sans border-b border-[var(--color-border)]"
    >
      <h2 className="text-5xl sm:text-5xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        What people say when we’re not {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
        in the room  
        </span>
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 sm:p-12 rounded-[var(--radius-lg)] 
                           bg-[#111111] border border-[var(--color-border)] shadow-2xl
                           hover:shadow-[0_0_40px_-10px_rgba(255,122,42,0.3)] hover:border-[var(--color-primary)]/50
                           transition-all duration-300">
              
              {/* Pass global mute state and toggle function down */}
              <VideoPlayer 
                src={testimonials[index].video} 
                isMuted={isGlobalMuted} 
                toggleMute={() => setIsGlobalMuted(!isGlobalMuted)} 
              />
              
              <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    {testimonials[index].role}
                  </p>
                </div>
                
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed italic border-l-4 border-[var(--color-primary)] pl-6">
                  "{testimonials[index].review}"
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevTestimonial}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 
                     bg-[#111111] border border-[var(--color-border)] text-white p-4 rounded-full shadow-xl z-30
                     hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeftIcon />
        </motion.button>

        <motion.button
          onClick={nextTestimonial}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 
                     bg-[#111111] border border-[var(--color-border)] text-white p-4 rounded-full shadow-xl z-30
                     hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRightIcon />
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonials;