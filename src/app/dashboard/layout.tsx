const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex gap-5">
			<div>sidebar</div>
			{children}
		</div>
	);
};

export default DashboardLayout;
