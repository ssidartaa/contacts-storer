import { useContext } from "react";

import { ClientContext } from "../../contexts/ClientContext";

import Input from "../Input";
import InputPassword from "../InputPassword";

import Container from "./style";

const UpdateClientForm = () => {
  const { update, handleUpdateClientValues, updateErrors } =
    useContext(ClientContext);

  return (
    <Container onSubmit={handleUpdateClientValues}>
      <Input
        placeholder="Type your full name"
        label="Full Name"
        id="updateFullName"
        error={updateErrors.fullName?.message}
        {...update("fullName")}
      />

      <Input
        placeholder="Type your email"
        label="Email"
        id="updateEmail"
        type="email"
        error={updateErrors.email?.message}
        {...update("email")}
      />

      <Input
        placeholder="Type your phone number"
        label="Phone Number"
        id="updatePhoneNumber"
        error={updateErrors.phoneNumber?.message}
        {...update("phoneNumber")}
      />

      <InputPassword
        placeholder="Type your password"
        label="Password"
        id="updatePassword"
        error={updateErrors.password?.message}
        {...update("password")}
      />

      <button type="submit">Update</button>
    </Container>
  );
};

export default UpdateClientForm;
