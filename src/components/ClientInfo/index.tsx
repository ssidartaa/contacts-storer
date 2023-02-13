import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import DeleteClient from "../DeleteClient";

import { IoCloseCircle } from "react-icons/io5";

import UpdateClientForm from "../UpdateClientForm";

import Container from "./style";

const ClientInfo = () => {
  const { setIsModalVisible, setIsDeleteModalVisible, isDeleteModalVisible } =
    useContext(ClientContext);

  return (
    <Container>
      <div className="modalBackground">
        <div className="closeModalContainer">
          <IoCloseCircle onClick={() => setIsModalVisible(false)} />
        </div>

        <div className="modalContentBackground">
          <UpdateClientForm />

          <div className="deleteModalOpenContainer">
            <button onClick={() => setIsDeleteModalVisible(true)}>
              Delete
            </button>

            {isDeleteModalVisible && <DeleteClient />}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientInfo;
