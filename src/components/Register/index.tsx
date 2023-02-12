import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";

import RigisterForm from "../RegisterForm";

const Register = () => {
  const { setIsModalVisible } = useContext(LoginContext);

  return (
    <div>
      <button onClick={() => setIsModalVisible(false)}>x</button>
      <RigisterForm />
    </div>
  );
};

export default Register;
