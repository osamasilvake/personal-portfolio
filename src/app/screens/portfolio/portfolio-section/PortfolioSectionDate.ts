import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { Calculate, Format } from './PortfolioSection.interface';

dayjs.extend(duration);

export const calculateDuration = ({ startDate, endDate }: Calculate) => {
	const start = dayjs(startDate);
	const end = endDate ? dayjs(endDate) : dayjs(); // if endDate is null, use the current date

	const diff = dayjs.duration(end.diff(start)); // create common fun for diff
	const years = diff.years();
	const months = diff.months();

	return { years, months };
};

export const formatDuration = ({ years, months }: Format) => {
	return `${years > 0 ? `${years}Y ` : ''}${months}M`;
};
