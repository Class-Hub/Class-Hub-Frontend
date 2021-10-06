import React from 'react';
import { Route, Switch } from 'react-router';
import LandingPage from './pages/LandingPage/Index';
import Dashboard from './pages/Dashboard/Index';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
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
    </ProfileProvider>
  );
}

export default App;
