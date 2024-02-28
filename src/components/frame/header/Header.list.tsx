import { HeaderType } from './Header.enum';
import { Header } from './Header.interface';

export const HeaderList: Header[] = [
	{
		path: '/home',
		label: HeaderType.HOME
	},
	{
		path: '/home/portfolio',
		label: HeaderType.PORTFOLIO
	},
	{
		path: '/blog',
		label: HeaderType.BLOG
	},
	{
		path: '/home/about',
		label: HeaderType.ABOUT
	}
];
