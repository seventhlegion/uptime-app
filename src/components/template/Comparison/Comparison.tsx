'use client';
import DateTimePicker from '@/components/common/DateTimePicker';
import { mockApis } from '@/constant';
import { useSelectTime } from '@/store/useSelectTime';
import { CompareTwoApiResult, compareTwoAPIs } from '@/utils/compareTwoApi';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {
	Box,
	Button,
	Divider,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	useTheme,
} from '@mui/material';
import dayjs from 'dayjs';
import { Fragment, useState } from 'react';

const Comparison = () => {
	const { palette } = useTheme();

	const {
		selectedEndTime,
		selectedStartTime,
		selectedAPI,
		secondSelectedAPI,
		setSelectedEndTime,
		setSelectedStartTime,
		setSelectedAPI,
		setSecondSelectedAPI,
	} = useSelectTime();

	const [comparison, setComparison] = useState<CompareTwoApiResult | undefined>(
		undefined,
	);

	console.log(selectedAPI, secondSelectedAPI);

	const handleCalculateUptime = () => {
		if (
			!selectedAPI ||
			!selectedStartTime ||
			!selectedEndTime ||
			!secondSelectedAPI
		) {
			console.log('Please select an API and time range.');
			return;
		}

		setComparison(
			compareTwoAPIs(
				selectedAPI,
				secondSelectedAPI,
				selectedStartTime,
				selectedEndTime,
			),
		);
	};

	return (
		<Fragment key={`Average`}>
			<Stack
				direction={`row`}
				gap={`24px`}
				alignItems={`center`}
				marginBottom={'12px'}
			>
				<QueryStatsIcon />
				<Typography variant="h6">Comparison</Typography>
			</Stack>
			<Divider variant="fullWidth" />
			<Stack
				direction={`row`}
				justifyContent={`center`}
				alignItems={`center`}
				marginTop={`24px`}
				gap={`24px`}
			>
				<Stack
					direction={`row`}
					justifyContent={`center`}
					alignItems={`center`}
					gap={`12px`}
				>
					<Typography variant="h6">Select Start Time:</Typography>
					<Box
						component={DateTimePicker}
						selectedDate={selectedStartTime}
						onChange={setSelectedStartTime}
					/>
				</Stack>
				<Stack
					direction={`row`}
					justifyContent={`center`}
					alignItems={`center`}
					gap={`12px`}
				>
					<Typography variant="h6">Select End Time:</Typography>
					<Box
						component={DateTimePicker}
						selectedDate={selectedEndTime}
						onChange={setSelectedEndTime}
					/>
				</Stack>
			</Stack>
			<TableContainer sx={{ marginTop: '24px', overflowX: 'hidden' }}>
				<Table>
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
								onClick={() =>
									selectedAPI?.id === api.id
										? setSelectedAPI(undefined)
										: !selectedAPI
											? setSelectedAPI(api)
											: secondSelectedAPI?.id === api.id
												? setSecondSelectedAPI(undefined)
												: setSecondSelectedAPI(api)
								}
								sx={{
									cursor: 'pointer',
									borderRadius: '24px',
									background:
										api.id === selectedAPI?.id ||
										api.id === secondSelectedAPI?.id
											? palette.background.default
											: 'none',
								}}
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
			{comparison && (
				<Stack
					direction={`row`}
					width={`100%`}
					paddingTop={`24px`}
					gap={`24px`}
					justifyContent={`space-between`}
				>
					<Stack direction={`row`}>
						<Typography variant="h6">
							API {comparison.firstApi.id} &rArr; Hours:{' '}
							{comparison.firstApi.hours}, Days: {comparison.firstApi.days},
							Months: {comparison.firstApi.months}
						</Typography>
					</Stack>
					<Typography variant="h5">VS</Typography>
					<Stack direction={`row`}>
						<Typography variant="h6">
							API {comparison.secondApi.id} &rArr; Hours:{' '}
							{comparison.secondApi.hours}, Days: {comparison.secondApi.days},
							Months: {comparison.secondApi.months}
						</Typography>
					</Stack>
				</Stack>
			)}
			<Button
				variant="contained"
				sx={{ marginTop: '24px' }}
				onClick={handleCalculateUptime}
			>
				Compare
			</Button>
		</Fragment>
	);
};

export default Comparison;
