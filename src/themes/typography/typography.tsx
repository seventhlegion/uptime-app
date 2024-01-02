import { Palette } from '@mui/material';
import createTypography from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';
import { montserrat } from '../fonts';

declare module '@mui/material/styles' {
  export interface TypographyVariants {
    hero: CSSProperties;
    assertive: CSSProperties;
    assertiveVerySmall: CSSProperties;
  }

  export interface TypographyVariantsOptions {
    hero?: CSSProperties;
    assertive?: CSSProperties;
    assertiveVerySmall?: CSSProperties;
  }
}

function typography(palette: Palette) {
  return createTypography(palette, {
    fontFamily: montserrat.style.fontFamily,
    allVariants: {
      lineHeight: '36px',
    },
    hero: {
      fontSize: '62px',
      letterSpacing: '0.5px',
    },
    h1: {
      fontSize: '53px',
      letterSpacing: '0px',
    },
    h2: {
      fontSize: '40px',
      letterSpacing: '0px',
    },
    h3: {
      fontSize: '34px',
      letterSpacing: '0.25px',
    },
    h4: {
      fontSize: '27px',
      letterSpacing: '0px',
    },
    h5: {
      fontSize: '22px',
      letterSpacing: '0px',
    },
    subtitle1: {
      fontSize: '20px',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontSize: '18px',
      letterSpacing: '0px',
    },
    button: {
      fontSize: '16px',
      letterSpacing: '1.25px',
    },
    body1: {
      fontSize: '16px',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '14px',
      letterSpacing: '0.25px',
    },
    caption: {
      fontSize: '12px',
      letterSpacing: '0.4px',
    },
    assertive: {
      fontSize: '11px',
      letterSpacing: '0px',
    },
    assertiveVerySmall: {
      fontSize: '10px',
      letterSpacing: '1.5px',
    },
  });
}

export default typography;
