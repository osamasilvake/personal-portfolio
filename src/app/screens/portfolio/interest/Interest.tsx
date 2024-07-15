// import Tag from '@/components/common/tag/Tag';

import { useTranslations } from 'next-intl';

import Tag from '@/components/common/tag/Tag';

import PortfolioHeading from '../portfolio-heading/PortfolioHeading';
import { PortfolioHeadingLevel } from '../portfolio-heading/PortfolioHeading.enum';
import { interestList } from './Interest.list';

const Interest = () => {
	const t = useTranslations('PortfolioPageHeadings');

	return (
		<div className="pt-8">
			<PortfolioHeading headingLevel={PortfolioHeadingLevel.H2} title={t('interest.title')} headingStyle="pb-6" />
			<div className="pt-2">
				{interestList.map((item) => (
					<Tag items={item.items} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default Interest;
