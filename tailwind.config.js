/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/fondo.svg')",
        'footer-texture': "url('/src/assets/images/discord.jpg')",
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui()
  ]
}
