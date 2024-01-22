import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<h1>home</h1>
			{process.env.NEXT_PUBLIC_API_URL}
			<div>
				<Link href="/photos" className="font-semibold italic text-sky-600 underline">
					Go to photos
				</Link>
			</div>
		</div>
	);
};

export default Home;
