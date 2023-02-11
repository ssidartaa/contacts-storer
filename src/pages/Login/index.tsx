import { useState } from "react";

import LoginForm from "../../components/LoginForm";
import Register from "../../components/Register";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <div>
        <LoginForm />
        <p>
          Don't have an account, {""}
          <span onClick={() => setIsModalVisible(true)}>register</span>
        </p>
      </div>
      {isModalVisible && <Register />}
    </>
  );
};

export default Login;
