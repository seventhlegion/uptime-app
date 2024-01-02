import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

function MuiPaper(palette: Palette) {
  return createComponent<`MuiPaper`>(palette, {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        border:
          palette.mode === 'dark'
            ? '1px solid rgba(225, 225, 239, 0.20)'
            : `1px solid var(${palette.secondary.main}, #E1E1EF)`,
        boxShadow:
          palette.mode === 'dark'
            ? '0px 0.25px 0px 0px rgba(255, 255, 255, 0.50) inset, 0px -1px 20px 0px rgba(187, 155, 255, 0.15), 0px -1px 5px 0px rgba(233, 223, 255, 0.30)'
            : '5px 2px 8px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  });
}

export default MuiPaper;
