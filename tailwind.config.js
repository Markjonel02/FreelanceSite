/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT ({
  content: [ 
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        /*  'Roboto-LightItalic': ['Roboto-LightItalic', 'serif'], */
        'Lato-Regular': ['Lato-Regular', 'sans-serif'],
        'Lato-Thin': ['Lato-Thin', 'sans-serif'],
        'Lato-ThinItalic': ['Lato-ThinItalic', 'sans-serif'],
        'Lato-Italic': ['Lato-Italic', 'sans-serif'],
        'Lato-Light': ['Lato-Light', 'sans-serif'],
        'Lato-LightItalic': ['Lato-LightItalic', 'sans-serif'],
        'Lato-Bold': ['Lato-Bold', 'serif'],
        'Lato-Black': ['Lato-Black', 'sans-serif'],
        'Lato-BlackItalic': ['Lato-BlackItalic', 'sans-serif'],
      }
    },
  colors: {
  'blue-primary': '#039be5',
  'Lighter-Blue': '#d3e8f2ff',
  'Light-blue': '#C7EEFF',
  'Light-pink': '#f5d4d3ff',
  'Light-Red': '#f57d7fff',
  'Light-Orange': '##f5dfd5ff',
  'Light-Purple': '#ded3f5ff',
  'Light-Purple2': '#cebcf5ff',
  'Dark-Purple': '#9f7df5ff',
  'Light-secondary': '#FAFAFA',
  'Dark-primary': '#1D242B',    
},
 keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },

  },
  plugins: [],
}
)
