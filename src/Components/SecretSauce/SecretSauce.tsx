import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface Step {
  title: string;
  text: string;
  img: string;
}

const steps: Step[] = [
  {
    title: "Brand Ideation and Strategy",
    text: "In a single, focused session, we’ll take a holistic look at your content ecosystem to clarify your unique angle, refine your voice, design compelling hooks, and build a strategy that truly elevates your brand. Within one week, you’ll have a clear and confident 1–3 month brand strategy in place. By week two, your brand assets will be finalized and your content production will be fully underway.",
    img: "/SecretSauce/bb.png",
  },
  {
    title: "Filming and Editing",
    text: "Once we receive your raw files, we’ll begin the editing process right away. During the shoot, we’ll be there to guide and support you every step of the way. After editing is complete, we’ll craft thoughtful copy to accompany your content, so everything is cohesive and on brand. From there, your content will be fully prepared and ready to go live.",
    img: "/SecretSauce/FilmingEditing.jpg",
  },
  {
    title: "Watch your brand scale",
    text: "Once your content is live, it begins working as a powerful support system for your business. Much like an iceberg beneath the surface, it steadily drives awareness, trust, and opportunities that aren’t always immediately visible. From hiring and sharing your ideas to attracting high-ticket clients and generating inbound leads, everything ultimately flows through one central engine: your personal brand.",
    img: "/SecretSauce/WatchYourBrandScale.jpg",
  },
];

// --- Individual Card Component ---
const Card = ({
  i,
  step,
  progress,
  range,
  targetScale,
}: {
  i: number;
  step: Step;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef(null);
  
  // Create transforms based on the parent scroll progress
  // When this card is active (within its range), it stays at scale 1.
  // As the user scrolls past it (next card coming), it scales down to targetScale.
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div
      ref={container}
      // Sticky container: Ensures the card stays in view while the next one scrolls up
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          // Stagger the top position slightly so they stack nicely
          top: `calc(5vh + ${i * 25}px)`, 
        }}
        className="relative flex flex-col items-center gap-8 md:gap-12 p-6 md:p-10 rounded-[var(--radius-lg)] 
                   border border-[var(--color-border)] bg-[var(--color-card-bg)] 
                   w-full max-w-5xl origin-top shadow-2xl"
      >
        {/* Inner Layout (Same as before) */}
        <div
          className={`flex flex-col md:flex-row items-center gap-10 w-full ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-[var(--radius-md)]">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-[var(--radius-md)]">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover rounded-[var(--radius-md)]"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/600x400/222/FFF?text=Step+${i + 1}`;
                }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest">
              Step {i + 1}
            </span>

            {/* Title with Gradient */}
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-text-primary)] to-[var(--color-primary)] bg-clip-text text-transparent pb-1">
              {step.title}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {step.text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SecretSauce: React.FC = () => {
  const container = useRef(null);
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      className="bg-black text-[var(--color-text-primary)] font-sans"
    >
      {/* Title Section (Static before scrolling starts) */}
      <div className="pt-24 pb-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center">
          What’s the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
            Secret?
          </span>
        </h2>
      </div>

      {/* Scroll Container: 
        Height is calculated to allow enough scroll distance for the animations.
        e.g., 300vh allows for distinct scroll phases for the cards.
      */}
      <div ref={container} className="relative px-6 pb-24">
        {steps.map((step, i) => {
          // Calculate the range for this specific card's animation
          // The last card doesn't need to scale down (target 1), others scale down slightly
          const targetScale = 1 - (steps.length - i) * 0.05;
          
          return (
            <Card
              key={i}
              i={i}
              step={step}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SecretSauce;