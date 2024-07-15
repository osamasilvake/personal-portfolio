import { useTranslations } from 'next-intl';

import { EducationList } from '@/app/screens/portfolio/education/Education.list';
import { ExperienceList } from '@/app/screens/portfolio/experience/Experience.list';
import Interest from '@/app/screens/portfolio/interest/Interest';
import Language from '@/app/screens/portfolio/language/Language';
import {
	PortfolioHeadingLevel,
	PortfolioHeadingType
} from '@/app/screens/portfolio/portfolio-heading/PortfolioHeading.enum';
import PortfolioSection from '@/app/screens/portfolio/portfolio-section/PortfolioSection';
import { PortfolioSectionType } from '@/app/screens/portfolio/portfolio-section/PortfolioSection.enum';
import Skills from '@/app/screens/portfolio/skills/Skills';
import Summary from '@/app/screens/portfolio/summary/Summary';
import { ToolTipPositionEnum } from '@/components/common/tooltip/ToolTip.enum';

const Portfolio = () => {
	const t = useTranslations('PortfolioPageHeadings');

	return (
		<section className="mt-14">
			<section>
				<Summary />
			</section>
			<div className="flex gap-6 flex-col pt-16 pb-16 md:flex-row">
				<section className="md:w-301">
					<Skills />
				</section>
				<section className="pt-5 md:w-302 md:pt-0">
					<PortfolioSection
						headingLevel={PortfolioHeadingLevel.H2}
						title={t('education.title')}
						// title={ProfileHeadingType.Education_Heading}
						subTitle={PortfolioHeadingType.Education_Sub_Heading}
						list={EducationList}
						position={ToolTipPositionEnum.TOP}
					/>
					<PortfolioSection
						headingLevel={PortfolioHeadingLevel.H2}
						title={t('experience.title')}
						// title={ProfileHeadingType.Experience_Heading}
						subTitle={PortfolioHeadingType.Experience_Sub_Heading}
						list={ExperienceList}
						experience={PortfolioSectionType.Experience}
						position={ToolTipPositionEnum.BOTTOM}
					/>
					<section>
						<Language />
					</section>
					<section>
						<Interest />
					</section>
				</section>
			</div>
		</section>
	);
};

export default Portfolio;
