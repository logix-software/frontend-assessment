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
        'pale-blue': '#D3E2E8',
        'slate-teal': '#4D696D',
        'pale-mint': '#FBFFF0',
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

