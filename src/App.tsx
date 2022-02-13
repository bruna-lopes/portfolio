import Main from './components/Main';
import { AppProvider } from './context/appProvider';
import { DarkModeProvider } from './context/darkMode/darkModeContext';
import GlobalStyles from './shared/global';

function App() {
  return (
    <DarkModeProvider>
      <AppProvider>
        <GlobalStyles />
        <Main />
      </AppProvider>
    </DarkModeProvider>
  );
}

export default App;
