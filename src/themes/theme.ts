import { appConfig } from '@/config';
import { createTheme } from '@mui/material';
import applyPaletteToComponents from './components';
import * as palette from './palette';
import * as shape from './shape';
import spacing from './spacing';
import { ThemeDirection, ThemePalette } from './types';
import applyPaletteToTypography from './typography';

function theme(
  mode: ThemePalette = appConfig.theme.defaultTheme,
  direction: ThemeDirection = appConfig.theme.defaultDirection,
) {
  const selectedPalette = palette[mode];

  const components = applyPaletteToComponents(selectedPalette);
  const typography = applyPaletteToTypography(selectedPalette);

  return createTheme({
    palette: selectedPalette,
    typography,
    components,
    direction,
    spacing,
    shape,
  });
}

export default theme;
