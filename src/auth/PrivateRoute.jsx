import React, { useEffect } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
  const { checkAuth, isAuthenticated } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkAuth(token);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/irinagorlino/" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
