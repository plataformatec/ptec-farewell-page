/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ptec-blue": "#16485B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
