import { CgWebsite } from 'react-icons/cg';
import { LuLayout } from 'react-icons/lu';
import { RiPresentationFill } from 'react-icons/ri';

import { Service } from './Service.interface';

export const ServiceList: Service[] = [
	{
		Icon: LuLayout,
		key: 'webDeveloper',
		size: 'h-6 w-7'
	},
	{
		Icon: CgWebsite,
		key: 'uxUiDesign',
		size: 'h-8 w-6'
	},
	{
		Icon: RiPresentationFill,
		key: 'webConsulting',
		size: 'h-8 w-6'
	}
];
