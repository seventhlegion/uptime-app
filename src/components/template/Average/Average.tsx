'use client';
import { mockApis } from '@/constant';
import { calculateAverages } from '@/utils/calculateAvreages';
import FunctionsIcon from '@mui/icons-material/Functions';
import {
	Divider,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { Fragment } from 'react';

const Average = () => {
	return (
		<Fragment key={`Average`}>
			<Stack
				direction={`row`}
				gap={`24px`}
				alignItems={`center`}
				marginBottom={'12px'}
			>
				<FunctionsIcon />
				<Typography variant="h6">Average</Typography>
			</Stack>
			<Divider variant="fullWidth" />
			<TableContainer sx={{ marginTop: '24px', overflowX: 'hidden' }}>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>Daily </TableCell>
							<TableCell>Monthly</TableCell>
							<TableCell>Annual</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{mockApis.map((api) => (
							<TableRow key={api.id}>
								<TableCell
									component={`th`}
									scope="row"
								>
									{api.id}
								</TableCell>
								<TableCell>{calculateAverages(api, 'daily')} /hour</TableCell>
								<TableCell>{calculateAverages(api, 'monthly')} /day</TableCell>
								<TableCell>{calculateAverages(api, 'annual')} /month</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
};

export default Average;
