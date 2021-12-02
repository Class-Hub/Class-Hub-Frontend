import React from 'react';
import { Switch } from 'react-router';
import LandingPage from './pages/LandingPage/Index';
import Dashboard from './pages/Dashboard/Index';
import { ProfileProvider } from './context/profile.context';
import PublicRoute from './components/Routehandler/PublicRoute';
import PrivateRoute from './components/Routehandler/PrivateRoute';


function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute exact path="/">
          <LandingPage />
        </PublicRoute>
        <PublicRoute path="/signin">
          <LandingPage />
        </PublicRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
