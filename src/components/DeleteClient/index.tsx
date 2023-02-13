import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import Container from "./style";

const DeleteClient = () => {
  const { setIsDeleteModalVisible, handleDeleteClient } =
    useContext(ClientContext);

  return (
    <Container>
      <div className="modalBackground">
        <div className="modalHeader">
          <h3>Are you sure?</h3>
        </div>
        <div className="modalContent">
          <strong>Do you really want to delete your account?</strong>

          <div className="buttonsContainer">
            <button className="deleteButton" onClick={handleDeleteClient}>
              Delete
            </button>
            <button
              className="cancelButton"
              onClick={() => setIsDeleteModalVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DeleteClient;
