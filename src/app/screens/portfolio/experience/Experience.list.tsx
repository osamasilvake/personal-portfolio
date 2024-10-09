import dayjs from 'dayjs';

import javascript from '../../../../assets/images/javascript.svg';
import typescript from '../../../../assets/images/typescript.svg';
import { ExperienceListType } from './Experience.enum';
import { ExperienceItem } from './Experience.interface';

export const ExperienceList: ExperienceItem[] = [
	{
		id: ExperienceListType.Current,
		title: 'Frontend Developer',
		description: 'Root Ai, February 2023',
		startDate: dayjs('2023-02-01'),
		endDate: null, // null indicates current date
		content: '1 Year 6 Months',
		current: 'Current',
		image: javascript
	},
	{
		id: 'Previous',
		title: 'Frontend Developer',
		description: 'All Right Tech, August 2022 - January 2023',
		startDate: dayjs('2022-08-01'),
		endDate: dayjs('2023-01-31'),
		content: '6 Months',
		image: typescript
	}
];
