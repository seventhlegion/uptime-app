import { ApiMethods } from '@/utils/setApiAddress';

export type ApiObject = {
	id: number;
	name: string;
	url: string;
	base_url: string;
	description: string;
	start_at: number;
	total_uptime: number;
	status: 'online' | 'offline';
	method: ApiMethods;
};

export const mockApis: ApiObject[] = [
	{
		id: 1,
		name: 'API One',
		url: 'https://api.com',
		base_url: 'fakeApi',
		description: 'This is the first mock API.',
		start_at: 1650000000,
		total_uptime: 3600000,
		status: 'online',
		method: 'get',
	},
	{
		id: 2,
		name: 'API Two',
		url: 'https://api.two.com',
		base_url: 'v1/two',
		description: 'This is the second mock API.',
		start_at: 1650003600,
		total_uptime: 7200000,
		status: 'offline',
		method: 'head',
	},
	{
		id: 3,
		name: 'API Three',
		url: 'https://api.three.com',
		base_url: 'v1/three',
		description: 'This is the third mock API.',
		start_at: 1650007200,
		total_uptime: 1800000,
		status: 'online',
		method: 'get',
	},
	{
		id: 4,
		name: 'API Four',
		url: 'https://api.com',
		base_url: 'v1/one',
		description: 'This is the first mock API.',
		start_at: 1650000000,
		total_uptime: 3600000,
		status: 'online',
		method: 'patch',
	},
	{
		id: 5,
		name: 'API Five',
		url: 'https://api.two.com',
		base_url: 'v1/two',
		description: 'This is the second mock API.',
		start_at: 1650003600,
		total_uptime: 7200000,
		status: 'offline',
		method: 'post',
	},
	{
		id: 6,
		name: 'API Six',
		url: 'https://api.three.com',
		base_url: 'v1/three',
		description: 'This is the third mock API.',
		start_at: 1650007200,
		total_uptime: 1800000,
		status: 'online',
		method: 'put',
	},
	{
		id: 7,
		name: 'API Seven',
		url: 'https://api.com',
		base_url: 'v1/one',
		description: 'This is the first mock API.',
		start_at: 1650000000,
		total_uptime: 3600000,
		status: 'online',
		method: 'head',
	},
	{
		id: 8,
		name: 'API Eight',
		url: 'https://api.two.com',
		base_url: 'v1/two',
		description: 'This is the second mock API.',
		start_at: 1650003600,
		total_uptime: 7200000,
		status: 'offline',
		method: 'get',
	},
	{
		id: 9,
		name: 'API Nine',
		url: 'https://api.three.com',
		base_url: 'v1/three',
		description: 'This is the third mock API.',
		start_at: 1650007200,
		total_uptime: 1800000,
		status: 'online',
		method: 'get',
	},
	{
		id: 10,
		name: 'API Ten',
		url: 'https://api.three.com',
		base_url: 'v1/three',
		description: 'This is the third mock API.',
		start_at: 1650007200,
		total_uptime: 1800000,
		status: 'online',
		method: 'post',
	},
];
