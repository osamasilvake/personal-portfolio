import Image from 'next/image';
import { useTranslations } from 'next-intl';

import nextjs from '../../../assets/svg/portfolio/expertise/next-js (1).svg';
import { FooterType } from './Footer.enum';

const Footer = () => {
	const t = useTranslations('Footer');

	return (
		<footer className="flex justify-center items-center gap-1 p-2.5 border-t border-t-110 dark:border-t-109">
			<p className="text-sm dark:text-108">{t('title')}</p>
			<Image src={nextjs} alt="Next.js" className="w-5 h-5 rounded-full" />
			<span className="text-sm dark:text-108">({FooterType.VERSION})</span>
		</footer>
	);
};

export default Footer;
