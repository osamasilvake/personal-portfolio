import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { LuInstagram } from 'react-icons/lu';

import { HeaderList } from './Header.list';

const Header = () => {
	return (
		<header className="hidden md:block">
			<nav className="flex justify-around pt-6 px-8">
				<ul className="flex gap-10 pt-1">
					{HeaderList?.map((item, index) => (
						<li key={index} className="border-gray-300">
							{item.label}
						</li>
					))}
				</ul>
				<div>
					<p className="font-bold text-xl w-44">
						Arc<span className="text-102">ane</span>
					</p>
				</div>
				<div className="flex gap-7 pt-1">
					<LuInstagram className="w-5 h-5" aria-label="Instagram" />
					<FaSquareFacebook className="w-5 h-5" aria-label="Facebook" />
					<FaTwitter className="w-5 h-5" aria-label="Twitter" />
					<FaLinkedin className="w-5 h-5" aria-label="LinkedIn" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
