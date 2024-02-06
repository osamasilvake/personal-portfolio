import Image from 'next/image';

import Profile from '@/app/screens/profile/Profile';
import Service from '@/app/screens/service/Service';
import sergio from '@/assets/images/sergio.jpg';

const Home = () => {
	return (
		<main>
			<h1 className="text-5xl text-center font-extrabold pt-14 pl-5">
				<span className="border-b-4 border-gray-300">Na</span>talie Sihombing
			</h1>

			<div className="flex justify-evenly flex-col-reverse mt-10 lg:flex-row">
				<Service />
				<div className="flex flex-col gap-14 justify-center lg:justify-start md:flex-row px-3">
					<div>
						<Image src={sergio} alt="picture of person" className="md:w-96 md:h-96" />
					</div>
					<Profile />
				</div>
			</div>
		</main>
	);
};

export default Home;
