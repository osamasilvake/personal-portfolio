'use client';

import ColorToggle from '@/components/frame/header/color-mode/ColorToggle';

import { HeaderList } from './Header.list';
import HeaderIcon from './header-icon/HeaderIcon';
import { HeaderIcons } from './header-icon/HeaderIcon.list';
import HeaderItem from './HeaderItem';

const Header = () => {
	return (
		<header>
			<nav className="flex justify-between items-center pt-5">
				<ul className="flex gap-10 w-72">
					{HeaderList?.map((item) => <HeaderItem key={item.path} path={item.path} label={item.label} />)}
				</ul>

				<div>
					<p className="font-bold text-xl w-48 leading-8 hidden md:block" tabIndex={0}>
						Osa<span className="text-102">mi</span>
					</p>
				</div>

				<div className="flex items-center gap-8">
					{HeaderIcons?.map((icon) => {
						return <HeaderIcon key={icon.url} icon={icon} />;
					})}
					<div className="w-5 h-5">
						<ColorToggle />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
