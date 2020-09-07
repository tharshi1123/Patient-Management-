import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#008080',
			contrastText: '#fff'
		},
		secondary: {
			main: '#F4F5F8'
		},

		typography: {
			fontFamily: 'PT Sans'
		}
	}
});

export default theme;
