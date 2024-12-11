import { ToolTipPositionEnum } from '@/components/common/tooltip/ToolTip.enum';

import { EducationItem } from '../education/Education.interface';
import { ExperienceItem } from '../experience/Experience.interface';
import { PortfolioHeadingLevel } from '../portfolio-heading/PortfolioHeading.enum';

export interface PortfolioProps {
	headingLevel: PortfolioHeadingLevel;
	title: string;
	subTitle?: string;
	position: ToolTipPositionEnum;
	list: EducationItem[] | ExperienceItem[];
	experience?: string;
}

export interface Calculate {
	startDate: string | undefined;
	endDate?: string | null;
}

export interface Format {
	years: number;
	months: number;
}
