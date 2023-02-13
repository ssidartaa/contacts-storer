import { useContext, useEffect } from "react";

import { LoginContext } from "../../contexts/LoginContext";

import LoginForm from "../../components/LoginForm";
import Register from "../../components/Register";

import Container from "./style";

const Login = () => {
  const { isModalVisible, setIsModalVisible } = useContext(LoginContext);

  return (
    <Container>
      <div className="backgorundContainer">
        <header>
          <h1>Contacts Storer</h1>
        </header>

        <div className="loginContainer">
          <section>
            <LoginForm />

            <p>
              Don't have an account, {""}
              <span onClick={() => setIsModalVisible(true)}>register!</span>
            </p>
          </section>

          {isModalVisible && <Register />}
        </div>
      </div>
    </Container>
  );
};

export default Login;
