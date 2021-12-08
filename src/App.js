import React from 'react';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import LandingPage from './pages/LandingPage/Index';
import Dashboard from './pages/Dashboard/Index';
import { ProfileProvider } from './context/profile.context';
import PublicRoute from './components/Routehandler/PublicRoute';
import PrivateRoute from './components/Routehandler/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './components/Dashboard/NotFound';

export const customHistory = createBrowserHistory(); //This maintains custom history
function App() {
  return (
    <BrowserRouter history={customHistory}>
      <ProfileProvider>
        <Switch>
          <PublicRoute exact path="/">
            <LandingPage />
          </PublicRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route component={NotFound}></Route>
        </Switch>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
