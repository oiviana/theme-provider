import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors: {
        'dark-300':'#1e293b',
        'dark-500': '#0f172a',
        'light-300': '#f2f2f2',
        'light-500': '#ecedec',

      },
    }
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
