import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import ThemeSwitcher from './Components/ThemeSwitcher';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
