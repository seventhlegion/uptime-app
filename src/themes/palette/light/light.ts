import createPalette from '@mui/material/styles/createPalette';

export default createPalette({
	mode: `light`,
	common: {
		black: '#000',
		white: '#FFF',
	},
	background: {
		default: '#F8FAFC',
		paper: '#FFFFFF',
	},
	text: {
		primary: '#000000',
		secondary: '#FFFFFF',
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
