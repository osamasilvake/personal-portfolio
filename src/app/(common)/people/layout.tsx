const PeopleLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<h3>sidebar</h3>
			{children}
		</div>
	);
};

export default PeopleLayout;
