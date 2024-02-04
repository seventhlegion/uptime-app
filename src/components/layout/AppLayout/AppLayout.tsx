import Dashboard from '@/components/module/Dashboard';
import Navbar from '@/components/module/Navbar';
import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box margin={`12px`}>
			<Navbar />
			<Dashboard>{children}</Dashboard>
		</Box>
	);
};

export default AppLayout;
