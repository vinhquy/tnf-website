// Tailwind v4: config is handled via @theme in globals.css
// This file is kept for editor tooling compatibility only
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
