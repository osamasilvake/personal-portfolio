import { FC } from 'react';

import IconButton from '@/components/common/icon-button/IconButton';

import { HeaderIconInterface } from './HeaderIcon.interface';

const HeaderIcon: FC<{ icon: HeaderIconInterface }> = ({ icon }) => {
	const { url, Icon } = icon;
	return <IconButton onClickHandler={() => window.open(url, '_blank')}>{Icon}</IconButton>;
};

export default HeaderIcon;
