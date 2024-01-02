import Mui from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  export interface Palette extends Mui.Palette {}

  export interface PalletColor extends Mui.PaletteColor {}

  export interface SimplePaletteColorOptions extends Mui.SimplePaletteColorOptions {
    lightHover?: string;
    lightActive?: string;
    normal?: string;
    normalHover?: string;
    normalActive?: string;
    darkHover?: string;
    darkActive?: string;
    darker?: string;
  }

  export interface PaletteColorOptions extends Mui.PaletteColorOptions {}

  export interface PaletteOptions extends Mui.PaletteOptions {}

  export interface TypeBackground extends Mui.TypeBackground {
    mobileScreen: string;
  }

  export interface CommonColors extends Mui.CommonColors {
    linearBackOnDark: string;
    darkGradient: string;
    darkGradientVertical: string;
    gradientForDarkMode: string;
    violetGradient: string;
    violetGradientHorizontal: string;
    gradientForLightMode: string;
  }
}
