import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";

const Dashboard = () => {
  const { logout } = useContext(LoginContext);

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Dashboard;
