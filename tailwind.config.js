/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
		},

	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{

				light: {
					...require("daisyui/src/theming/themes")["[data-theme=light]"],
					"primary": "#fa3e67",
					".btn": {
						"border-radius" : "999px"
					},
					".btn-primary": {
						"color" : "white"
					}
				}
			},
			'dark',
			'cupcake'
		],
	},
}
