import React from 'react';
import { Route, Switch } from 'react-router';
import LandingPage from './pages/LandingPage/Index';
import Dashboard from './pages/Dashboard/Index';
import { ProfileProvider } from './context/profile.context';
import PublicRoute from './components/Routehandler/PublicRoute';
import PrivateRoute from './components/Routehandler/PrivateRoute';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#E6E6E6',
  secondary: '#5C7AEA',
  accent1: '#3D56B2',
  accent2: '#14279B',
  font_primary: '#000000',
  font_secondary: '#150E56',
};

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
        <ThemeProvider theme={theme}>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </ThemeProvider>
        <Route>Page not found</Route>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
