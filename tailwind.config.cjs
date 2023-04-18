/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        "sunny-yellow": "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213,9%,39%",
        "dark-grayish-blue": "hsl(232,10%,55%",
        "grayish-blue": "hsl(210,4%,67%)",
      },
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        serif: [
          "FrauncesVariable",
          "Fraunces",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [],
};
