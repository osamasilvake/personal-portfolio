import { ReactNode } from 'react';

import { IconButtonVariantEnum } from './IconButton.enum';

export interface IconButtonProps {
	children?: ReactNode;
	variant?: IconButtonVariantEnum;
	onClickHandler?: () => void;
	label?: string;
	ariaPressed?: boolean;
}
