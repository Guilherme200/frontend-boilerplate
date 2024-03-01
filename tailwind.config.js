/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    colors: {
      primary: '#5c6ac4',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

