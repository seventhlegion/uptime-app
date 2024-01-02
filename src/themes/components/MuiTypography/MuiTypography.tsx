import createComponent from '@/themes/helpers/createComponent';
import { Palette } from '@mui/material';

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero: true;
    assertive: true;
    assertiveVerySmall: true;
  }
}

function MuiTypography(palette: Palette) {
  return createComponent<`MuiTypography`>(palette, {
    styleOverrides: {},
  });
}

export default MuiTypography;
