import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";

import { IoCloseCircle } from "react-icons/io5";

import RigisterForm from "../RegisterForm";

import Container from "./style";

const Register = () => {
  const { setIsModalVisible } = useContext(LoginContext);

  return (
    <Container>
      <div className="modalBackground">
        <div className="closeModalContainer">
          <IoCloseCircle onClick={() => setIsModalVisible(false)} />
        </div>

        <RigisterForm />
      </div>
    </Container>
  );
};

export default Register;
