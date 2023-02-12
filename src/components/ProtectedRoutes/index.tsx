import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { LoginContext } from "../../contexts/LoginContext";

import LoadingPage from "../LoadingPage";

const ProtectedRoutes = () => {
  const { client, loading } = useContext(LoginContext);

  if (loading) return <LoadingPage />;

  return client ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectedRoutes;
