import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rye: ['"Rye"', "cursive"],
        playfair: ['"Playfair Display"', "serif"],
        lato: ['"Lato"', "sans-serif"],
        oswald: ['"Oswald"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
