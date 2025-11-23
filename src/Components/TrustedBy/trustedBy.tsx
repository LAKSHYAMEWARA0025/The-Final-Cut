import React from "react";

// Updated company data to point to local logo files in the `/Trust/` folder
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
  // Duplicate the array for a seamless infinite scroll
  const logos = [...companies, ...companies];
  const animationDuration = 45; // seconds

  return (
    <section className="bg-[#000000] py-20 text-white relative overflow-hidden font-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-wider">
          Trusted by the <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">Industry Leaders</span>
        </h2> */}
        {/* Replace the existing <h2> with this: */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-center mb-16 font-sans">
          Trusted by the{" "}
          <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </h2>
      </div>

      <div
        className="w-full overflow-hidden relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)",
        }}
      >
        {/* Reduced gap here from gap-12/20 to gap-8/12 */}
        <div
          className="flex whitespace-nowrap gap-8 sm:gap-12 py-4 animate-scroll"
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {logos.map((company, idx) => (
            <div
              key={idx}
              // Reduced min-w so logos sit closer together
              className="flex-shrink-0 flex items-center justify-center min-w-[140px] sm:min-w-[200px] h-32 group"
            >
              <img
                src={company.logo}
                alt={company.name}
                // Increased height: h-24 (mobile) and sm:h-32 (desktop)
                className="h-24 sm:h-32 w-auto object-contain transition-all duration-300 filter grayscale brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-110"
                // Fallback in case a logo fails to load
                onError={(e) => {
                  (
                    e.currentTarget as HTMLImageElement
                  ).src = `https://placehold.co/240x120/000000/FFFFFF?text=${company.name}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll ${animationDuration}s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBy;
