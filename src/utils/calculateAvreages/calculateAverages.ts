import { ApiObject } from '@/constant';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const calculateAverages = (
	api: ApiObject,
	period: 'daily' | 'monthly' | 'annual',
) => {
	let totalDays;

	switch (period) {
		case 'daily':
			totalDays = 1;
			break;
		case 'monthly':
			totalDays = dayjs.duration({ months: 1 }).asDays();
			break;
		case 'annual':
			totalDays = dayjs.duration({ years: 1 }).asDays();
			break;
	}

	const uptimeDays = dayjs.duration(api.total_uptime).asDays();
	const uptimeProportion = uptimeDays / totalDays;
	return uptimeProportion;
};
