import { FaSquareFacebook, FaTwitter } from 'react-icons/fa6';
import { LuInstagram } from 'react-icons/lu';

import { HeaderIconType } from './HeaderIcon.enum';
import { HeaderIconInterface } from './HeaderIcon.interface';

export const HeaderIcons: HeaderIconInterface[] = [
	{
		Icon: <FaSquareFacebook className="h-5 w-5" aria-label="Facebook" />,
		url: HeaderIconType.FACEBOOK
	},
	{
		Icon: <FaTwitter className="h-5 w-5" aria-label="Twitter" />,
		url: HeaderIconType.TWITTER
	},
	{
		Icon: <LuInstagram className="h-5 w-5" aria-label="Instagram" />,
		url: HeaderIconType.INSTAGRAM
	}
];
