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
        "svgWidth":"100px",
        "outOfWindow":"500px",
        "heroWidth":"70%",
        "dangerLink":"120px",
        "mediaDangerLink":"170px",
        "offerWidth":"300px",
        "offerHeight":"300px",
      },
      minWidth:{
        "btnWidth":"90px",
        "heroWidth":"140px",
        "textWidth":"400px",
      },
      maxWidth:{
        "formWidth":"140px",
        "descWidth":"400px",
        "btnWidth":"90px",
      },
      backgroundColor:{
        "grayishBlue":"hsl(257, 27%, 26%)",
        "cyan":"hsl(180, 66%, 49%)",
        "specialRed": "hsl(0, 87%, 67%)",
        "darkViolet":"hsl(260, 8%, 14%)",
        "grayishViolet":"hsl(257, 7%, 63%)",
        "darkBlue":"hsl(255, 11%, 22%)",
      },
      colors:{
        "GRAY":"hsl(0, 0%, 75%)",
        "specialRed":"hsl(0, 87%, 67%)",
        "cyan":"hsl(180, 66%, 49%)",
      },
      margin:{
        "zeroAuto":"0 auto",
      },
      screens:{
        "tab":"750px",
      },
      content:{
        "warning":"Please fill the form",
      },
      fontFamily:{
        "poppins":"Alegreya Sans SC', sans-serif",
      }
    },
  },
  plugins: [],
}
