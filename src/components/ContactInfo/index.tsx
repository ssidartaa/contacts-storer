import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import { IContact } from "../../contexts/interfaces";

import UpdateContactForm from "../UpdateContactForm";

const ContactInfo = ({ id }: Pick<IContact, "id">) => {
  const { setIsUpdateContactVisible, handleDeleteContact } =
    useContext(ContactContext);

  return (
    <div>
      <button onClick={() => setIsUpdateContactVisible(false)}>x</button>

      <UpdateContactForm id={id} />

      <button onClick={() => handleDeleteContact(id!)}>Delete</button>
    </div>
  );
};

export default ContactInfo;
