import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";

import RigisterForm from "../RegisterForm";

const Register = () => {
  const { setIsModalVisible } = useContext(LoginContext);

  return (
    <div>
      <RigisterForm />
      <span onClick={() => setIsModalVisible(false)}>x</span>
    </div>
  );
};

export default Register;
