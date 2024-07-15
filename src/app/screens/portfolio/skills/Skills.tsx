import { useTranslations } from 'next-intl';

import Tag from '@/components/common/tag/Tag';

import PortfolioHeading from '../portfolio-heading/PortfolioHeading';
import { PortfolioHeadingLevel } from '../portfolio-heading/PortfolioHeading.enum';
import ProfileSkills from './profile-skills/ProfileSkills';
import { skillList } from './Skills.list';

const Skills = () => {
	const t = useTranslations('PortfolioPageHeadings');

	return (
		<div>
			<PortfolioHeading headingLevel={PortfolioHeadingLevel.H2} title={t('skill.title')} />

			<section className="flex gap-1 flex-wrap">
				<ProfileSkills />
			</section>

			<section>
				{skillList.map((item) => {
					return (
						<div key={item.id}>
							<h3 className="pb-2 pt-3 font-semibold dark:text-108">{item.title}</h3>
							<Tag items={item.items} />
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Skills;
