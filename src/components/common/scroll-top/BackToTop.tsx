'use client';
import { Fragment, useEffect, useState } from 'react';
// import { GoMoveToTop } from 'react-icons/go';

const BackToTopButton = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 35) {
				setShow(true);
			} else {
				setShow(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup function
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const jumpToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<>
			{show && (
				<div className="fixed bottom-0 right-0 mb-5 mr-5 z-10">
					<button
						onClick={jumpToTop}
						className="bg-black animate-bounce dark:bg-white text-white dark:text-black rounded-full p-1 hover:bg-gray-700 dark:hover:bg-gray-200 transition">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 10l7-7m0 0l7 7m-7-7v18"
							/>
						</svg>
						{/* <GoMoveToTop /> */}
					</button>
				</div>
			)}
		</>
	);
};

export default BackToTopButton;
