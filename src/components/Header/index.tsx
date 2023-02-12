import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";
import { LoginContext } from "../../contexts/LoginContext";

import { FaUserCircle } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
  const { client } = useContext(LoginContext);

  const { logout, setIsModalVisible } = useContext(ClientContext);

  return (
    <header>
      <h1>Contacts Storer</h1>

      <div>
        <div onClick={() => setIsModalVisible(true)}>
          <FaUserCircle />
        </div>

        <button onClick={logout}>
          <IoExitOutline />
        </button>
      </div>
    </header>
  );
};

export default Header;
