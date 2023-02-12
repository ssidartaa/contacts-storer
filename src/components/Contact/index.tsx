import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import { IContact } from "../../contexts/interfaces";
import ContactInfo from "../ContactInfo";

const Contact = ({ id, fullName, email, phoneNumber, createdAt }: IContact) => {
  const { isUpdateContactVisible, setIsUpdateContactVisible } =
    useContext(ContactContext);

  return (
    <>
      <li>
        <p>{fullName}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{createdAt}</p>
        <button onClick={() => setIsUpdateContactVisible(true)}>Info</button>
      </li>

      {isUpdateContactVisible && <ContactInfo id={id} />}
    </>
  );
};

export default Contact;
