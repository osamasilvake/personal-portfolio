const CommonLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<header>auth header</header>
			{children}
			<footer>auth footer</footer>
		</div>
	);
};

export default CommonLayout;
