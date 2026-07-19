import 'utils/polyfills';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import * as Sentry from '@sentry/react';
import { sentryDns } from 'config/environment';

import App from 'App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

Sentry.init({
  dsn: sentryDns,
  integrations: [Sentry.browserTracingIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
