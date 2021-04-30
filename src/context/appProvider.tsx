import { MuiThemeProvider } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { DarkTheme } from '../shared/style/themes/dark';
import { LightTheme } from '../shared/style/themes/light';
import { useDarkModeContext } from './darkMode/darkModeContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { state } = useDarkModeContext();

  return (
    <MuiThemeProvider theme={state.darkMode ? DarkTheme : LightTheme}>
      {children}
    </MuiThemeProvider>
  );
};
