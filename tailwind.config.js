const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,tsx,ts}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    darkMode: "class",
    plugins: [nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
    })],
  }