import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // JWT check
  return token ? children : <Navigate to="/home" replace />;
};

export default PrivateRoute;
