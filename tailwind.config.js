/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎬 Sleek & Professional Palette
        black: "#000000",         // Pure background
        charcoal: "#121212",      // Secondary background
        darkGray: "#1A1A1A",      // Alternate dark section
        steel: "#2E2E2E",         // UI borders / dividers
        white: "#FFFFFF",         // Primary text
        blue: "#2196F3",          // Accent highlights
        electric: "#007BFF",      // Electric blue variant

        // Backward compatibility for your existing class names
        bg: "#000000",
        textMain: "#FFFFFF",
        textMuted: "#B3B3B3",
        primary: "#2196F3",
        accent: "#007BFF",
      },

      fontFamily: {
        // 1. Sets Inter as the default Tailwind font (font-sans)
        sans: ["Inter", "sans-serif"], 
        
        // 2. Updates your custom class (font-primary) to use Inter
        primary: ["Inter", "sans-serif"],

        // 3. UPDATED: Changed headings to use Inter (was Oswald) to match the screenshot
        heading: ["Inter", "sans-serif"], 
      },

      animation: {
        marqueeRight: "marqueeRight 40s linear infinite",
      },

      keyframes: {
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};