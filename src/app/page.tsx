const Home = () => {
	return (
		<div>
			<h1>home</h1>
			{process.env.NEXT_PUBLIC_API_URL}
		</div>
	);
};

export default Home;
