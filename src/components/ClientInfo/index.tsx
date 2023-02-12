import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import DeleteClient from "../DeleteClient";

import UpdateClientForm from "../UpdateClientForm";

const ClientInfo = () => {
  const { setIsModalVisible, setIsDeleteModalVisible, isDeleteModalVisible } =
    useContext(ClientContext);

  return (
    <div>
      <button onClick={() => setIsModalVisible(false)}>x</button>

      <UpdateClientForm />

      <div>
        <button onClick={() => setIsDeleteModalVisible(true)}>Delete</button>

        {isDeleteModalVisible && <DeleteClient />}
      </div>
    </div>
  );
};

export default ClientInfo;
