import { useTranslations } from 'next-intl';

import Tag from '@/components/common/tag/Tag';

import PortfolioHeading from '../portfolio-heading/PortfolioHeading';
import { PortfolioHeadingLevel } from '../portfolio-heading/PortfolioHeading.enum';
import { interestList } from './Interest.list';

const Interest = () => {
	const t = useTranslations('PortfolioPageHeadings');

	return (
		<section className="pt-8" aria-label="interest">
			<PortfolioHeading headingLevel={PortfolioHeadingLevel.H2} title={t('interest.title')} />
			<div className="mt-8">
				{interestList.map((item) => (
					<Tag items={item.items} key={item.id} />
				))}
			</div>
		</section>
	);
};

export default Interest;
