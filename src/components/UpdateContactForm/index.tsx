import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";
import { IContactUpdateAndDeleteProps } from "../../contexts/interfaces";

import Input from "../Input";

import Container from "./style";

const UpdateContactForm = ({
  id,
  setIsUpdateContactVisible,
}: IContactUpdateAndDeleteProps) => {
  const {
    updateContact,
    updateContactErrors,
    handleUpdateContact,
    handleUpdateContactValues,
  } = useContext(ContactContext);

  return (
    <Container
      onSubmit={handleUpdateContact((data) =>
        handleUpdateContactValues(data, id!, setIsUpdateContactVisible)
      )}
    >
      <Input
        placeholder="Type your full name"
        label="Full Name"
        id="updateContactFullName"
        error={updateContactErrors.fullName?.message}
        {...updateContact("fullName")}
      />

      <Input
        placeholder="Type your email"
        label="Email"
        id="updateContactEmail"
        type="email"
        error={updateContactErrors.email?.message}
        {...updateContact("email")}
      />

      <Input
        placeholder="Type your phone number"
        label="Phone Number"
        id="updateContactPhoneNumber"
        error={updateContactErrors.phoneNumber?.message}
        {...updateContact("phoneNumber")}
      />

      <button type="submit">Update</button>
    </Container>
  );
};

export default UpdateContactForm;
