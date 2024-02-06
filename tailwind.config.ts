import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "15px",
      base: "20px",
      xl: "26.66px",
      "2xl": "35.54px",
      "3xl": "47.37px",
      "4xl": "63.15px",
      "5xl": "84.17px",
    },
    extend: {
      fontFamily: {
        grandstander: ["var(--font-grandstander)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        portfolio: {
          white: "#FBF5F3",
          black: "#111111",
          blue: {
            lighest: "#5599FF",
            light: "#0066FF",
            dark: "#004CBD",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
