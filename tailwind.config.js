module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c2d5c4",
      },
      textShadow: {
        default: "0 2px 1px #333",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.12) 0px 2px 12px;",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
