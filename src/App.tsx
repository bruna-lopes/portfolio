import { Global } from '@emotion/react';
import React from 'react';
import Main from './components/Main';
import { AppProvider } from './context/appProvider';
import { DarkModeProvider } from './context/darkMode/darkModeContext';
import globalStyles from './shared/global';

function App() {
  return (
    <DarkModeProvider>
      <AppProvider>
        <Global styles={globalStyles} />
        <Main />
      </AppProvider>
    </DarkModeProvider>
  );
}

export default App;
