import React from "react";
import { motion, Variants } from "framer-motion";

interface Step {
  title: string;
  text: string;
  img: string;
}

const steps: Step[] = [
  {
    title: "Brand Ideation and Strategy",
    text: "In a single powerful session, we’ll map your entire content ecosystem—shaping your unique angle, refining your style, designing impactful hooks, and building a strategy that adds the wow factor. Within a week, you’ll have a clear 1–3 month brand strategy ready. By week two, your brand assets will be finalized and content production will be underway.",
    img: "/SecretSauce/bb.png",
  },
  {
    title: "Filming and Editing",
    text: "Once we receive all the raw files, we’ll kick off the editing process. Throughout the shoot, we’ll guide and support you at every step. After editing, we’ll create the copies to go along with the content—and just like that, your content will be ready to go live.",
    img: "/SecretSauce/FilmingEditing.jpg",
  },
  {
    title: "Watch your brand scale",
    text: "Once your content goes live, it will become a massive support system for your business. Think of it like the iceberg beneath the surface—driving leads and sales that aren’t immediately visible. Beyond that, whether it’s hiring, sharing your ideas, closing high-ticket clients, or generating inbound leads—everything flows through one powerful engine: your personal brand.",
    img: "/SecretSauce/WatchYourBrandScale.jpg",
  },
];

// --- Animation Variants ---
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SecretSauce: React.FC = () => {
  return (
    <section
      id="services"
      // CHANGED: Fixed background to pure black as requested
      className="relative bg-black text-[var(--color-text-primary)] py-24 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-20">
          What’s the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
            Secret?
          </span>
        </h2>

        <div className="flex flex-col gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="relative group"
            >
              {/* --- CARD CONTAINER --- */}
              {/* Maintained the grey card background (var(--color-card-bg)) for contrast against the black section */}
              <div
                className="relative flex flex-col items-center gap-8 md:gap-12 p-6 md:p-10 rounded-[var(--radius-lg)] 
                         border border-[var(--color-border)] bg-[var(--color-card-bg)] 
                         transition-all duration-500 
                         group-hover:border-[var(--color-primary)] 
                         group-hover:shadow-[0_0_40px_-10px_rgba(255,122,42,0.3)]"
              >
                {/* Inner Layout */}
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 w-full ${
                    idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 overflow-hidden rounded-[var(--radius-md)]">
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-[var(--radius-md)]">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover rounded-[var(--radius-md)] transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/600x400/222/FFF?text=Step+${
                            idx + 1
                          }`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 space-y-4">
                    <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest">
                      Step {idx + 1}
                    </span>

                    {/* --- COLOR GRADED TITLE --- */}
                    <h3
                      className="text-2xl md:text-4xl font-bold tracking-tight
                               bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-text-primary)] to-[var(--color-primary)] 
                               bg-clip-text text-transparent 
                               pb-1"
                    >
                      {step.title}
                    </h3>

                    <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecretSauce;