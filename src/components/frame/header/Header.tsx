'use client';

import { useTranslations } from 'next-intl';

import ColorToggle from '@/components/frame/header/color-mode/ColorToggle';

import HeaderIcon from './header-icon/HeaderIcon';
import { HeaderIcons } from './header-icon/HeaderIcon.list';
import HeaderLink from './HeaderLink';
import LanguageToggle from './language-mode/LanguageToggle';

const Header = () => {
	const t = useTranslations('Navigation');

	return (
		<header>
			<nav className="flex justify-between items-center mt-5 flex-col-reverse space-y-3 sm:space-y-0 sm:flex-row">
				<div className="flex gap-8 sm:w-72">
					<HeaderLink href="/" title={t('home')} />
					<HeaderLink href="/portfolio" title={t('portfolio')} />
				</div>

				<div>
					<p className="dark:text-108 w-40 font-semibold text-xl leading-8 text-center sm:text-start block sm:hidden md:block">
						Osami
					</p>
				</div>

				<div className="flex items-center gap-6">
					{HeaderIcons?.map((icon) => {
						return <HeaderIcon key={icon.url} icon={icon} />;
					})}
					<div className="h-6 w-6">
						<ColorToggle />
					</div>
					<div className="bg-105 dark:bg-106">
						<LanguageToggle />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
