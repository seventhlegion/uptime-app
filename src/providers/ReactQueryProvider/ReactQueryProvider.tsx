'use client';
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
	hydrate,
} from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

const queryClient = new QueryClient();

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={queryClient}>
		<HydrationBoundary state={hydrate}>{children}</HydrationBoundary>
	</QueryClientProvider>
);

export default ReactQueryProvider;
