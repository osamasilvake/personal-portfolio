import Sidebar from './(sidebar)/page';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex gap-5">
			<Sidebar />
			{children}
		</div>
	);
};

export default DashboardLayout;
