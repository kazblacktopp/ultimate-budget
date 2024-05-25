/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// Adds a new `font-display` class
			fontFamily: {
				display: '"Roboto Condensed", ui-sans-serif',
			},
		},
	},
	plugins: [],
};

