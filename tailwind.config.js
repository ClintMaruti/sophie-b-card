/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sophie: "url('/images/sophie.jpg')",
      },
    },
  },
  plugins: [],
};
