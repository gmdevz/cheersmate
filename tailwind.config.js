/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "85vh": "85vh",
      },
      keyframes: {
        extend: {
          from: { transform: "scale(1) " },
          to: { transform: "scale(1.5) " },
        },
        rotate: {
          "0%, 100%": { transform: "rotate(-15deg) scale(1.5) " },
          "50%": { transform: "rotate(15deg) scale(1.5) " },
        },
        "reverse-spin": {
          from: {
            transform: 'rotate(360deg)'
          },
        },
      },
      animation: {
        sparkle: "extend 1s 1, rotate 1s 1s infinite",
        restarting: 'reverse-spin 1s linear infinite'
      },
    },
  },
  plugins: [],
  }
