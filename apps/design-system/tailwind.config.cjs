/** @type {import('tailwindcss').Config} */
const config = require("@repo/config/tailwind-config");
module.exports = {
  ...config,
  content: [
    "./stories/**/*.{ts,tsx,js,jsx, mdx}",
    "../../packages/ui/**/*.{ts,tsx,js,jsx, mdx}",
  ],
};
