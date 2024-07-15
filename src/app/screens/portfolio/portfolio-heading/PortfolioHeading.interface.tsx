import { PortfolioHeadingLevel } from './PortfolioHeading.enum';

export interface PortfolioProps {
	title: string;
	subTitle?: string;
	headingLevel?: PortfolioHeadingLevel;
	headingStyle?: string;
}
