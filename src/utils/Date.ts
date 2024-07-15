import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

interface Calculate {
	startDate: string | undefined;
	endDate?: string | null;
}

interface Format {
	years: number;
	months: number;
}

export function calculateDuration({ startDate, endDate }: Calculate) {
	const start = dayjs(startDate);
	const end = endDate ? dayjs(endDate) : dayjs(); // if endDate is null, use the current date

	const diff = dayjs.duration(end.diff(start));
	const years = diff.years();
	const months = diff.months();

	return { years, months };
}

export function formatDuration({ years, months }: Format) {
	return `${years > 0 ? `${years}Y ` : ''}${months}M`;
}
