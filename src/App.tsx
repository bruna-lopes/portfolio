import { Global } from '@emotion/react';
import React from 'react';
import Main from './components/Main';
import globalStyles from './shared/global';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Main />
    </>
  );
}

export default App;
