import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import MainPage from '@components/MainPage';
import BirthdayCard from '@components/BirthdayCard';

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
