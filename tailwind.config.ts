import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        axeem: {
          primary: "#FF3821",
          "primary-light": "#FF6B5A",
          "primary-dark": "#E62E1A",
          "primary-soft": "#FFE8E6",
          secondary: "#2C3E50",
          "secondary-light": "#34495E",
          accent: "#3498DB",
          "accent-light": "#5DADE2",
          background: "#F8F9FA",
          text: "#34495E",
          "text-light": "#7F8C8D",
        },
        // Legacy colors for backward compatibility
        "axeem-orange": "rgb(255, 56, 33)",
        "axeem-red": "#dc2626",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
