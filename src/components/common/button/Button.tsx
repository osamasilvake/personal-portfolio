import { ButtonVariantEnum } from './Button.enum';
import { ButtonInterface } from './Button.interface';

const Button = (props: ButtonInterface) => {
	const { children, variant = ButtonVariantEnum.OUTLINED_IN_DEFAULT, isDisabled, onClickHandler, buttonStyle } = props;

	const variants = {
		disabled: isDisabled ? 'opacity-50 bg-gray-300' : '',
		button: buttonStyle || 'py-2.5 px-5 rounded-md',

		outlinedInDefault:
			variant === ButtonVariantEnum.OUTLINED_IN_DEFAULT
				? 'hover:text-red-700 dark:hover:text-red-400 focus:text-red-800 dark:focus:red-600 outline outline-2 outline-black dark:outline-white hover:outline-red-800 dark:hover:outline-red-700 focus:outline-red-600 dark:focus:outline-red-800'
				: '',
		outlinedInPurple:
			variant === ButtonVariantEnum.OUTLINED_IN_PURPLE
				? 'hover:text-yellow-400 dark:hover:text-yellow-800 focus:text-green-800 dark:focus:green-600 outline outline-3 outline-purple-800 dark:outline-white hover:outline-green-800 dark:hover:outline-green-800 focus:outline-green-800 dark:focus:outline-green-800'
				: ''
	};

	return (
		<button
			disabled={isDisabled}
			onClick={onClickHandler}
			className={`${variants.disabled}
			  ${variants.button} 
			 ${variants.outlinedInDefault}
			   ${variants.outlinedInPurple}`}>
			{children}
		</button>
	);
};

export default Button;
