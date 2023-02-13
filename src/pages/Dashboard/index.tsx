import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import Header from "../../components/Header";
import ClientInfo from "../../components/ClientInfo";
import Main from "../../components/Main";

import Container from "./style";

const Dashboard = () => {
  const { isModalVisible } = useContext(ClientContext);

  return (
    <Container>
      <Header />

      {isModalVisible && <ClientInfo />}

      <Main />
    </Container>
  );
};

export default Dashboard;
