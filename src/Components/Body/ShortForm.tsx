import { useRef, useState, useEffect, SVGProps } from "react";
import { motion } from "framer-motion";

/* -------------------
   Inline SVG icons
   ------------------- */
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
  </svg>
);

const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
  </svg>
);

const VolumeUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" fill="currentColor" {...props}>
    <path d="M533.6 32.5C512.2 11.1 479.2 0 448 0h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c19.3 0 37.9 7.6 51.6 21.3l80 80c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L426.7 138.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l102.4 102.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c13.7-13.7 21.3-32.3 21.3-51.6v-16c0-31.2-11.1-64.2-32.5-85.6z" />
  </svg>
);

const VolumeMuteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" fill="currentColor" {...props}>
    <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
  </svg>
);

/* -------------------
   VideoPlayer component
   ------------------- */
const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    setIsMuted(true);

    const tryPlay = async () => {
      try {
        await v.play();
        setIsPlaying(true);
      } catch (err) {
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, [src]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      // Increased styling: slightly darker border, consistent rounded corners
      className="relative group bg-[#111111] rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] h-[350px] sm:h-[450px] border border-[#222]"
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        playsInline
        muted={isMuted}
        preload="auto"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLVideoElement).style.display = "none";
        }}
      />

      {/* Play/Pause overlay */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        <div className="bg-black/40 hover:bg-black/60 p-4 rounded-full border border-white/10 backdrop-blur-sm">
          {isPlaying ? (
            <PauseIcon className="w-8 h-8 text-white" />
          ) : (
            <PlayIcon className="w-8 h-8 text-white" />
          )}
        </div>
      </button>

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute top-3 right-3 z-30 bg-black/60 hover:bg-black/80 p-2 rounded-full border border-white/10 shadow-lg backdrop-blur-sm transition-colors"
      >
        {isMuted ? (
          <VolumeMuteIcon className="w-5 h-5 text-white" />
        ) : (
          <VolumeUpIcon className="w-5 h-5 text-white" />
        )}
      </button>
    </motion.div>
  );
};

/* -------------------
   ShortFormSection
   ------------------- */
const videos = [
  {
    src: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273129/short1_b3drzw.mp4",
  },
  {
    src: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273117/short2_yxndjg.mp4",
  },
  {
    src: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273133/short4_abfdzu.mp4",
  },
  {
    src: "https://res.cloudinary.com/dsol6ftem/video/upload/v1760273139/short6_bgvgmt.mp4",
  },
];

const ShortFormSection = () => {
  return (
    <section className="bg-[#000000] text-white py-20 px-4 sm:px-10 lg:px-16 overflow-hidden">
      {/* Centered Heading similar to Long Form Section */}
      {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-wider font-secondary">
        Short <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">Form Content</span>
      </h2> */}
      {/* Replace the existing <h2> with this: */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-center mb-16 font-sans">
        Short{" "}
        <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">
          Form Content
        </span>
      </h2>

      {/* Centered Grid with larger gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-7xl mx-auto place-items-center">
        {videos.map((v, i) => (
          <VideoPlayer key={i} src={v.src} />
        ))}
      </div>
    </section>
  );
};

export default ShortFormSection;
