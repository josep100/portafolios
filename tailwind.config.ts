import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true, // Asegura que el reset de Tailwind esté activado
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bg-wave': "url('/images/wave.svg')",
        'bg-wave2': "url('/images/wave2.svg')",
      },
      keyframes: {
        'zoom': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.07)' },
          '100%': { transform: 'scale(1)' },
        },
        'move-y':{
          '0%': { transform: 'translateY(10)'},
          '100%': { transform: 'translateY(10)'},
          '25%': { transform: 'translateY(-10)'},
        },
      },
      animation: {
        'zoom': 'zoom .3s ease-in',
        'move-y': 'move-y 7s ease-in-out infinite',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
