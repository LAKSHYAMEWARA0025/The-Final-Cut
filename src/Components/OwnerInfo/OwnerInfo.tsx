import React from "react";
import { motion } from "framer-motion";
import { SVGProps } from "react";

// --- SVG Icons ---

// Standard YouTube Play Icon
const YouTubeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const OwnerInfo: React.FC = () => {
  const OWNER_YOUTUBE = "https://www.youtube.com/@itsvijaychoudhary/featured";
  const OWNER_USERNAME = "VijayChoudhary";
  const OWNER_NAME = "Vijay Choudhary";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-24 px-6 sm:px-8 font-sans border-b border-[var(--color-border)]"
    >
      {/* Animated background gradient blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[var(--color-primary)] rounded-full blur-3xl opacity-10"
        animate={{ x: [0, 200, 0], y: [0, 150, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-[var(--color-card-bg)] rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -200, 0], y: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-[var(--color-text-primary)]">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 drop-shadow-md tracking-tight">
          We Did it, You can{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
             too!
          </span>
        </h2>

        {/* --- CONTENT CONTAINER --- */}
        <div className="bg-[var(--color-card-bg)] backdrop-blur-sm rounded-[var(--radius-lg)] p-8 sm:p-12 mt-16 text-left border border-[var(--color-border)] shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Side: Text Content */}
            <div className="lg:w-2/3 space-y-6 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)] font-normal">
              <p>
                Today, most early-stage businesses can be built using AI. But
                what they often lack is distribution—something AI alone cannot
                solve. That’s where we come in.
              </p>
              <p>
                We’ve worked with several individual creators across India and
                even a few in London, helping them grow their online presence.
                This online presence doesn’t just build credibility, it also
                creates a strong distribution channel that directly fuels their
                business growth.
              </p>
              <p>
                Once you have distribution, running an online business becomes
                far easier. With greater reach and trust, your business can
                scale much faster without any cost.
              </p>
              <p>
                After spending years creating content that resonates with
                millions, I've realized one thing:{" "}
                <span className="font-bold tracking-wide text-[var(--color-text-primary)]">
                  attention is the new currency.
                </span>
              </p>
              <p className="italic font-medium mt-8 text-[var(--color-primary-light)]">
                Every scroll, every click, every view Matters!!
              </p>
            </div>

            {/* Right Side: Owner Info Card */}
            <div className="lg:w-1/3 w-full flex justify-center mt-8 lg:mt-0">
              <motion.div
                className="w-full max-w-xs bg-black rounded-[var(--radius-lg)] p-8 shadow-2xl transition-all duration-500 border border-[var(--color-border)] hover:border-[var(--color-primary)]"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center gap-6">
                  <img
                    src="/owner/owner.jpg"
                    alt={OWNER_NAME}
                    className="w-32 h-32 rounded-full object-cover border-4 border-[var(--color-primary)] shadow-lg grayscale hover:grayscale-0 transition duration-500"
                  />
                  
                  <div className="text-center">
                    
                    {/* Name Section */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {OWNER_NAME}
                      </h3>
                    </div>

                    {/* Username Link Section */}
                    <a
                      href={OWNER_YOUTUBE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition text-lg font-medium"
                      aria-label={`Follow ${OWNER_NAME} on YouTube`}
                    >
                      {/* YouTube Logo in Red to match branding */}
                      <YouTubeLogo className="w-6 h-6 text-orange-600" />
                      {OWNER_USERNAME}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerInfo;