export interface ExperienceItem {
	id: string;
	title: string;
	description: string;
	content: string;
	image: string;
	startDate: string;
	endDate?: string | null;
	current?: string;
	name?: string;
}
