/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      spacing:{
        "headerHeight":"80px",
        "menuWidth":"250px",
        "zero":"0",
        "one":"1px",
        "outOfWindow":"500px",
      },
      minWidth:{
        "btnWidth":"90px",
      },
      backgroundColor:{
        "grayishBlue":"hsl(257, 27%, 26%)",
        "cyan":"hsl(180, 66%, 49%)",
      },
      margin:{
        "zeroAuto":"0 auto",
      },
      screens:{
        "tab":"520px",
      }
    },
  },
  plugins: [],
}
