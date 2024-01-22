import ThemeSwitch from '@/components/ThemeSwitch';

import { Providers } from '../provider';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Providers>
			<ThemeSwitch />
			<header>header</header>
			{children}
			<footer>footer</footer>
		</Providers>
	);
};

export default CommonLayout;
