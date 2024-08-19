/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fallOff: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
        fallOffUpwards: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
      },
      animation: {
        fallOff: "fallOff 0.7s ease-out forwards",
        fallOffUpwards: "fallOffUpwards 0.7s ease-out forwards",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        marker: ["Permanent Marker", "system-ui"],
      },
    },
  },
  plugins: [],
};
