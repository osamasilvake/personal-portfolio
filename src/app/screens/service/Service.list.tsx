import { CgWebsite } from 'react-icons/cg';
import { LuLayout } from 'react-icons/lu';
import { RiPresentationFill } from 'react-icons/ri';

import { Service } from './Service.interface';

export const ServiceList: Service[] = [
	{
		Icon: LuLayout,
		title: 'Web Developer',
		description: 'Translate your ideas into digital reality with web development services',
		size: 'h-6 w-7'
	},
	{
		Icon: CgWebsite,
		title: 'UX/Ui Design ',
		description: 'UX/UI design expertise to engaging user experiences,',
		size: 'h-8 w-6'
	},
	{
		Icon: RiPresentationFill,
		title: 'Web Consulting',
		description: 'Navigate the complexities of the online world with consulting services',
		size: 'h-8 w-6'
	}
];
