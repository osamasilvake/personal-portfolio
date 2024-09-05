import dayjs from 'dayjs';

export interface ExperienceItem {
	id: string;
	title: string;
	description: string;
	content: string;
	image: string;
	startDate: dayjs.Dayjs;
	endDate?: dayjs.Dayjs | null;
	current?: string;
	name?: string;
}
