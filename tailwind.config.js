/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f5ff",
          100: "#e8eaff",
          200: "#c9cdff",
          300: "#aab0ff",
          400: "#6c77ff",
          500: "#2f3eff",
          600: "#2938db",
          700: "#1d289a",
          800: "#18227a",
          900: "#10174f"
        }
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ]
};
