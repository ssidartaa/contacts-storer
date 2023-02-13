import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import { IContact } from "../../contexts/interfaces";
import ContactInfo from "../ContactInfo";

const Contact = ({ id, fullName, email, phoneNumber }: IContact) => {
  const { isUpdateContactVisible, setIsUpdateContactVisible } =
    useContext(ContactContext);

  return (
    <>
      <li>
        <p>
          <strong>Full name: </strong>
          {fullName}
        </p>

        <p>
          <strong>Email: </strong>
          {email}
        </p>

        <p>
          <strong>Telephone number: </strong>
          {phoneNumber}
        </p>

        <button onClick={() => setIsUpdateContactVisible(true)}>Info</button>
      </li>

      {isUpdateContactVisible && <ContactInfo id={id} />}
    </>
  );
};

export default Contact;
