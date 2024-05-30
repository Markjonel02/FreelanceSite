// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
import vitePluginRequire from "vite-plugin-require";
import react from "@vitejs/plugin-react"
import { defineConfig } from 'vite'

export default withMT(defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato-Regular': ['Lato-Regular', 'sans-serif'],
        'Lato-Thin': ['Lato-Thin', 'sans-serif'],
        'Lato-ThinItalic': ['Lato-ThinItalic', 'sans-serif'],
        'Lato-Italic': ['Lato-Italic', 'sans-serif'],
        'Lato-Light': ['Lato-Light', 'sans-serif'],
        'Lato-LightItalic': ['Lato-LightItalic', 'sans-serif'],
        'Lato-Bold': ['Lato-Bold', 'serif'],
        'Lato-Black': ['Lato-Black', 'sans-serif'],
        'Lato-BlackItalic': ['Lato-BlackItalic', 'sans-serif'],
      },
      colors: {
        'blue-primary': '#039be5',
        'Lighter-Blue': '#d3e8f2ff',
        'Light-blue': '#C7EEFF',
        'Light-pink': '#f5d4d3ff',
        'Light-Red': '#f57d7fff',
        'Light-Orange': '#f5dfd5ff',
        'Light-Purple': '#ded3f5ff',
        'Light-Purple2': '#cebcf5ff',
        'Dark-Purple': '#9f7df5ff',
        'Light-secondary': '#FAFAFA',
        'Dark-primary': '#1D242B',
      },
    },
  },
  plugins: [react(), vitePluginRequire()],
}));
