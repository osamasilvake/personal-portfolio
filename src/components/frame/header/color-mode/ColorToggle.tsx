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
		<IconButton onClickHandler={changeTheme} label="light dark mode">
			{theme === ColorType.LIGHT ? (
				<FiMoon className="w-5 h-5 text-black" />
			) : (
				<FiSun className="w-5 h-5 text-orange-400" />
			)}
		</IconButton>
	);
};

export default dynamic(() => Promise.resolve(ColorToggle), { ssr: false });
