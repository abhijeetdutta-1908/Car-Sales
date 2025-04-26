import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem('token');

        if (!token) {
          return <Redirect to="/login" />;
        }

        try {
          jwtDecode(token);
          return <Component {...props} />;
        } catch (error) {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
