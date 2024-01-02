import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

function MuiCssBaseline(palette: Palette) {
  return createComponent<`MuiCssBaseline`>(palette, {
    styleOverrides: {
      '*': {
        outline: `none !important`,
      },
      html: {
        scrollBehavior: 'smooth',
      },

      body: {
        overflowX: 'hidden !important',
      },

      /* width */
      '::-webkit-scrollbar': {
        width: `8px`,
      },

      /* Track */
      '::-webkit-scrollbar-track': {
        background: palette.background.paper,
        borderRadius: '8px',
      },

      /* Handle */
      '::-webkit-scrollbar-thumb': {
        background: palette.secondary.main,
        borderRadius: '8px',
      },

      /* Handle on hover */
      '::-webkit-scrollbar-thumb:hover': {
        background: palette.text.disabled,
        borderRadius: '8px',
      },
    },
  });
}

export default MuiCssBaseline;
