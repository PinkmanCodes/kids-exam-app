import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default () =>
  useSelector((s) => s.auth.isAuthenticated) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
