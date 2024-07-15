import { FC } from 'react';

import { IconButtonVariantEnum } from './IconButton.enum';
import { IconButtonProps } from './IconButton.interface';

const IconButton: FC<IconButtonProps> = (props) => {
	const { children, variant = IconButtonVariantEnum.SCALE_IN_DEFAULT, onClickHandler, label } = props;

	const variants = {
		scaleInDefault:
			variant === IconButtonVariantEnum.SCALE_IN_DEFAULT ? 'hover:scale-110 active:scale-100 dark:text-white' : '',
		rotateInHover: variant === IconButtonVariantEnum.ROTATE_IN_HOVER ? 'hover:rotate-45' : ''
	};

	return (
		<button
			aria-label={label}
			onClick={onClickHandler}
			className={`${variants.scaleInDefault} ${variants.rotateInHover}`}>
			{children}
		</button>
	);
};

export default IconButton;
