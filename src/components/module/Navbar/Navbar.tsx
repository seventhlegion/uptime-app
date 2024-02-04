'use client';
import { useNavigation } from '@/store/useNavigation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppBar, AppBarProps, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';

export type NavbarProps = {} & AppBarProps;

const Navbar: FC<NavbarProps> = () => {
	const { defaultSelect } = useNavigation();
	return (
		<AppBar sx={{ padding: '12px', background: 'none', boxShadow: 'none' }}>
			<Paper>
				<Stack
					direction={`row`}
					padding={`24px`}
					alignItems={`center`}
					gap={`24px`}
				>
					<ArrowForwardIosIcon />
					<Typography variant="h4">/{defaultSelect}</Typography>
				</Stack>
			</Paper>
		</AppBar>
	);
};

export default Navbar;
