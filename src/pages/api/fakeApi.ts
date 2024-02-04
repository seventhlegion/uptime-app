// pages/api/fakeApi.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for your response data
type ApiResponse = {
	message: string;
	data: any; // Define a more specific type if you have a specific data structure
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>,
) {
	setTimeout(() => {
		res.status(200).json({
			message: 'Success',
			data: {
				/* some data */
			},
		});
	}, 1000); // Simulate a delay of 1000ms (1 second)
}
