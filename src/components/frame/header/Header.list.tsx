import { HeaderType } from './Header.enum';
import { Header } from './Header.interface';

export const HeaderList: Header[] = [
	{
		label: HeaderType.HOME
	},
	{
		label: HeaderType.PORTFOLIO
	},
	{
		label: HeaderType.BLOG
	},
	{
		label: HeaderType.ABOUT
	}
];
