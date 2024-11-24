import university from '@/assets/svg/portfolio/universities/university-of-oxford-badge-logo-svgrepo-com.svg';
import college from '@/assets/svg/portfolio/universities/university-svgrepo-com.svg';

import { ExperienceListType } from '../experience/Experience.enum';
import { EducationItem } from './Education.interface';

export const EducationList: EducationItem[] = [
	{
		id: ExperienceListType.Current,
		title: 'Oxford College',
		description: 'Intermediate, Computer Science, 2021, Pakistan',
		image: college,
		name: 'Oxford'
	},
	{
		id: 'Silver',
		image: university,
		name: 'Preston',
		title: 'Preston University',
		description: 'Bachelor, Computer Science, 2021 - 2024, Pakistan'
	}
];
