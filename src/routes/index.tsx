import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/404 Not Found";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMain;
