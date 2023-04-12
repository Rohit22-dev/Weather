/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_blue: "#CBE4DE",
        dark_teal: "#0E8388",
        dark_gray: "#2E4F4F",
        dark: "#2C3333",
      },
    },
  },
  plugins: [],
};
