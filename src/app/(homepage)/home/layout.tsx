import Header from '@/components/frame/header/Header';

interface RootValue {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: RootValue) => {
	return (
		<div className="bg-101 pb-10">
			<Header />
			{children}
		</div>
	);
};

export default HomeLayout;
