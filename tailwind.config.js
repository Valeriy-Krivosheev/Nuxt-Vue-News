module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#e4ecf1",
        darkBlue: "#031c2b",
        // white: "#fff",
        // grey: "#666",
        // lightGrey: "#b4b4b4",
        // divider: "#c6d4dc",
        // brand: "#00f0b9",
        // green: "#00c891",
        // darkGreen: "#003838",
        // black: "#222",
        // red: "#f00f37",
        boxShadow: "#d0dee7",
        // boxShadowOpacity: "#d0dee766",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
