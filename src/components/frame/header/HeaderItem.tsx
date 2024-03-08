import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { HeaderInterface } from './Header.interface';

const HeaderItem: FC<HeaderInterface> = (props) => {
	const { path, label } = props;

	const pathname = usePathname();

	return (
		<li key={path}>
			<Link
				href={path}
				className={`${pathname === path ? 'text-gray-600 dark:text-gray-300 border-b-4 border-gray-300 pb-2' : ''}`}>
				{label}
			</Link>
		</li>
	);
};

export default HeaderItem;
