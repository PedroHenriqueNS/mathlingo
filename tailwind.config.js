import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],

  content: [
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './core-components/**/**/*.{html,js,jsx,ts,tsx}',
    './hooks/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],

  presets: [require('nativewind/preset')],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        "jakarta-bold": ['JakartaBold'],
        "jakarta-bolditalic": ['JakartaBoldItalic'],
        "jakarta-extrabold": ['JakartaExtraBold'],
        "jakarta-extrabold-italic": ['JakartaExtraBoldItalic'],
        "jakarta-extralight": ['JakartaExtraLight'],
        "jakarta-extralight-italic": ['JakartaExtraLightItalic'],
        "jakarta-italic": ['JakartaItalic'],
        "jakarta-light": ['JakartaLight'],
        "jakarta-light-italic": ['JakartaLightItalic'],
        "jakarta-medium": ['JakartaMedium'],
        "jakarta-medium-italic": ['JakartaMediumItalic'],
        "jakarta": ['JakartaRegular'],
        "jakarta-semibold": ['JakartaSemiBold'],
        "jakarta-semibold-italic": ['JakartaSemiBoldiItalic'],
      },

      colors: {
        background: {
          light: "#F1F1F1",
          dark: "#131e24"
        },

        primary: {
          100: "#e0e0fc",
          200: "#c1c2f9",
          300: "#a1a3f7",
          400: "#8285f4",
          500: "#6366f1",
          600: "#4f52c1",
          700: "#3b3d91",
          800: "#282960",
          900: "#141430"
        },
        secondary: {
          100: "#d8e6fd",
          200: "#b1cdfb",
          300: "#89b4fa",
          400: "#629bf8",
          500: "#3b82f6",
          600: "#2f68c5",
          700: "#234e94",
          800: "#183462",
          900: "#0c1a31"
        },
        thirty: {
          100: "#ffedcc",
          200: "#ffdb99",
          300: "#ffc966",
          400: "#ffb733",
          500: "#ffa500",
          600: "#cc8400",
          700: "#996300",
          800: "#664200",
          900: "#332100"
        },
        certo: {
          100: "#cdf7ec",
          200: "#9befd9",
          300: "#6ae6c6",
          400: "#38deb3",
          500: "#06d6a0",
          600: "#05ab80",
          700: "#048060",
          800: "#025640",
          900: "#012b20"
        },
        errado: {
          100: "#fad7da",
          200: "#f5b0b5",
          300: "#f08890",
          400: "#eb616b",
          500: "#e63946",
          600: "#b82e38",
          700: "#8a222a",
          800: "#5c171c",
          900: "#2e0b0e"
        },
      }
    },
  },
  plugins: [gluestackPlugin],
};
