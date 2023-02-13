import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";

import Input from "../Input";
import InputPassword from "../InputPassword";

import Container from "./style";

const RigisterForm = () => {
  const { register, handleRegisterValues, registerErrors } =
    useContext(LoginContext);

  return (
    <Container onSubmit={handleRegisterValues}>
      <Input
        placeholder="Type your full name"
        label="Full Name"
        id="registerFullName"
        error={registerErrors.fullName?.message}
        {...register("fullName")}
      />

      <Input
        placeholder="Type your email"
        label="Email"
        id="registerEmail"
        type="email"
        error={registerErrors.email?.message}
        {...register("email")}
      />

      <Input
        placeholder="Type your phone number"
        label="Phone Number"
        id="registerPhoneNumber"
        error={registerErrors.phoneNumber?.message}
        {...register("phoneNumber")}
      />

      <InputPassword
        placeholder="Type your password"
        label="Password"
        id="registerPassword"
        error={registerErrors.password?.message}
        {...register("password")}
      />

      <Input
        placeholder="Confirm your password"
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        error={registerErrors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <button type="submit">Register</button>
    </Container>
  );
};

export default RigisterForm;
