import Sidebar from './sidebar/page';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex">
			<div className="w-full md:w-64">
				<Sidebar />
			</div>
			<div className="flex-1 pt-10">{children}</div>
		</div>
	);
};

export default layout;
