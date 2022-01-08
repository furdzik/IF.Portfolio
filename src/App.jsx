import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

import { defaultLocale } from '@config/lang';

import theme from '@styles/theme';
import { GlobalStyles } from '@styles/global.styles';

import { english } from '@lang';

import RoutesConfig from '@routes';

const App = () => (
  <IntlProvider
    locale={defaultLocale}
    messages={english}
  >
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <RoutesConfig />
    </ThemeProvider>
  </IntlProvider>
);

export default App;
