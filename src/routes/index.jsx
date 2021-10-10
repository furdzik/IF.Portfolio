import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MainPage from '../components/MainPage';
import BirthdayCard from '../components/BirthdayCard';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
      >
        <MainPage />
      </Route>
      <Route
        path="/100-lat-monika"
        exact
      >
        <BirthdayCard />
      </Route>

      <Route
        render={() => <h1>Page not found</h1>}
      />
    </Switch>
  </Router>
);

export default Routes;
