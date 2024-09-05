import Image from 'next/image';
import { useTranslations } from 'next-intl';

import nextjs from '../../../assets/svg/portfolio/expertise/next-js (1).svg';

const Footer = () => {
	const t = useTranslations('Footer');

	return (
		<footer className="flex justify-center items-center gap-1 p-2.5 border-t dark:border-t-gray-700">
			<p className="text-sm dark:text-108">{t('title')}</p>
			<Image src={nextjs} alt="Next.js" className="w-5 h-5 rounded-full" />
			<span className="text-sm dark:text-108">(14.4.1)</span>
		</footer>
	);
};

export default Footer;
