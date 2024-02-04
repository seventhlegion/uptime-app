import { ApiObject } from '@/constant';

export function calculateUptime(
	api: ApiObject,
	startTime: Date,
	endTime: Date,
): { id: number; hours: number; days: number; months: number } {
	const apiStart = new Date(api.start_at * 1000); // Convert UNIX timestamp to Date
	const apiEnd = new Date(api.start_at * 1000 + api.total_uptime);

	// Ensure the API's time range intersects with the selected time range
	const effectiveStart = apiStart < startTime ? startTime : apiStart;
	const effectiveEnd = apiEnd > endTime ? endTime : apiEnd;

	if (effectiveStart > effectiveEnd) {
		// If the effective start time is after the effective end time, the API was not up during the selected period
		return { id: api.id, hours: 0, days: 0, months: 0 };
	}

	// Calculate uptime in milliseconds
	const uptimeMilliseconds = effectiveEnd.getTime() - effectiveStart.getTime();

	// Convert milliseconds to hours, days, and months
	const hours = uptimeMilliseconds / (1000 * 60 * 60);
	const days = hours / 24;
	const months = days / 30; // Approximation

	return { id: api.id, hours, days, months };
}
