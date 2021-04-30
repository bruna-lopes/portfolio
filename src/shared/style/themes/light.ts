import { createMuiTheme } from '@material-ui/core';

export const LightTheme = createMuiTheme({
  palette: {
    text: {
      primary: '#4b6584',
      secondary: '#fff0f5',
      hint: '#da627d',
    },
    action: {
      hover: '#fd79a8',
    },
    contrastThreshold: 3,
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
