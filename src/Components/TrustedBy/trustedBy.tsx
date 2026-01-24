import React from "react";

const companies = [
  { name: "Yes Securities", logo: "/Trust/YesSecurites.png" },
  { name: "Samco Securities", logo: "/Trust/Samco.png" },
  { name: "Lvana", logo: "/Trust/lvana.png" },
  { name: "Fome", logo: "/Trust/Fome.png" },
  { name: "Air India", logo: "/Trust/Airindia.png" },
  { name: "Dhiwise", logo: "/Trust/Dhiwise.png" },
  { name: "Scaler", logo: "/Trust/Scaler.png" },
  { name: "Vedantu", logo: "/Trust/vedantu.png" },
  { name: "Semrush", logo: "/Trust/semrush.png" },
  { name: "Tuf", logo: "/Trust/tuf.png" },
  { name: "Vrikshit Foundation", logo: "/Trust/Varkshit.png" },
  { name: "Unacademy", logo: "/Trust/Unacademy.png" },
];

const TrustedBy: React.FC = () => {
  const logos = [...companies, ...companies];
  const animationDuration = 45;

  return (
    <section className="bg-black py-20 relative overflow-hidden font-sans border-b border-[var(--color-border)]">
      
      {/* Removed the top gradient fade div to ensure a sharp, clean transition 
         between the Hero's stats and this black section, exactly like the image.
      */}

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center text-white">
          Trusted by the{" "}
          <span className="text-[var(--color-primary)]">
            Industry Leaders
          </span>
        </h2>
      </div>

      {/* Scrolling Wrapper */}
      <div
        className="w-full overflow-hidden relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex whitespace-nowrap gap-12 sm:gap-20 py-4 animate-scroll"
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {logos.map((company, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center min-w-[180px] sm:min-w-[240px] group"
            >
              <img
                src={company.logo}
                alt={company.name}
                // Size maintained as requested: h-28 (mobile) / h-36 (desktop)
                className="h-28 sm:h-36 w-auto object-contain transition-all duration-300 
                         filter grayscale brightness-0 invert opacity-60 
                         group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 
                         group-hover:scale-110"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://placehold.co/300x150/000000/FFFFFF?text=${company.name}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll ${animationDuration}s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBy;