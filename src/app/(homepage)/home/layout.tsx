import { ThemeProvider } from '@/components/frame/header/color-mode/ColorProvider';
import Header from '@/components/frame/header/Header';

interface RootValue {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: RootValue) => {
	return (
		<ThemeProvider enableSystem defaultTheme="light" attribute="class">
			<div className="max-w-201 mx-auto px-4 sm:px-7">
				<div>
					<Header />
				</div>
				{children}
			</div>
		</ThemeProvider>
	);
};

export default HomeLayout;
