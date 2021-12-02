import React from 'react';
import { Redirect, Route } from 'react-router';
import { useUser } from '../../context/User.context';

const AdminRoute = ({ children, ...routeProps }) => {
  const { user } = useUser();

  if (user && !user.role) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default AdminRoute;
