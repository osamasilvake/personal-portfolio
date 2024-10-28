import { PortfolioHeadingLevel } from './PortfolioHeading.enum';
import { PortfolioProps } from './PortfolioHeading.interface';

const PortfolioHeading = (props: PortfolioProps) => {
	const { title, subTitle, headingLevel = PortfolioHeadingLevel.H1, headingStyle } = props;
	const Heading = headingLevel;

	return (
		<div>
			<Heading className={`dark:text-108 ${headingStyle}`}>{title}</Heading>
			<p className="dark:text-108 pt-1">{subTitle}</p>
		</div>
	);
};

export default PortfolioHeading;
