import Image from 'next/image';

import ToolTip from '@/components/common/tooltip/ToolTip';
import { calculateDuration, formatDuration } from '@/utils/Date';

import { ExperienceListType } from '../experience/Experience.enum';
import PortfolioHeading from '../portfolio-heading/PortfolioHeading';
import { PortfolioProps } from './PortfolioSection.interface';

const PortfolioSection = (props: PortfolioProps) => {
	const { headingLevel, title, subTitle, experience, list, position } = props;

	const classes = {
		listStyle: experience
			? 'before:border-l dark:before:border-108 before:absolute before:left-7 before:bottom-[20%] before:top-[20%]'
			: 'border-b dark:border-b-gray-700 pb-10 pt-6',
		listItemStyle: experience ? 'pt-8' : 'pt-4 pb-2',
		paddingStyle: experience ? 'pt-8' : ''
	};

	const getBackgroundColor = (id: string) => {
		if (id === ExperienceListType.Current) {
			return 'bg-103';
		} else {
			return 'bg-white dark:bg-[#212121]';
		}
	};

	const getTextColor = (id: string) => {
		if (id === ExperienceListType.Current) {
			return 'text-white';
		} else {
			return 'text-[#6a6c6d]';
		}
	};

	return (
		<>
			<div className={classes.paddingStyle}>
				<PortfolioHeading headingLevel={headingLevel} title={title} subTitle={subTitle} />
			</div>
			<div className="relative">
				<ul className={`border-b dark:border-b-gray-700 pb-10 ${classes.listStyle}`}>
					{list?.map((item) => {
						const duration = calculateDuration({ startDate: item.startDate, endDate: item.endDate });
						const durationString = formatDuration(duration);

						return (
							<li key={item.id} className={`flex items-center gap-5 ${classes.listItemStyle}`}>
								<ToolTip position={position} content={experience ? item.content : item.name}>
									<div>
										{experience ? (
											<p
												className={`w-14 h-14 text-xs border dark:border-gray-700 rounded-full shadow-sm text-center pt-5 ${getTextColor(
													item.id
												)} ${getBackgroundColor(item.id)}`}>
												{durationString}
											</p>
										) : (
											<Image
												src={item.image}
												alt={item.title}
												className="cursor-help h-12 w-12 p-0.5 border border-104 dark:border-[#6a6c6d]"
											/>
										)}
									</div>
								</ToolTip>

								<div>
									<h3 className="dark:text-[#6a6c6d] text-xl font-semibold">{item.title} </h3>
									<p className="text-gray-500 dark:text-[#6a6c6d]">
										{item.description}
										{item.current && (
											<span className="border ml-1 px-1 border-red-400 rounded-xl text-red-400 text-xs">
												{item.current}
											</span>
										)}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default PortfolioSection;
