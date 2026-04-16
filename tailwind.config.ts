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
        edpro: {
          dark: "#015c8e",
          primary: "#0374ac",
          light: "#69cced",
          ink: "#231f20",
          "light-bg": "#f0f8ff",
          "card-bg": "#ffffff",
          muted: "#64748b",
          border: "#e2e8f0",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #015c8e 0%, #0374ac 50%, #69cced 100%)",
        "card-gradient": "linear-gradient(180deg, #ffffff 0%, #f0f8ff 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(3, 116, 172, 0.10)",
        "card-hover": "0 8px 40px rgba(3, 116, 172, 0.18)",
        nav: "0 2px 16px rgba(1, 92, 142, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
