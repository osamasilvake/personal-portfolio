// import { ToolTipPositionEnum } from './ToolTip.enum';
// import { TooltipInterface } from './ToolTip.interface';

// const ToolTip = (props: TooltipInterface) => {
// 	const { children, content, position } = props;

// 	const classes = {
// 		top: position === ToolTipPositionEnum.TOP ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] z-20' : '',
// 		bottom: position === ToolTipPositionEnum.BOTTOM ? 'left-1/2 -translate-x-1/2 top-[calc(100%+12px)] z-20' : '',
// 		left: position === ToolTipPositionEnum.LEFT ? 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]' : '',
// 		right: position === ToolTipPositionEnum.RIGHT ? 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]' : ''
// 	};

// 	const tooltipPosition = {
// 		top:
// 			position === ToolTipPositionEnum.TOP
// 				? 'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b border-t-neutral-900 dark:border-t-white'
// 				: '',
// 		bottom:
// 			position === ToolTipPositionEnum.BOTTOM
// 				? 'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t border-b-neutral-900 dark:border-b-white'
// 				: '',
// 		left:
// 			position === ToolTipPositionEnum.LEFT
// 				? 'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r border-l-neutral-900'
// 				: '',
// 		right:
// 			position === ToolTipPositionEnum.RIGHT
// 				? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l border-r-neutral-900'
// 				: ''
// 	};

// 	return (
// 		<div className="relative cursor-pointer group">
// 			{children}
// 			<span
// 				className={`absolute hidden group-hover:inline-block rounded
// 				  shadow-sm z-10 bg-neutral-900 dark:bg-white text-white dark:text-black text-xs p-2 whitespace-nowrap
// 				  ${classes.top} ${classes.bottom}
// 				  ${classes.left} ${classes.right}`}>
// 				{content}
// 			</span>
// 			<span
// 				className={`absolute pb-1 hidden group-hover:inline-block border-8 dark:border-transparent
// 				  ${tooltipPosition.top}
// 				  ${tooltipPosition.bottom} ${tooltipPosition.left} ${tooltipPosition.right}`}
// 			/>
// 		</div>
// 	);
// };

// export default ToolTip;
///////////////////////////////////////
'use client';
import { useState } from 'react';

import { ToolTipPositionEnum } from './ToolTip.enum';
import { TooltipInterface } from './ToolTip.interface';

const ToolTip = (props: TooltipInterface) => {
	const { children, content, position } = props;
	const [isVisible, setIsVisible] = useState(false);

	const mouseEnter = () => setIsVisible(true);
	const mouseLeave = () => setIsVisible(false);

	const classes = {
		top: position === ToolTipPositionEnum.TOP ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] z-20' : '',
		bottom: position === ToolTipPositionEnum.BOTTOM ? 'left-1/2 -translate-x-1/2 top-[calc(100%+12px)] z-20' : '',
		left: position === ToolTipPositionEnum.LEFT ? 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]' : '',
		right: position === ToolTipPositionEnum.RIGHT ? 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]' : ''
	};

	const tooltipPosition = {
		top:
			position === ToolTipPositionEnum.TOP
				? 'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b border-t-neutral-900 dark:border-t-white'
				: '',
		bottom:
			position === ToolTipPositionEnum.BOTTOM
				? 'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t border-b-neutral-900 dark:border-b-white'
				: '',
		left:
			position === ToolTipPositionEnum.LEFT
				? 'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r border-l-neutral-900'
				: '',
		right:
			position === ToolTipPositionEnum.RIGHT
				? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l border-r-neutral-900'
				: ''
	};

	return (
		<div className="relative cursor-pointer" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			{children}
			{isVisible && (
				<>
					<span
						className={`absolute rounded shadow-sm z-10 bg-neutral-900 dark:bg-white 
              text-white dark:text-black text-xs p-2 whitespace-nowrap
              ${classes.top} ${classes.bottom} ${classes.left} ${classes.right}`}>
						{content}
					</span>
					<span
						className={`absolute pb-1 border-8 dark:border-transparent
              ${tooltipPosition.top} ${tooltipPosition.bottom}
              ${tooltipPosition.left} ${tooltipPosition.right}`}
					/>
				</>
			)}
		</div>
	);
};

export default ToolTip;
