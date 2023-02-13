import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/404 Not Found";

import ProtectedRoutes from "../components/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMain;
