import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

function MuiAppBar(palette: Palette) {
	return createComponent<`MuiAppBar`>(palette, {
		styleOverrides: {
			root: {
				borderRadius: '24px',
			},
		},
	});
}

export default MuiAppBar;
