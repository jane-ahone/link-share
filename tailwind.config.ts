import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        backgroundStart: "rgb(var(--background-start-rgb))",
        backgroundEnd: "rgb(var(--background-end-rgb))",
        linkBlue: "rgb(var(--link-blue))",
        linkPurple: "rgb(var(--link-purple))",
        linkPurpleHover: "rgb(var(--link-light-purple))",
        linkLightPurple: "rgb(var(--link-purple))",
        linkDarkGrey: "rgb(var(--link-dark-grey))",
        linkBorder: "rgb(var(--link-border))",
        linkGrey: "rgb(var(--link-grey))",
        linkLightGrey: "rgb(var(--link-light-grey))",
        linkWhite: "rgb(var(--link-white))",
        linkRed: "rgb(var(--link-red))",
        linkBtnPrimaryActive: "rgb(var(--link-button-primary-active))",
        linkBtnPrimaryDefault: "rgb(var(--link-button-primary-default))",
      },
    },
  },
  plugins: [],
};
export default config;
