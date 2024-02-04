import { KyHttpRequester } from '@/services/KyHttpRequester';

export const httpRequesterInstance = new KyHttpRequester({
	prefixUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api/',
});
