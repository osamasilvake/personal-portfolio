import { useTranslations } from 'next-intl';

import { ServiceList } from './Service.list';

const Service = () => {
	const t = useTranslations('Service');

	return (
		<div className="w-full pt-8 lg:pt-0 lg:w-72">
			{ServiceList?.map((service, index) => (
				<article key={index} className="pr-1 pb-11">
					<div className="flex items-center gap-3">
						<service.Icon aria-hidden="true" className={`${service.size} dark:text-108`} />
						<h3 className="font-bold dark:text-108">{t(`${service.key}.title`)}</h3>
					</div>
					<p className="ml-1 mt-1 dark:text-108 text-justify">{t(`${service.key}.description`)}</p>
				</article>
			))}
		</div>
	);
};

export default Service;
