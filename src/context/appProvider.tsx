import { MuiThemeProvider } from '@material-ui/core';
import { ReactNode } from 'react';
import { DarkTheme } from '../shared/style/themes/dark';
import { LightTheme } from '../shared/style/themes/light';
import { useDarkModeContext } from './darkMode/darkModeContext';
import { IdiomaProvider } from './idioma/idiomaContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { state } = useDarkModeContext();

  return (
    <IdiomaProvider>
      <MuiThemeProvider theme={state.darkMode ? DarkTheme : LightTheme}>
        {children}
      </MuiThemeProvider>
    </IdiomaProvider>
  );
};
