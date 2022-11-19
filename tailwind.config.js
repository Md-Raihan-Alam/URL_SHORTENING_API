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
        "heroWidth":"70%",
        "dangerLink":"120px",
        "mediaDangerLink":"170px",
      },
      minWidth:{
        "btnWidth":"90px",
        "heroWidth":"140px",
      },
      maxWidth:{
        "formWidth":"140px",
      },
      backgroundColor:{
        "grayishBlue":"hsl(257, 27%, 26%)",
        "cyan":"hsl(180, 66%, 49%)",
        "specialRed": "hsl(0, 87%, 67%)",
      },
      colors:{
        "GRAY":"hsl(0, 0%, 75%)",
        "specialRed":"hsl(0, 87%, 67%)",
      },
      margin:{
        "zeroAuto":"0 auto",
      },
      screens:{
        "tab":"520px",
      },
      content:{
        "warning":"Please fill the form",
      },
    },
  },
  plugins: [],
}
