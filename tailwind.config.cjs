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
        light: {
          primary: "#e09553",

          secondary: "#edcb3b",

          accent: "#d97706",

          neutral: "#e5e7eb",

          "base-100": "#ECECEC",

          info: "#22d3ee",

          success: "#9CB686",

          warning: "#FFD261",

          error: "#FC9783",

          "base-200": "#f3f4f6",
          "base-300": "#ced3d9",
          "base-content": "#000000",
        },

        dark: {
          primary: "#e09553",

          secondary: "#ff39b6",

          accent: "#d97706",

          neutral: "#111111",

          "base-100": "#0A0A0A",

          info: "#22d3ee",

          success: "#9CB686",

          warning: "#FFD261",

          error: "#FC9783",

          "base-200": "#0E0E0E",
          "base-300": "#ced3d9",
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
