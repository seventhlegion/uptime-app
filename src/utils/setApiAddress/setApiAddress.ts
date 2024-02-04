import { httpRequesterInstance } from '@/helpers/KyHttpRequesterInstance';

export type ApiMethods = 'get' | 'post' | 'head' | 'put' | 'patch';

export type SetApiAddressProps<T extends object> = {
	url: string;
	method: ApiMethods;
	payload?: T;
};

export type SetApiAddress<T extends object> = {
	params: SetApiAddressProps<T>;
};

export const setApiAddress = async <T extends object>({
	params,
}: SetApiAddress<T>) => {
	if (params.method === 'get')
		return await httpRequesterInstance.get(params.url);

	if (params.method === 'post')
		return await httpRequesterInstance.post(params.url, { ...params.payload });

	if (params.method === 'put')
		return await httpRequesterInstance.put(params.url, { ...params.payload });

	if (params.method === 'patch')
		return await httpRequesterInstance.patch(params.url, { ...params.payload });

	if (params.method === 'head')
		return await httpRequesterInstance.head(params.url);
};
