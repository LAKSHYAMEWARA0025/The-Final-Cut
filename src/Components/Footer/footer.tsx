import React, { SVGProps } from 'react';

// --- SVG Icons ---

// FIXED: YouTube Icon (Standard clean path)
const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 24 24" 
    {...props}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
  </svg>
);
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.7 14.3 480 31.9 480H416c17.6 0 32-14.3 32-31.9V64.3C448 46.5 433.7 32 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
  </svg>
);
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}>
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
);

const Footer: React.FC = () => {
  const CAL_LINK = "https://cal.com/itsvijaychhary/schedule-a-call";

  return (
    <footer className="relative bg-black text-[var(--color-text-primary)] pt-12 pb-10 px-6 sm:px-10 md:px-16 overflow-x-hidden font-sans border-t border-[var(--color-border)]">
      
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto border-b border-[var(--color-border)]"
      >
        
        {/* Button Wrapper */}
        <div className="pt-10 pb-20">
          
          {/* CTA Button */}
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block text-white px-10 sm:px-12 py-4 rounded-[var(--radius-lg)] shadow-lg 
                       text-lg sm:text-xl font-bold tracking-wide uppercase transition-all duration-300 
                       bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]
                       shadow-[0_4px_14px_0_rgba(255,122,42,0.39)] hover:shadow-[0_6px_20px_rgba(255,122,42,0.23)]
                       transform hover:-translate-y-1"
          >
            Book a Free Discovery Call
          </a>
        </div>
        
      </div>

      <div className="relative z-10 pt-10 flex flex-col md:flex-row justify-between items-center md:items-end max-w-7xl mx-auto gap-12">
        <div className="flex flex-col items-center md:items-start gap-2 flex-shrink-0">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">The Final Cut</span>
        </div>

        <div className="text-center md:text-right w-full md:w-auto">
          <h4 className="text-lg font-bold text-[var(--color-primary)] mb-4 uppercase tracking-wider">Connect</h4>
          
          <div className="flex gap-6 justify-center md:justify-end text-[var(--color-text-secondary)]">
            <a href="https://www.youtube.com/@itsvijaychhary/featured" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors transform hover:-translate-y-1 duration-200" aria-label="YouTube"><YoutubeIcon className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/itsvijaychhary/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors transform hover:-translate-y-1 duration-200" aria-label="Instagram"><InstagramIcon className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/itsvijaychhary/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors transform hover:-translate-y-1 duration-200" aria-label="LinkedIn"><LinkedinIcon className="w-6 h-6" /></a>
            <a href="https://x.com/_vijaychhary" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors transform hover:-translate-y-1 duration-200" aria-label="Twitter/X"><TwitterIcon className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 pt-6 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-tertiary)]">
        © {new Date().getFullYear()} The Final Cut. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;