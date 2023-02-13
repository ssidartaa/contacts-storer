import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import Header from "../../components/Header";
import ClientInfo from "../../components/ClientInfo";
import Main from "../../components/Main";

const Dashboard = () => {
  const { isModalVisible } = useContext(ClientContext);

  return (
    <>
      <Header />

      {isModalVisible && <ClientInfo />}

      <Main />
    </>
  );
};

export default Dashboard;
