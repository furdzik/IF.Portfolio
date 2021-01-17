import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MainPage from '../components/MainPage';

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
        render={() => <h1>Page not found</h1>}
      />
    </Switch>
  </Router>
);

export default Routes;
