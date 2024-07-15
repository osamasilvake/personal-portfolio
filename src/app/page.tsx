// const App = () => {
// 	return (
// 		<div>
// 			<h1>home page</h1>
// 			{process.env.NEXT_PUBLIC_API_URL}
// 			<br />
// 			{process.env.WEATHER_API_URL_SECRET}
// 		</div>
// 	);
// };

// export default App;

// import Image from 'next/image';

// import Profile from '@/app/screens/home/profile/Profile';
// import Service from '@/app/screens/home/service/Service';
// import sergio from '@/assets/images/sergio.jpg';

// const App = () => {
// 	return (
// 		<main className="max-w-201 mx-auto">
// 			<h1 className="text-5xl text-center font-extrabold mt-16 dark:text-stone-200 leading-tight">
// 				<span className="border-b-4 border-gray-300">Mu</span>hammad Usama
// 			</h1>

// 			<div className="flex justify-between flex-col-reverse mt-14 sm:mt-20 mb-10 lg:gap-5 xl:gap-20 lg:flex-row">
// 				<Service />
// 				<div className="pt-10 pb-5 lg:pt-0">
// 					<Image src={sergio} alt="Muhammad usama" className="rounded-lg w-96 h-80" priority />
// 				</div>
// 				<Profile />
// 			</div>
// 		</main>
// 	);
// };

// export default App;

import { redirect } from 'next/navigation';

const RootPage = () => {
	redirect('/en');
};
export default RootPage;
