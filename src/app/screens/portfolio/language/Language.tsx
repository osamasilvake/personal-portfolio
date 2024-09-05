import { useTranslations } from 'next-intl';

import Tag from '@/components/common/tag/Tag';

import PortfolioHeading from '../portfolio-heading/PortfolioHeading';
import { PortfolioHeadingLevel } from '../portfolio-heading/PortfolioHeading.enum';
import { languageList } from './Language.list';

const Language = () => {
	const t = useTranslations('PortfolioPageHeadings');

	return (
		<section className="pt-8 pb-6 border-b dark:border-b-gray-700" aria-label="language">
			<PortfolioHeading
				headingLevel={PortfolioHeadingLevel.H2}
				title={t('language.title')}
				subTitle={t('language.sub_title')}
			/>
			<div className="mt-8">
				{languageList.map((item) => (
					<Tag items={item.items} key={item.id} />
				))}
			</div>
		</section>
	);
};

export default Language;
