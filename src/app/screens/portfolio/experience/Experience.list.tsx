import javascript from '../../../../assets/images/javascript.svg';
import typescript from '../../../../assets/images/typescript.svg';
import { ExperienceListType } from './Experience.enum';
import { ExperienceItem } from './Experience.interface';

export const ExperienceList: ExperienceItem[] = [
	{
		id: ExperienceListType.Current,
		title: 'Frontend Developer',
		description: 'Root Ai, February 2023',
		startDate: '2023-02-01',
		endDate: null, // null indicates current date
		content: '1 Year 4 Months',
		current: 'Current',
		image: javascript
	},
	{
		id: 'Starter',
		title: 'Frontend Developer',
		description: 'All Right Tech, August 2022 - January 2023',
		startDate: '2022-08-01',
		endDate: '2023-01-31',
		content: '6 Months',
		image: typescript
	},
	{
		id: 'Silver',
		title: 'Backend Developer',
		description: 'Hello Tech, August 2021 - January 2022',
		startDate: '2021-01-01',
		endDate: '2022-02-01',
		content: '1 Year 1 Month',
		image: typescript
	}
];
