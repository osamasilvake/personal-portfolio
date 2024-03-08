import Image from 'next/image';

import Profile from '@/app/screens/profile/Profile';
import girl from '@/assets/images/girl.png';

const Blog = () => {
	return (
		<main>
			<h1 className="text-5xl text-center font-extrabold pt-14 pl-5">
				<span className="border-b-4 border-gray-300">Bl</span>og
			</h1>

			<div className="flex gap-20 flex-col justify-center pt-12 pb-8 px-3 md:flex-row">
				<div>
					<Image src={girl} alt="picture of girls" className="w-full md:w-96" />
				</div>
				<div className="pt-5">
					<Profile />
				</div>
			</div>
		</main>
	);
};

export default Blog;
