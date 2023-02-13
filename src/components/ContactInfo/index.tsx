import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import { IoCloseCircle } from "react-icons/io5";

import UpdateContactForm from "../UpdateContactForm";

import { IContactUpdateAndDeleteProps } from "../../contexts/interfaces";

import Container from "./style";

const ContactInfo = ({
  id,
  setIsUpdateContactVisible,
}: IContactUpdateAndDeleteProps) => {
  const { setUpdateContactModal, handleDeleteContact } =
    useContext(ContactContext);

  return (
    <Container>
      <div className="modalBackground">
        <div className="closeModalContainer">
          <IoCloseCircle
            onClick={() => {
              setIsUpdateContactVisible(false);
              setUpdateContactModal(false);
            }}
          />
        </div>

        <div className="modalContentBackground">
          <UpdateContactForm
            id={id!}
            setIsUpdateContactVisible={setIsUpdateContactVisible}
          />

          <div className="deleteModalOpenContainer">
            <button
              onClick={() =>
                handleDeleteContact(id!, setIsUpdateContactVisible)
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
