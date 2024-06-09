/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#404484",
        secondary: "#41535C",
        tertiary: "#FCC743",
        abu: "#C5C7D8",
        merah: "#E02523",
        hitam: "#252525",
      },
    },
  },
  plugins: [],
};
