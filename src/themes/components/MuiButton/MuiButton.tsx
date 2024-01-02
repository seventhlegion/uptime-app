import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

function MuiButton(palette: Palette) {
  return createComponent<`MuiButton`>(palette, {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        textTransform: 'none',
      },
      contained: {
        padding: '2px 24px',
      },
    },
  });
}

export default MuiButton;
