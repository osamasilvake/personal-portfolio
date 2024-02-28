import Image from 'next/image';

import Profile from '@/app/screens/profile/Profile';
import Service from '@/app/screens/service/Service';
import sergio from '@/assets/images/sergio.jpg';

const Home = () => {
	return (
		<main>
			<h1 className="text-5xl text-center font-extrabold pt-14 leading-tight sm:leading-none">
				<span className="border-b-4 border-gray-300">Mu</span>hammad Usama
			</h1>
			<div className="flex justify-evenly px-6 flex-col-reverse pt-20 pb-10 lg:gap-8 lg:px-5  xl:gap-0 lg:flex-row 2xl:container 2xl:mx-auto">
				<Service />
				<div className="pt-10 pb-5 lg:pt-0">
					<Image src={sergio} alt="Osama khan" className="rounded-lg lg:w-96 lg:h-96" />
				</div>
				<Profile />
			</div>
		</main>
	);
};

export default Home;
