import { FaGithub } from 'react-icons/fa';

import { HeaderIconType } from './HeaderIcon.enum';
import { HeaderIconInterface } from './HeaderIcon.interface';

export const HeaderIcons: HeaderIconInterface[] = [
	{
		Icon: <FaGithub className="h-6 w-6" aria-label="Github" />,
		url: HeaderIconType.GITHUB
	}
];
