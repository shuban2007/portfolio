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
        // Legacy aliases kept for any remaining references
        background: "#000000",
        surface: "#14213D",
        accent: "#FCA311",
        "text-primary": "#FFFFFF",
        "text-muted": "#E5E5E5",
        // New named palette
        black:  "#000000",
        navy:   "#14213D",
        amber:  "#FCA311",
        grey:   "#E5E5E5",
        white:  "#FFFFFF",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'blob-1': 'blob-1 18s ease-in-out infinite alternate',
        'blob-2': 'blob-2 24s ease-in-out infinite alternate',
        'blob-3': 'blob-3 31s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'blob-1': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'blob-2': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-50px, 30px) scale(0.95)' },
          '66%': { transform: 'translate(40px, -20px) scale(1.05)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'blob-3': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 10px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
