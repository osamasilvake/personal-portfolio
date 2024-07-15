import { FaGithub } from 'react-icons/fa';

// import { MdGTranslate } from 'react-icons/md';
import { HeaderIconType } from './HeaderIcon.enum';
import { HeaderIconInterface } from './HeaderIcon.interface';

export const HeaderIcons: HeaderIconInterface[] = [
	{
		Icon: <FaGithub className="h-5 w-5" aria-label="Github" />,
		url: HeaderIconType.GITHUB
	}
	// {
	// 	Icon: <MdGTranslate className="h-5 w-5" aria-label="Translate language" />,
	// 	url: HeaderIconType.INSTAGRAM
	// }
];
