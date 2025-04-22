/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "#171717",
          800: "#262626",
          500: "#737373",
        },
        stone: {
          950: "#0c0a09",
          300: "#d6d3d1",
        },
        violet: {
          400: "#a78bfa",
          700: "#6d28d9",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'custom-1': '0px 2px 4px rgba(0,0,0,0.25)',
        'custom-2': '0px 20px 35px rgba(153,141,235,0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}; 