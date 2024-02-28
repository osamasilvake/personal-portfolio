'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const changeTheme = () => {
		setTheme(theme === 'gray' ? 'dark' : 'gray');
	};

	return (
		<div>
			<button className="hover:scale-110 active:scale-100 dark:text-white" onClick={changeTheme}>
				{theme === 'gray' ? <FiMoon className="w-6 h-6 fill-stone-200" /> : <FiSun className="w-5 h-5" />}
			</button>
		</div>
	);
};
export default ThemeToggle;
