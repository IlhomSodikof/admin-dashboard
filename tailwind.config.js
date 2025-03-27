/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // DaisyUI
    require("tailwind-scrollbar")({ nocompatible: true }), // Tailwind Scrollbar
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
