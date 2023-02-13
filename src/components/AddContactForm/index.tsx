import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import Input from "../Input";

import Container from "./style";

const AddContactForm = () => {
  const { handleAddContactValues, addContact, addContactErrors } =
    useContext(ContactContext);

  return (
    <Container onSubmit={handleAddContactValues}>
      <Input
        placeholder="Type your full name"
        label="Full Name"
        id="addContactFullName"
        error={addContactErrors.fullName?.message}
        {...addContact("fullName")}
      />
      <Input
        placeholder="Type your email"
        label="Email"
        id="addContactEmail"
        type="email"
        error={addContactErrors.email?.message}
        {...addContact("email")}
      />

      <Input
        placeholder="Type your phone number"
        label="Phone Number"
        id="addContactPhoneNumber"
        error={addContactErrors.phoneNumber?.message}
        {...addContact("phoneNumber")}
      />

      <button type="submit">Add</button>
    </Container>
  );
};

export default AddContactForm;
