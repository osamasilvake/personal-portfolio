import Image from 'next/image';

import Profile from '@/app/screens/profile/Profile';
import Service from '@/app/screens/service/Service';
import sergio from '@/assets/images/sergio.jpg';

const Home = () => {
	return (
		<main>
			<h1 className="text-5xl text-center font-extrabold mt-16 dark:text-stone-200 leading-6">
				<span className="border-b-4 border-gray-300">Mu</span>hammad Usama
			</h1>

			<div className="flex justify-between flex-col-reverse mt-20 mb-10 lg:gap-5 xl:gap-0 lg:flex-row">
				<Service />
				<div className="pt-10 pb-5 lg:pt-0">
					<Image
						src={sergio}
						alt="Muhammad usama"
						className="rounded-lg lg:w-96 lg:h-96 lg:p-1"
						priority
						tabIndex={0}
					/>
				</div>
				<Profile />
			</div>
		</main>
	);
};

export default Home;
