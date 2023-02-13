import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import { IContact } from "../../contexts/interfaces";

import { IoCloseCircle } from "react-icons/io5";

import UpdateContactForm from "../UpdateContactForm";

const ContactInfo = ({ id }: Pick<IContact, "id">) => {
  const { setIsUpdateContactVisible, handleDeleteContact } =
    useContext(ContactContext);

  return (
    <div>
      <IoCloseCircle onClick={() => setIsUpdateContactVisible(false)} />

      <UpdateContactForm id={id} />

      <button onClick={() => handleDeleteContact(id!)}>Delete</button>
    </div>
  );
};

export default ContactInfo;
