import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedTypes }) => {
  const isLogged = sessionStorage.getItem("isLogged") === "true";
  const userType = sessionStorage.getItem("userType");

  if (!isLogged || !allowedTypes.includes(userType)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
