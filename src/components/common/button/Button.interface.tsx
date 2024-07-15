import { ReactNode } from 'react';

import { ButtonVariantEnum } from './Button.enum';

export interface ButtonInterface {
	children?: ReactNode;
	variant?: ButtonVariantEnum;
	isDisabled?: boolean;
	label?: string;
	active?: string;
	onClickHandler?: () => void;
	buttonStyle?: string;
}
