import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import { FaUserCircle } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

import Container from "./style";

const Header = () => {
  const { logout, setIsModalVisible } = useContext(ClientContext);

  return (
    <Container>
      <header>
        <a href="#top">Contacts Storer</a>

        <nav>
          <FaUserCircle onClick={() => setIsModalVisible(true)} />

          <IoExitOutline onClick={logout} />
        </nav>
      </header>
    </Container>
  );
};

export default Header;
