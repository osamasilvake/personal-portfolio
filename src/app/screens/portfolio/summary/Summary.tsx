import { useTranslations } from 'next-intl';

import PortfolioHeading from '../portfolio-heading/PortfolioHeading';

const Summary = () => {
	const t = useTranslations('PortfolioPageHeadings');
	const t1 = useTranslations('Summary');

	return (
		<section>
			<PortfolioHeading title={t('summary.title')} headingStyle="pb-4" />
			<p className="dark:text-108">{t1('description.intro')}</p>
			<p className="pt-4 pb-4 dark:text-108">{t1('description.code_quality')}</p>
			<p className="dark:text-108">{t1('description.current_learning')}</p>
		</section>
	);
};

export default Summary;
