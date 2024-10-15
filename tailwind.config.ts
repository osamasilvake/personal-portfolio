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
				108: '#7b7b7b',
				109: '#2b2b2b',
				110: '#dcd7d7',
				111: '#353535',
				112: '#2a2a2a'
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
				'fade-in': 'fadeIn 1.6s ease-in-out'
			}
		}
	},
	plugins: [],
	darkMode: ['class']
};
export default config;
