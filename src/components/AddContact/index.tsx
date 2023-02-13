import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import { IoCloseCircle } from "react-icons/io5";

import AddContactForm from "../AddContactForm";

import Container from "./style";

const AddContact = () => {
  const { setIsAddContactVisible } = useContext(ContactContext);

  return (
    <Container>
      <div className="modalBackground">
        <div className="closeModalContainer">
          <IoCloseCircle onClick={() => setIsAddContactVisible(false)} />
        </div>

        <AddContactForm />
      </div>
    </Container>
  );
};

export default AddContact;
