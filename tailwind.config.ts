import type { Config } from 'tailwindcss'

export default {
	future: { disableColorOpacityUtilitiesByDefault: true },
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '28rem',
			md: '48rem',
			lg: '64rem',
			xl: '80rem',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				xl: '6rem',
			},
		},
		extend: {
			fontFamily: {
				sans: '"Bradesco Sans", sans-serif',
				display: '"Holly Rudolph", sans-serif',
			},
			gridTemplateColumns: {
				19: 'repeat(19, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				46: 'repeat(46, minmax(0, 1fr))',
			},
			gridColumn: {
				'span-15': 'span 15 / span 15',
				'span-19': 'span 19 / span 19',
			},
			gridRow: {
				'span-9': 'span 9 / span 9',
				'span-10': 'span 10 / span 10',
				'span-12': 'span 12 / span 12',
				'span-14': 'span 14 / span 14',
			},
		},
	},
} satisfies Config
