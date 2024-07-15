import appRoutes from '@/app/routes/Routes.path';

import { HeaderType } from './Header.enum';
import { HeaderInterface } from './Header.interface';

export const HeaderList: HeaderInterface[] = [
	{
		path: appRoutes.SCREENS.HOME.MAIN,
		label: HeaderType.HOME
	},
	{
		path: appRoutes.SCREENS.PORTFOLIO.MAIN,
		label: HeaderType.PORTFOLIO
	}
];
