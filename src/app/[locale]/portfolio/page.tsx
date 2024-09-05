import { useTranslations } from 'next-intl';

import { EducationList } from '@/app/screens/portfolio/education/Education.list';
import { ExperienceList } from '@/app/screens/portfolio/experience/Experience.list';
import Interest from '@/app/screens/portfolio/interest/Interest';
import Language from '@/app/screens/portfolio/language/Language';
import { PortfolioHeadingLevel } from '@/app/screens/portfolio/portfolio-heading/PortfolioHeading.enum';
import PortfolioSection from '@/app/screens/portfolio/portfolio-section/PortfolioSection';
import { PortfolioSectionType } from '@/app/screens/portfolio/portfolio-section/PortfolioSection.enum';
import Skills from '@/app/screens/portfolio/skills/Skills';
import Summary from '@/app/screens/portfolio/summary/Summary';
import { ToolTipPositionEnum } from '@/components/common/tooltip/ToolTip.enum';

const Portfolio = () => {
	const t = useTranslations('PortfolioPageHeadings');

	return (
		<main className="mt-14">
			<div>
				<Summary />
			</div>

			<div className="flex gap-6 flex-col mt-16 mb-16 md:flex-row">
				<div className="md:w-301">
					<Skills />
				</div>
				<div className="pt-5 md:w-302 md:pt-0">
					<div>
						<PortfolioSection
							headingLevel={PortfolioHeadingLevel.H2}
							title={t('education.title')}
							subTitle={t('education.sub_title')}
							// title={ProfileHeadingType.Education_Heading}
							// subTitle={PortfolioHeadingType.Education_Sub_Heading}
							list={EducationList}
							position={ToolTipPositionEnum.TOP}
						/>
						<PortfolioSection
							headingLevel={PortfolioHeadingLevel.H2}
							title={t('experience.title')}
							subTitle={t('experience.sub_title')}
							// title={ProfileHeadingType.Experience_Heading}
							// subTitle={PortfolioHeadingType.Experience_Sub_Heading}
							list={ExperienceList}
							experience={PortfolioSectionType.Experience}
							position={ToolTipPositionEnum.BOTTOM}
						/>
					</div>
					<div>
						<Language />
					</div>
					<div>
						<Interest />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Portfolio;
