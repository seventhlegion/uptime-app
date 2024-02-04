import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

function MuiButton(palette: Palette) {
	return createComponent<`MuiButton`>(palette, {
		styleOverrides: {
			root: {
				borderRadius: '24px',
			},
		},
	});
}

export default MuiButton;
