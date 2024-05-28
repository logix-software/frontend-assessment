/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#F3535C',
        'secondary': '#D7FF65',
        'app-bg': '#00282E',
        'grayish-blue': '#99A9AB',
        'deepest-teal': '#001214',
        'ocean-teal': '#335358',
        'inky-teal': '#001E23',
        'pale-blue': '#D3E2E8',
        'slate-teal': '#4D696D',
        'pale-mint': '#FBFFF0',
        'cool-gray': '#B2BEC0',
        'light-gray': '#E5E5E5',
        'oceanic-blue': '#1A3E43',
      }
    },
    container:{
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      }
    }
  },
  plugins: [],
}

