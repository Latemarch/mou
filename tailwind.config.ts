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
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        population: "#D9D9D9",
        housing: "#fbcabb",
        education: "#f9b0c3",
        industryJobs: "#ceb6d9",
        environment: "#c2def3",
        transportation: "#a2c8ec",
        healthWelfare: "#a2e2c3",
        culture: "#f4d06f",
        safety: "#ffedbe",
      },
    },
  },
  plugins: [],
};
export default config;
