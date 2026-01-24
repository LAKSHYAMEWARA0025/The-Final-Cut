import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const faqs = [
  {
    question: "What do we offer?",
    answer: "We provide end-to-end content creation services—right from ideation, planning, and scripting to filming, editing, and packaging content for Instagram, YouTube, LinkedIn, and X. We also guide you on how to effectively leverage your content once it’s live.",
  },
  {
    question: "Who is this for?",
    answer: "This is for founders and entrepreneurs who want to build a personal brand that creates distribution and drives real results.",
  },
  {
    question: "What is the timeline for results to show up?",
    answer: "Usually it takes 3-4 months and for 90% of our creators it took 3-4 months time to get a viral video and drive actual numbers.",
  },
  {
    question: "Are there any guaranteed results?",
    answer: "If we don’t deliver results, we’ll work at half the agreed quote. We’ll handle all the backend systems until we see real progress.",
  },
];

const collapseVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3 },
    },
  },
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      // Updated Styling:
      // 1. bg-[#111111] (The specific gray requested)
      // 2. border-[var(--color-border)] default, changing to Orange when open
      className={`rounded-[var(--radius-lg)] mb-4 border transition-all duration-300 overflow-hidden
        ${
          open
            ? "bg-[#111111] border-[var(--color-primary)] shadow-[0_0_20px_-5px_rgba(255,122,42,0.2)]"
            : "bg-[#111111] border-[var(--color-border)] hover:border-[var(--color-primary)]/50"
        }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center p-6 cursor-pointer select-none"
      >
        <h4 className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] max-w-[90%]">
          {question}
        </h4>
        <motion.div
          className="text-2xl font-bold text-[var(--color-primary)] flex-shrink-0"
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-hidden="true"
        >
          +
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={collapseVariants}
            className="overflow-hidden px-6"
          >
            {/* Answer Text: text-gray-400 as requested */}
            <p className="text-sm sm:text-base text-gray-400 pb-6 leading-relaxed border-t border-[var(--color-border)] pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Questions = () => {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 font-sans border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto">
        
        {/* Updated Heading Typography */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] text-center mb-4 tracking-tight">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
            Questions
          </span>
        </h2>
        
        <p className="text-center text-base sm:text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          Get answers to the most common questions about our services.
        </p>

        {faqs.map((f, idx) => (
          <FAQItem key={idx} question={f.question} answer={f.answer} />
        ))}
      </div>
    </section>
  );
};

export default Questions;