import { Components, Palette, Theme } from '@mui/material';
import { MuiAppBar } from './MuiAppBar';
import { MuiButton } from './MuiButton';
import { MuiCssBaseLine } from './MuiCssBaseLine';
import { MuiPaper } from './MuiPaper';

export default function components(palette: Palette): Components<Omit<Theme, 'components'>> {
  return {
    MuiCssBaseline: MuiCssBaseLine(palette),
    MuiAppBar: MuiAppBar(palette),
    MuiButton: MuiButton(palette),
    MuiPaper: MuiPaper(palette),
  };
}
