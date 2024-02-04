import { SetApiAddress, setApiAddress } from '@/utils/setApiAddress';
import {
	QueryClient,
	UseMutationOptions,
	useMutation,
} from '@tanstack/react-query';

export const useMutationServiceResponse = <T extends object>(
	options?: QueryClient,
) => {
	return useMutation(
		setApiAddress as UseMutationOptions<any, Error, SetApiAddress<T>, unknown>,
		options,
	);
};
