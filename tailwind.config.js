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
        'Lato-BlackItalic': ['Lato-BlackItalic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
)
