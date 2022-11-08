/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "main-purple":"#7C5DFA",
      "desaturated-purple":"#9277FF",
      "dark-greyish-blue":"#1E2139",
      "greyish-blue":"#252945",
      "desaturated-grey":"#DFE3FA",
      "grey":"#888EB0",
      "sky-blue":"#7E88C3",
      "black":"#0C0E16",
      "red":"#EC5757",
      "desaturated-red":"#FF9797",
      "desaturated-white":"#F8F8FB",
      "white":"#fff",
      "desaturated-black":"#141625"
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif']
    },
    fontSize: {
      h1: ["32px", "36px"],
      h2: ["20px", "22px"],
      h3: ["16px", "24px"],
      h4: ["12px", "15px"],
      "body-l": ["12px", "15px"],
      "body-m": ["11px", "18px"]
    },
    letterSpacing: {
        "h1-spacing": '-1px',
        "h2-spacing": '-0.63px',
        "h3-spacing": '-0.8px',
        "h4-spacing": '-0.25px',
        "body-l-spacing": '-0.25px',
        "body-m-spacing": '-0.23px'
    }
  },
  plugins: [],
}