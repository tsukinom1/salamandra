/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        customGray: "#0A7E63;",
        primary: "#06A592;",
        darkGreen: "#026257;",
        darkBlue: "#12175D;"
      }
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
};
