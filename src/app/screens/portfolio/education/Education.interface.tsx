export interface EducationItem {
	id: string;
	title: string;
	description: string;
	name: string;
	image: string;
	startDate?: string;
	endDate?: null | string;
	content?: string;
	current?: string;
}
