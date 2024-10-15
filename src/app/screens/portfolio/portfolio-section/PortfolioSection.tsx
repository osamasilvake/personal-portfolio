import Image from 'next/image';

import ToolTip from '@/components/common/tooltip/ToolTip';

import { ExperienceListType } from '../experience/Experience.enum';
import PortfolioHeading from '../portfolio-heading/PortfolioHeading';
import { PortfolioProps } from './PortfolioSection.interface';
import { calculateDuration, formatDuration } from './PortfolioSectionDate';

const PortfolioSection = (props: PortfolioProps) => {
	const { headingLevel, title, subTitle, experience, list, position } = props;

	const classes = {
		listStyle: experience
			? 'before:border-l dark:before:border-111 before:absolute before:left-7 before:bottom-[20%] before:top-[20%]'
			: 'border-b border-b-110 dark:border-b-109 pb-10 pt-6',
		listItemStyle: experience ? 'pt-8' : 'pt-4 pb-2',
		paddingStyle: experience ? 'pt-8' : ''
	};

	const getBackgroundColor = (id: string) => {
		if (id === ExperienceListType.Current) {
			return 'bg-green-500';
		} else {
			return 'bg-white dark:bg-106';
		}
	};

	const getTextColor = (id: string) => {
		if (id === ExperienceListType.Current) {
			return 'text-white';
		} else {
			return 'text-black dark:text-108';
		}
	};

	return (
		<>
			<div className={classes.paddingStyle}>
				<PortfolioHeading headingLevel={headingLevel} title={title} subTitle={subTitle} />
			</div>
			<div className="relative">
				<ul className={`border-b border-b-110 dark:border-b-109 pb-10 ${classes.listStyle}`}>
					{list?.map((item) => {
						const duration = calculateDuration({
							startDate: item.startDate?.toString(),
							endDate: item.endDate?.toString()
						});
						const durationString = formatDuration(duration);

						return (
							<li key={item.id} className={`flex items-center gap-5 ${classes.listItemStyle}`}>
								<ToolTip position={position} content={experience ? item.content : item.name}>
									<div>
										{experience ? (
											<p
												className={`w-14 h-14 text-xs border dark:border-green-500 rounded-full shadow-sm text-center pt-5 ${getTextColor(
													item.id
												)} ${getBackgroundColor(item.id)}`}>
												{durationString}
											</p>
										) : (
											<Image
												src={item.image}
												alt={item.title}
												className="cursor-help size-12 p-0.5 border border-104 dark:border-111"
											/>
										)}
									</div>
								</ToolTip>

								<div>
									<h3 className="dark:text-108 text-xl font-semibold">{item.title} </h3>
									<p className="text-gray-500 dark:text-108">
										{item.description}
										{item.current && (
											<span className="border ml-1 px-1 border-green-500 rounded-xl text-green-500 text-xs">
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
