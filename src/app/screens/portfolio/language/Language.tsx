import { useTranslations } from 'next-intl';

import Tag from '@/components/common/tag/Tag';

import PortfolioHeading from '../portfolio-heading/PortfolioHeading';
import { PortfolioHeadingLevel } from '../portfolio-heading/PortfolioHeading.enum';
import { languageList } from './Language.list';

const Language = () => {
	const t = useTranslations('PortfolioPageHeadings');

	return (
		<div className="pt-8">
			<PortfolioHeading
				headingLevel={PortfolioHeadingLevel.H2}
				title={t('language.title')}
				subTitle="Learning German B2"
			/>
			<div className="pt-6">
				{languageList.map((item) => (
					<Tag items={item.items} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default Language;
