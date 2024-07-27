import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, requiredRole, ...rest }) => {
  const token = localStorage.getItem('token');
  let isAuthenticated = false;
  let hasRequiredRole = false;

  if (token) {
    try {
      const decodedToken = jwt_decode(token); // Ensure jwt_decode is imported correctly
      isAuthenticated = true;
      hasRequiredRole = !requiredRole || decodedToken.role === requiredRole;
    } catch (e) {
      // Token is invalid
    }
  }

  return isAuthenticated && hasRequiredRole ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
