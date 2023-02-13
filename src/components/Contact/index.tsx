import { useContext, useState } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import { IContact } from "../../contexts/interfaces";
import ContactInfo from "../ContactInfo";

import Container from "./style";

const Contact = ({ id, fullName, email, phoneNumber }: IContact) => {
  const { setUpdateContactModal } = useContext(ContactContext);

  const [isUpdateContactVisible, setIsUpdateContactVisible] =
    useState<boolean>(false);

  return (
    <Container>
      <div className="backgorundContainer">
        <section>
          <div>
            <strong>Full name: </strong>
            <p>{fullName}</p>
          </div>

          <div>
            <strong>Email: </strong>
            <p>{email}</p>
          </div>

          <div>
            <strong>Telephone number: </strong>
            <p>{phoneNumber}</p>
          </div>

          <button
            onClick={() => {
              setIsUpdateContactVisible(true);
              setUpdateContactModal(true);
            }}
          >
            Info
          </button>
        </section>
      </div>

      {isUpdateContactVisible && (
        <ContactInfo
          id={id!}
          setIsUpdateContactVisible={setIsUpdateContactVisible}
        />
      )}
    </Container>
  );
};

export default Contact;
