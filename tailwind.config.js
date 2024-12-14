/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        // primary: "#4984F0",
        // primary: "#1890ff;",

        headingColor:"#1E3A8A",
        subHeadingColor: "#4CAF50",
        textColor:"#374151"
      },
     
    },
  },
  plugins: [],
};

