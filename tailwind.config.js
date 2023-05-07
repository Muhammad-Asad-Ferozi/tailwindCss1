/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      colors:{
      bkg: "#171819",
      muted: "#C9CbCF",
      accent: "#66CCC1",
      },
    dropShadow: {
      "text-sm": "1px 1px 0px rgba(0, 0 , 0 , 0.90)",
      "text-md": "1px 2px 0px rgba(0, 0 , 0 , 0.90)",
      "text-lg": "1px 4px 0px rgba(0, 0 , 0 , 0.90)",
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ["Outfit","sans-serif"],
    },
    fontSize: {
      rm: [ "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)"],
      base:[ "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)"],
      lg: ["clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)"],
      xl: ["clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)"],
      "2xl": ["clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)"],
      "3xl": ["clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)"],
      "4xl": ["clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)"],
      "5xl": ["clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)"],
    },
  },
  plugins: [],
}
}