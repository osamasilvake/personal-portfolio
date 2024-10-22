'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

import { Link } from '@/i18n/routing';

interface HeaderLinkProps {
	href: string;
	title: string;
}

const HeaderLink = ({ href, title }: HeaderLinkProps) => {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			aria-current={isActive ? 'page' : undefined}
			className={`py-3 transition-colors inline-block
			 ${
					isActive
						? 'text-green-400 dark:text-green-600 border-b-2 border-b-green-400 dark:border-b-green-600'
						: 'dark:text-108'
				}`}>
			{title}
		</Link>
	);
};
export default HeaderLink;
