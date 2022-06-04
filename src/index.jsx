import '@utils/polyfills';

import React from 'react';
import { render } from 'react-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { sentryDns } from '@config/environment';

import App from '@root/App';

Sentry.init({
  dsn: sentryDns,
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

render(<App />, document.getElementById('root'));
