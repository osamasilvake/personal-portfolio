import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				101: '#EEEFEE',
				102: '#929392',
				103: '#00458e',
				104: '#ddd',
				105: '#f2f5fa',
				106: '#212121',
				107: '#6fb98f',
				108: '#6a6c6d'
			},
			maxWidth: {
				201: '75rem'
			},
			width: {
				301: '33.33333%',
				302: '66.66667%',
				303: '50px'
			},
			height: {
				401: '50px'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				'fade-in': 'fadeIn 2s ease-in-out'
			}
		}
	},
	plugins: [],
	darkMode: ['class']
};
export default config;
