import React from 'react';
import { Route, Switch } from 'react-router';
import LandingPage from './pages/LandingPage/Index';
import Dashboard from './pages/Dashboard/Index';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/signIn">
        <LandingPage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
