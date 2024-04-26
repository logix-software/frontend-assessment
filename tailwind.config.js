/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin.js';

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
      colors: {
				black: {
					'900': '#3A3A3A',
				},
				red: {
					'900': '#E97171',
				},
				green: {
					'900': '#2EC1AC',
				},
        gold: {
          '900': '#B88E2F',
        },
        gray: {
          '900': '#898989',
        },
        lightGray: {
          '900': '#F4F5F7',
        }
			},
    },
  },
  plugins: [
    plugin(function({ addBase }) {
			addBase({
				h1: { fontSize: '2.5em', lineHeight: '1.2em', marginBlockStart: '0.8em', marginBlockEnd: '0.8em' },
				h2: { fontSize: '1.5em', lineHeight: '1.167em', marginBlockStart: '0.334em', marginBlockEnd: '0.334em' },
				h3: { fontSize: '1.25em', lineHeight: '1.5em', marginBlockStart: '0.4em', marginBlockEnd: '0.4em' },
			});
		}),
  ],
}

