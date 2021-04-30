import { createMuiTheme } from '@material-ui/core';

export const DarkTheme =  createMuiTheme({
  palette: {
    primary: {
      main: '#9b59b6',
    },
    text: {
      primary: '#4b6584',
    },
    action: {
      hover: '#fd79a8',
    },
    contrastThreshold: 3,
    },
})
