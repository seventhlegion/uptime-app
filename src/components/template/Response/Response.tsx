'use client';
import { ApiObject, mockApis } from '@/constant';
import { httpRequesterInstance } from '@/helpers/KyHttpRequesterInstance';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {
	Button,
	ClickAwayListener,
	Dialog,
	Divider,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { Fragment, useState } from 'react';

const Response = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [responseTime, setResponseTime] = useState('');

	const handleClick = async (api: ApiObject) => {
		const startTime = performance.now();

		try {
			await httpRequesterInstance.get(api.base_url);

			const endTime = performance.now();
			const timeTaken = endTime - startTime;

			setResponseTime(`${timeTaken.toFixed(2)} ms`);
			setIsModalOpen(true);
		} catch (error) {
			console.error('API call failed:', error);
		}
	};

	return (
		<Fragment key={`Response`}>
			<Stack
				direction={`row`}
				gap={`24px`}
				alignItems={`center`}
				marginBottom={'12px'}
			>
				<AssignmentIcon />
				<Typography variant="h6">Response</Typography>
			</Stack>
			<Divider variant="fullWidth" />
			<TableContainer sx={{ marginTop: '24px', overflowX: 'hidden' }}>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{Object.keys(mockApis[0]).map((key) => (
								<TableCell key={key}>{key}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{mockApis.map((api) => (
							<TableRow
								key={api.id}
								sx={{ cursor: 'pointer' }}
								onClick={() => handleClick(api)}
							>
								<TableCell
									component={`th`}
									scope="row"
								>
									{api.id}
								</TableCell>
								<TableCell>{api.name}</TableCell>
								<TableCell>{api.url}</TableCell>
								<TableCell>{api.base_url}</TableCell>
								<TableCell>{api.description}</TableCell>
								<TableCell>
									{dayjs(api.start_at).format('YYYY-MM-DD HH:mm:ss')}
								</TableCell>
								<TableCell>
									{dayjs(api.total_uptime).format('YYYY-MM-DD HH:mm:ss')}
								</TableCell>
								<TableCell>{api.status}</TableCell>
								<TableCell>{api.method}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<ClickAwayListener onClickAway={() => setIsModalOpen(false)}>
				<Dialog
					open={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					aria-labelledby="response-time-modal"
					aria-describedby="response-time-modal-description"
				>
					<Paper>
						<Stack
							padding={`48px 24px`}
							width={`500px`}
							height={`auto`}
							gap={`48px`}
						>
							<Stack
								direction={`row`}
								justifyContent={`center`}
								alignItems={`center`}
								spacing={2}
							>
								<Typography variant="h5">Response Time :</Typography>
								<Typography
									sx={{ mt: 2 }}
									variant="h6"
								>
									{responseTime}
								</Typography>
							</Stack>
							<Button
								variant="contained"
								onClick={() => setIsModalOpen(false)}
							>
								Close
							</Button>
						</Stack>
					</Paper>
				</Dialog>
			</ClickAwayListener>
		</Fragment>
	);
};

export default Response;
