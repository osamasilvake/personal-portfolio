import Header from '@/components/frame/header/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

interface RootValue {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: RootValue) => {
	return (
		<ThemeProvider enableSystem defaultTheme="gray" attribute="class" themes={['gray', 'dark']}>
			<div>
				<div>
					<Header />
				</div>
				{children}
			</div>
		</ThemeProvider>
	);
};

export default HomeLayout;
