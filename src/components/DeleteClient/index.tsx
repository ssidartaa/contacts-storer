import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

const DeleteClient = () => {
  const { setIsDeleteModalVisible, handleDeleteClient } =
    useContext(ClientContext);

  return (
    <div>
      <strong>Do you really want to delete your client?</strong>

      <div>
        <button onClick={handleDeleteClient}>Yes</button>
        <button onClick={() => setIsDeleteModalVisible(false)}>No</button>
      </div>
    </div>
  );
};

export default DeleteClient;
