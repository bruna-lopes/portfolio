import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import Main from './components/Main';
import { useTheme } from './hooks/useTheme';
import globalStyles from './shared/global';

function App() {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
