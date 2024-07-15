import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;

export const pathnames = {
	'/': '/',
	'/portfolio': '/portfolio'
	// '/portfolio': {
	// 	en: '/portfolio'
	// 	// de: '/aktenmappen'
	// }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
