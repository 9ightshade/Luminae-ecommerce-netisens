/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ddd",
      },
      screens: {
        xmd: "500px",
        xxmd: "550px",
      },
    },
  },
  plugins: [],
};
