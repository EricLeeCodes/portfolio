import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        levitate: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        levitate: "levitate 3s ease-in-out infinite",
      },
      colors: {
        darker: "#050300",
        lighter: "#cacfd3",
        accent: "#ec8f26",
        accentTwo: "#17c37a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    variants: {
      extend: {
        scrollBehavior: ["responsive"],
      },
    },
  },
  plugins: [],
};
export default config;
