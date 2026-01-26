/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#050A14', // Slightly darker, richer blue/black
        'glass-slate': 'rgba(30, 41, 59, 0.4)', // Slightly lighter base for better glass effect
        'electric-cyan': '#00D2FF',
        'cyan-glow': 'rgba(0, 210, 255, 0.5)',
        'slate-400': '#94A3B8',
        'slate-300': '#CBD5E1',
      },
      backgroundImage: {
        'hero-radial': "radial-gradient(circle at 50% 0%, rgba(0, 210, 255, 0.15) 0%, rgba(5, 10, 20, 0) 60%)",
        'card-gradient': "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      backdropBlur: {
        'glass': '12px', // Standard glass blur
        'deep': '20px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 210, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 210, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 210, 255, 0.5)',
      }
    },
  },
  plugins: [],
}