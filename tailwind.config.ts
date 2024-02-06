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
				102: '#929392'
			},
			gridTemplateColumns: {
				// Complex site-specific column configuration
				'main-layout': '120px 200px 200px 410px 280px 120px'
			}
		}
	},
	plugins: []
};
export default config;
