import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

function MuiAppBar(palette: Palette) {
  return createComponent<`MuiAppBar`>(palette, {
    styleOverrides: {
      root: {
        background: palette.background.default,
      },
    },
  });
}

export default MuiAppBar;
