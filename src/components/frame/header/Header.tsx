'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTwitter } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { LuInstagram } from 'react-icons/lu';

import ThemeToggle from '@/components/ThemeToggle';

import { HeaderList } from './Header.list';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="hidden pt-5 sm:block  2xl:container mx-auto">
			<nav className="flex justify-around items-center">
				<ul className="flex gap-10">
					{HeaderList?.map((item, index) => (
						<li key={index}>
							<Link
								href={item.path}
								className={`${
									pathname === item.path
										? 'text-gray-600 dark:text-gray-300 border-b-4 border-gray-300 pb-2'
										: ''
								}`}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
				<div>
					<p className="font-bold text-xl w-48 hidden lg:block">
						Osa<span className="text-102">mi</span>
					</p>
				</div>
				<div className="flex items-center gap-7">
					<LuInstagram className="w-5 h-5" aria-label="Instagram" />
					<FaSquareFacebook className="w-5 h-5" aria-label="Facebook" />
					<FaTwitter className="w-5 h-5" aria-label="Twitter" />
					<div className="pt-1">
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
