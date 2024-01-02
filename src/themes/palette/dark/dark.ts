import createPalette from '@mui/material/styles/createPalette';

export default createPalette({
	mode: `dark`,
	common: {
		black: '#000',
		white: '#FFF',
	},
	background: {
		default: '#10101F',
		paper: '#212141',
	},
	text: {
		primary: '#FFFFFF',
		secondary: '#000000',
		disabled: '#979797',
	},
	primary: {
		main: `#5252FF`,
	},
	secondary: {
		main: '#E1E1EF',
	},
	success: {
		main: '#04DF61',
	},
	error: {
		main: '#FF0000',
	},
});
