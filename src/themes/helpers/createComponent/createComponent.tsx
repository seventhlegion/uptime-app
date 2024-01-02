import { ComponentsProps, ComponentsVariants, Palette, Theme } from '@mui/material';
import { ComponentsOverrides } from '@mui/material/styles/overrides';

export type MuiComponent<T extends keyof ComponentsOverrides> = {
  defaultProps?: ComponentsProps[T];
  styleOverrides?: ComponentsOverrides<Theme>[T];
  variants?: ComponentsVariants[T];
};

export default function createComponent<T extends keyof ComponentsOverrides>(
  palette: Palette,
  options: MuiComponent<T> | ((palette: Palette) => MuiComponent<T>),
): MuiComponent<T> {
  return typeof options === `function` ? options(palette) : options;
}
