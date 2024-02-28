import { ButtonVariantEnum } from './Button.enum';
import { ButtonInterface } from './Button.interface';

const Button = (props: ButtonInterface) => {
	const {
		children,
		variant = ButtonVariantEnum.OUTLINED_IN_DEFAULT,
		isDisabled,
		onClickHandler,
		paddingClass,
		roundedClass,
		borderClass
	} = props;

	const variants = {
		disabled: isDisabled ? 'opacity-50 bg-gray-300' : '',
		padding: paddingClass || 'py-2.5 px-5',
		rounded: roundedClass || 'rounded-md',
		border: borderClass || '',

		outlinedInDefault: variant === ButtonVariantEnum.OUTLINED_IN_DEFAULT ? 'border-black dark:border-white' : '',
		outlinedInPurple: variant === ButtonVariantEnum.OUTLINED_IN_PURPLE ? 'border-purple-800 dark:border-white' : '',

		outlinedTextInDefault: variant === ButtonVariantEnum.OUTLINED_IN_DEFAULT ? 'text-black dark:text-white' : '',
		outlinedTextInPurple: variant === ButtonVariantEnum.OUTLINED_IN_PURPLE ? 'text-gray-800 dark:text-blue-400' : ''
	};

	return (
		<button
			onClick={onClickHandler}
			className={`rounded-lg ${variants.disabled}
			 ${variants.border} ${variants.padding} ${variants.rounded} 
			 ${variants.outlinedInDefault} ${variants.outlinedTextInDefault}
			   ${variants.outlinedInPurple}  ${variants.outlinedTextInPurple}`}>
			{children}
		</button>
	);
};

export default Button;
