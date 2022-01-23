import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import BirthdayCard from '@components/BirthdayCard';

import MainPage from '@containers/MainPage';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        exact
        element={(
          <MainPage />
        )}
      />
      <Route
        path="/100-lat-monika"
        exact
        element={(
          <BirthdayCard />
        )}
      />
      <Route
        render={() => <h1>Page not found</h1>}
      />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
