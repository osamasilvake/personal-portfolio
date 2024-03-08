import { ReactNode } from 'react';

import { ButtonVariantEnum } from './Button.enum';

export interface ButtonInterface {
	children?: ReactNode;
	variant?: ButtonVariantEnum;
	isDisabled?: boolean;
	onClickHandler?: () => void;
	buttonStyle?: string;
}
