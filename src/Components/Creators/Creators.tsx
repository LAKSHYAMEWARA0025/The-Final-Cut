import React from "react";

// --- Data Structure ---
type Creator = {
  name: string;
  instagram?: string;
  youtube?: string;
  image?: string;
  followers: string;
};

// --- Creator Data ---
const creators: Creator[] = [
  {
    name: "Ishan Sharma",
    instagram: "https://www.instagram.com/ishansharma7390/",
    image: "/Creators/IshanSharma.jpg",
    followers: "1M followers",
  },
  {
    name: "Kashish",
    instagram: "https://www.instagram.com/aapki_kashishhh/",
    image: "/Creators/Kashish.jpg",
    followers: "502K followers",
  },
  {
    name: "Saumya Singh",
    instagram: "https://www.instagram.com/saumya1singh/",
    followers: "483K followers",
    image: "/Creators/SaumyaSingh.jpg",
  },
  {
    name: "Shreyansh Goyal",
    youtube: "https://www.youtube.com/@ShreyanshGoyal/featured",
    followers: "181K subscribers",
    image: "/Creators/ShreyanshGoyal.jpg",
  },
  {
    name: "Siddharth",
    youtube: "https://www.youtube.com/@itssiddharthsingh",
    followers: "216K subscribers",
    image: "/Creators/SiddharthSingh.jpg",
  },
  {
    name: "Harman Singh",
    instagram: "https://www.instagram.com/hustlewithharman/",
    followers: "888K followers",
    image: "/Creators/Harman.jpg",
  },
  {
    name: "Arsh Goyal",
    instagram: "https://www.instagram.com/arshgoyalyt/",
    followers: "481K followers",
    image: "/Creators/ArshGoyal.jpg",
  },
  {
    name: "Deepanshu Raj",
    instagram: "https://www.instagram.com/iqlipse_nova/",
    followers: "892K followers",
    image: "/Creators/DeepanshuRaj.jpg",
  },
  {
    name: "Striver",
    youtube: "https://www.youtube.com/@striver_79",
    followers: "305k subscribers",
    image: "/Creators/Striver.jpg",
  },
  {
    name: "Dr. Sid Warrier",
    instagram: "https://www.instagram.com/thesidwarrier/",
    followers: "287K followers",
    image: "/Creators/DrSid.jpg",
  },
  {
    name: "Code Skool",
    instagram: "",
    followers: "198K followers",
    image: "/Creators/codeskool.jpg",
  },
  {
    name: "Dayana",
    instagram: "",
    followers: "107K followers",
    image: "/Creators/dayana.jpg",
  },
  {
    name: "Palak",
    instagram: "",
    followers: "585K followers",
    image: "/Creators/palak.jpg",
  },
  {
    name: "Priya Vajpeyi",
    instagram: "",
    followers: "21K followers",
    image: "/Creators/Priya_vajpeyi.jpg",
  },
  {
    name: "Shanaya",
    instagram: "",
    followers: "6M followers",
    image: "/Creators/shanaya.jpg",
  },
];

// Duplicate for seamless infinite scrolling
const infiniteCreators: Creator[] = [...creators, ...creators];

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ creator }) => {
  return (
    <div className="group relative flex-shrink-0 transition-transform duration-500 hover:scale-[1.05]">
      
      {/* Outer Glowing Border (Visible on Hover) */}
      <div
        className={`absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] 
                    opacity-0 transition-all duration-500 ease-out 
                    group-hover:opacity-80 group-hover:blur-md group-hover:scale-110`}
      />

      {/* Main Image Container */}
      <div
        className={`relative h-[180px] w-[180px] overflow-hidden 
                    rounded-full shadow-xl cursor-pointer bg-[var(--color-card-bg)] border border-[var(--color-border)]`}
      >
        {creator.image ? (
          <>
            {/* The Image */}
            <img
              src={creator.image}
              alt={creator.name}
              className="w-full h-full object-cover object-top transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src =
                  "https://placehold.co/180x180/1A1A1A/FFFFFF?text=Photo";
              }}
            />
            
            {/* Grayish Overlay Layer (Visible on Hover) */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500 text-5xl font-bold">
            {creator.name.charAt(0)}
          </div>
        )}

        {/* Text Content (Slides up on Hover) */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-2
                      translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}
        >
          <h3 className="text-lg font-bold text-white mb-1 leading-tight drop-shadow-md">
            {creator.name}
          </h3>
          <p className="text-sm font-semibold text-[var(--color-primary-light)]">
            {creator.followers}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CreatorsSection(): React.JSX.Element {
  return (
    <section className="bg-black text-[var(--color-text-primary)] py-24 overflow-hidden relative font-sans border-t border-[var(--color-border)]">
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 68s linear infinite; 
          }
          /* Pause on hover for better UX */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl text-center mb-16 tracking-tight font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
            Creators
          </span>{" "}
          We’ve Worked With
        </h2>
      </div>

      <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
        <div className="flex gap-12 py-8 animate-scroll w-max px-4">
          {infiniteCreators.map((creator: Creator, idx: number) => (
            <CreatorCard key={idx} creator={creator} />
          ))}
        </div>
      </div>

      {/* Side Gradients for Smooth Fade */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}