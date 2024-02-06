const App = () => {
	return (
		<div>
			<h1>home page</h1>
			{process.env.NEXT_PUBLIC_API_URL}
		</div>
	);
};

export default App;
