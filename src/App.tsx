import { Global } from '@emotion/react';
import React, { Fragment } from 'react';
import Main from './components/Main';
import globalStyles from './shared/global';

function App() {
  return (
    <Fragment>
    <Global styles={globalStyles} />

       <Main/>
    </Fragment>
  );
}

export default App;
