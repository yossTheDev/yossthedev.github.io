/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    // themes: true,
    themes: [
      {
        yoss_theme: {
          primary: "#7A68D6",

          secondary: "#ff39b6",

          accent: "#d97706",

          neutral: "#242424",

          info: "#22d3ee",

          success: "#9CB686",

          warning: "#FFD261",

          error: "#FC9783",

          "base-100": "#0A0A0A",
          "base-200": "#121212",
          "base-300": "#222222",
          "base-content": "#000000",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
