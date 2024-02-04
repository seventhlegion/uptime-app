'use client';
import { NavigationItems, useNavigation } from '@/store/useNavigation';
import ApiIcon from '@mui/icons-material/Api';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FunctionsIcon from '@mui/icons-material/Functions';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { SvgIconTypeMap } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { FC, PropsWithChildren } from 'react';

export type DashboardItemsValues = {
	text: NavigationItems;
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
};

export const dashboardItems: DashboardItemsValues[] = [
	{
		text: 'Services',
		icon: ApiIcon,
	},
	{
		text: 'Average',
		icon: FunctionsIcon,
	},
	{
		text: 'Comparison',
		icon: QueryStatsIcon,
	},
	{
		text: 'Response',
		icon: AssignmentIcon,
	},
];

const Dashboard: FC<PropsWithChildren> = ({ children }) => {
	const { defaultSelect, navigator } = useNavigation();
	const { palette } = useTheme();
	return (
		<Stack
			direction={`row`}
			width={`100%`}
			gap={`24px`}
			marginTop={`124px`}
		>
			<Stack width={`25%`}>
				<Paper>
					<Stack
						padding={`24px`}
						height={`80dvh`}
					>
						<List
							sx={{ display: 'flex', flexDirection: 'column', gap: `24px` }}
						>
							{dashboardItems.map((item) => (
								<ListItem
									key={item.text}
									disablePadding
								>
									<ListItemButton
										sx={{
											borderRadius: '24px',
											padding: '12px',
											background:
												defaultSelect === item.text
													? palette.background.default
													: 'none',
										}}
										onClick={() => navigator(item.text)}
									>
										<ListItemIcon>
											<item.icon />
										</ListItemIcon>
										<ListItemText>
											<Typography variant="h6">{item.text}</Typography>
										</ListItemText>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Stack>
				</Paper>
			</Stack>
			<Stack width={`100%`}>
				<Paper>
					<Stack
						padding={`24px`}
						height={`80dvh`}
					>
						{children}
					</Stack>
				</Paper>
			</Stack>
		</Stack>
	);
};

export default Dashboard;
