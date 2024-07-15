import { ToolTipPositionEnum } from '@/components/common/tooltip/ToolTip.enum';

import { EducationItem } from '../education/Education.interface';
import { ExperienceItem } from '../experience/Experience.interface';
import { ProfileHeadingLevel } from '../portfolio-heading/PortfolioHeading.enum';

export interface PortfolioProps {
	headingLevel: ProfileHeadingLevel;
	title: string;
	subTitle: string;
	position: ToolTipPositionEnum;
	list: EducationItem[] | ExperienceItem[];
	experience?: string;
}
