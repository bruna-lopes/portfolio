import { createMuiTheme } from '@material-ui/core';
import { Colors, Gradients } from '../../colors';

export const LightTheme = createMuiTheme({
  palette: {
    text: {
      primary: `${Colors.fontColor}`,
      secondary: `${Colors.pink2}`,
      hint: `${Colors.pink3}`,
    },
    primary: {
      main: `${Colors.white}`,
    },
    secondary: {
      main: `${Colors.fontColor}`,
    },
    action: {
      hover: `${Colors.hoverPink}`,
    },
    background: {
      default: `${Gradients.blueToPink}`,
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
