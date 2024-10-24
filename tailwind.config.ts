import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-color-100)",
          200: "var(--primary-color-200)",
          300: "var(--primary-color-300)",
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
          600: "var(--primary-color-600)",
          700: "var(--primary-color-700)",
          800: "var(--primary-color-800)",
        },

        gray: {
          100: "var(--gray-color-100)",
          200: "var(--gray-color-200)",
          300: "var(--gray-color-300)",
          400: "var(--gray-color-400)",
          500: "var(--gray-color-500)",
          600: "var(--gray-color-600)",
          700: "var(--gray-color-700)",
          800: "var(--gray-color-800)",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        raleway: ["var(--font-raleway)"],
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1600px",
      },
      spacing: {
        _10: "10px",
        _14: "14px",
        _18: "18px",
        _30: "30px",
        _34: "34px",
        _50: "50px",
        _60: "60px",
        _66: "66px",
        _72: "72px",
        _74: "74px",
        _76: "76px",
        _88: "88px",
        _100: "100px",
        _141: "141px",
        _150: "150px",
        _177: "177px",
        _195: "195px",
        _200: "200px",
        _230: "230px",
        _243: "243px",
        _306: "306px",
        _504: "504px",
        _663: "663px",
        _615: "615px",
        _765: "765px",
        _785: "785px",
        _992: "992px",
        _1590: "1590px",
        _1644: "1644px",
        _1819: "1819px",
      },
    },
  },
  plugins: [],
};
export default config;
