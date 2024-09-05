'use client';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

import IconButton from '@/components/common/icon-button/IconButton';

import ColorType from './ColorToggle.enum';

const ColorToggle = () => {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => {
		setTheme(theme === ColorType.LIGHT ? ColorType.DARK : ColorType.LIGHT);
	};

	return (
		<IconButton onClickHandler={changeTheme} label="Color toggle">
			{theme === ColorType.LIGHT ? (
				<FiMoon className="w-6 h-6 text-black" aria-label="Switch to dark " />
			) : (
				<FiSun className="w-6 h-6 text-orange-400" aria-label="Switch to light" />
			)}
		</IconButton>
	);
};

export default dynamic(() => Promise.resolve(ColorToggle), { ssr: false });
