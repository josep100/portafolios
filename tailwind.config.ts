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
      },
      animation: {
        'zoom': 'zoom .3s ease-in',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
