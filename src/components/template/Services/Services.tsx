import { mockApis } from '@/constant';
import ApiIcon from '@mui/icons-material/Api';
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
import dayjs from 'dayjs';
import { FC, Fragment } from 'react';

const Services: FC = () => {
	return (
		<Fragment key={`Services`}>
			<Stack
				direction={`row`}
				gap={`24px`}
				alignItems={`center`}
				marginBottom={'12px'}
			>
				<ApiIcon />
				<Typography variant="h6">Services</Typography>
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
							<TableRow key={api.id}>
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
		</Fragment>
	);
};

export default Services;
