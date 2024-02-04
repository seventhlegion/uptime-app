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
	});
}

export default typography;
