import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";

import Input from "../Input";

import Container from "./style";

const LoginForm = () => {
  const { login, handleLoginValues, loginErrors } = useContext(LoginContext);

  return (
    <Container onSubmit={handleLoginValues}>
      <Input
        placeholder="Type your email"
        label="Email"
        id="loginEmail"
        error={loginErrors.email?.message}
        {...login("email")}
      />

      <Input
        placeholder="Type your password"
        label="Password"
        id="loginPassword"
        type="password"
        error={loginErrors.password?.message}
        {...login("password")}
      />

      <button type="submit">Login</button>
    </Container>
  );
};

export default LoginForm;
