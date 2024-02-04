import { ApiObject } from '@/constant';
import { calculateUptime } from '../calculateUpTime';

export type CompareTwoApiResult = {
	firstApi: {
		id: number;
		hours: number;
		days: number;
		months: number;
	};
	secondApi: {
		id: number;
		hours: number;
		days: number;
		months: number;
	};
};

export function compareTwoAPIs(
	api1: ApiObject,
	api2: ApiObject,
	startTime: Date,
	endTime: Date,
): CompareTwoApiResult {
	const uptime1 = calculateUptime(api1, startTime, endTime);
	const uptime2 = calculateUptime(api2, startTime, endTime);

	return {
		firstApi: {
			id: uptime1.id,
			hours: uptime1.hours,
			days: uptime1.days,
			months: uptime1.months,
		},
		secondApi: {
			id: uptime2.id,
			hours: uptime2.hours,
			days: uptime2.days,
			months: uptime2.months,
		},
	};
}
