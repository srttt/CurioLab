import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17202a",
        mist: "#eef7f4",
        mint: "#bfe8da",
        coral: "#ff8a7a",
        citron: "#f5cf65",
        glass: "#f8fbff"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 32, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
