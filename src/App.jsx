import React from 'react';

import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import Routes from './routes';

import { polish } from './lang';
import { defaultLocale } from './lang/config';

import theme from './styles/theme';
import { GlobalStyles } from './styles/global.styles';

const App = () => (
  <IntlProvider
    locale={defaultLocale}
    messages={polish}
  >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </IntlProvider>
);

export default App;
