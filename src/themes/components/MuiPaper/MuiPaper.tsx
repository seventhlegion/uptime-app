import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

function MuiPaper(palette: Palette) {
	return createComponent<`MuiPaper`>(palette, {
		styleOverrides: {
			root: { borderRadius: '24px' },
		},
	});
}

export default MuiPaper;
